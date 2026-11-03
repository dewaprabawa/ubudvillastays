import Link from "next/link";
import { Reveal } from "./Reveal";
import { guides } from "@/content/guides";
import styles from "./GuidesTeaser.module.css";

export function GuidesTeaser() {
  const featuredSlugs = [
    "balinese-cooking-class-ubud-villa-stay",
    "ubud-3-day-itinerary-tirta-tawar",
    "ubud-experiences-from-tirta-tawar",
  ];
  const featured = featuredSlugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter(Boolean) as typeof guides;

  return (
    <section id="guides" className={styles.section} aria-labelledby="guides-title">
      <Reveal className={styles.inner}>
        <p className={styles.kicker}>Guides</p>
        <h2 id="guides-title">Plan the stay — and the days around it</h2>
        <p className={styles.lede}>
          Free rice-terrace cooking class with your villa stay, plus itinerary
          and Tirta Tawar experience guides — checkout at /#booking.
        </p>
        <p className={styles.deal}>
          <Link href="/villas/the-hideaway#offer">
            Hideaway from Rp 4.9 juta / night
          </Link>
          {" · "}
          <Link href="/villas/sawah-retreat#offer">
            Sawah from Rp 7 juta / night
          </Link>
          {" — free cooking class or free cycling"}
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
