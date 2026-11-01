import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { type Villa, villas } from "@/lib/site";
import styles from "./SisterVillas.module.css";

export function SisterVillas({ current }: { current: Villa }) {
  const others = villas.filter((villa) => villa.slug !== current.slug);
  if (!others.length) return null;

  return (
    <section className={styles.section} aria-labelledby="sister-title">
      <Reveal className={styles.inner}>
        <p className={styles.kicker}>Also on Jl. Tirta Tawar</p>
        <h2 id="sister-title">Explore the other villa</h2>
        <p className={styles.lede}>
          Same Ubud base, different scale—both with private pools, market and
          temple access, and room for a real stay.
        </p>
        <div className={styles.grid}>
          {others.map((villa) => (
            <Link
              key={villa.slug}
              href={
                villa.offer
                  ? `/villas/${villa.slug}#offer`
                  : `/villas/${villa.slug}`
              }
              className={styles.card}
            >
              <div className={styles.media}>
                <Image
                  src={villa.heroImage}
                  alt={villa.name}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className={styles.image}
                />
              </div>
              <p className={styles.meta}>{villa.eyebrow}</p>
              <h3>{villa.name}</h3>
              <p>{villa.tagline}</p>
              <span className={styles.cta}>
                {villa.offer
                  ? `View ${villa.shortName} offer`
                  : `View ${villa.shortName}`}
              </span>
            </Link>
          ))}
          <Link href="/guides/ubud-experiences-from-tirta-tawar" className={styles.guides}>
            <h3>Ubud experiences</h3>
            <p>
              Market, Kecak, Monkey Forest, waterfalls—and how Tirta Tawar puts
              them within reach.
            </p>
            <span className={styles.cta}>Read experience guide</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
