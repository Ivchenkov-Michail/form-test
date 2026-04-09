import { ReactNode } from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

export function Button({
  children,
  className,
  ...props
}: { children: ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(styles.submit, className)} {...props}>
      {children}
    </button>
  );
}
