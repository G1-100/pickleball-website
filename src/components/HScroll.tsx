"use client";
import { useEffect, useRef, type ReactNode } from "react";

// Pins a row while the page scrolls, translating it sideways so vertical scroll drives the filmstrip.
export default function HScroll({ children, className, trackClassName }: { children: ReactNode; className?: string; trackClassName?: string }) {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = outer.current;
    const t = track.current;
    if (!o || !t) return;
    let frame = 0;

    const size = () => {
      const extra = Math.max(t.scrollWidth - window.innerWidth, 0);
      o.style.height = `${window.innerHeight + extra}px`;
      update();
    };

    const update = () => {
      frame = 0;
      const rect = o.getBoundingClientRect();
      const extra = Math.max(t.scrollWidth - window.innerWidth, 0);
      const progress = Math.min(Math.max(-rect.top / Math.max(rect.height - window.innerHeight, 1), 0), 1);
      t.style.transform = `translate3d(${-extra * progress}px, 0, 0)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    size();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", size);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", size);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={outer} className={className} style={{ position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div ref={track} className={trackClassName} style={{ display: "flex", willChange: "transform" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
