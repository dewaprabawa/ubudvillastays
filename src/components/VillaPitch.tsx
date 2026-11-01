import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { type Villa, whatsappHref } from "@/lib/site";
import styles from "./VillaPitch.module.css";

export function VillaPitch({ villa }: { villa: Villa }) {
  const pitch = villa.pitch;
  if (!pitch) return null;

  return (
    <section
      id="stay"
      className={styles.section}
      aria-labelledby="pitch-title"
    >
      <Reveal className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.kicker}>{pitch.eyebrow}</p>
          <h2 id="pitch-title" className={styles.title}>
            {pitch.headline}
          </h2>
          <p className={styles.lede}>{pitch.lede}</p>
          <ul className={styles.bullets}>
            {pitch.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.note}>{pitch.ctaNote}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href={whatsappHref(villa.name)}>
              WhatsApp for rates
            </a>
            <Link
              className={styles.secondary}
              href="/guides/ubud-experiences-from-tirta-tawar"
            >
              Tirta Tawar experience guide
            </Link>
          </div>
          <p className={styles.cross}>
            Looking for a smaller courtyard stay with a priced free-activity
            deal?{" "}
            <Link href="/villas/the-hideaway#offer">
              See The Hideaway offer
            </Link>
            .
          </p>
        </div>

        <figure className={styles.accent}>
          <div className={styles.accentMedia}>
            <Image
              src={pitch.accent.src}
              alt={pitch.accent.alt}
              fill
              sizes="(max-width: 900px) 100vw, 360px"
              className={styles.image}
            />
          </div>
          <figcaption>{pitch.accent.caption}</figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
