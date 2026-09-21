export function EmptySearchIllustration({ className, width = 160, height = 120 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Magnifying glass — outer ring */}
      <circle cx="70" cy="48" r="28" stroke="var(--accent)" strokeWidth="3" strokeOpacity="0.7" fill="var(--accent)" fillOpacity="0.04" />

      {/* Magnifying glass — inner ring (subtle) */}
      <circle cx="70" cy="48" r="22" stroke="var(--muted)" strokeWidth="1" strokeOpacity="0.2" fill="none" />

      {/* Glass shine */}
      <path d="M56 36 Q60 30 68 32" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3" fill="none" />

      {/* X inside magnifying glass */}
      <line x1="60" y1="40" x2="80" y2="56" stroke="var(--muted)" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.4" />
      <line x1="80" y1="40" x2="60" y2="56" stroke="var(--muted)" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.4" />

      {/* Magnifying glass handle */}
      <line x1="90" y1="68" x2="108" y2="86" stroke="var(--muted)" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.35" />
      <line x1="90" y1="68" x2="108" y2="86" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" />

      {/* Ghost list lines (absent results) */}
      <rect x="112" y="36" width="34" height="3" rx="1.5" fill="var(--muted)" fillOpacity="0.15" />
      <rect x="112" y="44" width="28" height="3" rx="1.5" fill="var(--muted)" fillOpacity="0.12" />
      <rect x="112" y="52" width="32" height="3" rx="1.5" fill="var(--muted)" fillOpacity="0.1" />
      <rect x="112" y="60" width="24" height="3" rx="1.5" fill="var(--muted)" fillOpacity="0.08" />

      {/* Small dots for the absent bullet points */}
      <circle cx="108" cy="37.5" r="1.5" fill="var(--muted)" fillOpacity="0.15" />
      <circle cx="108" cy="45.5" r="1.5" fill="var(--muted)" fillOpacity="0.12" />
      <circle cx="108" cy="53.5" r="1.5" fill="var(--muted)" fillOpacity="0.1" />
      <circle cx="108" cy="61.5" r="1.5" fill="var(--muted)" fillOpacity="0.08" />

      {/* Bottom shadow */}
      <ellipse cx="80" cy="108" rx="48" ry="4" fill="var(--muted)" fillOpacity="0.08" />

      {/* Subtle floating particles */}
      <circle cx="38" cy="28" r="1.5" fill="var(--accent)" fillOpacity="0.25" />
      <circle cx="100" cy="20" r="1" fill="var(--accent)" fillOpacity="0.2" />
      <circle cx="28" cy="62" r="1" fill="var(--muted)" fillOpacity="0.15" />
    </svg>
  );
}
