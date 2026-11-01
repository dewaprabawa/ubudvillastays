import { Reveal } from "./Reveal";
import type { Villa } from "@/lib/site";
import styles from "./Reviews.module.css";

export function Reviews({ villa }: { villa: Villa }) {
  return (
    <section className={styles.section} aria-labelledby="reviews-title">
      <Reveal className={styles.inner}>
        <p className={styles.kicker}>Guest favorite</p>
        <h2 id="reviews-title" className={styles.title}>
          Rated {villa.facts.rating} from {villa.facts.reviews} stays.
        </h2>
        <p className={styles.lede}>
          Guests often mention hospitality, the private pool, and how close the
          villa sits to everyday Ubud favorites.
        </p>
        <ul className={styles.scores}>
          {villa.reviewScores.map((item) => (
            <li key={item.label}>
              <strong>{item.score}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
