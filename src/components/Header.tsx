import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig, whatsappHref } from "@/lib/site";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label={siteConfig.name}>
          <Logo variant="light" />
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <a href="#story">Story</a>
          <a href="#spaces">Spaces</a>
          <a href="#amenities">Amenities</a>
          <a href="#location">Location</a>
        </nav>
        <a className={styles.cta} href={whatsappHref()}>
          Inquire
        </a>
      </div>
    </header>
  );
}
