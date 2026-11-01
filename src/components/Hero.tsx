import Image from "next/image";
import { BookButton } from "./BookButton";
import { Logo } from "./Logo";
import { type Villa, siteConfig } from "@/lib/site";
import styles from "./Hero.module.css";

type HeroProps = {
  villa: Villa;
  showBrand?: boolean;
};

export function Hero({ villa, showBrand = true }: HeroProps) {
  const lines = villa.headline.split("\n");
  const collage = villa.heroCollage;
  const [feature, ...thumbs] = collage ?? [];

  return (
    <section className={styles.hero} aria-label={`${villa.name} welcome`}>
      <div className={styles.media}>
        {feature && thumbs.length ? (
          <div className={styles.collage} aria-hidden="true">
            <div className={styles.feature}>
              <Image
                src={feature.src}
                alt=""
                fill
                priority
                sizes="(max-width: 860px) 100vw, 58vw"
                className={styles.image}
              />
            </div>
            <div className={styles.thumbs}>
              {thumbs.slice(0, 4).map((shot, index) => (
                <div key={shot.src} className={styles.thumb}>
                  <Image
                    src={shot.src}
                    alt=""
                    fill
                    priority={index < 2}
                    sizes="(max-width: 860px) 50vw, 21vw"
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Image
            src={villa.heroImage}
            alt={`${villa.name} in ${siteConfig.location.city}`}
            fill
            priority
            sizes="100vw"
            className={styles.image}
          />
        )}
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
          <BookButton
            villa={villa}
            className={styles.primary}
            label="Check availability"
          />
          {villa.offer ? (
            <a className={styles.secondary} href="#offer">
              See price & free activity
            </a>
          ) : villa.pitch ? (
            <a className={styles.secondary} href="#stay">
              Why stay at {villa.shortName}
            </a>
          ) : (
            <a
              className={styles.secondary}
              href={villa.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Airbnb
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
