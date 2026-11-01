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
        <div className={styles.compact}>
          <div className={styles.badges}>
            <span className={styles.badgePopular}>{offer.badge}</span>
            <span className={styles.badgeSave}>{offer.savingsLabel}</span>
          </div>
          <p className={styles.kicker}>{offer.eyebrow}</p>
          <div className={styles.priceBlock}>
            <p className={styles.was}>
              <span className={styles.wasLabel}>Was</span>
              <s>{offer.priceWasLabel}</s>
              <span className={styles.wasPer}>/ night</span>
            </p>
            <p className={styles.price}>
              <span className={styles.amount}>{offer.priceLabel}</span>
              <span className={styles.per}>{offer.pricePer}</span>
            </p>
            <p className={styles.savingsNote}>
              {offer.savingsPercent}% off · free activity included
            </p>
          </div>
          <h2 id="offer-title" className={styles.title}>
            {offer.headline}
          </h2>
          <p className={styles.lede}>{offer.lede}</p>
        </div>

        <div className={styles.choicePanel} aria-labelledby="choice-title">
          <div className={styles.choiceHeader}>
            <p className={styles.choiceKicker}>Included free</p>
            <h3 id="choice-title" className={styles.choiceTitle}>
              {offer.activityIntro}
            </h3>
            <p className={styles.timing}>{offer.activityTiming}</p>
          </div>

          <div className={styles.activities}>
            {offer.activities.map((activity, index) => (
              <article
                key={activity.title}
                className={`${styles.activity} ${
                  activity.mostPicked ? styles.activityFeatured : ""
                }`}
              >
                <div className={styles.choiceMeta}>
                  <span className={styles.choiceTag}>
                    Free choice {index + 1}
                  </span>
                  {activity.mostPicked ? (
                    <span className={styles.activityBadge}>Most picked</span>
                  ) : null}
                </div>
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
                  <p className={styles.pickWhen}>
                    Pick anytime during your stay period
                  </p>
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

          <p className={styles.orNote} aria-hidden="true">
            Choose one · cycling or cooking
          </p>
        </div>

        <figure className={styles.accent}>
          <div className={styles.accentMedia}>
            <Image
              src={offer.accent.src}
              alt={offer.accent.alt}
              fill
              sizes="(max-width: 800px) 100vw, 280px"
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
