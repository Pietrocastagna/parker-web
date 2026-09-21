export function NavigateIllustration({ className, width = 200, height = 160 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Map background */}
      <rect x="10" y="10" width="180" height="140" rx="10" fill="var(--muted)" fillOpacity="0.08" />

      {/* Map grid roads (horizontal) */}
      <rect x="10" y="40" width="180" height="3" rx="1.5" fill="var(--muted)" fillOpacity="0.12" />
      <rect x="10" y="75" width="180" height="3" rx="1.5" fill="var(--muted)" fillOpacity="0.12" />
      <rect x="10" y="110" width="180" height="3" rx="1.5" fill="var(--muted)" fillOpacity="0.12" />

      {/* Map grid roads (vertical) */}
      <rect x="50" y="10" width="3" height="140" rx="1.5" fill="var(--muted)" fillOpacity="0.12" />
      <rect x="100" y="10" width="3" height="140" rx="1.5" fill="var(--muted)" fillOpacity="0.12" />
      <rect x="150" y="10" width="3" height="140" rx="1.5" fill="var(--muted)" fillOpacity="0.12" />

      {/* Map blocks (buildings) */}
      <rect x="15" y="15" width="30" height="20" rx="3" fill="var(--muted)" fillOpacity="0.1" />
      <rect x="57" y="15" width="38" height="20" rx="3" fill="var(--muted)" fillOpacity="0.08" />
      <rect x="108" y="15" width="36" height="20" rx="3" fill="var(--muted)" fillOpacity="0.1" />
      <rect x="15" y="48" width="30" height="22" rx="3" fill="var(--muted)" fillOpacity="0.08" />
      <rect x="57" y="48" width="38" height="22" rx="3" fill="var(--muted)" fillOpacity="0.1" />
      <rect x="108" y="48" width="36" height="22" rx="3" fill="var(--muted)" fillOpacity="0.07" />
      <rect x="157" y="48" width="28" height="22" rx="3" fill="var(--muted)" fillOpacity="0.09" />
      <rect x="15" y="82" width="30" height="24" rx="3" fill="var(--muted)" fillOpacity="0.1" />
      <rect x="108" y="82" width="36" height="24" rx="3" fill="var(--muted)" fillOpacity="0.08" />
      <rect x="157" y="82" width="28" height="24" rx="3" fill="var(--muted)" fillOpacity="0.1" />
      <rect x="15" y="118" width="30" height="26" rx="3" fill="var(--muted)" fillOpacity="0.07" />
      <rect x="57" y="118" width="38" height="26" rx="3" fill="var(--muted)" fillOpacity="0.09" />

      {/* Route path (dashed mint line) */}
      <path
        d="M38 130 L38 111 L51.5 111 L51.5 76.5 L101.5 76.5 L101.5 41.5 L155 41.5 L155 32"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6 4"
        fill="none"
      />

      {/* Route glow */}
      <path
        d="M38 130 L38 111 L51.5 111 L51.5 76.5 L101.5 76.5 L101.5 41.5 L155 41.5 L155 32"
        stroke="var(--accent)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.08"
      />

      {/* Car icon at start */}
      <g transform="translate(28, 130)">
        <rect x="0" y="2" width="20" height="10" rx="3" fill="var(--text)" fillOpacity="0.2" />
        <rect x="3" y="-2" width="14" height="7" rx="2.5" fill="var(--text)" fillOpacity="0.15" />
        <circle cx="5" cy="12" r="2.5" fill="var(--text)" fillOpacity="0.25" />
        <circle cx="15" cy="12" r="2.5" fill="var(--text)" fillOpacity="0.25" />
      </g>

      {/* Destination pin */}
      <g transform="translate(146, 10)">
        <ellipse cx="9" cy="24" rx="6" ry="2" fill="var(--accent)" fillOpacity="0.2" />
        <path d="M9 0 C4 0 0 4 0 9 C0 15 9 24 9 24 C9 24 18 15 18 9 C18 4 14 0 9 0Z" fill="var(--accent)" />
        <circle cx="9" cy="9" r="4" fill="white" fillOpacity="0.9" />
        <circle cx="9" cy="9" r="2" fill="var(--accent)" />
      </g>

      {/* Distance label */}
      <g transform="translate(108, 118)">
        <rect x="0" y="0" width="50" height="18" rx="9" fill="var(--accent)" fillOpacity="0.12" />
        <text x="25" y="12.5" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--accent)" fontFamily="system-ui, sans-serif">1.2 km</text>
      </g>
    </svg>
  );
}
