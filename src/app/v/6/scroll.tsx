"use client";
import Lenis from "lenis";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Inertial smooth scrolling for the whole page while this variation is open.
export function SmoothScroll() {
  useEffect(() => {
    if (reduced()) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let frame = 0;
    const raf = (t: number) => {
      lenis.raf(t);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
  return null;
}

type Mode = "through" | "pinned";

// Writes scroll progress (0..1) into --p on the element.
// "through": from the element entering the bottom of the viewport to leaving the top.
// "pinned": across a tall section whose child is position: sticky.
export function useScrollProgress<T extends HTMLElement>(mode: Mode, onProgress?: (p: number) => void) {
  const ref = useRef<T>(null);
  const cb = useRef(onProgress);
  cb.current = onProgress;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p =
        mode === "pinned"
          ? -r.top / Math.max(r.height - vh, 1)
          : (vh - r.top) / (vh + r.height);
      const c = Math.min(Math.max(p, 0), 1);
      el.style.setProperty("--p", c.toFixed(4));
      cb.current?.(c);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [mode]);

  return ref;
}

// Drifts its content vertically at a different rate from the page.
// The inner element's transform lives in CSS (innerClassName) so reduced motion can switch it off.
export function Parallax({ children, speed = 0.2, className, innerClassName, style }: { children: ReactNode; speed?: number; className?: string; innerClassName?: string; style?: CSSProperties }) {
  const ref = useScrollProgress<HTMLDivElement>("through");
  return (
    <div ref={ref} className={className} style={{ ...style, "--speed": speed } as CSSProperties}>
      <div className={innerClassName}>{children}</div>
    </div>
  );
}

// Reports scroll progress through its section to CSS (--p) for pure-CSS choreography.
export function ScrollSection({ children, className, mode = "through", id }: { children: ReactNode; className?: string; mode?: Mode; id?: string }) {
  const ref = useScrollProgress<HTMLElement>(mode);
  return (
    <section ref={ref} className={className} id={id}>
      {children}
    </section>
  );
}
