import styles from "./Logo.module.css";

type LogoProps = {
  variant?: "light" | "dark";
  size?: "sm" | "lg";
};

export function Logo({ variant = "dark", size = "sm" }: LogoProps) {
  return (
    <span className={`${styles.logo} ${styles[variant]} ${styles[size]}`}>
      <svg
        className={styles.mark}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="14" className={styles.markBg} />
        <path
          d="M32 12c-1.2 6.8-4.8 11.6-10.8 14.4 6.2.6 10.8 3.8 13.6 9.6 2.8-5.8 7.4-9 13.6-9.6C42.4 23.6 38.8 18.8 32 12Z"
          className={styles.leaf}
        />
        <ellipse cx="32" cy="44" rx="14" ry="6" className={styles.pool} />
        <ellipse
          cx="32"
          cy="43"
          rx="8"
          ry="2.4"
          className={styles.poolShine}
        />
        <path
          d="M32 28v18"
          className={styles.stem}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className={styles.wordmark}>
        Ubud Villa <em>Stays</em>
      </span>
    </span>
  );
}
