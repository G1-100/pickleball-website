"use client";
import { useEffect, useState } from "react";
import styles from "./NotificationBanner.module.css";

export default function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(false);

  // Slide in shortly after load so it doesn't compete with the hero animation.
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 2400);
    return () => clearTimeout(t);
  }, []);

  if (!isVisible) return null;

  return (
    <aside className={styles.banner} aria-label="Club links">
      <p className={styles.message}>All our socials and sign-ups live on Linktree.</p>
      <a
        href="https://linktr.ee/trojan_pickleballl"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkButton}
      >
        Open Linktree
      </a>
      <button onClick={() => setIsVisible(false)} className={styles.closeButton} aria-label="Dismiss">
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
    </aside>
  );
}
