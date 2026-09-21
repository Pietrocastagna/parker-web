export function GarageIllustration({ className, width = 240, height = 160 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Ground */}
      <rect x="0" y="140" width="240" height="20" rx="4" fill="var(--muted)" fillOpacity="0.1" />
      <rect x="0" y="138" width="240" height="3" rx="1.5" fill="var(--muted)" fillOpacity="0.15" />

      {/* Building shadow */}
      <rect x="42" y="142" width="160" height="6" rx="2" fill="var(--text)" fillOpacity="0.04" />

      {/* Garage building */}
      <g>
        {/* Main structure */}
        <rect x="40" y="20" width="160" height="120" rx="4" fill="var(--text)" fillOpacity="0.06" stroke="var(--text)" strokeOpacity="0.1" strokeWidth="1.5" />

        {/* Floor lines */}
        <line x1="40" y1="60" x2="200" y2="60" stroke="var(--text)" strokeOpacity="0.08" strokeWidth="1" />
        <line x1="40" y1="100" x2="200" y2="100" stroke="var(--text)" strokeOpacity="0.08" strokeWidth="1" />

        {/* Level 3 (top) - window slots */}
        <rect x="52" y="28" width="20" height="24" rx="2" fill="var(--muted)" fillOpacity="0.08" stroke="var(--muted)" strokeOpacity="0.1" strokeWidth="0.5" />
        <rect x="80" y="28" width="20" height="24" rx="2" fill="var(--muted)" fillOpacity="0.08" stroke="var(--muted)" strokeOpacity="0.1" strokeWidth="0.5" />
        <rect x="108" y="28" width="20" height="24" rx="2" fill="var(--muted)" fillOpacity="0.08" stroke="var(--muted)" strokeOpacity="0.1" strokeWidth="0.5" />
        <rect x="136" y="28" width="20" height="24" rx="2" fill="var(--muted)" fillOpacity="0.08" stroke="var(--muted)" strokeOpacity="0.1" strokeWidth="0.5" />
        <rect x="164" y="28" width="20" height="24" rx="2" fill="var(--muted)" fillOpacity="0.08" stroke="var(--muted)" strokeOpacity="0.1" strokeWidth="0.5" />

        {/* Level 2 - window slots */}
        <rect x="52" y="68" width="20" height="24" rx="2" fill="var(--muted)" fillOpacity="0.08" stroke="var(--muted)" strokeOpacity="0.1" strokeWidth="0.5" />
        <rect x="80" y="68" width="20" height="24" rx="2" fill="var(--muted)" fillOpacity="0.08" stroke="var(--muted)" strokeOpacity="0.1" strokeWidth="0.5" />
        <rect x="108" y="68" width="20" height="24" rx="2" fill="var(--accent)" fillOpacity="0.08" stroke="var(--accent)" strokeOpacity="0.15" strokeWidth="0.5" />
        <rect x="136" y="68" width="20" height="24" rx="2" fill="var(--muted)" fillOpacity="0.08" stroke="var(--muted)" strokeOpacity="0.1" strokeWidth="0.5" />
        <rect x="164" y="68" width="20" height="24" rx="2" fill="var(--muted)" fillOpacity="0.08" stroke="var(--muted)" strokeOpacity="0.1" strokeWidth="0.5" />

        {/* Level 1 (ground) - entrance */}
        <rect x="90" y="104" width="60" height="36" rx="3" fill="var(--text)" fillOpacity="0.04" stroke="var(--text)" strokeOpacity="0.1" strokeWidth="1" />
        {/* Entrance stripes */}
        <rect x="90" y="104" width="60" height="4" fill="var(--accent)" fillOpacity="0.15" />
        {/* Barrier arm */}
        <rect x="88" y="126" width="64" height="3" rx="1.5" fill="var(--accent)" fillOpacity="0.5" />
        <rect x="86" y="122" width="4" height="16" rx="1" fill="var(--text)" fillOpacity="0.15" />

        {/* Side windows level 1 */}
        <rect x="52" y="108" width="20" height="24" rx="2" fill="var(--muted)" fillOpacity="0.08" stroke="var(--muted)" strokeOpacity="0.1" strokeWidth="0.5" />
        <rect x="164" y="108" width="20" height="24" rx="2" fill="var(--muted)" fillOpacity="0.08" stroke="var(--muted)" strokeOpacity="0.1" strokeWidth="0.5" />
      </g>

      {/* P sign on building */}
      <g transform="translate(100, 6)">
        <rect x="0" y="0" width="40" height="20" rx="4" fill="var(--accent)" />
        <text x="20" y="15" textAnchor="middle" fontSize="14" fontWeight="700" fill="white" fontFamily="system-ui, sans-serif">P</text>
      </g>

      {/* Car 1 entering (at entrance) */}
      <g transform="translate(96, 128)">
        <rect x="0" y="0" width="22" height="9" rx="3" fill="var(--text)" fillOpacity="0.15" />
        <rect x="3" y="-4" width="16" height="6" rx="2" fill="var(--text)" fillOpacity="0.1" />
        <circle cx="5" cy="9" r="2.5" fill="var(--text)" fillOpacity="0.2" />
        <circle cx="17" cy="9" r="2.5" fill="var(--text)" fillOpacity="0.2" />
        {/* Headlights */}
        <rect x="22" y="2" width="2" height="3" rx="1" fill="var(--accent)" fillOpacity="0.4" />
      </g>

      {/* Car 2 approaching (on road) */}
      <g transform="translate(30, 130)">
        <rect x="0" y="0" width="22" height="9" rx="3" fill="var(--text)" fillOpacity="0.12" />
        <rect x="3" y="-4" width="16" height="6" rx="2" fill="var(--text)" fillOpacity="0.08" />
        <circle cx="5" cy="9" r="2.5" fill="var(--text)" fillOpacity="0.15" />
        <circle cx="17" cy="9" r="2.5" fill="var(--text)" fillOpacity="0.15" />
        <rect x="22" y="2" width="2" height="3" rx="1" fill="var(--accent)" fillOpacity="0.25" />
      </g>

      {/* Car 3 inside level 2 */}
      <g transform="translate(112, 78)">
        <rect x="0" y="0" width="12" height="6" rx="2" fill="var(--accent)" fillOpacity="0.3" />
        <rect x="2" y="-2" width="8" height="4" rx="1.5" fill="var(--accent)" fillOpacity="0.2" />
      </g>

      {/* Ramp indicator */}
      <path d="M196 100 L210 140" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.15" strokeDasharray="3 2" />
      <path d="M196 60 L210 100" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.1" strokeDasharray="3 2" />

      {/* Arrow pointing to entrance */}
      <path d="M60 145 L82 145" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.35" />
      <path d="M78 142 L82 145 L78 148" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" />
    </svg>
  );
}
