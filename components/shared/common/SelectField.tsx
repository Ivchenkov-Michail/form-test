"use client";

import clsx from "clsx";

import { AppSelect, FormRow } from "@/components/shared/ui";

import styles from "./input.module.scss";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  options: SelectOption[];
  value: SelectOption | null;
  onChange: (option: SelectOption | null) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  isDisabled?: boolean;
};

export function SelectField({
  label,
  options,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  isDisabled = false,
}: SelectFieldProps) {
  return (
    <FormRow label={label} isRequired={required}>
      <AppSelect<SelectOption, false>
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isDisabled={isDisabled}
        className={clsx(error && styles.inputError)}
      />

      {error && <p className={styles.errorText}>{error}</p>}
    </FormRow>
  );
}
