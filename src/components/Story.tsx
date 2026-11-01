import { Reveal } from "./Reveal";
import { siteConfig } from "@/lib/site";
import styles from "./Story.module.css";

export function Story() {
  return (
    <section id="story" className={styles.section} aria-labelledby="story-title">
      <Reveal className={styles.inner}>
        <p className={styles.kicker}>The story</p>
        <h2 id="story-title" className={styles.title}>
          A private courtyard retreat in the cultural heart of Bali.
        </h2>
        <div className={styles.grid}>
          <p>
            {siteConfig.villaName} blends contemporary comfort with Balinese
            craft—stone walls, warm timber, and a still private pool framed by
            tropical planting. It is designed for unhurried mornings and easy
            evenings after exploring Ubud.
          </p>
          <p>
            You are close enough to walk to galleries, temples, and café streets,
            yet tucked away for real quiet. Daily housekeeping keeps the villa
            fresh; breakfast, scooters, transfers, and tours can be arranged when
            you want them.
          </p>
        </div>
        <ul className={styles.facts} aria-label="Villa facts">
          <li>
            <strong>{siteConfig.facts.guests}</strong>
            <span>guests</span>
          </li>
          <li>
            <strong>{siteConfig.facts.bedrooms}</strong>
            <span>bedrooms</span>
          </li>
          <li>
            <strong>{siteConfig.facts.baths}</strong>
            <span>baths</span>
          </li>
          <li>
            <strong>{siteConfig.facts.rating}</strong>
            <span>{siteConfig.facts.reviews} reviews</span>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
