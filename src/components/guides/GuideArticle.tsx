import Image from "next/image";
import Link from "next/link";
import { type Guide } from "@/content/guides";
import { getVilla, siteConfig, whatsappHref } from "@/lib/site";
import styles from "./GuideArticle.module.css";

export function GuideArticle({ guide }: { guide: Guide }) {
  const related = guide.relatedVillaSlugs
    .map((slug) => getVilla(slug))
    .filter(Boolean);

  return (
    <article className={styles.article}>
      <header className={styles.hero}>
        <div className={styles.media}>
          <Image
            src={guide.heroImage}
            alt={guide.title}
            fill
            priority
            sizes="100vw"
            className={styles.image}
          />
          <div className={styles.shade} aria-hidden="true" />
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{guide.eyebrow}</p>
          <h1>{guide.title}</h1>
          <p className={styles.meta}>
            {guide.readingMinutes} min read · Updated {guide.dateModified} ·{" "}
            {siteConfig.location.city}, {siteConfig.location.region}
          </p>
        </div>
      </header>

      <div className={styles.body}>
        <nav aria-label="Breadcrumb">
          <ol className={styles.breadcrumbs}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/guides">Guides</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{guide.title}</li>
          </ol>
        </nav>

        {guide.gallery?.length ? (
          <div className={styles.gallery} aria-label="Experience photos">
            {guide.gallery.map((figure) => (
              <figure key={figure.src} className={styles.galleryItem}>
                <div className={styles.galleryMedia}>
                  <Image
                    src={figure.src}
                    alt={figure.alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {figure.caption ? (
                  <figcaption>{figure.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        ) : null}

        {guide.sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            {section.image ? (
              <figure className={styles.inlineFigure}>
                <div className={styles.inlineMedia}>
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 760px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {section.image.caption ? (
                  <figcaption>{section.image.caption}</figcaption>
                ) : null}
              </figure>
            ) : null}
            {section.bullets ? (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        {guide.faqs?.length ? (
          <section className={styles.faq} aria-labelledby="faq-title">
            <h2 id="faq-title">FAQ</h2>
            {guide.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>
        ) : null}

        <section className={styles.ctaBand} aria-labelledby="guide-cta">
          <h2 id="guide-cta">Stay in Tirta Tawar, Ubud</h2>
          <p>
            Inquire about The Hideaway (2BR) or Sawah Retreat (6BR)—private pool
            villas minutes from central Ubud.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href={whatsappHref()}>
              WhatsApp inquiry
            </a>
            <Link className={styles.secondary} href="/#villas">
              View villas
            </Link>
          </div>
        </section>
      </div>

      {related.length ? (
        <section className={styles.related} aria-labelledby="related-villas">
          <h2 id="related-villas">Related villas</h2>
          <div className={styles.relatedGrid}>
            {related.map((villa) =>
              villa ? (
                <Link
                  key={villa.slug}
                  href={`/villas/${villa.slug}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedMedia}>
                    <Image
                      src={villa.heroImage}
                      alt={villa.name}
                      fill
                      sizes="(max-width: 800px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h3>{villa.name}</h3>
                  <p>{villa.tagline}</p>
                </Link>
              ) : null,
            )}
          </div>
        </section>
      ) : null}
    </article>
  );
}
