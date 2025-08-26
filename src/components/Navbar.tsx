"use client"; 
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Desktop menu always visible */}
      <div className={styles.desktopMenu}>
        <div className={styles.logoCircle}>
          <Image
            src="/images/club_logo.jpg"
            alt="Trojan Pickleball Club"
            width={50}
            height={50}
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/* <Link href="/" className={styles.brand}>
          Trojan Pickleball Club
        </Link> */}

        <div className={styles.navLinks}>
          <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
            Home
          </Link>
          <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>
            About
          </Link>
          <Link href="/events" className={`${styles.navLink} ${pathname === '/events' ? styles.active : ''}`}>
            Events
          </Link>
          <Link href="/join" className={`${styles.navLink} ${styles.followUsBtn} ${pathname === '/join' ? styles.active : ''}`}>
            Follow Us
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
                <Link href="/" className={`${styles.mobileNavLink} ${pathname === '/' ? styles.active : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                Home
                </Link>
                <Link href="/about" className={`${styles.mobileNavLink} ${pathname === '/about' ? styles.active : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                About
                </Link>
                <Link href="/events" className={`${styles.mobileNavLink} ${pathname === '/events' ? styles.active : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                Events
                </Link>
                <Link href="/join" className={`${styles.mobileNavLink} ${styles.mobileFollowUsBtn} ${pathname === '/join' ? styles.active : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                Join Us
                </Link>
            </div>
        </div>
      )}
    </nav>
  );
}