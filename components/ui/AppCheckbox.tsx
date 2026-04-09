import React, {
  CSSProperties,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import clsx from "clsx";

import styles from "./AppCheckbox.module.scss";

type AppCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  size?: number | string;
  checkSize?: number | string;
  borderWidth?: number | string;
  radius?: number | string;
  label: ReactNode;
  id: string;
};

const toCssSize = (value?: number | string) => {
  if (value === undefined) return undefined;
  return typeof value === "number" ? `${value}px` : value;
};

export const AppCheckbox = forwardRef<HTMLInputElement, AppCheckboxProps>(
  (
    {
      id,
      label,
      className,
      size = 20,
      checkSize,
      borderWidth = 1.5,
      radius = 0,
      style,
      ...props
    },
    ref,
  ) => {
    const cssVars = {
      "--checkbox-size": toCssSize(size),
      "--checkbox-check-size": toCssSize(
        checkSize ?? Math.round((Number(size) || 20) * 0.5),
      ),
      "--checkbox-border-width": toCssSize(borderWidth),
      "--checkbox-radius": toCssSize(radius),
      ...style,
    } as CSSProperties;

    return (
      <label className={styles.checkboxWrapper} htmlFor={id}>
        <input
          ref={ref}
          type="checkbox"
          className={clsx(styles.checkbox, className)}
          style={cssVars}
          id={id}
          {...props}
        />
        <span>{label}</span>
      </label>
    );
  },
);

AppCheckbox.displayName = "AppCheckbox";
