import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { guides } from "@/content/guides";
import { siteConfig } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Ubud Travel & Villa Guides",
  description:
    "Villa Ubud guides for Tirta Tawar—private pool villa stays, rentals from Rp 3.9jt / Rp 6jt, group homes up to 12, experiences, and booking via /#booking.",
  keywords: [
    "villa ubud",
    "private pool villa ubud",
    "tirta tawar ubud villa",
    "ubud villa rental",
    "group villa ubud",
  ],
  alternates: { canonical: "/guides" },
  openGraph: {
    title: `Ubud Guides · ${siteConfig.name}`,
    description:
      "Commercial GEO guides to villa Ubud stays on Jl. Tirta Tawar—prices, private pools, and how to book.",
    url: `${siteConfig.url}/guides`,
  },
};

export default function GuidesIndexPage() {
  return (
    <>
      <Header tone="dark" />
      <main id="main" className={styles.page}>
        <Reveal className={styles.intro}>
          <p className={styles.kicker}>Guides</p>
          <h1>Ubud destination & villa guides</h1>
          <p>
            Practical GEO reading for villa Ubud searches—private pool homes on
            Jl. Tirta Tawar, rental prices, group stays, and neighborhood
            planning. Checkout at /#booking.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {guides.map((guide) => (
            <Reveal key={guide.slug} className={styles.card} as="article">
              <Link href={`/guides/${guide.slug}`} className={styles.link}>
                <div className={styles.media}>
                  <Image
                    src={guide.heroImage}
                    alt=""
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                    className={styles.image}
                  />
                </div>
                <p className={styles.meta}>{guide.eyebrow}</p>
                <h2>{guide.title}</h2>
                <p>{guide.description}</p>
                <span className={styles.cta}>Read guide</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
