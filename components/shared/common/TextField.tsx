import clsx from "clsx";

import { FormRow } from "@/components/shared/ui";

import styles from "./input.module.scss";

type TextFieldProps = {
  label: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  name?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
};

export function TextField({
  label,
  error,
  required,
  type = "text",
  ...props
}: TextFieldProps) {
  return (
    <FormRow label={label} isRequired={required}>
      <input
        {...props}
        type={type}
        className={clsx(styles.input, error && styles.inputError)}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </FormRow>
  );
}
