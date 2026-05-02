export const dynamic = "force-dynamic";


import { Suspense } from "react";

import { RegisterFormWidget } from "@/components/widgets/RegisterFormWidget";
import { FormTitle } from "@/components/shared/common";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import { ErrorComponent } from "@/components/widgets";
import { Spinner } from "@/components/shared/ui";

import styles from "./page.module.scss";

export default async function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <ErrorBoundary fallback={<ErrorComponent />}>
          <Suspense fallback={<Spinner />}>
            <FormTitle />
            <RegisterFormWidget />
          </Suspense>
        </ErrorBoundary>
      </section>
    </main>
  );
}
