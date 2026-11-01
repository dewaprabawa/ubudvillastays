"use client";

import type { Villa } from "@/lib/site";
import { BookButton } from "./BookButton";
import styles from "./MobileBookingBar.module.css";

type MobileBookingBarProps = {
  villa?: Villa;
};

export function MobileBookingBar({ villa }: MobileBookingBarProps) {
  return (
    <div className={styles.bar} data-mobile-booking-bar>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.label}>
            {villa ? `Book ${villa.shortName}` : "Book a villa"}
          </p>
          <p className={styles.hint}>Dates · guests · details</p>
        </div>
        <BookButton
          villa={villa}
          className={styles.cta}
          label="Check availability"
        />
      </div>
    </div>
  );
}
