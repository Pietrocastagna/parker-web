export function EmptyBoxIllustration({ className, width = 160, height = 120 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Shadow under box */}
      <ellipse cx="80" cy="108" rx="40" ry="6" fill="var(--muted)" fillOpacity="0.12" />

      {/* Box back panel (3D perspective) */}
      <path d="M40 45 L80 30 L120 45 L120 85 L80 100 L40 85 Z" fill="var(--muted)" fillOpacity="0.06" stroke="var(--muted)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Box front-left panel */}
      <path d="M40 45 L80 60 L80 100 L40 85 Z" fill="var(--muted)" fillOpacity="0.08" stroke="var(--muted)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Box front-right panel */}
      <path d="M120 45 L80 60 L80 100 L120 85 Z" fill="var(--muted)" fillOpacity="0.05" stroke="var(--muted)" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Box top edge lines (open flaps) */}
      <path d="M40 45 L25 32" stroke="var(--muted)" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M80 30 L80 18" stroke="var(--muted)" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M120 45 L135 32" stroke="var(--muted)" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />

      {/* Left flap (open) */}
      <path d="M40 45 L25 32 L58 18 L80 30 Z" fill="var(--muted)" fillOpacity="0.05" stroke="var(--muted)" strokeOpacity="0.2" strokeWidth="1" />

      {/* Right flap (open) */}
      <path d="M120 45 L135 32 L102 18 L80 30 Z" fill="var(--muted)" fillOpacity="0.04" stroke="var(--muted)" strokeOpacity="0.2" strokeWidth="1" />

      {/* Sparkle 1 — top center */}
      <g>
        <line x1="80" y1="4" x2="80" y2="14" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7" />
        <line x1="75" y1="9" x2="85" y2="9" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7" />
      </g>

      {/* Sparkle 2 — top-left */}
      <g>
        <line x1="50" y1="12" x2="50" y2="20" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
        <line x1="46" y1="16" x2="54" y2="16" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
      </g>

      {/* Sparkle 3 — top-right */}
      <g>
        <line x1="112" y1="14" x2="112" y2="22" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
        <line x1="108" y1="18" x2="116" y2="18" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
      </g>

      {/* Small diamond sparkle — right */}
      <path d="M130 24 L132 20 L134 24 L132 28 Z" fill="var(--accent)" fillOpacity="0.4" />

      {/* Small diamond sparkle — left */}
      <path d="M32 22 L34 18 L36 22 L34 26 Z" fill="var(--accent)" fillOpacity="0.35" />

      {/* Dot accents */}
      <circle cx="65" cy="6" r="1.5" fill="var(--accent)" fillOpacity="0.4" />
      <circle cx="98" cy="10" r="1" fill="var(--accent)" fillOpacity="0.3" />
      <circle cx="140" cy="38" r="1.5" fill="var(--muted)" fillOpacity="0.2" />
    </svg>
  );
}
