"use client";

import { getRegisterMeta } from "../features/RegisterForm/_api/register.storage";

import styles from "./FormTitle.module.scss";


export function FormTitle() {
  const meta = getRegisterMeta();
  const name = meta && meta.name ? meta.name : "Человек";
  return (
    <h1 className={styles.title}>
      Здравствуйте, <span>{name}</span>
    </h1>
  );
}
