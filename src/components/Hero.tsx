import Image from "next/image";
import { Logo } from "./Logo";
import { siteConfig, whatsappHref } from "@/lib/site";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Welcome">
      <div className={styles.media}>
        <Image
          src="/images/villa/hero.jpg"
          alt="Private pool courtyard at The Hideaway villa in Ubud at dusk"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.shade} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <div className={styles.brandBlock}>
          <Logo variant="light" size="lg" />
        </div>
        <p className={styles.villa}>{siteConfig.villaName}</p>
        <h1 className={styles.headline}>
          Quiet mornings by the pool.
          <br />
          Ubud just beyond the gate.
        </h1>
        <p className={styles.support}>
          A modern-Bali 2-bedroom hideaway with a private pool, tropical garden,
          and an easy stroll to cafés, galleries, and temples.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href={whatsappHref()}>
            Inquire on WhatsApp
            {siteConfig.whatsappTodo ? (
              <span className={styles.todoBadge}>Number TODO</span>
            ) : null}
          </a>
          <a
            className={styles.secondary}
            href={siteConfig.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Airbnb
          </a>
        </div>
      </div>
    </section>
  );
}
