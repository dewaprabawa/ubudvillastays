import Image from "next/image";
import Link from "next/link";
import { BookButton } from "./BookButton";
import { Logo } from "./Logo";
import { siteConfig, villas } from "@/lib/site";
import styles from "./HomeHero.module.css";

export function HomeHero() {
  const featured = villas[0];
  const sawah = villas[1];
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
        <h2 className={styles.answer}>
          Private pool villas in Tirta Tawar, Ubud
        </h2>
        <p className={styles.support}>
          {offer && sawah?.offer
            ? `The Hideaway is a ${featured.facts.bedrooms}-bedroom courtyard villa for up to ${featured.facts.guests} guests, from ${offer.priceLabel} / night. Sawah Retreat is a ${sawah.facts.bedrooms}-bedroom rice-field villa for up to ${sawah.facts.guests} guests, from ${sawah.offer.priceLabel} / night. Each promo stay includes one free activity: a rice-terrace cooking class or rice-field cycling with lunch.`
            : siteConfig.tagline}
        </p>
        <div className={styles.actions}>
          <BookButton
            defaultVillaSlug={featured.slug}
            className={styles.primary}
            label="Check availability"
          />
          <Link
            className={styles.secondary}
            href={sawah?.offer ? "/villas/sawah-retreat#offer" : "/#villas"}
          >
            {sawah?.offer
              ? `Sawah from ${sawah.offer.priceLabel}`
              : "Explore the villas"}
          </Link>
        </div>
      </div>
    </section>
  );
}
