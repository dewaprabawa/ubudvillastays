import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig, whatsappHref } from "@/lib/site";
import styles from "./Header.module.css";

type HeaderProps = {
  tone?: "light" | "dark";
  inquireVillaName?: string;
  inquireHref?: string;
};

export function Header({
  tone = "light",
  inquireVillaName,
  inquireHref,
}: HeaderProps) {
  return (
    <header className={`${styles.header} ${styles[tone]}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label={siteConfig.name}>
          <Logo variant={tone === "light" ? "light" : "dark"} />
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <Link href="/#villas">Villas</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/villas/the-hideaway">Hideaway</Link>
          <Link href="/villas/sawah-retreat">Sawah</Link>
          <Link href="/#location">Location</Link>
        </nav>
        <a
          className={styles.cta}
          href={inquireHref ?? whatsappHref(inquireVillaName)}
        >
          Inquire
        </a>
      </div>
    </header>
  );
}
