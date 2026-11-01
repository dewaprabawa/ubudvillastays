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
            {group.intro ? (
              <p className={styles.groupIntro}>{group.intro}</p>
            ) : null}
            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item.label}>
                  <p className={styles.itemLabel}>{item.label}</p>
                  {item.detail ? (
                    <p className={styles.itemDetail}>{item.detail}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
