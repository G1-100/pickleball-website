import Image from "next/image";
import Link from "next/link";
import s from "./page.module.css";
import Arrow from "@/components/Arrow";
import CopyCode from "@/components/CopyCode";
import PointBall from "@/components/PointBall";
import Reveal from "@/components/Reveal";
import { eboard, gallery, heroImages, intro, introMore, levels, pillars, slogan, sponsors } from "../data";

const specs = [
  ["Open play", "Drop-in", "PE South Gym"],
  ["Intramurals", "Partner brackets", "Lyon Center"],
  ["Nationals", "Tryout team", "On the road"],
];

export default function Page() {
  return (
    <div className={s.page}>
      {/* HERO MOSAIC */}
      <section className={s.hero}>
        <div className={s.mosaic}>
          <div className={`${s.tile} ${s.tA}`}>
            <Image src={heroImages.palms} alt="Club members with paddles under palm trees" fill priority sizes="(max-width: 900px) 100vw, 58vw" />
          </div>
          <div className={`${s.tile} ${s.tB}`}>
            <PointBall className={s.ball} />
            <span className={s.tileLabel}>Trojan Pickleball Club</span>
          </div>
          <div className={`${s.tile} ${s.tC}`}>
            <Image src={heroImages.overhead} alt="Player leaping for an overhead" fill sizes="25vw" />
          </div>
          <div className={`${s.tile} ${s.tD}`}>
            <Image src={heroImages.wellness} alt="Player at the kitchen line" fill sizes="25vw" />
          </div>
          <div className={`${s.glass} ${s.heroSpec}`}>
            <p className={s.mono}>Spec sheet</p>
            <dl>
              <div><dt>Club</dt><dd>Trojan Pickleball</dd></div>
              <div><dt>Home</dt><dd>USC, Los Angeles</dd></div>
              <div><dt>Levels</dt><dd>Open, IM, National</dd></div>
              <div><dt>Open to</dt><dd>Every skill level</dd></div>
            </dl>
          </div>
        </div>
        <h1 className={s.heroTitle}>
          {slogan.map((l) => <span key={l}>{l}</span>)}
        </h1>
      </section>

      {/* INTRO */}
      <section className={s.intro}>
        <Reveal className={s.introText}>
          <p className={s.mono}>The club</p>
          <h2 className={s.h2}>{intro}</h2>
          <p className={s.body}>{introMore}</p>
          <Link href="/about" className={s.btn}>About the club <Arrow /></Link>
        </Reveal>
        <Reveal className={s.introImgs} delay={0.1}>
          <div className={s.introImg}><Image src={heroImages.fun} alt="Members with the Trojan mascot" fill sizes="30vw" /></div>
          <div className={s.introImg}><Image src={heroImages.bench} alt="Team cheering from the bench" fill sizes="30vw" /></div>
        </Reveal>
      </section>

      {/* LEVELS AS PRODUCTS */}
      <section className={s.drop}>
        <div className={s.head}>
          <h2 className={s.h2Big}>Choose your kit</h2>
          <p className={s.mono}>Three ways in</p>
        </div>
        <div className={s.products}>
          {levels.map((l, i) => (
            <Link key={l.title} href={l.href} className={s.product}>
              <span className={s.productImg}>
                <Image src={l.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                <span className={s.jersey} aria-hidden="true">0{i + 1}</span>
              </span>
              <span className={s.productName}>{l.title}</span>
              <span className={s.productSpecs}>
                <span><em>Format</em>{specs[i][1]}</span>
                <span><em>Where</em>{specs[i][2]}</span>
              </span>
              <span className={s.productCta}>{l.detail} <Arrow /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* LOOKBOOK */}
      <section className={s.lookbook}>
        <h2 className={s.h2Big}>Lookbook</h2>
        <div className={s.looks}>
          {gallery.map((g, i) => (
            <Reveal key={g.src} className={`${s.look} ${s[`look${i % 6}`]}`} delay={(i % 3) * 0.06}>
              <Image src={g.src} alt={g.alt} fill sizes="(max-width: 700px) 50vw, 25vw" />
              <span className={s.lookCap}>Look {String(i + 1).padStart(2, "0")}, {g.tag}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className={s.pillars}>
        {pillars.map((p, i) => (
          <Reveal key={p.name} className={s.pillar} delay={i * 0.06}>
            <div className={s.pillarImg}>
              <Image src={p.image} alt="" fill sizes="(max-width: 900px) 50vw, 25vw" />
            </div>
            <div className={`${s.glass} ${s.pillarGlass}`}>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ROSTER */}
      <section className={s.roster}>
        <div className={s.head}>
          <h2 className={s.h2Big}>The e-board</h2>
          <Link href="/about" className={s.mono}>Full team</Link>
        </div>
        <ul className={s.rosterRow}>
          {eboard.map((m) => (
            <li key={m.name} className={s.athlete}>
              <div className={s.athleteImg}>
                <Image src={m.photo} alt={m.name} fill sizes="220px" />
              </div>
              <span className={s.athleteName}>{m.name}</span>
              <span className={s.mono}>{m.role}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SPONSORS */}
      <section className={s.sponsors}>
        <p className={s.mono}>Partners</p>
        <ul className={s.sponsorGrid}>
          {sponsors.map((sp) => (
            <li key={sp.name}>
              <a href={sp.link} target="_blank" rel="noopener noreferrer" aria-label={sp.name}>
                <Image src={sp.logo} alt="" width={180} height={80} />
              </a>
              {sp.code && <span className={s.code}>{sp.off} off <CopyCode code={sp.code} className={s.copy} /></span>}
            </li>
          ))}
        </ul>
      </section>

      <section className={s.cta}>
        <h2 className={s.ctaTitle}>Suit up</h2>
        <div className={s.ctaBtns}>
          <Link href="/events" className={`${s.btn} ${s.btnLight}`}>Find open play <Arrow /></Link>
          <Link href="/join" className={`${s.btn} ${s.btnLight}`}>Join the club <Arrow /></Link>
        </div>
      </section>
    </div>
  );
}
