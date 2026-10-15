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
  { href: "/join", label: "Join" },
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

  // Variation 6 draws its own athlete-site style menu.
  if (pathname.startsWith("/v/6")) return null;

  return (
    <header className={`${styles.navbar} ${scrolled || isOpen ? styles.solid : ""}`}>
      <nav className={styles.inner} aria-label="Main">
        <Link href="/" className={styles.brand} aria-label="Trojan Pickleball Club home">
          <Image src="/images/club_logo.jpg" alt="" width={28} height={28} className={styles.logo} priority />
          <span>Trojan Pickleball</span>
        </Link>

        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.link} aria-current={pathname === link.href ? "page" : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.toggle} ${isOpen ? styles.toggleOpen : ""}`}
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <div id="mobile-menu" className={styles.mobileMenu} hidden={!isOpen}>
        <ul>
          {links.map((link, i) => (
            <li key={link.href} style={{ "--i": i } as React.CSSProperties}>
              <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="label">USC · Los Angeles</p>
      </div>
    </header>
  );
}
