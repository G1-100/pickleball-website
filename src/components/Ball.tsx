// The club's lime pickleball, drawn as an SVG so it can spin and bounce.
export default function Ball({ className, size = 48 }: { className?: string; size?: number }) {
  const holes = [
    [50, 22], [27, 34], [73, 34], [50, 50], [22, 58], [78, 58], [36, 74], [64, 74], [50, 86],
  ];
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="var(--ball)" />
      <circle cx="50" cy="50" r="48" fill="url(#ballShade)" />
      {holes.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="#8fa81a" />
      ))}
      <defs>
        <radialGradient id="ballShade" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#fff" stopOpacity="0" />
          <stop offset="100%" stopColor="#4d5e00" stopOpacity="0.35" />
        </radialGradient>
      </defs>
    </svg>
  );
}
