import { FormTitle } from "@/components/FormTitle";
import { RegisterForm } from "@/components/RegisterForm/RegisterForm";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <FormTitle />
        <RegisterForm />
      </section>
    </main>
  );
}
