"use client";
import { useEffect, useRef } from "react";

type Vec = [number, number, number];

// Evenly spread points on a unit sphere.
function fibonacciSphere(n: number): Vec[] {
  const pts: Vec[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const t = golden * i;
    pts.push([Math.cos(t) * r, y, Math.sin(t) * r]);
  }
  return pts;
}

const dot = (a: Vec, b: Vec) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

// Builds a pickleball out of points: a shell with 40 holes, each hole outlined by a ring.
function buildBall(): { pos: Vec; rim: boolean }[] {
  const holes = fibonacciSphere(40);
  const holeR = 0.2;
  const cosHole = Math.cos(holeR);
  const out: { pos: Vec; rim: boolean }[] = [];

  for (const p of fibonacciSphere(7000)) {
    if (holes.every((h) => dot(p, h) < cosHole)) out.push({ pos: p, rim: false });
  }

  for (const h of holes) {
    // orthonormal basis around the hole centre
    const a: Vec = Math.abs(h[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
    const u: Vec = [h[1] * a[2] - h[2] * a[1], h[2] * a[0] - h[0] * a[2], h[0] * a[1] - h[1] * a[0]];
    const ul = Math.hypot(...u);
    u[0] /= ul; u[1] /= ul; u[2] /= ul;
    const v: Vec = [h[1] * u[2] - h[2] * u[1], h[2] * u[0] - h[0] * u[2], h[0] * u[1] - h[1] * u[0]];
    const steps = 26;
    for (let i = 0; i < steps; i++) {
      const t = (i / steps) * Math.PI * 2;
      const s = Math.sin(holeR);
      const c = Math.cos(holeR);
      out.push({
        pos: [
          h[0] * c + (u[0] * Math.cos(t) + v[0] * Math.sin(t)) * s,
          h[1] * c + (u[1] * Math.cos(t) + v[1] * Math.sin(t)) * s,
          h[2] * c + (u[2] * Math.cos(t) + v[2] * Math.sin(t)) * s,
        ],
        rim: true,
      });
    }
  }
  return out;
}

export default function PointBall({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const points = buildBall();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let frame = 0;
    let visible = true;
    let rotY = 0.6;
    const tilt = { x: 0.35, y: 0, tx: 0.35, ty: 0 };
    let intro = reduced ? 1 : 0;
    const start = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    };

    const draw = (now: number) => {
      const elapsed = (now - start) / 1000;
      if (!reduced) {
        intro = Math.min(elapsed / 2.4, 1);
        rotY += 0.0022;
        tilt.x += (tilt.tx - tilt.x) * 0.04;
        tilt.y += (tilt.ty - tilt.y) * 0.04;
      }
      const ease = 1 - Math.pow(1 - intro, 4);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const wide = w > 900;
      const R = Math.min(w, h) * (wide ? 0.34 : 0.3);
      const cx = wide ? w * 0.62 : w / 2;
      const cy = h * (wide ? 0.44 : 0.4);
      const ry = rotY + tilt.y;
      const cosY = Math.cos(ry), sinY = Math.sin(ry);
      const cosX = Math.cos(tilt.x), sinX = Math.sin(tilt.x);
      const persp = 3.2;

      // soft floor shadow
      const g = ctx.createRadialGradient(cx, cy + R * 1.32, 0, cx, cy + R * 1.32, R * 0.9);
      g.addColorStop(0, `rgba(212, 236, 90, ${0.045 * ease})`);
      g.addColorStop(1, "rgba(212, 236, 90, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(cx, cy + R * 1.32, R * 0.9, R * 0.16, 0, 0, Math.PI * 2);
      ctx.fill();

      for (let i = 0; i < points.length; i++) {
        const { pos, rim } = points[i];
        // points gather in from a wider scatter during the intro
        const spread = 1 + (1 - ease) * (0.6 + ((i * 7919) % 100) / 60);
        let x = pos[0] * spread, y = pos[1] * spread, z = pos[2] * spread;
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        x = x1; y = y1; z = z2;
        const scale = persp / (persp - z);
        const px = cx + x * R * scale;
        const py = cy + y * R * scale;
        const depth = (z + 1) / 2; // 0 back, 1 front
        const alpha = (0.05 + Math.pow(depth, 1.6) * 0.95) * ease * (rim ? 1 : 0.75);
        const size = (rim ? 2 : 1.5) * scale;
        ctx.fillStyle = rim
          ? `rgba(226, 244, 140, ${alpha})`
          : `rgba(236, 235, 232, ${alpha * 0.85})`;
        ctx.fillRect(px - size / 2, py - size / 2, size, size);
      }

      if (!reduced && visible) frame = requestAnimationFrame(draw);
    };

    const onPointer = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      tilt.ty = nx * 0.9;
      tilt.tx = 0.35 + ny * 0.5;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduced) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(draw);
      }
    });

    const onResize = () => {
      resize();
      if (reduced) draw(performance.now());
    };

    resize();
    draw(performance.now());
    io.observe(canvas);
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
