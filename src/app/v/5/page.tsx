import Image from "next/image";
import Link from "next/link";
import s from "./page.module.css";
import Arrow from "@/components/Arrow";
import CopyCode from "@/components/CopyCode";
import Reveal from "@/components/Reveal";
import { eboard, gallery, heroImages, intro, introMore, levels, pillars, slogan, sponsors } from "../data";

const wall = [
  ...gallery.map((g) => g.src),
  heroImages.huddle,
  heroImages.fun,
  heroImages.growth,
  heroImages.wellness,
  heroImages.poster,
  ...eboard.slice(0, 6).map((m) => m.photo),
];

// Split into columns that scroll in alternating directions.
const columns = [0, 1, 2, 3, 4].map((c) => wall.filter((_, i) => i % 5 === c));

const formats = [
  { format: "Drop-in", where: "PE South Gym" },
  { format: "Partner brackets", where: "Lyon Center" },
  { format: "Tryout team", where: "Nationwide" },
];

export default function Page() {
  return (
    <div className={s.page}>
      {/* HERO: photo wall */}
      <section className={s.hero}>
        <div className={s.wall} aria-hidden="true">
          {columns.map((col, c) => (
            <div key={c} className={s.col} data-dir={c % 2 ? "down" : "up"} style={{ "--speed": `${48 + c * 6}s` } as React.CSSProperties}>
              {[0, 1].map((copy) =>
                col.map((src, i) => (
                  <div key={`${copy}-${i}`} className={s.wallTile}>
                    <Image src={src} alt="" fill sizes="20vw" priority={copy === 0 && i < 2} />
                    <span className={s.tileId}>ID {String(c * 10 + i + 1).padStart(3, "0")}</span>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
        <div className={s.scanline} aria-hidden="true" />
        <div className={s.heroCard}>
          <p className={s.mono}>File 001, Trojan Pickleball Club</p>
          <h1 className={s.heroTitle}>
            {slogan.map((l) => <span key={l}>{l}</span>)}
          </h1>
          <div className={s.heroMeta}>
            <span><em>Affiliation</em>USC</span>
            <span><em>Sport</em>Pickleball</span>
            <span><em>Open to</em><b className={s.green}>Every level</b></span>
          </div>
          <div className={s.btns}>
            <Link href="/events" className={`${s.btn} ${s.btnGold}`}>Find open play <Arrow /></Link>
            <Link href="/join" className={s.btn}>Join <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* DOSSIER */}
      <section className={s.dossier}>
        <Reveal className={s.idCard}>
          <div className={s.idTop}>
            <Image src="/images/club_logo.jpg" alt="Trojan Pickleball logo" width={88} height={88} />
            <div>
              <p className={s.mono}>Club ID</p>
              <p className={s.idName}>Trojan Pickleball</p>
            </div>
          </div>
          <dl className={s.idFields}>
            <div><dt>School</dt><dd>University of Southern California</dd></div>
            <div><dt>Members</dt><dd>Beginners to national competitors</dd></div>
            <div><dt>Contact</dt><dd>trojanpickleball@gmail.com</dd></div>
          </dl>
          <div className={s.barcode} aria-hidden="true" />
        </Reveal>
        <Reveal className={s.dossierText} delay={0.1}>
          <h2 className={s.h2}>{intro}</h2>
          <p className={s.body}>{introMore}</p>
        </Reveal>
      </section>

      {/* LEVELS TABLE */}
      <section className={s.levels}>
        <h2 className={s.h2Big}>Entry points</h2>
        <div className={s.table} role="table" aria-label="Ways to play">
          <div className={`${s.tr} ${s.th}`} role="row">
            <span role="columnheader">Level</span>
            <span role="columnheader">Format</span>
            <span role="columnheader">Where</span>
            <span role="columnheader">Status</span>
          </div>
          {levels.map((l, i) => (
            <Link key={l.title} href={l.href} className={s.tr} role="row">
              <span role="cell" className={s.levelCell}>
                <span className={s.thumb}><Image src={l.image} alt="" fill sizes="96px" /></span>
                <span className={s.levelName}>{l.title}</span>
              </span>
              <span role="cell">{formats[i].format}</span>
              <span role="cell">{formats[i].where}</span>
              <span role="cell" className={s.green}>Open</span>
            </Link>
          ))}
        </div>
      </section>

      {/* PLAYER CARDS */}
      <section className={s.cards}>
        <div className={s.head}>
          <h2 className={s.h2Big}>Roster</h2>
          <p className={s.mono}>{eboard.length} e-board members on file</p>
        </div>
        <ul className={s.cardGrid}>
          {eboard.map((m, i) => (
            <Reveal as="li" key={m.name} className={s.card} delay={(i % 4) * 0.05}>
              <div className={s.cardImg}>
                <Image src={m.photo} alt={m.name} fill sizes="(max-width: 700px) 50vw, 20vw" />
                <span className={s.cardNo}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className={s.cardBody}>
                <span className={s.cardName}>{m.name}</span>
                <span className={s.cardRow}><em>Role</em>{m.role}</span>
                <span className={s.cardRow}><em>Unit</em>E-board</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* PILLARS */}
      <section className={s.pillars}>
        {pillars.map((p) => (
          <Reveal key={p.name} className={s.pillar}>
            <Image src={p.image} alt="" fill sizes="(max-width: 900px) 100vw, 25vw" />
            <div className={s.pillarText}>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* SPONSORS */}
      <section className={s.sponsors}>
        <div className={s.head}>
          <h2 className={s.h2Big}>Partners</h2>
          <p className={s.mono}>Tap a code to copy</p>
        </div>
        <ul className={s.sponsorGrid}>
          {sponsors.map((sp) => (
            <li key={sp.name}>
              <a href={sp.link} target="_blank" rel="noopener noreferrer" aria-label={sp.name}>
                <Image src={sp.mono} alt="" width={160} height={64} />
              </a>
              <span className={s.sponsorMeta}>
                <span>{sp.name}</span>
                {sp.code && <CopyCode code={sp.code} className={s.copy} />}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className={s.cta}>
        <Image src={heroImages.palms} alt="" fill sizes="100vw" />
        <div className={s.ctaInner}>
          <h2 className={s.ctaTitle}>Add your name to the file</h2>
          <Link href="/join" className={`${s.btn} ${s.btnGold}`}>Join the club <Arrow /></Link>
        </div>
      </section>
    </div>
  );
}
