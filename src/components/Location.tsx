import Link from "next/link";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/lib/site";
import styles from "./Location.module.css";

export function Location() {
  const { location } = siteConfig;

  return (
    <section
      id="location"
      className={styles.section}
      aria-labelledby="location-title"
    >
      <Reveal className={styles.inner}>
        <p className={styles.kicker}>Location · Tirta Tawar</p>
        <h2 id="location-title" className={styles.title}>
          Jl. Tirta Tawar, Ubud — culture close, nights quiet.
        </h2>
        <p className={styles.lede}>
          Our private pool villas sit on {location.streetAddress} in{" "}
          {location.city}, {location.region}. The local traditional market is{" "}
          {location.walkToMarket}. Central Ubud is {location.driveToCenter}, or{" "}
          {location.walkToCenter} when you prefer to wander. Kecak performances,
          Monkey Forest, and north-of-Ubud waterfalls stay within easy reach.
        </p>

        <div className={styles.panels}>
          <div className={styles.panel}>
            <h3>Nearby from the villas</h3>
            <ul>
              {location.nearby.map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
          </div>
          <div className={styles.panel}>
            <h3>Why this corner of Bali</h3>
            <p>
              Ubud is Bali&apos;s cultural center—rice terraces, temples, art,
              yoga, and long café afternoons. Tirta Tawar keeps you in that
              rhythm without sitting on the busiest streets: market mornings,
              temple evenings, forest and waterfall days, then a private pool
              to come home to.
            </p>
            <p>
              Whether you book a holiday escape or a longer stay, both villas
              are built for living well—with kitchens, Wi‑Fi, parking, and many
              free extras that make the stay feel complete.
            </p>
            <p className={styles.mapLink}>
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a>
              <span>
                {" "}
                · {location.latitude}, {location.longitude}
              </span>
            </p>
            <p className={styles.mapLink}>
              <Link href="/#experience">See the Ubud experience</Link>
              {" · "}
              <Link href="/#booking">Check availability</Link>
            </p>
          </div>
        </div>

        <p className={styles.geo}>
          Vacation rental villas at {location.placeName} · {location.city},{" "}
          {location.region}, {location.country}
        </p>
      </Reveal>
    </section>
  );
}
