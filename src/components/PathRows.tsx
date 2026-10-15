"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import styles from "./PathRows.module.css";

type Path = { title: string; detail: string; href: string; image: string };

// Big link rows; on pointer devices a photo follows the cursor over the hovered row.
export default function PathRows({ paths }: { paths: Path[] }) {
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const list = listRef.current;
    const preview = previewRef.current;
    if (!list || !preview) return;
    const rect = list.getBoundingClientRect();
    preview.style.setProperty("--x", `${e.clientX - rect.left}px`);
    preview.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div ref={listRef} className={styles.wrap} onPointerMove={onMove} onPointerLeave={() => setActive(null)}>
    <ul className={styles.rows}>
      {paths.map((path, i) => (
        <li key={path.title}>
          <Link
            href={path.href}
            className={styles.row}
            onPointerEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
          >
            <span className={styles.level}>Level {i + 1}</span>
            <span className={styles.title}>{path.title}</span>
            <span className={styles.detail}>{path.detail}</span>
            <svg className={styles.arrow} width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
              <path d="M10 30L30 10M14 10h16v16" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
      <div ref={previewRef} className={`${styles.preview} ${active !== null ? styles.previewOn : ""}`} aria-hidden="true">
        {paths.map((path, i) => (
          <Image
            key={path.image}
            src={path.image}
            alt=""
            fill
            sizes="320px"
            className={i === active ? styles.shown : undefined}
          />
        ))}
      </div>
    </div>
  );
}
