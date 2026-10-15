import Image from "next/image";
import Link from "next/link";
import s from "./page.module.css";
import HScroll from "@/components/HScroll";
import PointBall from "@/components/PointBall";
import CopyCode from "@/components/CopyCode";
import { Carousel, Chapters, DotQuote, HeroNumber, HoloCard, Menu, Statement } from "./parts";
import { Parallax, ScrollSection, SmoothScroll } from "./scroll";
import { gallery, sponsors, weekly } from "../data";

const moments = [
  { src: "/images/who_are_we_1.png", alt: "Team holding the Arizona Super Regional prize check", title: "Arizona Super Regional", meta: "$2,500 prize · 3.9.25", y: 6, r: -4 },
  { src: "/images/competition.jpg", alt: "2025 DUPR Collegiate National Championship poster", title: "Collegiate Nationals", meta: "DUPR Collegiate · 2025", y: 30, r: 3 },
  { src: "/images/gallery/bench-cheer.jpg", alt: "Team cheering from the bench", title: "Bench energy", meta: "Every point, every match", y: 0, r: -2 },
  { src: "/images/gallery/one-last-bash.jpg", alt: "One Last Bash event", title: "One Last Bash", meta: "End-of-year social", y: 24, r: 4 },
  { src: "/images/fun.jpg", alt: "Members with the Trojan mascot", title: "Game day guests", meta: "Fight on", y: 4, r: -3 },
  { src: "/images/gallery/media-day.jpg", alt: "Camera crew at a tournament", title: "On camera", meta: "Tournament coverage", y: 28, r: 2 },
  { src: "/images/gallery/bake-sale.jpg", alt: "Club bake sale", title: "Best cookies ever", meta: "Club fundraiser", y: 8, r: -2 },
];

const chapters = [
  {
    title: "Wellness",
    text: "Pickleball keeps us moving, laughing, and connected. We believe in building healthy habits that last, whether that is breaking a sweat on the court or sharing a snack after practice.",
    images: ["/images/wellness.jpg", "/images/gallery/doubles-night.jpg"],
  },
  {
    title: "Growth",
    text: "Pickleball is a game of skill, strategy, and continuous improvement. Over time, we aspire to move a little faster, aim with better intention, and plan with longer forethought.",
    images: ["/images/growth.jpg", "/images/gallery/low-volley.jpg"],
  },
  {
    title: "Fun",
    text: "We play hard, but we also know how to have a good time. With plenty of open plays and casual tournaments, everyone gets to enjoy the game.",
    images: ["/images/fun.jpg", "/images/gallery/group-courtside.jpg"],
  },
  {
    title: "Competition",
    text: "Our competitive team travels the nation, playing with passion and determination against other universities. No matter the outcome, we rise up and support one another.",
    images: ["/images/competition.jpg", "/images/gallery/overhead.jpg"],
  },
];

const floor = ["Baseline", "Kitchen", "Net", "Kitchen", "Baseline", "Kitchen", "Net"];

