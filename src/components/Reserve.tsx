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
          continue to Airbnb to check live availability.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href={whatsappHref()}>
            WhatsApp inquiry
            {siteConfig.whatsappTodo ? (
              <span className={styles.todo}>Replace +62XXXXXXXXXXX</span>
            ) : null}
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
        {siteConfig.whatsappTodo ? (
          <p className={styles.note} role="note">
            WhatsApp number is a placeholder (TODO) until the host confirms the
            live contact.
          </p>
        ) : null}
      </Reveal>
    </section>
  );
}
