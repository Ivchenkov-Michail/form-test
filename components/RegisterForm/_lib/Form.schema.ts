import z from "zod";

const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

const formSchema = z
    .object({
        name: z
            .string()
            .trim()
            .min(2, "Имя должно быть не короче 2 символов")
            .max(50, "Имя не должно быть длиннее 50 символов"),

        town: z
            .string()
            .trim()
            .min(1, "Выберите город"),

        email: z
            .string()
            .trim()
            .min(1, "Email обязателен")
            .email("Введите корректный email"),

        phone_number: z
            .string()
            .trim()
            .regex(phoneRegex, "Введите телефон в формате +7 (999) 999-99-99")
            .optional()
            .or(z.literal("")),

        subscribe_to_updates_by_email: z
            .boolean().default(false),

        password: z
            .string()
            .min(1, "Укажите пароль")
            .min(8, "Пароль должен быть не короче 8 символов")
            .max(128, "Пароль не должен быть длиннее 128 символов"),

        confirm_password: z
            .string()
            .min(1, "Подтвердите пароль"),
    })
    .refine((data) => data.password === data.confirm_password, {
        message: "Пароли не совпадают",
        path: ["confirm_password"],
    });

type FormInput = z.input<typeof formSchema>;
type FormValues = z.output<typeof formSchema>;

export { formSchema, type FormInput, type FormValues };