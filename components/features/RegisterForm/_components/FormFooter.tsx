import { useState } from "react";

import { Button, Spinner } from "@/components/shared/ui";

import styles from "./FormFooter.module.scss";
type FormFooterProps = {
  isDisabled: boolean;
  isSubmitting: boolean;
};

export function FormFooter({ isDisabled, isSubmitting }: FormFooterProps) {
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
        <Button type="submit" disabled={isDisabled || isSubmitting}>
          {isSubmitting ? <Spinner size="sm" color="#ffffff" /> : "Изменить"}
        </Button>
        <p className={styles.updatedAt}>{dateMessage}</p>
      </div>
    </div>
  );
}
