import { useState } from "react";

import { Button } from "@/components/shared/ui";

import styles from "./FormFooter.module.scss";
type FormFooterProps = {
  isValid: boolean;
};

export function FormFooter({ isValid }: FormFooterProps) {
  const [dateMessage] = useState(() => {
    if (typeof window === "undefined") return "";

    const raw = localStorage.getItem("register");
    if (!raw) return "";

    try {
      const data = JSON.parse(raw);
      return typeof data.date === "string" ? data.date : "";
    } catch {
      return "";
    }
  });
  return (
    <div className={styles.footer}>
      <span />
      <div className={styles.footerContainer}>
        <Button type="submit" disabled={!isValid}>
          Изменить
        </Button>
        <p className={styles.updatedAt}>{dateMessage}</p>
      </div>
    </div>
  );
}
