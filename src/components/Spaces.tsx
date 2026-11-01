import Image from "next/image";
import { Reveal } from "./Reveal";
import styles from "./Spaces.module.css";

const spaces = [
  {
    src: "/images/villa/space-07.jpg",
    alt: "Canopy bedroom with white netting and warm timber finishes",
    title: "Two calm bedrooms",
    copy: "King beds, soft netting, and garden light—restful spaces after temple walks and long lunches.",
  },
  {
    src: "/images/villa/hero.jpg",
    alt: "Private plunge pool and loungers in a tropical courtyard",
    title: "Pool & courtyard",
    copy: "Your own plunge pool, sun loungers, and a walled garden for quiet swims at dusk.",
  },
  {
    src: "/images/villa/space-01.jpg",
    alt: "Wooden desk facing tropical garden windows",
    title: "Living & work nooks",
    copy: "A generous living area and a garden-facing desk when you need a few focused hours.",
  },
  {
    src: "/images/villa/space-02.jpg",
    alt: "Outdoor rain shower with patterned tiles and volcanic stone",
    title: "Outdoor shower ritual",
    copy: "Patterned tiles, volcanic stone, and a rain shower open to the tropics.",
  },
] as const;

export function Spaces() {
  return (
    <section id="spaces" className={styles.section} aria-labelledby="spaces-title">
      <Reveal className={styles.intro}>
        <p className={styles.kicker}>Spaces</p>
        <h2 id="spaces-title" className={styles.title}>
          Rooms that open to green.
        </h2>
        <p className={styles.lede}>
          Sleep, swim, cook, and linger—each space is oriented toward privacy and
          the garden.
        </p>
      </Reveal>

      <div className={styles.list}>
        {spaces.map((space, index) => (
          <Reveal key={space.title} className={styles.item} as="article">
            <div
              className={`${styles.media} ${index % 2 === 1 ? styles.mediaTall : ""}`}
            >
              <Image
                src={space.src}
                alt={space.alt}
                fill
                sizes="(max-width: 860px) 100vw, 55vw"
                className={styles.image}
              />
            </div>
            <div className={styles.copy}>
              <h3>{space.title}</h3>
              <p>{space.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
