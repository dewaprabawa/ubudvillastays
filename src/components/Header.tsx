import Link from "next/link";
import { BookButton } from "./BookButton";
import { Logo } from "./Logo";
import { MobileBookingBar } from "./MobileBookingBar";
import { siteConfig, type Villa } from "@/lib/site";
import styles from "./Header.module.css";

type HeaderProps = {
  tone?: "light" | "dark";
  villa?: Villa;
};

export function Header({ tone = "light", villa }: HeaderProps) {
  return (
    <>
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
          <BookButton villa={villa} className={styles.cta} label="Book" />
        </div>
      </header>
      <MobileBookingBar villa={villa} />
    </>
  );
}
