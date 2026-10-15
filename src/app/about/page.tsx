import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

const pillars = [
  {
    name: "Wellness",
    image: "/images/wellness.jpg",
    alt: "Player hitting a dink at the kitchen line",
    text: "Pickleball keeps us moving, laughing, and connected. We believe in building healthy habits that last, whether that is breaking a sweat on the court or sharing a snack after practice. After all, maintaining mental and physical health is a lifelong journey.",
  },
  {
    name: "Growth",
    image: "/images/growth.jpg",
    alt: "Player lunging for a drive",
    text: "We're all about growth on and off the court. Pickleball is a game of skill, strategy, and continuous improvement. Over time, we aspire to move a little faster, aim with better intention, and plan with longer forethought.",
  },
  {
    name: "Fun",
    image: "/images/fun.jpg",
    alt: "Members smiling with the Trojan mascot",
    text: "Fun is at the heart of pickleball. We play hard, but we also know how to have a good time. With plenty of open plays and casual tournaments, we create an environment where everyone can enjoy the game.",
  },
  {
    name: "Competition",
    image: "/images/competition.jpg",
    alt: "2025 DUPR Collegiate National Championship team poster",
    text: "We embrace competition as a way to challenge ourselves and each other. Our competitive team travels the nation, playing with passion and determination against other universities; no matter the outcome, we always rise up and support one another.",
  },
];

const eboard = [
  { name: "Kyle Kim", role: "Co-President", photo: "/images/people/kyle kim.JPG" },
  { name: "Chris Shin", role: "Co-President", photo: "/images/people/chris shin.jpeg" },
  { name: "Jonathan Park", role: "Treasurer", photo: "/images/people/jonathan park.png" },
  { name: "An Duong", role: "Media Chair", photo: "/images/people/an duong.jpeg" },
  { name: "Gavin Huang", role: "VP Staff", photo: "/images/people/gavin huang.jpeg" },
  { name: "Ty Valencia", role: "VP Staff", photo: "/images/people/ty valencia.png" },
  { name: "Lindsey Ho", role: "Social Staff", photo: "/images/people/lindsey ho.JPEG" },
  { name: "Anthony Yi", role: "Social Staff", photo: "/images/people/anthony yi.png" },
  { name: "Tyffany Vu", role: "Social Staff", photo: "/images/people/tyfanny vu.jpeg" },
  { name: "Ryan Tak", role: "Media Staff", photo: "/images/people/ryan tak.jpeg" },
  { name: "Linus Yao", role: "Treasurer Staff", photo: "/images/people/linus yao.jpeg" },
];

// Flip to true and fill in the rosters once the new competitive team is announced.
const rosterAnnounced = false;
const roster: { team: string; players: string[] }[] = [
  { team: "Men's", players: [] },
  { team: "Women's", players: [] },
];

export default function Page() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>What we play for</h1>
          <ul className={styles.pillarNav}>
            {pillars.map((p, i) => (
              <li key={p.name} style={{ "--i": i } as React.CSSProperties}>
                <a href={`#${p.name.toLowerCase()}`}>{p.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.mission} aria-label="Our mission">
        {pillars.map((p, i) => (
          <article
            key={p.name}
            id={p.name.toLowerCase()}
            className={styles.pillar}
            data-tone={i}
            style={{ "--i": i } as React.CSSProperties}
          >
            <div className={styles.pillarText}>
              <h2 className={styles.pillarName}>{p.name}</h2>
              <p>{p.text}</p>
            </div>
            <div className={styles.pillarImage}>
              <Image src={p.image} alt={p.alt} fill sizes="(max-width: 900px) 90vw, 45vw" />
            </div>
          </article>
        ))}
      </section>

      <section className={styles.team}>
        <div className={styles.inner}>
          <div className={styles.teamHead}>
            <h2 className={styles.teamTitle}>The e-board</h2>
            <p>The students who book the courts, run the socials, and keep the club going.</p>
          </div>
          <ul className={styles.eboard}>
            {eboard.map((m, i) => (
              <Reveal as="li" key={m.name} delay={(i % 4) * 0.06}>
                <TiltCard className={styles.card}>
                  <div className={styles.cardPhoto}>
                    <Image src={m.photo} alt={m.name} fill sizes="(max-width: 640px) 45vw, 260px" />
                  </div>
                  <div className={styles.cardInfo}>
                    <span className={styles.cardName}>{m.name}</span>
                    <span className={styles.cardRole}>{m.role}</span>
                  </div>
                  <span className={styles.shine} aria-hidden="true" />
                </TiltCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.competitive} id="competitive">
        <div className={styles.inner}>
          <h2 className={styles.compTitle}>Competitive team</h2>
          {rosterAnnounced ? (
            <div className={styles.roster}>
              {roster.map((r) => (
                <div key={r.team}>
                  <h3>{r.team}</h3>
                  <ul>
                    {r.players.map((name) => <li key={name}>{name}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.tbd}>
              <div className={styles.scoreboard} aria-hidden="true">
                <span>0</span>
                <span>0</span>
                <span>2</span>
              </div>
              <div>
                <p className={styles.tbdLead}>This season&apos;s roster is still being decided.</p>
                <p>Tryouts are posted on the events page. Come show us what you&apos;ve got.</p>
                <Link href="/events" className="btn btn-solid">See tryout dates</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
