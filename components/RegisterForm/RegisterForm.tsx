"use client";
import { useState } from "react";
import clsx from "clsx";

import styles from "@/app/page.module.scss";

import { Button } from "../ui/Button";
import { AppSelect } from "../ui/AppSelect";
import { AppCheckbox } from "../ui/AppCheckbox";

import { FormRow } from "./_components/FormRow";

const town_options = [
  { value: "bryansk", label: "Брянск" },
  { value: "smolensk", label: "Смоленск" },
  { value: "kaluga", label: "Калуга" },
  { value: "moskov", label: "Москва" },
  { value: "voronej", label: "Воронеж" },
  { value: "ural", label: "Урал" },
];

export function RegisterForm() {
  const [checked, setChecked] = useState(false);
  return (
    <form className={styles.form}>
      {/* Имя */}
      <FormRow label="Имя" isRequired>
        <input className={styles.input} type="text" placeholder="Введите Имя" />
      </FormRow>

      <FormRow label="Ваш город" isRequired>
        <AppSelect options={town_options} defaultValue={town_options[0]} />
      </FormRow>

      <div className={styles.separator} />

      <FormRow label="Пароль" isRequired>
        <input
          className={clsx(styles.input, styles.inputError)}
          type="password"
        />
        <p className={styles.errorText}>Укажите пароль</p>
      </FormRow>

      <FormRow label="Пароль еще раз" isRequired>
        <input
          className={styles.input}
          type="password"
          placeholder="Повторите Пароль"
        />
      </FormRow>

      <div className={styles.separator} />

      <FormRow label="Номер телефона">
        <input
          className={styles.input}
          type="tel"
          placeholder="+7 (***) ***‑**‑**"
        />
      </FormRow>

      <FormRow label="Электронная почта" isRequired>
        <input className={styles.input} type="email" />
      </FormRow>

      <FormRow label="Я согласен">
        <AppCheckbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          aria-label="Актуальная информация"
          size={12}
          id="checkbox_actual"
          label={"принимать актуальную информацию на емеил"}
        />
      </FormRow>

      <div className={styles.footer}>
        <span></span>
        <div className={styles.footerContainer}>
          <Button>Изменить</Button>
          <p className={styles.updatedAt}>
            последние изменения 15 мая 2024 в 14:55
          </p>
        </div>
      </div>
    </form>
  );
}
