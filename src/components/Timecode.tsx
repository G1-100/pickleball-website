"use client";
import { useEffect, useState } from "react";

// Running HH:MM:SS:FF counter, like a broadcast/recording timecode.
export default function Timecode({ className }: { className?: string }) {
  const [t, setT] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now();
    const id = setInterval(() => setT(performance.now() - start), 1000 / 24);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(Math.floor(n)).padStart(2, "0");
  const s = t / 1000;
  return (
    <span className={className} aria-hidden="true">
      {pad(s / 3600)}:{pad((s / 60) % 60)}:{pad(s % 60)}:{pad(((t % 1000) / 1000) * 24)}
    </span>
  );
}
