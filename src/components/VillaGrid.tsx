import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { villas } from "@/lib/site";
import styles from "./VillaGrid.module.css";

export function VillaGrid() {
  return (
    <section id="villas" className={styles.section} aria-labelledby="villas-title">
      <Reveal className={styles.intro}>
        <p className={styles.kicker}>The villas</p>
        <h2 id="villas-title" className={styles.title}>
          Choose your scale of stay.
        </h2>
        <p className={styles.lede}>
          Same Jl. Tirta Tawar base—two private pool villas for holidays,
          gatherings, and longer Ubud stays. Market, temples, Monkey Forest,
          and waterfalls nearby.
        </p>
      </Reveal>

      <div className={styles.grid}>
        {villas.map((villa) => (
          <Reveal key={villa.slug} className={styles.card} as="article">
            <Link
              href={
                villa.offer
                  ? `/villas/${villa.slug}#offer`
                  : villa.pitch
                    ? `/villas/${villa.slug}#stay`
                    : `/villas/${villa.slug}`
              }
              className={styles.link}
            >
              <div className={styles.media}>
                <Image
                  src={villa.heroImage}
                  alt={`${villa.name} — ${villa.eyebrow}`}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.copy}>
                <p className={styles.meta}>{villa.eyebrow}</p>
                <h3>{villa.name}</h3>
                <p>{villa.tagline}</p>
                <p className={styles.facts}>
                  Up to {villa.facts.guests} guests · {villa.facts.bedrooms} BR ·{" "}
                  {villa.facts.rating}★ ({villa.facts.reviews})
                </p>
                {villa.offer ? (
                  <p className={styles.offer}>
                    From {villa.offer.priceLabel} {villa.offer.pricePer} · free
                    activity included
                  </p>
                ) : villa.pitch ? (
                  <p className={styles.offer}>
                    Group / retreat villa · inquire for rates
                  </p>
                ) : null}
                <span className={styles.cta}>
                  {villa.offer
                    ? "View offer & villa"
                    : villa.pitch
                      ? "View group villa"
                      : "View villa"}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