export default function Page() {
  const left = sponsors.slice(0, 4);
  const right = sponsors.slice(4);

  return (
    <div className={s.page}>
      <SmoothScroll />
      <Menu />
      <div className={s.gridLines} aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => <span key={i} />)}
      </div>

      {/* ---------- HERO (pinned; the statement wipes over it) ---------- */}
      <div className={s.intro}>
      <section className={s.hero}>
        <div className={s.heroImg}>
          <Image src="/images/gallery/team-palms.jpg" alt="Club members with paddles under palm trees" fill priority sizes="100vw" />
        </div>

        <ul className={s.heroStats}>
          <li><b>1,000+</b><span>Instagram followers</span></li>
          <li><b>500+</b><span>GroupMe members</span></li>
          <li><b>7</b><span>Sponsors</span></li>
        </ul>

        <HeroNumber>
          <span className={s.num}>11</span>
          <span className={s.numLabel}>Points to win a game</span>
        </HeroNumber>

        <ul className={s.heroRight}>
          <li className={s.heroLine}>Battle hard. Bond harder. Belong here.</li>
          <li><b>USC</b><span>Los Angeles</span></li>
          <li><b>3</b><span>Levels of play</span></li>
          <li><b>All</b><span>Skill levels welcome</span></li>
        </ul>

        <div className={s.heroName}>
          <h1>Trojan Pickleball</h1>
          <p>USC&apos;s official pickleball club. Casual beginners, recreational regulars and tournament competitors, all on one court.</p>
        </div>

        <Link href="/events" className={s.heroNext}>
          <span>Next open play</span>
          <b>Mon 8 PM</b>
        </Link>
      </section>

      {/* ---------- STATEMENT (diagonal wipe in) ---------- */}
      <ScrollSection className={s.statementSec}>
        <Parallax className={`${s.float} ${s.f1}`} innerClassName={s.plx} speed={0.25}>
          <Image src="/images/gallery/overhead.jpg" alt="" width={400} height={485} />
        </Parallax>
        <Parallax className={`${s.float} ${s.f2}`} innerClassName={s.plx} speed={0.45}>
          <Image src="/images/gallery/doubles-night.jpg" alt="" width={285} height={280} />
        </Parallax>
        <Parallax className={`${s.float} ${s.f3}`} innerClassName={s.plx} speed={0.3}>
          <Image src="/images/gallery/thumbs-up.jpg" alt="" width={350} height={260} />
        </Parallax>
        <Parallax className={`${s.float} ${s.f4}`} innerClassName={s.plx} speed={0.55}>
          <Image src="/images/gallery/selfie.jpg" alt="" width={250} height={265} />
        </Parallax>

        <Statement
          parts={[
            { text: "We are USC's official pickleball club, built on" },
            { text: "beginners, regulars and competitors", hl: true },
            { text: "sharing the same courts. Join an evening open play, compete in intramurals, or" },
            { text: "travel the country chasing a national title.", hl: true },
            { text: "There is a spot for you." },
          ]}
        />
      </ScrollSection>
      </div>

      {/* ---------- SIGNATURE MOMENTS ---------- */}
      <section className={s.momentsSec}>
        <h2 className={s.giant} aria-label="Signature moments">Signature moments</h2>
        <HScroll trackClassName={s.momentTrack}>
          <div className={s.floor} aria-hidden="true">
            {floor.map((f, i) => <span key={i}>{f}</span>)}
          </div>
          {moments.map((m) => (
            <HoloCard key={m.title} {...m} style={{ "--y": `${m.y}vh`, "--r": `${m.r}deg` } as React.CSSProperties} />
          ))}
        </HScroll>
      </section>

      {/* ---------- DOT-MATRIX QUOTE ---------- */}
      <DotQuote
        lines={["Battle hard.", "Bond harder.", "Belong here."]}
        sub="More than rallies, more than rankings. A club that outlasts every semester."
      />

      {/* ---------- CHAPTERS ---------- */}
      <Chapters chapters={chapters} nextId="partners" />

      {/* ---------- SPONSOR WALL ---------- */}
      <section className={s.wall} id="partners">
        <div className={s.wallCol}>
          {left.map((sp) => (
            <a key={sp.name} href={sp.link} target="_blank" rel="noopener noreferrer" className={s.logo}>
              <Image src={sp.mono.replace("sponsors-mono", "sponsors-black")} alt={sp.name} width={150} height={60} />
              {sp.code && <span className={s.logoCode}>{sp.off} off <CopyCode code={sp.code} className={s.copy} /></span>}
            </a>
          ))}
        </div>
        <div className={s.wallCenter}>
          <h2 className={s.wallTitle}>Partners</h2>
          <div className={s.wallBall}><PointBall tone="light" className={s.wallCanvas} /></div>
          <Link href="/join#sponsors" className={s.gold}>Become a partner <span aria-hidden="true">»</span></Link>
        </div>
        <div className={s.wallCol}>
          {right.map((sp) => (
            <a key={sp.name} href={sp.link} target="_blank" rel="noopener noreferrer" className={s.logo}>
              <Image src={sp.mono.replace("sponsors-mono", "sponsors-black")} alt={sp.name} width={150} height={60} />
              {sp.code && <span className={s.logoCode}>{sp.off} off <CopyCode code={sp.code} className={s.copy} /></span>}
            </a>
          ))}
        </div>
      </section>

      {/* ---------- MEDIA ---------- */}
      <section className={s.media}>
        <p className={s.mediaGhost} aria-hidden="true">On court</p>
        <h2 className={s.mediaTitle}>On court</h2>
        <Carousel items={gallery.map((g) => ({ src: g.src, alt: g.alt, caption: g.tag }))} />
      </section>

      {/* ---------- NEXT UP ---------- */}
      <section className={s.next}>
        <div className={s.nextHead}>
          <span>Next up</span>
          <h2>Find your court</h2>
        </div>
        <ul className={s.nextList}>
          {weekly.map((w) => (
            <li key={w.what + w.when}>
              <span className={s.nextWhen}>{w.when}</span>
              <span>{w.what}</span>
              <span className={s.nextWhere}>{w.where}</span>
            </li>
          ))}
        </ul>
        <div className={s.nextBtns}>
          <Link href="/events" className={s.gold}>Full schedule <span aria-hidden="true">»</span></Link>
          <Link href="/join" className={s.ghostBtn}>Join the club <span aria-hidden="true">»</span></Link>
        </div>
      </section>
    </div>
  );
}
