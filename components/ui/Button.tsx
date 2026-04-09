import { ReactNode } from "react";

import styles from "./Button.module.scss";

export function Button({ children }: { children: ReactNode }) {
  return (
    <button type="submit" className={styles.submit}>
      {children}
    </button>
  );
}
