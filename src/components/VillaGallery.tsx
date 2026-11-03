import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import type { Villa } from "@/lib/site";
import styles from "./VillaGallery.module.css";

const PREVIEW_COUNT = 6;

export function VillaGallery({ villa }: { villa: Villa }) {
  if (!villa.gallery?.length) return null;

  const preview = villa.gallery.slice(0, PREVIEW_COUNT);
  const remaining = Math.max(villa.gallery.length - PREVIEW_COUNT, 0);
  const galleryHref = `/villas/${villa.slug}/gallery`;

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
          Living spaces, kitchen, dining, gardens, baths, and more — a compact
          look at the villa, with the full tour one tap away.
        </p>
      </Reveal>

      <Reveal className={styles.mosaicWrap}>
        <div
          className={styles.mosaic}
          aria-label={`${villa.name} photo tour preview`}
        >
          {preview.map((shot, index) => {
            const isLast = index === preview.length - 1 && remaining > 0;
            return (
              <Link
                key={shot.src}
                href={galleryHref}
                className={`${styles.tile} ${index === 0 ? styles.heroTile : ""}`}
                aria-label={
                  isLast
                    ? `Open full photo tour — ${remaining} more photos`
                    : shot.alt
                }
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  sizes={
                    index === 0
                      ? "(max-width: 700px) 100vw, 58vw"
                      : "(max-width: 700px) 50vw, 21vw"
                  }
                  className={styles.image}
                />
                {shot.caption && index === 0 ? (
                  <span className={styles.tileCaption}>{shot.caption}</span>
                ) : null}
                {isLast ? (
                  <span className={styles.moreOverlay} aria-hidden="true">
                    <span className={styles.moreCount}>+{remaining}</span>
                    <span className={styles.moreLabel}>More</span>
                  </span>
                ) : null}
              </Link>
            );
          })}
        </div>

        <div className={styles.actions}>
          <Link href={galleryHref} className={styles.moreButton}>
            More photos
            <span className={styles.moreMeta}>
              {villa.gallery.length} in full tour
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
