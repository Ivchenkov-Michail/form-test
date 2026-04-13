import { ReactNode } from "react";

import styles from "./FormRow.module.scss";

interface IFormProps {
  label: string;
  children: ReactNode;
  isRequired?: boolean;
}

export function FormRow({ label, children, isRequired = false }: IFormProps) {
  return (
    <div className={styles.row}>
      <label className={styles.label}>
        {label}
        {isRequired && <span className={styles.required}>*</span>}
      </label>
      <div className={styles.fieldWrapper}>{children}</div>
    </div>
  );
}
