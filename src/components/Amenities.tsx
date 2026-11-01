import Image from "next/image";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/lib/site";
import styles from "./Amenities.module.css";

export function Amenities() {
  return (
    <section
      id="amenities"
      className={styles.section}
      aria-labelledby="amenities-title"
    >
      <div className={styles.layout}>
        <Reveal className={styles.copy}>
          <p className={styles.kicker}>Amenities</p>
          <h2 id="amenities-title" className={styles.title}>
            Everything you need for an easy Ubud stay.
          </h2>
          <p className={styles.lede}>
            Cook at home, cool off in the pool, and stay connected—then add
            breakfast or a scooter when the day asks for it.
          </p>
          <ul className={styles.list}>
            {siteConfig.amenities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.extras}>
            Available on request: {siteConfig.extras.join(" · ")}.
          </p>
        </Reveal>

        <Reveal className={styles.aside}>
          <div className={styles.photo}>
            <Image
              src="/images/villa/space-05.jpg"
              alt="Fresh tropical breakfast bowl with garden leaves behind"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className={styles.image}
            />
          </div>
          <div className={styles.photoSecondary}>
            <Image
              src="/images/villa/space-08.jpg"
              alt="Bedroom with canopy bed opening to an outdoor garden bath"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className={styles.image}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
