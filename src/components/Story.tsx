import { Reveal } from "./Reveal";
import type { Villa } from "@/lib/site";
import styles from "./Story.module.css";

export function Story({ villa }: { villa: Villa }) {
  return (
    <section id="story" className={styles.section} aria-labelledby="story-title">
      <Reveal className={styles.inner}>
        <p className={styles.kicker}>The story</p>
        <h2 id="story-title" className={styles.title}>
          {villa.storyTitle}
        </h2>
        <div className={styles.grid}>
          <p>{villa.story[0]}</p>
          <p>{villa.story[1]}</p>
        </div>
        <ul className={styles.facts} aria-label="Villa facts">
          <li>
            <strong>{villa.facts.guests}</strong>
            <span>guests</span>
          </li>
          <li>
            <strong>{villa.facts.bedrooms}</strong>
            <span>bedrooms</span>
          </li>
          <li>
            <strong>{villa.facts.baths}</strong>
            <span>baths</span>
          </li>
          <li>
            <strong>{villa.facts.rating}</strong>
            <span>{villa.facts.reviews} reviews</span>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
