import Image from "next/image";
import styles from "./Logo.module.css";

type LogoProps = {
  variant?: "light" | "dark";
  size?: "sm" | "lg";
};

export function Logo({ variant = "dark", size = "sm" }: LogoProps) {
  const markPx = size === "lg" ? 48 : 36;

  return (
    <span className={`${styles.logo} ${styles[variant]} ${styles[size]}`}>
      <Image
        className={styles.mark}
        src="/brand/logo-mark.png"
        alt=""
        width={markPx}
        height={markPx}
        priority
      />
      <span className={styles.wordmark}>
        Ubud Villa <em>Stays</em>
      </span>
    </span>
  );
}
