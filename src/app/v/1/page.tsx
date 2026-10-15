import Image from "next/image";
import Link from "next/link";
import s from "./page.module.css";
import Arrow from "@/components/Arrow";
import CopyCode from "@/components/CopyCode";
import Reveal from "@/components/Reveal";
import Timecode from "@/components/Timecode";
import { gallery, heroImages, intro, introMore, levels, pillars, slogan, sponsors, weekly } from "../data";

export default function Page() {
  return (
    <div className={s.page}>
      {/* HERO: broadcast frame */}
      <section className={s.hero}>
        <Image src={heroImages.palms} alt="Club members with paddles under palm trees" fill priority sizes="100vw" className={s.heroImg} />
        <div className={s.grade} />
        <div className={s.scan} aria-hidden="true" />

        <div className={s.bug}>
          <span className={s.bugLogo}>
            <Image src="/images/club_logo.jpg" alt="" width={36} height={36} />
          </span>
          <span className={s.bugTeam}>Trojans</span>
          <span className={s.bugScore}>0 – 0 – 2</span>
          <span className={s.live}><i />Live</span>
        </div>

        <div className={s.rec} aria-hidden="true">
          <i /> REC <Timecode />
        </div>

        <div className={s.heroBody}>
          <h1 className={s.heroTitle}>
            <span>Trojan</span>
            <span>Pickleball</span>
          </h1>
          <div className={s.lowerThird}>
            <span className={s.ltTag}>USC&apos;s official pickleball club</span>
            <span className={s.ltMain}>{slogan.join(" ")}</span>
          </div>
        </div>

        <div className={s.ticker} aria-label="Weekly schedule">
          <span className={s.tickerTag}>This week</span>
          <div className={s.tickerTrack}>
            {[0, 1].map((k) => (
              <div key={k} className={s.tickerGroup} aria-hidden={k === 1}>
                {weekly.map((w) => (
                  <span key={w.what + w.when}>
                    <b>{w.what}</b> {w.when} <em>{w.where}</em>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className={s.who}>
        <Reveal className={s.whoText}>
          <p className={s.kicker}>Segment 01, who we are</p>
          <h2 className={s.big}>{intro}</h2>
          <p className={s.body}>{introMore}</p>
          <Link href="/about" className={s.btn}>Meet the club <Arrow /></Link>
        </Reveal>
        <div className={s.whoMedia}>
          <Reveal className={`${s.cam} brackets`}>
            <Image src={heroImages.bench} alt="Team cheering from the bench" fill sizes="(max-width: 900px) 100vw, 40vw" />
            <span className={s.camTag}>Cam 2</span>
          </Reveal>
          <Reveal className={`${s.cam} ${s.camSmall} brackets`} delay={0.15}>
            <Image src={heroImages.fun} alt="Members with the Trojan mascot" fill sizes="(max-width: 900px) 60vw, 22vw" />
            <span className={s.camTag}>Cam 4</span>
          </Reveal>
        </div>
      </section>

      {/* LEVELS */}
      <section className={s.levels}>
        <h2 className={s.sectionTitle}>Pick your level</h2>
        <div className={s.levelGrid}>
          {levels.map((l, i) => (
            <Link key={l.title} href={l.href} className={`${s.level} brackets`}>
              <Image src={l.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
              <span className={s.levelNum}>0{i + 1}</span>
              <span className={s.levelBody}>
                <span className={s.levelTitle}>{l.title}</span>
                <span className={s.levelDetail}>{l.detail}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* REPLAY STRIP */}
      <section className={s.replay}>
        <div className={s.replayHead}>
          <h2 className={s.sectionTitle}>Replays</h2>
          <p className={s.kicker}>Scroll sideways</p>
        </div>
        <ul className={s.strip}>
          {gallery.map((g, i) => (
            <li key={g.src} className={s.clip}>
              <div className={s.clipImg}>
                <Image src={g.src} alt={g.alt} fill sizes="320px" />
                <span className={s.play} aria-hidden="true" />
              </div>
              <p className={s.clipMeta}>
                <span>Replay {String(i + 1).padStart(2, "0")}</span>
                <span>{g.tag}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* PILLARS */}
      <section className={s.pillars}>
        {pillars.map((p) => (
          <Reveal key={p.name} className={s.pillar}>
            <Image src={p.image} alt="" fill sizes="(max-width: 900px) 50vw, 25vw" />
            <div className={s.pillarText}>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* SPONSORS */}
      <section className={s.sponsors}>
        <p className={s.kicker}>Presented by</p>
        <ul className={s.sponsorRow}>
          {sponsors.map((sp) => (
            <li key={sp.name}>
              <a href={sp.link} target="_blank" rel="noopener noreferrer" aria-label={sp.name}>
                <Image src={sp.mono} alt="" width={160} height={64} />
              </a>
              {sp.code && (
                <span className={s.code}>
                  {sp.off} off <CopyCode code={sp.code} className={s.copy} />
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className={s.cta}>
        <Image src={heroImages.huddle} alt="" fill sizes="100vw" />
        <div className={s.grade} />
        <div className={s.ctaBody}>
          <h2 className={s.ctaTitle}>Get on court</h2>
          <div className={s.ctaBtns}>
            <Link href="/events" className={`${s.btn} ${s.btnGold}`}>Find open play <Arrow /></Link>
            <Link href="/join" className={s.btn}>Join the club <Arrow /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
