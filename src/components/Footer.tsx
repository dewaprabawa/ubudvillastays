import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig, whatsappHref } from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo variant="light" />
          <p>
            {siteConfig.villaName} · private pool villa in{" "}
            {siteConfig.location.city}, {siteConfig.location.region}.
          </p>
        </div>
        <nav className={styles.links} aria-label="Footer">
          <a href="#story">Story</a>
          <a href="#spaces">Spaces</a>
          <a href="#amenities">Amenities</a>
          <a href="#location">Location</a>
          <a href="#reserve">Reserve</a>
          <a href={whatsappHref()}>WhatsApp</a>
          <a
            href={siteConfig.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Airbnb
          </a>
        </nav>
      </div>
      <div className={styles.meta}>
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>
          <Link href="/">ubudvillastays.com</Link>
          {siteConfig.whatsappTodo
            ? " · WhatsApp number pending (TODO)"
            : null}
        </p>
      </div>
    </footer>
  );
}
