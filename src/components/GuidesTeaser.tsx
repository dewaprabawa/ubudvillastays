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
        <h2 id="guides-title">Why travelers choose Ubud</h2>
        <p className={styles.lede}>
          Destination and villa guides for planning a stay in Tirta Tawar and
          beyond—written to help you book with clarity.
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
