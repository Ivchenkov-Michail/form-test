"use client";

import clsx from "clsx";
import { IMaskInput } from "react-imask";

import { FormRow } from "@/components/shared/ui";

import styles from "./input.module.scss";

type PhoneFieldProps = {
  label: string;
  value?: string;
  name?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  inputRef?: React.Ref<HTMLInputElement>;
};

export function PhoneField({
  label,
  value = "",
  name,
  error,
  required = false,
  placeholder = "+7 (***) ***-**-**",
  disabled = false,
  onChange,
  onBlur,
  inputRef,
}: PhoneFieldProps) {
  return (
    <FormRow label={label} isRequired={required}>
      <IMaskInput
        mask="+{7} (000) 000-00-00"
        value={value}
        name={name}
        inputRef={inputRef}
        onAccept={(maskedValue) => onChange?.(String(maskedValue))}
        onBlur={onBlur}
        placeholder={placeholder}
        inputMode="tel"
        disabled={disabled}
        className={clsx(styles.input, error && styles.inputError)}
      />

      {error && <p className={styles.errorText}>{error}</p>}
    </FormRow>
  );
}
