"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { variations } from "./data";
import styles from "./switcher.module.css";

// Floating control for flipping between the design variations.
export default function Switcher() {
  const pathname = usePathname();
  const current = Number(pathname.split("/")[2]) || 0;
  const name = variations.find((v) => v.n === current)?.name ?? "All variations";

  return (
    <nav className={styles.switcher} aria-label="Design variations">
      <Link href="/v" className={styles.all}>{current ? `${current}/${variations.length} ${name}` : name}</Link>
      <ul>
        {variations.map((v) => (
          <li key={v.n}>
            <Link href={`/v/${v.n}`} aria-current={v.n === current ? "page" : undefined} title={v.name}>
              {v.n}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
