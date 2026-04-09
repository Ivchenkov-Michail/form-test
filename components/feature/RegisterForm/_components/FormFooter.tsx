import { Button } from "@/components/ui";

import styles from "./FormFooter.module.scss";
type FormFooterProps = {
  isValid: boolean;
};

export function FormFooter({ isValid }: FormFooterProps) {
  return (
    <div className={styles.footer}>
      <span />
      <div className={styles.footerContainer}>
        <Button type="submit" disabled={!isValid}>
          Изменить
        </Button>
        <p className={styles.updatedAt}>
          последние изменения 15 мая 2024 в 14:55
        </p>
      </div>
    </div>
  );
}
