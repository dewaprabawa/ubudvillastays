import Image from "next/image";
import { Logo } from "./Logo";
import { type Villa, siteConfig, whatsappHref } from "@/lib/site";
import styles from "./Hero.module.css";

type HeroProps = {
  villa: Villa;
  showBrand?: boolean;
};

export function Hero({ villa, showBrand = true }: HeroProps) {
  const lines = villa.headline.split("\n");

  return (
    <section className={styles.hero} aria-label={`${villa.name} welcome`}>
      <div className={styles.media}>
        <Image
          src={villa.heroImage}
          alt={`${villa.name} in ${siteConfig.location.city}`}
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.shade} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        {showBrand ? (
          <div className={styles.brandBlock}>
            <Logo variant="light" size="lg" />
          </div>
        ) : null}
        <p className={styles.villa}>{villa.name}</p>
        <h1 className={styles.headline}>
          {lines.map((line, index) => (
            <span key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </h1>
        <p className={styles.support}>{villa.support}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={whatsappHref(villa.name)}>
            Inquire on WhatsApp
          </a>
          <a
            className={styles.secondary}
            href={villa.airbnbUrl}
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
