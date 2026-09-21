export function SuccessIllustration({ className, width = 160, height = 120 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer glow ring */}
      <circle cx="80" cy="56" r="40" fill="var(--accent)" fillOpacity="0.06" />
      <circle cx="80" cy="56" r="34" fill="var(--accent)" fillOpacity="0.08" />

      {/* Main circle */}
      <circle cx="80" cy="56" r="28" fill="var(--accent)" fillOpacity="0.9" />

      {/* Inner circle highlight */}
      <circle cx="80" cy="56" r="24" fill="var(--accent)" />

      {/* Checkmark */}
      <path d="M66 56 L75 65 L94 46" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Circle shine */}
      <path d="M64 42 Q70 34 80 36" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3" fill="none" />

      {/* Confetti — top-left sparkle */}
      <g>
        <line x1="34" y1="24" x2="34" y2="32" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
        <line x1="30" y1="28" x2="38" y2="28" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
      </g>

      {/* Confetti — top-right sparkle */}
      <g>
        <line x1="126" y1="22" x2="126" y2="30" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
        <line x1="122" y1="26" x2="130" y2="26" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
      </g>

      {/* Confetti — small diamonds */}
      <path d="M22 50 L24 46 L26 50 L24 54 Z" fill="var(--accent)" fillOpacity="0.4" />
      <path d="M138 44 L140 40 L142 44 L140 48 Z" fill="var(--accent)" fillOpacity="0.35" />
      <path d="M48 14 L50 10 L52 14 L50 18 Z" fill="var(--accent)" fillOpacity="0.3" />

      {/* Confetti — small rectangles (party confetti) */}
      <rect x="110" y="72" width="4" height="8" rx="1" fill="var(--accent)" fillOpacity="0.25" transform="rotate(25 112 76)" />
      <rect x="42" y="76" width="4" height="8" rx="1" fill="var(--accent)" fillOpacity="0.2" transform="rotate(-20 44 80)" />
      <rect x="120" y="58" width="3" height="6" rx="1" fill="var(--accent)" fillOpacity="0.2" transform="rotate(40 121.5 61)" />

      {/* Confetti — dots */}
      <circle cx="16" cy="38" r="2" fill="var(--accent)" fillOpacity="0.25" />
      <circle cx="144" cy="64" r="2" fill="var(--accent)" fillOpacity="0.2" />
      <circle cx="104" cy="14" r="1.5" fill="var(--accent)" fillOpacity="0.3" />
      <circle cx="56" cy="8" r="1.5" fill="var(--accent)" fillOpacity="0.25" />
      <circle cx="30" cy="68" r="1" fill="var(--accent)" fillOpacity="0.2" />
      <circle cx="132" cy="36" r="1.5" fill="var(--accent)" fillOpacity="0.3" />

      {/* Confetti — small lines (streamers) */}
      <line x1="148" y1="50" x2="152" y2="44" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3" />
      <line x1="12" y1="54" x2="8" y2="48" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.25" />
      <line x1="66" y1="4" x2="70" y2="10" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.2" />

      {/* Bottom shadow */}
      <ellipse cx="80" cy="104" rx="30" ry="4" fill="var(--accent)" fillOpacity="0.1" />
    </svg>
  );
}
