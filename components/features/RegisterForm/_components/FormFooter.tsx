
import { Button, Spinner } from "@/components/shared/ui";

import { getRegisterMeta } from "../_api/register.storage";

import styles from "./FormFooter.module.scss";
type FormFooterProps = {
  isDisabled: boolean;
  isSubmitting: boolean;
};

export function FormFooter({ isDisabled, isSubmitting }: FormFooterProps) {
  const meta = getRegisterMeta();
  const dateMessage = meta && meta.date ? meta.date : null;

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
