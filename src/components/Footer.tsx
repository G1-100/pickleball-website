import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const socials = [
  { label: "Instagram", detail: "@trojanpickleball", href: "https://instagram.com/trojanpickleball", icon: "/images/instagram-logo.svg" },
  { label: "GroupMe", detail: "500+ members", href: "https://groupme.com/join_group/96038579/dmWghOg2", icon: "/images/groupme-icon.png" },
  { label: "Email", detail: "trojanpickleball@gmail.com", href: "mailto:trojanpickleball@gmail.com", icon: "/images/gmail-icon.png" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.court} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.callout}>
            <h2 className={styles.heading}>See you on the court.</h2>
            <Link href="/events" className="btn btn-solid">Find open play</Link>
          </div>

          <ul className={styles.socials}>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={styles.social}>
                  <span className={styles.icon}>
                    <Image src={s.icon} alt="" width={26} height={26} style={{ objectFit: "contain" }} />
                  </span>
                  <span>
                    <strong>{s.label}</strong>
                    <span className={styles.detail}>{s.detail}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.wordmark} aria-hidden="true">Fight on</p>

        <div className={styles.bottom}>
          <span className={styles.logo}>
            <Image src="/images/club_logo.jpg" alt="Trojan Pickleball Club logo" width={56} height={56} />
          </span>
          <p>© {new Date().getFullYear()} Trojan Pickleball Club, University of Southern California</p>
          <nav aria-label="Footer" className={styles.footNav}>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/join">Join</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
