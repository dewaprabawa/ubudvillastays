import { Reveal } from "./Reveal";
import { siteConfig, whatsappHref } from "@/lib/site";
import styles from "./Reserve.module.css";

export function Reserve() {
  return (
    <section id="reserve" className={styles.section} aria-labelledby="reserve-title">
      <Reveal className={styles.inner}>
        <p className={styles.kicker}>Reserve</p>
        <h2 id="reserve-title" className={styles.title}>
          Tell us your dates. We&apos;ll take it from there.
        </h2>
        <p className={styles.lede}>
          Message us on WhatsApp with your travel window and guest count, or
          continue to Airbnb to check live availability. You can also email{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href={whatsappHref()}>
            WhatsApp inquiry
          </a>
          <a
            className={styles.secondary}
            href={siteConfig.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book via Airbnb
          </a>
        </div>
      </Reveal>
    </section>
  );
}
