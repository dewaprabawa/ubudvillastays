import Link from "next/link";
import { Reveal } from "./Reveal";
import { type Villa, siteConfig, whatsappHref } from "@/lib/site";
import styles from "./Reserve.module.css";

type ReserveProps = {
  villa?: Villa;
};

export function Reserve({ villa }: ReserveProps) {
  const title = villa
    ? `Reserve ${villa.name}`
    : "Tell us your dates. We'll take it from there.";
  const airbnb = villa?.airbnbUrl;

  return (
    <section id="reserve" className={styles.section} aria-labelledby="reserve-title">
      <Reveal className={styles.inner}>
        <p className={styles.kicker}>Reserve</p>
        <h2 id="reserve-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.lede}>
          Message us on WhatsApp with your travel window and guest count
          {villa ? ` for ${villa.name}` : ", and which villa you prefer"}. You
          can also email{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {airbnb ? " or continue to Airbnb for live availability" : ""}.
        </p>
        <div className={styles.actions}>
          <a
            className={styles.primary}
            href={whatsappHref(villa?.name)}
          >
            WhatsApp inquiry
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
