"use client";

import Image from "next/image";

import SadCatImage from "@/assets/sad_cat.png";
import { Button } from "@/components/shared/ui";

import styles from "./ErrorComponent.module.scss";

export function ErrorComponent() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        К сожалению произошла ошибка! Попробуйте позже!
      </h1>
      <Image src={SadCatImage} alt="sad_cat" className={styles.image} />
      <Button
        className={styles.button}
        onClick={() => window.location.reload()}
      >
        Попробовать ещё раз
      </Button>
    </div>
  );
}
