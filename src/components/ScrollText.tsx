"use client";
import { useEffect, useRef } from "react";

// Words light up one by one as the paragraph scrolls through the viewport.
export default function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--progress", "1");
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(Math.max((vh * 0.85 - rect.top) / (rect.height + vh * 0.35), 0), 1);
      el.style.setProperty("--progress", progress.toFixed(3));
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
  }, []);

  const words = text.split(" ");
  return (
    <p ref={ref} className={className} style={{ "--count": words.length } as React.CSSProperties}>
      {words.map((word, i) => (
        <span key={i} style={{ "--w": i } as React.CSSProperties}>
          {word}{" "}
        </span>
      ))}
    </p>
  );
}
