"use client"; 
import Link from "next/link";
import { useState } from 'react';
import styles from './Navbar.module.css';


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Desktop menu always visible */}
      <div className={styles.desktopMenu}>
        <Link href="/" className={styles.brand}>
          Trojan Pickleball Club
        </Link>

        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/events" className={styles.navLink}>
            Events
          </Link>
        </div>
      </div>
      
      {/* Hamburger button - only visible on mobile */}
      <button 
        className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
        >
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
      </button>
      
      {/* Mobile menu - conditionally visible */}
      {isMobileMenuOpen && (
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
            <div className={styles.mobileNavLinks}>
                <Link href="/" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
                Home
                </Link>
                <Link href="/about" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
                About
                </Link>
                <Link href="/events" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
                Events
                </Link>
            </div>
        </div>
      )}
    </nav>
  );
}