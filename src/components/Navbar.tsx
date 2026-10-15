"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${isOpen ? styles.menuOpen : ""}`}>
      <nav className={styles.inner} aria-label="Main">
        <Link href="/" className={styles.brand} aria-label="Trojan Pickleball Club home">
          <span className={styles.logo}>
            <Image src="/images/club_logo.jpg" alt="" width={44} height={44} priority />
          </span>
          <span className={styles.wordmark}>
            Trojan<br />Pickleball
          </span>
        </Link>

        <div className={styles.links}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/join" className={styles.cta} aria-current={pathname === "/join" ? "page" : undefined}>
            Join us
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
        </button>
      </nav>

      <div id="mobile-menu" className={styles.mobileMenu} hidden={!isOpen}>
        <div className={styles.mobileCourt} aria-hidden="true" />
        <ul className={styles.mobileLinks}>
          {[...links, { href: "/join", label: "Join us" }].map((link, i) => (
            <li key={link.href} style={{ "--i": i } as React.CSSProperties}>
              <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
