import Link from "next/link";
import { Reveal } from "./Reveal";
import { guides } from "@/content/guides";
import { getVilla } from "@/lib/site";
import styles from "./GuidesTeaser.module.css";

export function GuidesTeaser() {
  const featuredSlugs = [
    "villa-ubud",
    "private-pool-villa-ubud",
    "tirta-tawar-ubud-villa-stay",
    "ubud-villa-rental-guide",
    "group-villa-ubud",
  ];
  const featured = featuredSlugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter(Boolean) as typeof guides;
  const hideaway = getVilla("the-hideaway");
  const sawah = getVilla("sawah-retreat");

  return (
    <section id="guides" className={styles.section} aria-labelledby="guides-title">
      <Reveal className={styles.inner}>
        <p className={styles.kicker}>Guides</p>
        <h2 id="guides-title">Plan the stay — and the days around it</h2>
        <p className={styles.lede}>
          Villa Ubud and Tirta Tawar stay guides — private pool homes, rental
          prices, and group stays — checkout at /#booking.
        </p>
        <p className={styles.deal}>
          <Link href="/villas/the-hideaway#offer">
            Hideaway from {hideaway?.offer?.priceLabel ?? "Rp 3.9 juta"} / night
          </Link>
          {" · "}
          <Link href="/villas/sawah-retreat#offer">
            Sawah from {sawah?.offer?.priceLabel ?? "Rp 6 juta"} / night
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
