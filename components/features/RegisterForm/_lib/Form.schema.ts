import z from "zod";

const nameRegex = /^[а-яёА-ЯЁ]+$/u;
const passwordRegex = /^[a-zA-Z]+$/u;
const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

const formSchema = z
    .object({
        name: z
            .string()
            .trim()
            .regex(nameRegex, "Имя должно состоять только из кириллицы")
            .min(2, "Имя должно быть не короче 2 символов")
            .max(50, "Имя не должно быть длиннее 50 символов"),

        town: z
            .string()
            .trim()
            .min(1, "Выберите город"),

        email: z
            .string()
            .trim()
            .email("Введите корректный email")
            .optional()
            .or(z.literal("")),

        phone_number: z
            .string()
            .trim()
            .regex(phoneRegex, "Введите телефон в формате +7 (999) 999-99-99")
            .optional()
            .or(z.literal("")),

        subscribe_to_updates_by_email: z.boolean().default(false),

        password: z
            .string()
            .min(1, "Укажите пароль")
            .regex(passwordRegex, "Пароль должен состоять только из латинских символов")
            .min(6, "Пароль должен быть не короче 6 символов")
            .max(128, "Пароль не должен быть длиннее 128 символов"),

        confirm_password: z
            .string()
            .min(1, "Подтвердите пароль"),
    })
    .superRefine((data, ctx) => {
        if (data.password !== data.confirm_password) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Пароли не совпадают",
                path: ["confirm_password"],
            });
        }

        if (data.subscribe_to_updates_by_email) {
            if (!data.email || data.email.trim() === "") {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Email обязателен при подписке на рассылку",
                    path: ["email"],
                });
            }
        }
    });

type FormInput = z.input<typeof formSchema>;
type FormValues = z.output<typeof formSchema>;

export { formSchema, type FormInput, type FormValues };