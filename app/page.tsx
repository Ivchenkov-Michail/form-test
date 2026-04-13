import { FormTitle } from "@/components/widgets/FormTitle";
import RegisterForm from "@/components/features/RegisterForm";
import {
  CityOption,
  getCitiesOptions,
} from "@/components/shared/api/cities.query";

import styles from "./page.module.scss";

export default async function Home() {
  const cities: CityOption[] = await getCitiesOptions();
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <FormTitle />
        <RegisterForm cities={cities ?? []} />
      </section>
    </main>
  );
}
