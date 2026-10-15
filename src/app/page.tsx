import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Ball from "@/components/Ball";
import CopyCode from "@/components/CopyCode";
import PathRows from "@/components/PathRows";
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
  { name: "Joola", logo: "/images/joola-logo.png", link: "https://joola.com/?bg_ref=Uvj1SnyvVj", referral: "Shop through our link to support the club" },
  { name: "Skechers", logo: "/images/skechers-logo.png", link: "https://skechers.com" },
  { name: "No Apologies Nutrition", logo: "/images/no-apologies-nutrition-logo.png", link: "https://noapologiesnutrition.com/", discountPercent: "15%", discountCode: "USC15" },
  { name: "Courts Club", logo: "/images/courts-club-logo.png", link: "https://courts-club.com/", discountPercent: "15%", discountCode: "USClub15" },
  { name: "Road to Pro", logo: "/images/roadtopro_logo.png", link: "https://rtptennis.com/" },
  { name: "C&D Nets", logo: "/images/c&dnets_logo.png", link: "https://bestpickleballnets.com/" },
  { name: "Cookiegrips", logo: "/images/cookiegrips_logo.png", link: "https://cookiegrips.com/", discountPercent: "10%", discountCode: "TPCOOKIES" },
];

const paths = [
  { title: "Evening open plays", detail: "Drop in after class. Every skill level, every week.", href: "/events", image: "/images/fun.jpg" },
  { title: "Intramural tournaments", detail: "Grab a partner and compete in USC Rec Sports brackets.", href: "/events", image: "/images/growth.jpg" },
  { title: "Chase the national title", detail: "Try out for the competitive team that travels the country.", href: "/about#competitive", image: "/images/competition.jpg" },
];

