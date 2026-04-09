import { FormTitle } from "@/app/_components/FormTitle";
import RegisterForm from "@/components/feature/RegisterForm";
import {
  CityOption,
  GetCitiesOptions,
} from "@/components/feature/RegisterForm/_lib/cities.query";

import styles from "./page.module.scss";

export default async function Home() {
  const cities: CityOption[] = await GetCitiesOptions();
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <FormTitle />
        <RegisterForm cities={cities ?? []} />
      </section>
    </main>
  );
}
