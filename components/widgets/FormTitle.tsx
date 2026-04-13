"use client";
import { useState } from "react";

import styles from "./FormTitle.module.scss";

export function FormTitle() {
  const [name, setName] = useState(() => {
    if (typeof window === "undefined") return "";

    const raw = localStorage.getItem("register");
    if (!raw) return "";

    try {
      const data = JSON.parse(raw);
      return typeof data.name === "string" ? data.name : "";
    } catch {
      return "Человек";
    }
  });
  return (
    <h1 className={styles.title}>
      Здравствуйте, <span>{name}</span>
    </h1>
  );
}
