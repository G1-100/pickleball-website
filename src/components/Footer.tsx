import Link from "next/link";
import styles from "./Footer.module.css";

const socials = [
  { label: "Instagram", detail: "@trojanpickleball", href: "https://instagram.com/trojanpickleball" },
  { label: "GroupMe", detail: "500+ members", href: "https://groupme.com/join_group/96038579/dmWghOg2" },
  { label: "Linktree", detail: "linktr.ee/trojan_pickleballl", href: "https://linktr.ee/trojan_pickleballl" },
  { label: "Email", detail: "trojanpickleball@gmail.com", href: "mailto:trojanpickleball@gmail.com" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.heading}>See you on the court.</p>
          <ul className={styles.socials}>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  <span>{s.label}</span>
                  <span className={styles.detail}>{s.detail}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.bottom}>
          <p className="label">© {new Date().getFullYear()} Trojan Pickleball Club</p>
          <p className="label">University of Southern California</p>
          <nav aria-label="Footer" className={styles.footNav}>
            <Link href="/about" className="label">About</Link>
            <Link href="/events" className="label">Events</Link>
            <Link href="/join" className="label">Join</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
