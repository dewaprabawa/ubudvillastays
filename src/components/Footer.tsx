import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig, villas, whatsappHref } from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo variant="light" />
          <p>
            Private pool villas in {siteConfig.location.area},{" "}
            {siteConfig.location.city}, {siteConfig.location.region}.
          </p>
          <p className={styles.contact}>
            <a href={whatsappHref()}>WhatsApp +62 817 7572 3663</a>
            <span aria-hidden="true"> · </span>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </div>
        <nav className={styles.links} aria-label="Footer">
          <Link href="/#villas">Villas</Link>
          {villas.map((villa) => (
            <Link key={villa.slug} href={`/villas/${villa.slug}`}>
              {villa.name}
            </Link>
          ))}
          <Link href="/#location">Location</Link>
          <Link href="/#reserve">Reserve</Link>
          <a href={whatsappHref()}>WhatsApp</a>
          <a href={`mailto:${siteConfig.email}`}>Email</a>
        </nav>
      </div>
      <div className={styles.meta}>
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>
          <Link href="/">{siteConfig.url.replace(/^https?:\/\//, "")}</Link>
        </p>
      </div>
    </footer>
  );
}
