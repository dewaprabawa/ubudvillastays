import Image from "next/image";
import Link from "next/link";
import { type Guide } from "@/content/guides";
import { BookButton } from "@/components/BookButton";
import {
  bookingCtaCopy,
  bookingFaq,
  bookingPath,
  bookingUrl,
  getVilla,
  siteConfig,
} from "@/lib/site";
import styles from "./GuideArticle.module.css";

export function GuideArticle({ guide }: { guide: Guide }) {
  const related = guide.relatedVillaSlugs
    .map((slug) => getVilla(slug))
    .filter(Boolean);

  const faqs = [...(guide.faqs ?? [])];
  if (!faqs.some((item) => /book/i.test(item.question))) {
    faqs.push({
      question: bookingFaq.question,
      answer: bookingFaq.answer,
    });
  }

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
            <li aria-hidden="true">/</li>
            <li>
              <Link href={bookingPath}>Book</Link>
            </li>
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

        {guide.keyTakeaways?.length ? (
          <section className={styles.takeaways} aria-labelledby="takeaways-title">
            <h2 id="takeaways-title">Key takeaways</h2>
            <ul>
              {guide.keyTakeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
              <li>
                Book dates on our villa checkout form:{" "}
                <Link href={bookingPath}>{bookingUrl}</Link>
              </li>
            </ul>
          </section>
        ) : (
          <section className={styles.takeaways} aria-labelledby="takeaways-title">
            <h2 id="takeaways-title">Key takeaways</h2>
            <ul>
              <li>
                Book The Hideaway or Sawah Retreat via{" "}
                <Link href={bookingPath}>{bookingUrl}</Link>
              </li>
            </ul>
          </section>
        )}

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

        {guide.howTo ? (
          <section className={styles.section} aria-labelledby="howto-title">
            <h2 id="howto-title">{guide.howTo.name}</h2>
            <p>{guide.howTo.description}</p>
            <ol>
              {guide.howTo.steps.map((step, index) => (
                <li key={step.name} id={`howto-step-${index + 1}`}>
                  <strong>{step.name}.</strong> {step.text}
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        {faqs.length ? (
          <section className={styles.faq} aria-labelledby="faq-title">
            <h2 id="faq-title">FAQ</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>
        ) : null}

        <section className={styles.ctaBand} aria-labelledby="guide-cta">
          <h2 id="guide-cta">Villa checkout — book your dates</h2>
          <p>{bookingCtaCopy}</p>
          <p>
            Booking page:{" "}
            <Link href={bookingPath}>{bookingUrl}</Link>
          </p>
          <div className={styles.actions}>
            <BookButton
              className={styles.primary}
              label="Check availability"
            />
            <Link className={styles.secondary} href={bookingPath}>
              Open booking form
            </Link>
            <Link className={styles.secondary} href="/villas/the-hideaway#offer">
              Hideaway offer
            </Link>
            <Link className={styles.secondary} href="/villas/sawah-retreat#offer">
              Sawah from Rp 7 juta
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
                <div key={villa.slug} className={styles.relatedCard}>
                  <Link href={`/villas/${villa.slug}`}>
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
                  <p>
                    <Link href={bookingPath}>Book dates → checkout form</Link>
                  </p>
                </div>
              ) : null,
            )}
          </div>
          <p>
            Or go straight to{" "}
            <Link href={bookingPath}>{bookingUrl}</Link>
          </p>
        </section>
      ) : null}
    </article>
  );
}
