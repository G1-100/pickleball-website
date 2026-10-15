"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import s from "./page.module.css";
import { useScrollProgress } from "./scroll";

/* ---------- Menu: logo + square gold button, full-screen overlay ---------- */
const menuLinks = [
  { href: "/v/6", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/join", label: "Join" },
];

export function Menu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={s.menuBar}>
        <Link href="/v/6" className={s.menuLogo} aria-label="Trojan Pickleball home">
          <Image src="/images/club_logo.jpg" alt="" width={40} height={40} />
        </Link>
        <button className={s.menuBtn} aria-expanded={open} aria-controls="v6-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
          <span />
          <span />
        </button>
      </header>
      <div id="v6-menu" className={s.menuOverlay} data-open={open || undefined} aria-hidden={!open}>
        <ul>
          {menuLinks.map((l, i) => (
            <li key={l.href} style={{ "--i": i } as CSSProperties}>
              <Link href={l.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                <span className={s.menuNum}>0{i + 1}</span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={s.menuFoot}>
          <a href="https://instagram.com/trojanpickleball" target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>Instagram</a>
          <a href="https://groupme.com/join_group/96038579/dmWghOg2" target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>GroupMe</a>
          <a href="https://linktr.ee/trojan_pickleballl" target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>Linktree</a>
        </div>
      </div>
    </>
  );
}

/* ---------- Hero number that leans toward the cursor ---------- */
export function HeroNumber({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      el.style.setProperty("--mx", x.toFixed(3));
      el.style.setProperty("--my", y.toFixed(3));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return <div ref={ref} className={s.heroNumber}>{children}</div>;
}

/* ---------- Statement: words fill in as you scroll; some are highlighted ---------- */
export function Statement({ parts }: { parts: { text: string; hl?: boolean }[] }) {
  const ref = useScrollProgress<HTMLParagraphElement>("through");
  const words = parts.flatMap((p) => p.text.split(" ").filter(Boolean).map((w) => ({ w, hl: p.hl })));
  return (
    <p ref={ref} className={s.statement} style={{ "--n": words.length } as CSSProperties}>
      {words.map((x, i) => (
        <span key={i} className={x.hl ? s.hl : undefined} style={{ "--i": i } as CSSProperties}>
          {x.w}{" "}
        </span>
      ))}
    </p>
  );
}

/* ---------- Gold trading card with a holographic sheen that follows the pointer ---------- */
export function HoloCard({ src, alt, title, meta, style, className }: { src: string; alt: string; title: string; meta: string; style?: CSSProperties; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--hx", `${x * 100}%`);
    el.style.setProperty("--hy", `${y * 100}%`);
    el.style.setProperty("--ry", `${(x - 0.5) * 18}deg`);
    el.style.setProperty("--rx", `${(0.5 - y) * 14}deg`);
  };
  const onLeave = () => {
    ref.current?.style.setProperty("--ry", "0deg");
    ref.current?.style.setProperty("--rx", "0deg");
  };
  return (
    <figure className={`${s.moment} ${className ?? ""}`} style={style}>
      <div ref={ref} className={s.card} onPointerMove={onMove} onPointerLeave={onLeave}>
        <div className={s.cardInner}>
          <Image src={src} alt={alt} fill sizes="300px" />
          <span className={s.sheen} aria-hidden="true" />
        </div>
      </div>
      <figcaption>
        <span className={s.cardTitle}>{title}</span>
        <span className={s.cardMeta}>{meta}</span>
      </figcaption>
    </figure>
  );
}

/* ---------- LED dot-matrix lines that turn solid as you scroll ---------- */
export function DotQuote({ lines, sub }: { lines: string[]; sub: string }) {
  const ref = useScrollProgress<HTMLElement>("pinned");
  return (
    <section ref={ref} className={s.quote}>
      <div className={s.quoteSticky}>
        <span className={s.quoteMarks} aria-hidden="true">“ ”</span>
        <h2 className={s.quoteText} aria-label={lines.join(" ")}>
          {lines.map((l, i) => (
            <span key={l} className={s.quoteLine} style={{ "--l": i, "--L": lines.length } as CSSProperties} aria-hidden="true">
              <span className={s.dots}>{l}</span>
              <span className={s.solid}>{l}</span>
            </span>
          ))}
        </h2>
        <p className={s.quoteSub}>{sub}</p>
      </div>
    </section>
  );
}

/* ---------- Pinned chapters: image stack scrolls, title and text swap ---------- */
type Chapter = { title: string; text: string; images: string[] };

export function Chapters({ chapters, nextId }: { chapters: Chapter[]; nextId: string }) {
  const [active, setActive] = useState(0);
  const ref = useScrollProgress<HTMLElement>("pinned", (p) => {
    setActive(Math.min(chapters.length - 1, Math.floor(p * chapters.length)));
  });
  const all = chapters.flatMap((c, ci) => c.images.map((src) => ({ src, ci })));

  return (
    <section ref={ref} className={s.chapters} style={{ "--count": chapters.length } as CSSProperties}>
      <div className={s.chSticky}>
        <div className={s.chTitles}>
          {chapters.map((c, i) => (
            <h3 key={c.title} className={s.chTitle} data-on={i === active || undefined}>{c.title}</h3>
          ))}
        </div>
        <div className={s.chStackWrap}>
          <div className={s.chStack}>
            {all.map((img, i) => (
              <div key={img.src + i} className={s.chImg} data-on={img.ci === active || undefined}>
                <Image src={img.src} alt="" fill sizes="(max-width: 900px) 60vw, 22vw" />
              </div>
            ))}
          </div>
        </div>
        <div className={s.chTexts}>
          {chapters.map((c, i) => (
            <p key={c.title} data-on={i === active || undefined}>{c.text}</p>
          ))}
        </div>
        <a href={`#${nextId}`} className={s.skip}>Skip <span aria-hidden="true">»</span></a>
        <span className={s.chCount}>
          <i aria-hidden="true" />
          {active + 1}/{chapters.length}
        </span>
      </div>
    </section>
  );
}

/* ---------- Horizontal media carousel with arrows ---------- */
export function Carousel({ items }: { items: { src: string; alt: string; caption: string }[] }) {
  const track = useRef<HTMLUListElement>(null);
  const go = (dir: number) => {
    const t = track.current;
    if (!t) return;
    t.scrollBy({ left: dir * t.clientWidth * 0.8, behavior: "smooth" });
  };
  return (
    <div className={s.carousel}>
      <div className={s.carArrows}>
        <button onClick={() => go(-1)} aria-label="Previous photos">«</button>
        <button onClick={() => go(1)} aria-label="Next photos">»</button>
      </div>
      <ul ref={track} className={s.carTrack} data-lenis-prevent>
        {items.map((it) => (
          <li key={it.src}>
            <div className={s.carImg}>
              <Image src={it.src} alt={it.alt} fill sizes="(max-width: 700px) 80vw, 30vw" />
            </div>
            <p>{it.caption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
