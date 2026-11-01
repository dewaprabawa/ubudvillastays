import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { type Villa, villaOfferWhatsApp } from "@/lib/site";
import styles from "./VillaOffer.module.css";

export function VillaOffer({ villa }: { villa: Villa }) {
  const offer = villa.offer;
  if (!offer) return null;

  return (
    <section
      id="offer"
      className={styles.section}
      aria-labelledby="offer-title"
    >
      <Reveal className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.kicker}>{offer.eyebrow}</p>
          <p className={styles.price}>
            <span className={styles.amount}>{offer.priceLabel}</span>
            <span className={styles.per}>{offer.pricePer}</span>
          </p>
          <h2 id="offer-title" className={styles.title}>
            {offer.headline}
          </h2>
          <p className={styles.lede}>{offer.lede}</p>
        </div>

        <p className={styles.activityIntro}>{offer.activityIntro}</p>

        <div className={styles.activities}>
          {offer.activities.map((activity) => (
            <article key={activity.title} className={styles.activity}>
              <div className={styles.media}>
                <Image
                  src={activity.image}
                  alt={activity.imageAlt}
                  fill
                  sizes="(max-width: 800px) 100vw, 40vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.activityCopy}>
                <h3>{activity.title}</h3>
                <p>{activity.copy}</p>
                <a
                  href={activity.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View activity details
                </a>
              </div>
            </article>
          ))}
        </div>

        <figure className={styles.accent}>
          <div className={styles.accentMedia}>
            <Image
              src={offer.accent.src}
              alt={offer.accent.alt}
              fill
              sizes="(max-width: 800px) 100vw, 320px"
              className={styles.image}
            />
          </div>
          <figcaption>{offer.accent.caption}</figcaption>
        </figure>

        <p className={styles.note}>{offer.ctaNote}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={villaOfferWhatsApp(villa)}>
            WhatsApp this offer
          </a>
          <a className={styles.secondary} href="#reserve">
            More booking options
          </a>
        </div>
        <p className={styles.crossLinks}>
          <Link href="/guides/ubud-experiences-from-tirta-tawar">
            Tirta Tawar experience guide
          </Link>
          {" · "}
          <Link href="/villas/sawah-retreat">Sawah Retreat for groups</Link>
          {" · "}
          <a
            href="https://www.sekarbaliactivity.com/tours/ubud-ricefield-cycling-tour"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cycling tour
          </a>
          {" · "}
          <a
            href="https://www.sekarbaliactivity.com/tours/balinese-cooking-class"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cooking class
          </a>
        </p>
      </Reveal>
    </section>
  );
}
