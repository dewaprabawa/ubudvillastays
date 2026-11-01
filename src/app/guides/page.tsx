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
    "Editorial guides to Ubud, Bali—Tirta Tawar rice-field walks, shopping and boutiques, experiences, where to stay, and villa planning—with private pool villa recommendations on Jl. Tirta Tawar.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: `Ubud Guides · ${siteConfig.name}`,
    description:
      "Why Ubud is a top Bali destination, best villa areas, and how to book the right private pool home.",
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
            Practical, GEO-aware reading for travelers researching Ubud villa
            rentals, neighborhoods, and wellness stays in Bali.
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
