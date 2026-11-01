import Image from "next/image";
import { Reveal } from "./Reveal";
import type { Villa } from "@/lib/site";
import styles from "./Amenities.module.css";

export function Amenities({ villa }: { villa: Villa }) {
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
            Comforts for daily life—and extras on request when the trip asks for
            more.
          </p>
          <ul className={styles.list}>
            {villa.amenities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.extras}>
            Available on request: {villa.extras.join(" · ")}.
          </p>
        </Reveal>

        <Reveal className={styles.aside}>
          <div className={styles.photo}>
            <Image
              src={villa.amenityImage}
              alt={`${villa.name} amenity detail`}
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className={styles.image}
            />
          </div>
          <div className={styles.photoSecondary}>
            <Image
              src={villa.amenityImageSecondary}
              alt={`${villa.name} interior or garden detail`}
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
