import Link from "next/link";
import { Reveal } from "./Reveal";
import { guides } from "@/content/guides";
import styles from "./GuidesTeaser.module.css";

export function GuidesTeaser() {
  const featured = guides.slice(0, 3);

  return (
    <section id="guides" className={styles.section} aria-labelledby="guides-title">
      <Reveal className={styles.inner}>
        <p className={styles.kicker}>Guides</p>
        <h2 id="guides-title">Plan the stay — and the days around it</h2>
        <p className={styles.lede}>
          Experience, neighborhood, and villa guides for Tirta Tawar and
          Ubud—market walks, Kecak, forest days, and how to book the right home.
        </p>
        <p className={styles.deal}>
          <Link href="/villas/the-hideaway#offer">
            The Hideaway from Rp 4.9 juta / night · free activity included
          </Link>
        </p>
        <ul className={styles.list}>
          {featured.map((guide) => (
            <li key={guide.slug}>
              <Link href={`/guides/${guide.slug}`}>
                <span>{guide.eyebrow}</span>
                <strong>{guide.title}</strong>
              </Link>
            </li>
          ))}
        </ul>
        <Link className={styles.all} href="/guides">
          All Ubud guides
        </Link>
      </Reveal>
    </section>
  );
}
