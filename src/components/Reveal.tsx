"use client";
import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  [key: `data-${string}`]: string | undefined;
};

// Adds `is-in` once the element scrolls into view; styling lives in globals.css (.reveal).
export default function Reveal({ children, as: Tag = "div", className = "", delay = 0, style, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag {...rest} ref={ref} className={`reveal ${className}`} style={{ ...style, "--delay": `${delay}s` } as CSSProperties}>
      {children}
    </Tag>
  );
}
