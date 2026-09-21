export function RealTimeIllustration({ className, width = 120, height = 120 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer pulse rings */}
      <circle cx="60" cy="60" r="56" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.06" fill="none" />
      <circle cx="60" cy="60" r="50" stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.1" fill="none" />
      <circle cx="60" cy="60" r="44" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.15" fill="none" />

      {/* Pulse arcs (radiating signal) - top-right */}
      <path d="M78 28 A38 38 0 0 1 92 42" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" fill="none" fillOpacity="0.3" />
      <path d="M82 22 A46 46 0 0 1 98 38" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.2" />

      {/* Pulse arcs - top-left */}
      <path d="M42 28 A38 38 0 0 0 28 42" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
      <path d="M38 22 A46 46 0 0 0 22 38" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.2" />

      {/* Pulse arcs - bottom */}
      <path d="M40 90 A38 38 0 0 0 80 90" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.15" />

      {/* Clock face background */}
      <circle cx="60" cy="60" r="36" fill="var(--accent)" fillOpacity="0.06" />
      <circle cx="60" cy="60" r="36" stroke="var(--text)" strokeWidth="2" strokeOpacity="0.15" fill="none" />

      {/* Hour markers */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((h) => {
        const angle = (h * 30 - 90) * Math.PI / 180;
        const isMain = h % 3 === 0;
        const r1 = isMain ? 28 : 30;
        const r2 = 33;
        return (
          <line
            key={h}
            x1={60 + r1 * Math.cos(angle)}
            y1={60 + r1 * Math.sin(angle)}
            x2={60 + r2 * Math.cos(angle)}
            y2={60 + r2 * Math.sin(angle)}
            stroke="var(--text)"
            strokeWidth={isMain ? 2 : 1}
            strokeOpacity={isMain ? 0.3 : 0.15}
            strokeLinecap="round"
          />
        );
      })}

      {/* Hour hand (pointing ~10 o'clock) */}
      <line x1="60" y1="60" x2="46" y2="42" stroke="var(--text)" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.4" />

      {/* Minute hand (pointing ~2 o'clock) */}
      <line x1="60" y1="60" x2="78" y2="46" stroke="var(--text)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.3" />

      {/* Second hand (mint accent) */}
      <line x1="60" y1="64" x2="60" y2="32" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Center dot */}
      <circle cx="60" cy="60" r="3" fill="var(--accent)" />
      <circle cx="60" cy="60" r="1.5" fill="white" />

      {/* "LIVE" badge */}
      <g transform="translate(72, 80)">
        <rect x="0" y="0" width="28" height="14" rx="7" fill="var(--accent)" />
        <circle cx="8" cy="7" r="2.5" fill="white" fillOpacity="0.9" />
        <text x="19" y="10.5" textAnchor="middle" fontSize="7" fontWeight="700" fill="white" fontFamily="system-ui, sans-serif">LIVE</text>
      </g>
    </svg>
  );
}
