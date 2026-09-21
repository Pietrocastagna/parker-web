export function CarwashIllustration({ className, width = 240, height = 160 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Ground */}
      <rect x="0" y="130" width="240" height="30" rx="4" fill="var(--muted)" fillOpacity="0.1" />
      <rect x="0" y="128" width="240" height="3" rx="1.5" fill="var(--muted)" fillOpacity="0.12" />

      {/* Water puddle on ground */}
      <ellipse cx="120" cy="140" rx="50" ry="5" fill="var(--info)" fillOpacity="0.08" />
      <ellipse cx="120" cy="140" rx="30" ry="3" fill="var(--info)" fillOpacity="0.06" />

      {/* Car body */}
      <g transform="translate(70, 86)">
        {/* Car body lower */}
        <rect x="0" y="12" width="100" height="30" rx="6" fill="var(--text)" fillOpacity="0.1" stroke="var(--text)" strokeOpacity="0.12" strokeWidth="1.5" />
        {/* Car body upper (cabin) */}
        <rect x="18" y="0" width="64" height="18" rx="6" fill="var(--text)" fillOpacity="0.08" stroke="var(--text)" strokeOpacity="0.1" strokeWidth="1" />
        {/* Windshield */}
        <path d="M22 16 L30 4 L50 4 L50 16 Z" fill="var(--info)" fillOpacity="0.1" stroke="var(--info)" strokeOpacity="0.15" strokeWidth="0.5" />
        {/* Rear window */}
        <path d="M78 16 L70 4 L54 4 L54 16 Z" fill="var(--info)" fillOpacity="0.08" stroke="var(--info)" strokeOpacity="0.1" strokeWidth="0.5" />
        {/* Wheels */}
        <circle cx="22" cy="42" r="8" fill="var(--text)" fillOpacity="0.18" />
        <circle cx="22" cy="42" r="4" fill="var(--text)" fillOpacity="0.08" />
        <circle cx="78" cy="42" r="8" fill="var(--text)" fillOpacity="0.18" />
        <circle cx="78" cy="42" r="4" fill="var(--text)" fillOpacity="0.08" />
        {/* Headlights */}
        <rect x="96" y="20" width="5" height="8" rx="2" fill="var(--info)" fillOpacity="0.2" />
        <rect x="-1" y="20" width="5" height="8" rx="2" fill="var(--info)" fillOpacity="0.15" />
      </g>

      {/* Water spray arcs from top - left nozzle */}
      <g>
        <line x1="95" y1="30" x2="95" y2="20" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" />
        <circle cx="95" cy="18" r="3" fill="var(--info)" fillOpacity="0.2" />
        {/* Spray lines */}
        <path d="M95 22 L80 50" stroke="var(--info)" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
        <path d="M95 22 L85 55" stroke="var(--info)" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
        <path d="M95 22 L90 52" stroke="var(--info)" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        <path d="M95 22 L75 45" stroke="var(--info)" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
        <path d="M95 22 L100 50" stroke="var(--info)" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      </g>

      {/* Water spray arcs from top - right nozzle */}
      <g>
        <line x1="145" y1="30" x2="145" y2="20" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" />
        <circle cx="145" cy="18" r="3" fill="var(--info)" fillOpacity="0.2" />
        {/* Spray lines */}
        <path d="M145 22 L130 48" stroke="var(--info)" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
        <path d="M145 22 L140 52" stroke="var(--info)" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        <path d="M145 22 L150 50" stroke="var(--info)" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
        <path d="M145 22 L155 48" stroke="var(--info)" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
        <path d="M145 22 L160 45" stroke="var(--info)" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
      </g>

      {/* Overhead bar / structure */}
      <rect x="60" y="14" width="120" height="4" rx="2" fill="var(--muted)" fillOpacity="0.2" />
      <rect x="58" y="10" width="4" height="120" rx="2" fill="var(--muted)" fillOpacity="0.12" />
      <rect x="178" y="10" width="4" height="120" rx="2" fill="var(--muted)" fillOpacity="0.12" />

      {/* Water droplets falling */}
      {[
        { x: 88, y: 58, r: 2 },
        { x: 102, y: 50, r: 1.5 },
        { x: 112, y: 62, r: 2.5 },
        { x: 125, y: 48, r: 1.8 },
        { x: 138, y: 55, r: 2 },
        { x: 148, y: 60, r: 1.5 },
        { x: 155, y: 52, r: 1.8 },
        { x: 82, y: 68, r: 1.2 },
        { x: 160, y: 65, r: 1.3 },
        { x: 108, y: 72, r: 1 },
        { x: 130, y: 70, r: 1.4 },
      ].map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="var(--info)" fillOpacity={0.15 + (i % 3) * 0.08} />
      ))}

      {/* Soap bubbles */}
      {[
        { x: 100, y: 75, r: 6 },
        { x: 118, y: 68, r: 8 },
        { x: 135, y: 78, r: 5 },
        { x: 152, y: 72, r: 7 },
        { x: 85, y: 82, r: 4 },
        { x: 165, y: 82, r: 3.5 },
        { x: 108, y: 82, r: 5 },
        { x: 140, y: 85, r: 4.5 },
      ].map((b, i) => (
        <g key={i}>
          <circle cx={b.x} cy={b.y} r={b.r} fill="white" fillOpacity="0.15" stroke="var(--info)" strokeWidth="0.5" strokeOpacity="0.2" />
          <circle cx={b.x - b.r * 0.3} cy={b.y - b.r * 0.3} r={b.r * 0.25} fill="white" fillOpacity="0.3" />
        </g>
      ))}

      {/* Sparkle stars (clean shine) */}
      {[
        { x: 30, y: 40 },
        { x: 210, y: 50 },
        { x: 25, y: 80 },
        { x: 215, y: 90 },
      ].map((s, i) => (
        <g key={i} opacity={0.15 + i * 0.05}>
          <line x1={s.x - 4} y1={s.y} x2={s.x + 4} y2={s.y} stroke="var(--info)" strokeWidth="1" strokeLinecap="round" />
          <line x1={s.x} y1={s.y - 4} x2={s.x} y2={s.y + 4} stroke="var(--info)" strokeWidth="1" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}
