import Link from "next/link";
import { Reveal } from "./Reveal";
import {
  type Villa,
  siteConfig,
  villaOfferWhatsApp,
  whatsappHref,
} from "@/lib/site";
import styles from "./Reserve.module.css";

type ReserveProps = {
  villa?: Villa;
};

export function Reserve({ villa }: ReserveProps) {
  const title = villa
    ? `Reserve ${villa.name}`
    : "Tell us your dates. We’ll match the villa.";
  const airbnb = villa?.airbnbUrl;
  const wa = villa?.offer ? villaOfferWhatsApp(villa) : whatsappHref(villa?.name);
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
          Message us on WhatsApp with your travel window and guest count
          {villa ? ` for ${villa.name}` : ", and which villa you prefer"}—
          holiday nights or a longer stay.{offerLine} You can also email{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {airbnb ? " or continue to Airbnb for live availability" : ""}.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href={wa}>
            {villa?.offer ? "WhatsApp this offer" : "WhatsApp inquiry"}
          </a>
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
