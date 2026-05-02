import { CSSProperties } from "react";
import clsx from "clsx";

import styles from "./Loader.module.scss";

type LoaderProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
};

export function Loader({ className, size = "md", color }: LoaderProps) {
  const cssVars = {
    "--loader-color": color,
  } as CSSProperties;

  return (
    <div
      className={clsx(styles.loader, styles[size], className)}
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
