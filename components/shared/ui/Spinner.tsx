import { CSSProperties } from "react";
import clsx from "clsx";

import styles from "./Spinner.module.scss";

type SpinnerProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
};

export function Spinner({ className, size = "md", color }: SpinnerProps) {
  const cssVars = {
    "--spinner-color": color,
  } as CSSProperties;

  return (
    <div
      className={clsx(styles.spinner, styles[size], className)}
      style={cssVars}
      aria-label="Загрузка"
      role="status"
    >
      <div className={styles.bounce1} />
      <div className={styles.bounce2} />
      <div className={styles.bounce3} />
    </div>
  );
}
