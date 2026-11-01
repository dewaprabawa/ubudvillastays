import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { siteConfig, villas, whatsappHref } from "@/lib/site";
import styles from "./Experience.module.css";

export function Experience() {
  const { experience, location } = siteConfig;

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
            <a className={styles.primary} href={whatsappHref()}>
              Inquire on WhatsApp
            </a>
            <Link className={styles.secondary} href="/#villas">
              Compare villas
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

        <figure className={styles.media}>
          <Image
            src="/images/marketing/kecak-dance-ubud.jpg"
            alt="Kecak dance performance at a temple near Ubud, Bali"
            width={1800}
            height={1570}
            sizes="(max-width: 900px) 100vw, 48vw"
            className={styles.image}
            priority={false}
          />
          <figcaption>
            Kecak at a temple near Ubud — culture within reach of Tirta Tawar.
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
