"use client";
import clsx from "clsx";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IMaskInput } from "react-imask";

import styles from "@/app/page.module.scss";
import { isRequiredField } from "@/utils/IsFieldRequired";

import { Button } from "../ui/Button";
import { AppSelect } from "../ui/AppSelect";
import { AppCheckbox } from "../ui/AppCheckbox";

import { FormRow } from "./_components/FormRow";
import { FormInput, formSchema, FormValues } from "./_lib/Form.schema";

type Option = {
  value: string;
  label: string;
};

const town_options: Option[] = [
  { value: "bryansk", label: "Брянск" },
  { value: "smolensk", label: "Смоленск" },
  { value: "kaluga", label: "Калуга" },
  { value: "moskov", label: "Москва" },
  { value: "voronej", label: "Воронеж" },
  { value: "ural", label: "Урал" },
];

export function RegisterForm() {
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInput, unknown, FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      town: town_options[0].value,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Success: ", data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Имя" isRequired={isRequiredField(formSchema, "name")}>
        <input
          className={clsx(
            styles.input,
            errors.name?.message && styles.inputError,
          )}
          type="text"
          placeholder="Введите Имя"
          {...register("name")}
        />
        {errors.name?.message && (
          <p className={styles.errorText}>{errors.name?.message}</p>
        )}
      </FormRow>
      <FormRow
        label="Ваш город"
        isRequired={isRequiredField(formSchema, "town")}
      >
        <Controller
          name="town"
          control={control}
          render={({ field: { value, onChange, ...field } }) => (
            <AppSelect<Option, false>
              {...field}
              options={town_options}
              value={
                town_options.find((option) => option.value === value) ??
                town_options[0]
              }
              defaultValue={
                town_options.find((option) => option.value === value) ??
                town_options[0]
              }
              className={errors.name?.message && styles.inputError}
              onChange={(selectedOption) =>
                onChange(selectedOption?.value ?? "")
              }
            />
          )}
        />
        {errors.town?.message && (
          <p className={styles.errorText}>{errors.town?.message}</p>
        )}
      </FormRow>
      <div className={styles.separator} />
      <FormRow
        label="Пароль"
        isRequired={isRequiredField(formSchema, "password")}
      >
        <input
          className={clsx(
            styles.input,
            errors.password?.message && styles.inputError,
          )}
          type="password"
          placeholder="Укажите Пароль"
          {...register("password")}
        />
        {errors.password?.message && (
          <p className={styles.errorText}>{errors.password?.message}</p>
        )}
      </FormRow>
      <FormRow
        label="Пароль еще раз"
        isRequired={isRequiredField(formSchema, "confirm_password")}
      >
        <input
          className={clsx(
            styles.input,
            errors.confirm_password?.message && styles.inputError,
          )}
          {...register("confirm_password")}
          type="password"
          placeholder="Повторите Пароль"
        />
        {errors.confirm_password?.message && (
          <p className={styles.errorText}>{errors.confirm_password?.message}</p>
        )}
      </FormRow>
      <div className={styles.separator} />
      <FormRow
        label="Номер телефона"
        isRequired={isRequiredField(formSchema, "phone_number")}
      >
        <Controller
          name="phone_number"
          control={control}
          render={({ field }) => (
            <IMaskInput
              mask="+{7} (000) 000-00-00"
              value={field.value ?? ""}
              inputRef={field.ref}
              onAccept={(value) => field.onChange(value)}
              onBlur={field.onBlur}
              placeholder="+7 (___) ___-__-__"
              inputMode="tel"
              className={clsx(
                styles.input,
                errors.phone_number?.message && styles.inputError,
              )}
            />
          )}
        />

        {errors.phone_number?.message && (
          <p className={styles.errorText}>{errors.phone_number.message}</p>
        )}
      </FormRow>
      <FormRow
        label="Электронная почта"
        isRequired={isRequiredField(formSchema, "email")}
      >
        <input
          className={clsx(
            styles.input,
            errors.email?.message && styles.inputError,
          )}
          type="text"
          placeholder="ivchenkov.michail2005@gmail.com"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className={styles.errorText}>{errors.email?.message}</p>
        )}
      </FormRow>
      <FormRow
        label="Я согласен"
        isRequired={isRequiredField(
          formSchema,
          "subscribe_to_updates_by_email",
        )}
      >
        <AppCheckbox
          {...register("subscribe_to_updates_by_email")}
          aria-label="Актуальная информация"
          size={12}
          id="checkbox_actual"
          label={"принимать актуальную информацию на емеил"}
        />
      </FormRow>
      <div className={styles.footer}>
        <span></span>
        <div className={styles.footerContainer}>
          <Button type={"submit"} disabled={!isValid}>
            Изменить
          </Button>
          <p className={styles.updatedAt}>
            последние изменения 15 мая 2024 в 14:55
          </p>
        </div>
      </div>
    </form>
  );
}
