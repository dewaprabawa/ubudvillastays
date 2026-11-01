import { Reveal } from "./Reveal";
import { siteConfig } from "@/lib/site";
import styles from "./Reviews.module.css";

const highlights = [
  { label: "Cleanliness", score: "5.0" },
  { label: "Check-in", score: "5.0" },
  { label: "Communication", score: "5.0" },
  { label: "Location", score: "4.9" },
  { label: "Value", score: "5.0" },
] as const;

export function Reviews() {
  return (
    <section className={styles.section} aria-labelledby="reviews-title">
      <Reveal className={styles.inner}>
        <p className={styles.kicker}>Guest favorite</p>
        <h2 id="reviews-title" className={styles.title}>
          Rated {siteConfig.facts.rating} from {siteConfig.facts.reviews}{" "}
          stays.
        </h2>
        <p className={styles.lede}>
          Guests often mention hospitality, the private pool, cleanliness, and
          how walkable the villa is to Ubud&apos;s everyday favorites.
        </p>
        <ul className={styles.scores}>
          {highlights.map((item) => (
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
