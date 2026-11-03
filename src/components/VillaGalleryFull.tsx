import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import type { Villa } from "@/lib/site";
import styles from "./VillaGalleryFull.module.css";

export function VillaGalleryFull({ villa }: { villa: Villa }) {
  if (!villa.gallery?.length) return null;

  return (
    <section
      className={styles.section}
      aria-labelledby="full-gallery-title"
    >
      <Reveal className={styles.intro}>
        <p className={styles.kicker}>Full photo tour</p>
        <h1 id="full-gallery-title" className={styles.title}>
          {villa.shortName} — every room & outdoor space
        </h1>
        <p className={styles.lede}>
          Living, kitchen, dining, gardens, baths, and bedrooms from the villa
          photo tour ({villa.gallery.length} photos).
        </p>
        <p className={styles.backRow}>
          <Link href={`/villas/${villa.slug}`} className={styles.back}>
            ← Back to {villa.shortName}
          </Link>
          <Link href={`/#booking`} className={styles.book}>
            Check availability
          </Link>
        </p>
      </Reveal>

      <div className={styles.grid} aria-label={`${villa.name} full photo tour`}>
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

      <div className={styles.footerCta}>
        <Link href={`/villas/${villa.slug}#booking`} className={styles.bookWide}>
          Book {villa.shortName}
        </Link>
        <Link href={`/villas/${villa.slug}`} className={styles.backQuiet}>
          Return to villa page
        </Link>
      </div>
    </section>
  );
}
