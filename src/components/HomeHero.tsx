import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig, villaOfferWhatsApp, villas } from "@/lib/site";
import styles from "./HomeHero.module.css";

export function HomeHero() {
  const featured = villas[0];
  const offer = featured.offer;

  return (
    <section className={styles.hero} aria-label="Welcome">
      <div className={styles.media}>
        <Image
          src={featured.heroImage}
          alt="Private pool villa courtyard in Ubud at dusk"
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
        <p className={styles.eyebrow}>Jl. Tirta Tawar · Ubud · Bali</p>
        <h1 className={styles.headline}>
          Private villas.
          <br />
          Real Ubud days.
        </h1>
        <p className={styles.support}>
          {offer
            ? `${featured.name} from ${offer.priceLabel} ${offer.pricePer}, with one free Ubud activity — or gather at Sawah Retreat on the same Tirta Tawar lane.`
            : siteConfig.tagline}
        </p>
        <div className={styles.actions}>
          {offer ? (
            <>
              <a
                className={styles.primary}
                href={villaOfferWhatsApp(featured)}
              >
                WhatsApp Hideaway offer
              </a>
              <Link
                className={styles.secondary}
                href="/villas/the-hideaway#offer"
              >
                See Hideaway deal
              </Link>
            </>
          ) : (
            <>
              <Link className={styles.primary} href="/#villas">
                Explore the villas
              </Link>
              <Link className={styles.secondary} href="/#experience">
                Ubud experience
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
