export const dynamic = "force-dynamic";

import { FormTitle } from "@/components/shared/common";
import { RegisterFormWidget } from "@/components/widgets/RegisterFormWidget";


import styles from "./page.module.scss";

export default async function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <FormTitle />
            <RegisterFormWidget />
      </section>
    </main>
  );
}
