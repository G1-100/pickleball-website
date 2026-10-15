import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Arrow from "@/components/Arrow";
import CopyCode from "@/components/CopyCode";
import PointBall from "@/components/PointBall";
import Reveal from "@/components/Reveal";
import ScrollText from "@/components/ScrollText";

type Sponsor = {
  name: string;
  logo: string;
  link: string;
  discountPercent?: string;
  discountCode?: string;
  referral?: string;
};

const sponsors: Sponsor[] = [
  { name: "Joola", logo: "/images/sponsors-mono/joola-logo.png", link: "https://joola.com/?bg_ref=Uvj1SnyvVj", referral: "Shop via our link to support the club" },
  { name: "Skechers", logo: "/images/sponsors-mono/skechers-logo.png", link: "https://skechers.com" },
  { name: "No Apologies Nutrition", logo: "/images/sponsors-mono/no-apologies-nutrition-logo.png", link: "https://noapologiesnutrition.com/", discountPercent: "15%", discountCode: "USC15" },
  { name: "Courts Club", logo: "/images/sponsors-mono/courts-club-logo.png", link: "https://courts-club.com/", discountPercent: "15%", discountCode: "USClub15" },
  { name: "Road to Pro", logo: "/images/sponsors-mono/roadtopro_logo.png", link: "https://rtptennis.com/" },
  { name: "C&D Nets", logo: "/images/sponsors-mono/cdnets.png", link: "https://bestpickleballnets.com/" },
  { name: "Cookiegrips", logo: "/images/sponsors-mono/cookiegrips_logo.png", link: "https://cookiegrips.com/", discountPercent: "10%", discountCode: "TPCOOKIES" },
];

const levels = [
  { title: "Evening open plays", detail: "Drop in after class. Every skill level, every week.", href: "/events" },
  { title: "Intramural tournaments", detail: "Grab a partner and compete in campus brackets.", href: "/events" },
  { title: "The national stage", detail: "Try out for the competitive team that travels the country.", href: "/about#competitive" },
];

export default function Page() {
  return (
    <>
      <section className={styles.hero}>
        <PointBall className={styles.canvas} />

        <div className={styles.hud}>
          <p className="label">USC&apos;s official pickleball club</p>
          <p className={`label ${styles.coords}`}>34.0224° N, 118.2851° W</p>
        </div>

        <div className={styles.heroBottom}>
          <div>
            <h1 className={styles.title}>
              <span>Trojan</span>
              <span>Pickleball Club</span>
            </h1>
            <p className={styles.slogan}>Battle hard. Bond harder. Belong here.</p>
          </div>
          <div className={styles.heroAside}>
            <p>Open plays, tournaments and a nationally competitive team, all run by students.</p>
            <Link href="/events" className="link">
              Find open play <Arrow />
            </Link>
          </div>
        </div>

        <span className={`label ${styles.scroll}`} aria-hidden="true">Scroll</span>
      </section>

      <section className={styles.about}>
        <div className={styles.grid}>
          <p className="label">Who we are</p>
          <div>
            <ScrollText
              className={styles.statement}
              text="Trojan Pickleball is USC's official pickleball club, full of casual beginners, recreational regulars, and tournament competitors."
            />
            <Reveal className={styles.aboutCols}>
              <p>We aim to spread the love and enjoyment of the game throughout USC and the nearby community.</p>
              <p>Whether you want to join us for our evening open plays, compete in intramural tournaments, or travel around the country to win the national title, we have a spot for you.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal className={styles.photo}>
        <Image src="/images/hero-image.jpg" alt="Club members huddled together on court" fill sizes="100vw" />
        <p className="label">The club</p>
      </Reveal>

      <section className={styles.levels}>
        <div className={styles.grid}>
          <p className="label">Ways to play</p>
          <ol className={styles.rows}>
            {levels.map((l, i) => (
              <li key={l.title}>
                <Link href={l.href} className={styles.row}>
                  <span className="label">0{i + 1}</span>
                  <span className={styles.rowTitle}>{l.title}</span>
                  <span className={styles.rowDetail}>{l.detail}</span>
                  <span className={styles.rowArrow}><Arrow size={16} /></span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.sponsors}>
        <div className={styles.grid}>
          <p className="label">Sponsors</p>
          <div>
            <h2 className={styles.h2}>Backed by brands that keep us on court.</h2>
            <p className={styles.sub}>Several sponsors offer members a discount. Select a code to copy it.</p>
          </div>
        </div>
        <ul className={styles.sponsorGrid}>
          {sponsors.map((s) => (
            <li key={s.name} className={styles.cell}>
              <a href={s.link} target="_blank" rel="noopener noreferrer" className={styles.cellLink} aria-label={s.name}>
                <span className={styles.logo}>
                  <Image src={s.logo} alt="" width={200} height={80} />
                </span>
              </a>
              <div className={styles.cellMeta}>
                <span className="label">{s.name}</span>
                {s.discountCode && (
                  <span className={styles.code}>
                    <span className="label">{s.discountPercent} off</span>
                    <CopyCode code={s.discountCode} className={styles.copy} />
                  </span>
                )}
                {s.referral && <span className={`label ${styles.referral}`}>{s.referral}</span>}
              </div>
            </li>
          ))}
          <li className={styles.cell}>
            <Link href="/join#sponsors" className={styles.become}>
              <span>Become a sponsor</span>
              <Arrow size={16} />
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
