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
    ? `Reserve ${villa.name}`
    : "Tell us your dates. We’ll match the villa.";
  const airbnb = villa?.airbnbUrl;
  const offerLine = villa?.offer
    ? ` From ${villa.offer.priceLabel} ${villa.offer.pricePer}, with one free activity included.`
    : "";

  return (
    <section id="reserve" className={styles.section} aria-labelledby="reserve-title">
      <Reveal className={styles.inner}>
        <p className={styles.kicker}>Reserve · Tirta Tawar, Ubud</p>
        <h2 id="reserve-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.lede}>
          Fill in your dates and guest count
          {villa ? ` for ${villa.name}` : ", and which villa you prefer"}—
          then continue on WhatsApp so we can check availability.
          {offerLine} You can also email{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {airbnb ? " or continue to Airbnb for live calendar holds" : ""}.
        </p>

        <BookingForm villa={villa} variant="inline" />

        <div className={styles.actions}>
          {airbnb ? (
            <a
              className={styles.secondary}
              href={airbnb}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book via Airbnb
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
