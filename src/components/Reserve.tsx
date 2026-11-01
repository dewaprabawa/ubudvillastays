import Link from "next/link";
import { BookingForm } from "./BookingForm";
import { Reveal } from "./Reveal";
import { type Villa, siteConfig } from "@/lib/site";
import styles from "./Reserve.module.css";

type ReserveProps = {
  villa?: Villa;
};

export function Reserve({ villa }: ReserveProps) {
  const title = villa
    ? `Book ${villa.name}`
    : "Book your Ubud villa stay";
  const airbnb = villa?.airbnbUrl;
  const offerLine = villa?.offer
    ? ` Promo from ${villa.offer.priceLabel} ${villa.offer.pricePer}, with one free activity included.`
    : "";

  return (
    <section
      id="booking"
      className={styles.section}
      aria-labelledby="booking-title"
    >
      {/* Keep #reserve working for older links */}
      <span id="reserve" className={styles.anchor} aria-hidden="true" />
      <Reveal className={styles.inner}>
        <p className={styles.kicker}>Booking · Tirta Tawar, Ubud</p>
        <h2 id="booking-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.lede}>
          Select your date range, number of persons, and any details
          {villa ? ` for ${villa.name}` : " — then choose which villa"}. We
          continue on WhatsApp to check availability.
          {offerLine} Prefer email? Write{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {airbnb ? ", or hold dates on Airbnb" : ""}.
        </p>

        <div className={styles.steps} aria-hidden="true">
          <span>1. Date range</span>
          <span>2. Persons</span>
          <span>3. Details</span>
          <span>4. WhatsApp</span>
        </div>

        <BookingForm villa={villa} variant="inline" />

        <div className={styles.actions}>
          {airbnb ? (
            <a
              className={styles.secondary}
              href={airbnb}
              target="_blank"
              rel="noopener noreferrer"
            >
              Or book via Airbnb
            </a>
          ) : (
            <Link className={styles.secondary} href="/#villas">
              Compare villas
            </Link>
          )}
        </div>
      </Reveal>
    </section>
  );
}
