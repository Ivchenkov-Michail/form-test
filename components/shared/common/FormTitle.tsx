"use client";

import { useEffect, useState } from "react";

import { getRegisterMeta } from "@/components/features/RegisterForm/_api/register.storage";

import styles from "./FormTitle.module.scss";

export function FormTitle() {
  const [name, setName] = useState("Человек");

  useEffect(() => {
    const meta = getRegisterMeta();
    setName(meta?.name || "Человек");
  }, []);

  return (
    <h1 className={styles.title}>
      Здравствуйте, <span>{name}</span>
    </h1>
  );
}
