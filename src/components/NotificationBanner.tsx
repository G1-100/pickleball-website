"use client";
import { useEffect, useState } from "react";
import styles from "./NotificationBanner.module.css";

export default function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(false);

  // Appear once the visitor scrolls past the first screen, so it never covers the hero.
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setIsVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside className={styles.banner} aria-label="Club links">
      <a href="https://linktr.ee/trojan_pickleballl" target="_blank" rel="noopener noreferrer" className={styles.link}>
        <span className={styles.dot} aria-hidden="true" />
        All socials and sign-ups on Linktree
      </a>
      <button onClick={() => setIsVisible(false)} className={styles.close} aria-label="Dismiss">
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </button>
    </aside>
  );
}
