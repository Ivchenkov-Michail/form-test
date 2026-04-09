import styles from "./FormTitle.module.scss";

export function FormTitle({ name = "Человек" }: { name?: string }) {
  return (
    <h1 className={styles.title}>
      Здравствуйте, <span>{name}</span>
    </h1>
  );
}
