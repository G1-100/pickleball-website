import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { variations } from "./data";

const previews = [
  "/images/gallery/team-palms.jpg",
  "/images/gallery/overhead.jpg",
  "/images/fun.jpg",
  "/images/gallery/bench-cheer.jpg",
  "/images/hero-image.jpg",
  "/images/growth.jpg",
];

export default function Page() {
  return (
    <section className={styles.wrap}>
      <p className="label">Design variations</p>
      <h1 className={styles.title}>Six directions</h1>
      <p className={styles.sub}>Each mixes a bold, sporty base with techy foreground details. Open one, then use the switcher at the bottom to compare.</p>
      <ul className={styles.list}>
        {variations.map((v, i) => (
          <li key={v.n}>
            <Link href={`/v/${v.n}`} className={styles.card}>
              <div className={styles.thumb}>
                <Image src={previews[i]} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />
                <span className={styles.num}>{v.n}</span>
              </div>
              <h2>{v.name}</h2>
              <p>{v.blurb}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
