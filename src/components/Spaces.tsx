import Image from "next/image";
import { Reveal } from "./Reveal";
import type { Villa } from "@/lib/site";
import styles from "./Spaces.module.css";

export function Spaces({ villa }: { villa: Villa }) {
  return (
    <section id="spaces" className={styles.section} aria-labelledby="spaces-title">
      <Reveal className={styles.intro}>
        <p className={styles.kicker}>Spaces</p>
        <h2 id="spaces-title" className={styles.title}>
          Inside {villa.shortName}.
        </h2>
        <p className={styles.lede}>{villa.idealFor}.</p>
      </Reveal>

      <div className={styles.list}>
        {villa.spaces.map((space, index) => (
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
