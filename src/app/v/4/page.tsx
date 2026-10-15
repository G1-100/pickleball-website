import Image from "next/image";
import Link from "next/link";
import s from "./page.module.css";
import Arrow from "@/components/Arrow";
import CopyCode from "@/components/CopyCode";
import HScroll from "@/components/HScroll";
import Reveal from "@/components/Reveal";
import { gallery, heroImages, intro, introMore, levels, pillars, slogan, sponsors } from "../data";

function Court({ className = "" }: { className?: string }) {
  return (
    <div className={`${s.courtWrap} ${className}`} aria-hidden="true">
      <div className={s.court}>
        <div className={s.courtGrid} />
        <div className={s.courtLines} />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className={s.page}>
      {/* HERO */}
      <section className={s.hero}>
        <Court />
        <div className={s.heroGlow} />
        <div className={s.heroFrame}>
          <Image src={heroImages.huddle} alt="Club members huddled together" fill priority sizes="(max-width: 900px) 90vw, 50vw" />
        </div>
        <h1 className={s.heroTitle}>
          <span className={s.outline}>Trojan</span>
          <span>Pickleball</span>
        </h1>
        <div className={s.hudLeft}>
          <span>USC</span>
          <span>Los Angeles</span>
          <span>Club sport</span>
        </div>
        <div className={s.hudRight}>
          {slogan.map((l) => <span key={l}>{l}</span>)}
        </div>
        <div className={s.heroCta}>
          <Link href="/events" className={s.btn}>Find open play <Arrow /></Link>
        </div>
      </section>

      {/* INTRO with angled frames */}
      <section className={s.intro}>
        <Reveal className={s.introText}>
          <h2 className={s.h2}>{intro}</h2>
          <p className={s.body}>{introMore}</p>
        </Reveal>
        <div className={s.slants}>
          {[heroImages.bench, heroImages.fun, heroImages.wellness].map((src, i) => (
            <Reveal key={src} className={s.slant} delay={i * 0.1}>
              <Image src={src} alt="" fill sizes="(max-width: 900px) 33vw, 25vw" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* FILMSTRIP */}
      <HScroll className={s.film} trackClassName={s.filmTrack}>
        <div className={s.filmIntro}>
          <h2 className={s.h2Big}>Under the lights</h2>
          <p className={s.mono}>Keep scrolling</p>
        </div>
        {gallery.map((g, i) => (
          <figure key={g.src} className={s.frame}>
            <div className={s.frameImg}>
              <Image src={g.src} alt={g.alt} fill sizes="40vw" />
            </div>
            <figcaption className={s.mono}>
              <span>{String(i + 1).padStart(2, "0")}</span> {g.tag}
            </figcaption>
          </figure>
        ))}
      </HScroll>

      {/* LEVELS as gates */}
      <section className={s.levels}>
        <h2 className={s.h2Big}>Enter the arena</h2>
        <div className={s.gates}>
          {levels.map((l, i) => (
            <Link key={l.title} href={l.href} className={s.gate}>
              <Image src={l.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
              <span className={s.gateBody}>
                <span className={s.mono}>Gate 0{i + 1}</span>
                <span className={s.gateTitle}>{l.title}</span>
                <span className={s.gateDetail}>{l.detail}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className={s.pillars}>
        {pillars.map((p) => (
          <Reveal key={p.name} className={s.pillar}>
            <div className={s.pillarImg}>
              <Image src={p.image} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className={s.pillarText}>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* SPONSORS */}
      <section className={s.sponsors}>
        <p className={s.mono}>Powered by</p>
        <ul className={s.sponsorRow}>
          {sponsors.map((sp) => (
            <li key={sp.name}>
              <a href={sp.link} target="_blank" rel="noopener noreferrer" aria-label={sp.name}>
                <Image src={sp.mono} alt="" width={160} height={64} />
              </a>
              {sp.code && <CopyCode code={sp.code} className={s.copy} />}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className={s.cta}>
        <Court className={s.ctaCourt} />
        <h2 className={s.ctaTitle}>Step on court</h2>
        <Link href="/join" className={s.btn}>Join the club <Arrow /></Link>
      </section>
    </div>
  );
}
