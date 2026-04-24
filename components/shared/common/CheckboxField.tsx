"use client";

import { AppCheckbox, FormRow } from "@/components/shared/ui";

type CheckboxFieldProps = {
  label: string;
  fieldLabel: string;
  required?: boolean;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  inputId: string;
  "aria-label"?: string;
};

export function CheckboxField({
  label,
  fieldLabel,
  required = false,
  checked,
  onChange,
  name,
  inputId,
  "aria-label": ariaLabel,
}: CheckboxFieldProps) {
  return (
    <FormRow label={label} isRequired={required}>
      <AppCheckbox
        id={inputId ?? name}
        label={fieldLabel}
        aria-label={ariaLabel}
        size={12}
        checked={checked}
        onChange={onChange}
        name={name}
      />
    </FormRow>
  );
}
