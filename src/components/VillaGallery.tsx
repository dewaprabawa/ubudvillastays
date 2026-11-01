import Image from "next/image";
import { Reveal } from "./Reveal";
import type { Villa } from "@/lib/site";
import styles from "./VillaGallery.module.css";

export function VillaGallery({ villa }: { villa: Villa }) {
  if (!villa.gallery?.length) return null;

  return (
    <section
      id="gallery"
      className={styles.section}
      aria-labelledby="gallery-title"
    >
      <Reveal className={styles.intro}>
        <p className={styles.kicker}>Photo tour</p>
        <h2 id="gallery-title" className={styles.title}>
          Walk through {villa.shortName}.
        </h2>
        <p className={styles.lede}>
          Living spaces, kitchen, dining, gardens, baths, and more — pulled from
          the full villa photo tour.
        </p>
      </Reveal>

      <div className={styles.grid} aria-label={`${villa.name} photo tour`}>
        {villa.gallery.map((shot) => (
          <Reveal key={shot.src} className={styles.item} as="article">
            <figure className={styles.figure}>
              <div className={styles.media}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.image}
                />
              </div>
              {shot.caption ? (
                <figcaption className={styles.caption}>{shot.caption}</figcaption>
              ) : null}
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
