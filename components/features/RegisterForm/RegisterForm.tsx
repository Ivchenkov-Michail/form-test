"use client";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { isRequiredField } from "@/components/shared/lib/isFieldRequired";
import {
  CheckboxField,
  PhoneField,
  SelectField,
  TextField,
} from "@/components/shared/common";

import { type CityOption } from "../../shared/api/cities.query";

import styles from "./RegisterForm.module.scss";
import { FormInput, formSchema, FormValues } from "./_lib/Form.schema";
import { FormFooter } from "./_components/FormFooter";
import { registerUser } from "./_api/register.mutation";
import { saveRegisterMeta } from "./_api/register.storage";

export function RegisterForm({ cities }: { cities: CityOption[] }) {
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormInput, unknown, FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      town: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    const { confirm_password: _, ...submitData } = data;

    try {
      await registerUser(submitData);
      saveRegisterMeta(submitData.name);
      reset();
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Имя"
        required={isRequiredField(formSchema, "name")}
        error={errors.name?.message}
        placeholder="Введите Имя"
        {...register("name")}
      />
      <Controller
        name="town"
        control={control}
        render={({ field }) => (
          <SelectField
            label="Ваш город"
            required={isRequiredField(formSchema, "town")}
            error={errors.town?.message}
            value={cities.find((o) => o.value === field.value) ?? null}
            onChange={(option) => field.onChange(option?.value ?? "")}
            options={cities}
            placeholder="Выберите Город"
          />
        )}
      />
      <div className={styles.separator} />
      <TextField
        label="Пароль"
        required={isRequiredField(formSchema, "password")}
        error={errors.password?.message}
        placeholder="Укажите Пароль"
        type="password"
        {...register("password")}
      />

      <TextField
        label="Пароль еще раз"
        required={isRequiredField(formSchema, "confirm_password")}
        error={errors.confirm_password?.message}
        placeholder="Повторите Пароль"
        type="password"
        {...register("confirm_password")}
      />

      <div className={styles.separator} />

      <Controller
        name="phone_number"
        control={control}
        render={({ field }) => (
          <PhoneField
            label="Номер телефона"
            required={isRequiredField(formSchema, "phone_number")}
            value={field.value ?? ""}
            name={field.name}
            inputRef={field.ref}
            onBlur={field.onBlur}
            onChange={field.onChange}
            error={errors.phone_number?.message}
          />
        )}
      />

      <TextField
        label="Электронная почта"
        required={isRequiredField(formSchema, "email")}
        error={errors.email?.message}
        placeholder="ivchenkov.michail2005@gmail.com"
        {...register("email")}
      />

      <Controller
        name="subscribe_to_updates_by_email"
        control={control}
        render={({ field }) => (
          <CheckboxField
            label="Я согласен"
            fieldLabel="принимать актуальную информацию на емеил"
            required={isRequiredField(
              formSchema,
              "subscribe_to_updates_by_email",
            )}
            checked={field.value}
            onChange={field.onChange}
            name={field.name}
            inputId="checkbox_actual"
            aria-label="Актуальная информация"
          />
        )}
      />
      <FormFooter isDisabled={!isValid} isSubmitting={isSubmitting} />
    </form>
  );
}