const marquee = ["Open play", "Tournaments", "Nationals", "Intramurals", "Beginners welcome", "Late-night dinks"];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 className={styles.clubName}>
              <span>Trojan Pickleball Club</span>
            </h1>
            <p className={styles.slogan} aria-label="Battle hard. Bond harder. Belong here.">
              <span className={styles.sloganLine}><span>Battle hard.</span></span>
              <span className={styles.sloganLine}><span>Bond harder.</span></span>
              <span className={styles.sloganLine}><span>Belong here.</span></span>
            </p>
            <p className={styles.heroSub}>USC&apos;s official pickleball club, for first-timers and national competitors alike.</p>
            <div className={styles.heroCtas}>
              <Link href="/events" className="btn btn-solid">Find open play</Link>
              <Link href="/about" className="btn">Meet the club</Link>
            </div>
          </div>

          <div className={styles.heroPhoto}>
            <div className={styles.photoFrame}>
              <Image src="/images/hero-image.jpg" alt="Club members huddled together on court" fill priority sizes="(max-width: 900px) 90vw, 40vw" />
            </div>
            <div className={styles.badge} aria-hidden="true">
              <svg viewBox="0 0 200 200" className={styles.badgeText}>
                <defs>
                  <path id="badgeCircle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                </defs>
                <text>
                  <textPath href="#badgeCircle">FIGHT ON ✦ TROJAN PICKLEBALL ✦ FIGHT ON ✦ TROJANS ✦</textPath>
                </text>
              </svg>
              <Ball className={styles.badgeBall} size={70} />
            </div>
          </div>
        </div>

        {/* court + rally */}
        <div className={styles.courtStage} aria-hidden="true">
          <svg className={styles.court} viewBox="0 0 440 200" preserveAspectRatio="none">
            <rect className={styles.courtLine} x="2" y="2" width="436" height="196" pathLength="1" />
            <line className={styles.courtLine} x1="150" y1="2" x2="150" y2="198" pathLength="1" />
            <line className={styles.courtLine} x1="290" y1="2" x2="290" y2="198" pathLength="1" />
            <line className={styles.courtLine} x1="2" y1="100" x2="150" y2="100" pathLength="1" />
            <line className={styles.courtLine} x1="290" y1="100" x2="438" y2="100" pathLength="1" />
            <rect className={styles.kitchen} x="150" y="2" width="140" height="196" />
            <line className={styles.net} x1="220" y1="-6" x2="220" y2="206" />
          </svg>
          <div className={styles.rally}>
            <div className={styles.rallyX}>
              <div className={styles.rallyY}>
                <Ball size={44} />
              </div>
              <div className={styles.shadow} />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className={styles.marqueeWrap} aria-hidden="true">
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {[0, 1].map((copy) => (
            <div key={copy} className={styles.marqueeGroup}>
              {marquee.map((word) => (
                <span key={word} className={styles.marqueeItem}>
                  {word}
                  <Ball size={28} className={styles.marqueeBall} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* WHO WE ARE */}
      <section className={styles.who}>
        <div className={styles.whoInner}>
          <h2 className={styles.sectionHeading}>Who we are</h2>
          <ScrollText
            className={styles.whoStatement}
            text="Trojan Pickleball is USC's official pickleball club, full of casual beginners, recreational regulars, and tournament competitors."
          />
          <div className={styles.whoGrid}>
            <Reveal className={styles.whoCopy}>
              <p>We aim to spread the love and enjoyment of the game throughout USC and the nearby community.</p>
              <p>Whether you want to join us for our evening open plays, compete in intramural tournaments, or travel around the country to win the national title, we have a spot for you.</p>
            </Reveal>
            <Reveal className={styles.whoArt} delay={0.15}>
              <div className={styles.whoTeam}>
                <Image src="/images/who_are_we_1.png" alt="Competitive team members holding a $2,500 prize check" width={380} height={379} />
              </div>
              <div className={styles.whoMascot}>
                <Image src="/images/who_we_are_2.png" alt="Illustrated club member giving two thumbs up" width={240} height={447} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PATHS */}
      <section className={styles.paths}>
        <div className={styles.pathsInner}>
          <div className={styles.pathsHead}>
            <h2 className={styles.sectionHeading}>Pick your level</h2>
            <p>Start wherever you are. There is a spot for every level, from your first rally to nationals.</p>
          </div>
          <PathRows paths={paths} />
        </div>
      </section>

      {/* SPONSORS */}
      <section className={styles.sponsors}>
        <div className={styles.sponsorsInner}>
          <div className={styles.sponsorsHead}>
            <h2 className={styles.sponsorsTitle}>Backed by</h2>
            <p>Our sponsors keep paddles in hands and the team on the road. Several offer members a discount; tap a code to copy it.</p>
          </div>
          <ul className={styles.sponsorGrid}>
            {sponsors.map((sponsor, i) => (
              <Reveal as="li" key={sponsor.name} className={styles.sponsorCard} delay={(i % 4) * 0.07}>
                <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className={styles.sponsorLink}>
                  <span className={styles.logoBox}>
                    <Image src={sponsor.logo} alt={`${sponsor.name}`} width={240} height={120} style={{ objectFit: "contain" }} />
                  </span>
                  <span className={styles.sponsorName}>{sponsor.name}</span>
                  {sponsor.referral && <span className={styles.referral}>{sponsor.referral}</span>}
                </a>
                {sponsor.discountCode && (
                  <div className={styles.ticket}>
                    <span className={styles.ticketOff}>{sponsor.discountPercent} off</span>
                    <CopyCode code={sponsor.discountCode} className={styles.copy} />
                  </div>
                )}
              </Reveal>
            ))}
            <Reveal as="li" className={`${styles.sponsorCard} ${styles.becomeCard}`} delay={0.21}>
              <Link href="/join#sponsors" className={styles.becomeLink}>
                <span className={styles.plus} aria-hidden="true">+</span>
                <span>Become a sponsor</span>
              </Link>
            </Reveal>
          </ul>
        </div>
      </section>
    </>
  );
}
