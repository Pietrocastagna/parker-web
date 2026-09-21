export function SwapSignalIllustration({ className, width = 200, height = 160 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Ground / road */}
      <rect x="0" y="120" width="200" height="40" rx="4" fill="var(--muted)" fillOpacity="0.18" />
      <rect x="0" y="118" width="200" height="4" rx="2" fill="var(--muted)" fillOpacity="0.3" />

      {/* Parking spot lines */}
      <rect x="55" y="122" width="2" height="34" fill="var(--muted)" fillOpacity="0.5" />
      <rect x="105" y="122" width="2" height="34" fill="var(--muted)" fillOpacity="0.5" />

      {/* Car leaving the spot (shifted right, with motion lines) */}
      <g>
        {/* Car body */}
        <rect x="62" y="126" width="36" height="18" rx="5" fill="var(--text)" fillOpacity="0.15" />
        <rect x="66" y="119" width="28" height="12" rx="4" fill="var(--text)" fillOpacity="0.12" />
        {/* Windows */}
        <rect x="69" y="121" width="10" height="7" rx="2" fill="var(--accent)" fillOpacity="0.15" />
        <rect x="81" y="121" width="10" height="7" rx="2" fill="var(--accent)" fillOpacity="0.15" />
        {/* Wheels */}
        <circle cx="70" cy="144" r="4" fill="var(--text)" fillOpacity="0.2" />
        <circle cx="90" cy="144" r="4" fill="var(--text)" fillOpacity="0.2" />
        {/* Headlights */}
        <rect x="98" y="131" width="3" height="4" rx="1" fill="var(--accent)" fillOpacity="0.4" />
      </g>

      {/* Motion lines (car leaving) */}
      <rect x="50" y="130" width="8" height="2" rx="1" fill="var(--accent)" fillOpacity="0.3" />
      <rect x="46" y="136" width="12" height="2" rx="1" fill="var(--accent)" fillOpacity="0.2" />
      <rect x="50" y="142" width="8" height="2" rx="1" fill="var(--accent)" fillOpacity="0.3" />

      {/* Empty spot outline (dashed) */}
      <rect x="112" y="128" width="36" height="18" rx="4" fill="var(--accent)" fillOpacity="0.06" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Smartphone */}
      <g>
        {/* Phone body */}
        <rect x="132" y="28" width="44" height="76" rx="8" fill="var(--text)" fillOpacity="0.1" stroke="var(--text)" strokeOpacity="0.2" strokeWidth="1.5" />
        {/* Screen */}
        <rect x="136" y="38" width="36" height="56" rx="4" fill="var(--accent)" fillOpacity="0.08" />
        {/* Notch */}
        <rect x="147" y="30" width="18" height="4" rx="2" fill="var(--text)" fillOpacity="0.15" />
        {/* Screen content - signal icon */}
        <circle cx="154" cy="58" r="8" fill="var(--accent)" fillOpacity="0.2" />
        <circle cx="154" cy="58" r="5" fill="var(--accent)" />
        {/* Tap indicator on button */}
        <rect x="142" y="78" width="24" height="10" rx="5" fill="var(--accent)" fillOpacity="0.7" />
        <text x="154" y="86" textAnchor="middle" fontSize="7" fontWeight="600" fill="white" fontFamily="system-ui, sans-serif">SEGNALA</text>
      </g>

      {/* Broadcast / signal waves from phone */}
      <path d="M125 48 C120 42, 120 34, 125 28" stroke="var(--accent)" strokeOpacity="0.4" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M120 52 C112 44, 112 32, 120 24" stroke="var(--accent)" strokeOpacity="0.25" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M115 56 C104 46, 104 30, 115 20" stroke="var(--accent)" strokeOpacity="0.15" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Pin marker (available spot) */}
      <g>
        <ellipse cx="130" cy="112" rx="8" ry="2.5" fill="var(--accent)" fillOpacity="0.15" />
        <rect x="128" y="98" width="4" height="16" rx="2" fill="var(--accent)" fillOpacity="0.5" />
        <circle cx="130" cy="88" r="12" fill="var(--accent)" fillOpacity="0.15" />
        <circle cx="130" cy="88" r="9" fill="var(--accent)" />
        <path d="M125 96 L130 104 L135 96" fill="var(--accent)" />
        <text x="130" y="92" textAnchor="middle" fontSize="11" fontWeight="700" fill="white" fontFamily="system-ui, sans-serif">P</text>
      </g>

      {/* Coin / reward indicator */}
      <circle cx="30" cy="50" r="14" fill="var(--accent)" fillOpacity="0.12" />
      <circle cx="30" cy="50" r="10" fill="var(--accent)" fillOpacity="0.25" />
      <text x="30" y="54" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--accent)" fontFamily="system-ui, sans-serif">+</text>

      {/* Decorative dots */}
      <circle cx="15" cy="75" r="2" fill="var(--muted)" fillOpacity="0.15" />
      <circle cx="25" cy="85" r="1.5" fill="var(--muted)" fillOpacity="0.12" />
      <circle cx="10" cy="90" r="1" fill="var(--muted)" fillOpacity="0.1" />
    </svg>
  );
}
