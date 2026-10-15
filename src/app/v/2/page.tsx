import Image from "next/image";
import Link from "next/link";
import s from "./page.module.css";
import Arrow from "@/components/Arrow";
import CopyCode from "@/components/CopyCode";
import Reveal from "@/components/Reveal";
import { gallery, heroImages, intro, introMore, levels, pillars, slogan, sponsors } from "../data";

// A ball-tracking overlay: trajectory arc, bounce markers, and a target reticle.
function Track({ d, dots, box, label, className = "" }: {
  d: string;
  dots: [number, number][];
  box?: [number, number, number, number];
  label?: string;
  className?: string;
}) {
  return (
    <>
    <svg className={`${s.track} ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path d={d} className={s.trail} pathLength={1} />
      <path d={d} className={s.trailDash} pathLength={1} />
      {dots.map(([x, y], i) => (
        <g key={i} className={s.dot} style={{ "--i": i } as React.CSSProperties}>
          <ellipse cx={x} cy={y} rx="1.4" ry="1.1" />
          <ellipse cx={x} cy={y} rx="3" ry="2.3" className={s.dotRing} />
        </g>
      ))}
      {box && (
        <g className={s.box}>
          <rect x={box[0]} y={box[1]} width={box[2]} height={box[3]} />
        </g>
      )}
    </svg>
    {box && label && (
      <span className={s.boxLabel} style={{ left: `${box[0]}%`, top: `${box[1]}%` }} aria-hidden="true">{label}</span>
    )}
    </>
  );
}

export default function Page() {
  return (
    <div className={s.page}>
      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroText}>
          <p className={s.mono}>Trojan Pickleball Club, USC</p>
          <h1 className={s.heroTitle}>
            {slogan.map((line, i) => (
              <span key={line} style={{ "--i": i } as React.CSSProperties}>{line}</span>
            ))}
          </h1>
          <p className={s.lede}>USC&apos;s official pickleball club. Open plays, intramurals and a team that competes nationally.</p>
          <div className={s.btns}>
            <Link href="/events" className={`${s.btn} ${s.btnGold}`}>Find open play <Arrow /></Link>
            <Link href="/about" className={s.btn}>About the club <Arrow /></Link>
          </div>
        </div>

        <div className={s.heroMedia}>
          <Image src={heroImages.growth} alt="Player lunging into a drive" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
          <div className={s.tint} />
          <Track
            d="M 34 30 Q 60 4 92 24"
            dots={[[34, 30], [62, 13], [92, 24]]}
            box={[26, 22, 40, 66]}
            label="TRK 01 / DRIVE"
          />
          <div className={s.readout}>
            <span>Shot</span><b>Drive</b>
            <span>Zone</span><b>Baseline</b>
            <span>Status</span><b className={s.on}>Tracking</b>
          </div>
          <span className={s.cross} aria-hidden="true" />
        </div>
      </section>

      {/* WHO */}
      <section className={s.who}>
        <Reveal className={s.whoMedia}>
          <Image src={heroImages.wellness} alt="Player hitting a dink" fill sizes="(max-width: 900px) 100vw, 45vw" />
          <div className={s.tint} />
          <Track d="M 30 22 Q 50 52 74 70" dots={[[30, 22], [74, 70]]} box={[8, 12, 50, 80]} label="TRK 02 / DINK" />
        </Reveal>
        <Reveal className={s.whoText} delay={0.1}>
          <p className={s.mono}>Who we are</p>
          <h2 className={s.h2}>{intro}</h2>
          <p className={s.body}>{introMore}</p>
        </Reveal>
      </section>

      {/* LEVELS */}
      <section className={s.levels}>
        <div className={s.head}>
          <h2 className={s.h2Big}>Ways to play</h2>
          <p className={s.mono}>Three levels, one club</p>
        </div>
        <ol className={s.levelList}>
          {levels.map((l, i) => (
            <li key={l.title}>
              <Link href={l.href} className={s.level}>
                <span className={s.levelImg}>
                  <Image src={l.image} alt="" fill sizes="(max-width: 900px) 100vw, 40vw" />
                  <Track d="M 6 80 Q 50 -10 94 70" dots={[[6, 80], [94, 70]]} className={s.levelTrack} />
                </span>
                <span className={s.levelText}>
                  <span className={s.mono}>Level 0{i + 1}</span>
                  <span className={s.levelTitle}>{l.title}</span>
                  <span className={s.body}>{l.detail}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* GALLERY */}
      <section className={s.gallery}>
        <div className={s.head}>
          <h2 className={s.h2Big}>Footage</h2>
          <p className={s.mono}>{gallery.length} clips logged</p>
        </div>
        <ul className={s.masonry}>
          {gallery.map((g, i) => (
            <Reveal as="li" key={g.src} className={s.shot} delay={(i % 4) * 0.05}>
              <Image src={g.src} alt={g.alt} width={480} height={480} sizes="(max-width: 700px) 50vw, 25vw" />
              <span className={s.shotTag}>TRK {String(i + 3).padStart(2, "0")} / {g.tag}</span>
              <span className={s.reticle} aria-hidden="true" />
            </Reveal>
          ))}
        </ul>
      </section>

      {/* PILLARS */}
      <section className={s.pillars}>
        {pillars.map((p, i) => (
          <Reveal key={p.name} className={s.pillar} delay={i * 0.08}>
            <div className={s.pillarImg}>
              <Image src={p.image} alt="" fill sizes="(max-width: 900px) 50vw, 25vw" />
            </div>
            <h3>{p.name}</h3>
            <p>{p.text}</p>
          </Reveal>
        ))}
      </section>

      {/* SPONSORS */}
      <section className={s.sponsors}>
        <p className={s.mono}>Equipment and partners</p>
        <ul className={s.sponsorGrid}>
          {sponsors.map((sp) => (
            <li key={sp.name}>
              <a href={sp.link} target="_blank" rel="noopener noreferrer" aria-label={sp.name}>
                <Image src={sp.mono} alt="" width={160} height={64} />
              </a>
              {sp.code ? (
                <span className={s.code}>{sp.off} off <CopyCode code={sp.code} className={s.copy} /></span>
              ) : (
                <span className={s.code}>{sp.name}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className={s.cta}>
        <h2 className={s.ctaTitle}>Your rally starts here</h2>
        <Link href="/join" className={`${s.btn} ${s.btnGold}`}>Join the club <Arrow /></Link>
      </section>
    </div>
  );
}
