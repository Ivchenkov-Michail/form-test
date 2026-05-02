import styles from "./Spinner.module.scss";

export function Spinner() {
  return (
    <div className={styles.wrapper}>
      <svg viewBox="25 25 50 50" className={styles.body}>
        <circle r="20" cy="50" cx="50" className={styles.circle}></circle>
      </svg>
    </div>
  );
}
