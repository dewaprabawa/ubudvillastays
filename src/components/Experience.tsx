import Image from "next/image";
import Link from "next/link";
import { BookButton } from "./BookButton";
import { Reveal } from "./Reveal";
import { siteConfig, villas } from "@/lib/site";
import styles from "./Experience.module.css";

export function Experience() {
  const { experience, location } = siteConfig;
  const [market, kecak, forest] = experience.gallery;

  return (
    <section
      id="experience"
      className={styles.section}
      aria-labelledby="experience-title"
    >
      <Reveal className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.kicker}>The Ubud experience</p>
          <h2 id="experience-title" className={styles.title}>
            {experience.title}
          </h2>
          <p className={styles.lede}>{experience.lede}</p>
          <ul className={styles.points}>
            {experience.points.map((point) => (
              <li key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.copy}</p>
              </li>
            ))}
          </ul>
          <p className={styles.geo}>
            Private pool villas on {location.streetAddress}, {location.city},{" "}
            {location.region} — holiday and longer stays with room to live.
          </p>
          <div className={styles.actions}>
            <BookButton
              className={styles.primary}
              label="Check availability"
            />
            <Link className={styles.secondary} href="/#booking">
              Booking form
            </Link>
          </div>
          <p className={styles.villaLinks}>
            {villas.map((villa, index) => (
              <span key={villa.slug}>
                {index > 0 ? " · " : null}
                <Link href={`/villas/${villa.slug}`}>{villa.name}</Link>
              </span>
            ))}
            {" · "}
            <Link href="/guides/ubud-experiences-from-tirta-tawar">
              Experience guide
            </Link>
          </p>
        </div>

        <div className={styles.gallery} aria-label="Ubud experiences nearby">
          <figure className={`${styles.shot} ${styles.feature}`}>
            <Image
              src={kecak.src}
              alt={kecak.alt}
              width={kecak.width}
              height={kecak.height}
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.image}
            />
            <figcaption>{kecak.caption}</figcaption>
          </figure>
          <figure className={styles.shot}>
            <Image
              src={market.src}
              alt={market.alt}
              width={market.width}
              height={market.height}
              sizes="(max-width: 900px) 100vw, 24vw"
              className={styles.image}
            />
            <figcaption>{market.caption}</figcaption>
          </figure>
          <figure className={styles.shot}>
            <Image
              src={forest.src}
              alt={forest.alt}
              width={forest.width}
              height={forest.height}
              sizes="(max-width: 900px) 100vw, 24vw"
              className={styles.image}
            />
            <figcaption>{forest.caption}</figcaption>
          </figure>
        </div>
      </Reveal>
    </section>
  );
}
