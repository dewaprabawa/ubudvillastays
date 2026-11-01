import { Reveal } from "./Reveal";
import type { Villa } from "@/lib/site";
import styles from "./ThingsToKnow.module.css";

export function ThingsToKnow({ villa }: { villa: Villa }) {
  const block = villa.thingsToKnow;
  if (!block) return null;

  return (
    <section
      id="things-to-know"
      className={styles.section}
      aria-labelledby="things-title"
    >
      <Reveal className={styles.intro}>
        <p className={styles.kicker}>{block.eyebrow}</p>
        <h2 id="things-title" className={styles.title}>
          {block.headline}
        </h2>
        <p className={styles.lede}>{block.lede}</p>
      </Reveal>

      <div className={styles.grid}>
        {block.groups.map((group) => (
          <Reveal key={group.title} className={styles.group} as="article">
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
