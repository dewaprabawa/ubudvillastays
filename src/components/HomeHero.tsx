import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig, villas, whatsappHref } from "@/lib/site";
import styles from "./HomeHero.module.css";

export function HomeHero() {
  const featured = villas[0];

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
        <p className={styles.support}>{siteConfig.tagline}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={whatsappHref()}>
            Inquire on WhatsApp
          </a>
          <Link className={styles.secondary} href="/#villas">
            Explore the villas
          </Link>
        </div>
      </div>
    </section>
  );
}
