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
        <p className={styles.kicker}>Location</p>
        <h2 id="location-title" className={styles.title}>
          Tirta Tawar, Ubud — close to culture, open to quiet.
        </h2>
        <p className={styles.lede}>
          Our villas are on {location.streetAddress} in {location.city},{" "}
          {location.region}. Central Ubud is {location.driveToCenter}, or{" "}
          {location.walkToCenter} when you prefer to wander.
        </p>

        <div className={styles.panels}>
          <div className={styles.panel}>
            <h3>Nearby</h3>
            <ul>
              {location.nearby.map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
          </div>
          <div className={styles.panel}>
            <h3>Why this corner of Bali</h3>
            <p>
              Ubud is Bali&apos;s cultural center—rice terraces, temples, art
              galleries, yoga, and long café afternoons. Our villas keep you near
              that rhythm without sitting on the busiest streets.
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
