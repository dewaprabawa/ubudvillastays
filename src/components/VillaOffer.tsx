import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { type Villa, villaOfferWhatsApp, villas } from "@/lib/site";
import styles from "./VillaOffer.module.css";

export function VillaOffer({ villa }: { villa: Villa }) {
  const offer = villa.offer;
  if (!offer) return null;

  const other = villas.find((item) => item.slug !== villa.slug);
  const hasSavings = Boolean(
    offer.priceWasLabel && offer.savingsPercent && offer.savingsLabel,
  );

  return (
    <section
      id="offer"
      className={styles.section}
      aria-labelledby="offer-title"
    >
      <Reveal className={styles.inner}>
        <div className={styles.compact}>
          {(offer.badge || offer.savingsLabel) && (
            <div className={styles.badges}>
              {offer.badge ? (
                <span className={styles.badgePopular}>{offer.badge}</span>
              ) : null}
              {offer.savingsLabel ? (
                <span className={styles.badgeSave}>{offer.savingsLabel}</span>
              ) : null}
            </div>
          )}
          <p className={styles.kicker}>{offer.eyebrow}</p>
          <div className={styles.priceBlock}>
            {hasSavings ? (
              <p className={styles.was}>
                <span className={styles.wasLabel}>Was</span>
                <s>{offer.priceWasLabel}</s>
                <span className={styles.wasPer}>/ night</span>
              </p>
            ) : null}
            <p className={styles.price}>
              <span className={styles.amount}>{offer.priceLabel}</span>
              <span className={styles.per}>{offer.pricePer}</span>
            </p>
            <p className={styles.savingsNote}>
              {hasSavings
                ? `${offer.savingsPercent}% off · free activity included`
                : "Free activity choice included"}
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
            {offer.activities.map((activity) => (
              <a
                key={activity.title}
                className={`${styles.activity} ${
                  activity.mostPicked ? styles.activityFeatured : ""
                }`}
                href={activity.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.media}>
                  <Image
                    src={activity.image}
                    alt={activity.imageAlt}
                    fill
                    sizes="96px"
                    className={styles.image}
                  />
                </div>
                <div className={styles.activityCopy}>
                  <div className={styles.choiceMeta}>
                    {activity.mostPicked ? (
                      <span className={styles.activityBadge}>Most picked</span>
                    ) : (
                      <span className={styles.choiceTag}>Free extra</span>
                    )}
                  </div>
                  <h3>{activity.title}</h3>
                  <span className={styles.detailsHint}>View details</span>
                </div>
              </a>
            ))}
          </div>

          <p className={styles.orNote}>
            Tap for details · pick one during your stay
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
          {other ? (
            <>
              {" · "}
              <Link
                href={
                  other.offer
                    ? `/villas/${other.slug}#offer`
                    : `/villas/${other.slug}`
                }
              >
                {other.name}
                {other.offer
                  ? ` · ${other.offer.priceLabel} ${other.offer.pricePer}`
                  : ""}
              </Link>
            </>
          ) : null}
        </p>
      </Reveal>
    </section>
  );
}
