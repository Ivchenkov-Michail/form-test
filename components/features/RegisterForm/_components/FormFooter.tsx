"use client";
import { useEffect, useState } from "react";

import { Button, Spinner } from "@/components/shared/ui";

import { getRegisterMeta } from "../_api/register.storage";

import styles from "./FormFooter.module.scss";
type FormFooterProps = {
  isDisabled: boolean;
  isSubmitting: boolean;
};

export function FormFooter({ isDisabled, isSubmitting }: FormFooterProps) {
  const [dateMessage, setDateMessage] = useState<null | string>(null);

  useEffect(() => {
    const meta = getRegisterMeta();
    if (meta && meta.date) setDateMessage(meta.date);
  }, []);

  return (
    <div className={styles.footer}>
      <span />
      <div className={styles.footerContainer}>
        <Button type="submit" disabled={isDisabled || isSubmitting}>
          {isSubmitting ? <Spinner size="sm" color="#ffffff" /> : "Изменить"}
        </Button>
        {dateMessage && <p className={styles.updatedAt}>{dateMessage}</p>}
      </div>
    </div>
  );
}
