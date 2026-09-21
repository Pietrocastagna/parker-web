export function NavigationFeatIllustration({ className, width = 120, height = 120 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background circle */}
      <circle cx="60" cy="54" r="46" fill="var(--accent)" fillOpacity="0.05" />

      {/* Compass outer ring */}
      <circle cx="60" cy="54" r="38" stroke="var(--muted)" strokeWidth="1.5" strokeOpacity="0.15" fill="none" />
      <circle cx="60" cy="54" r="34" stroke="var(--muted)" strokeWidth="1" strokeOpacity="0.1" fill="none" />

      {/* Cardinal direction marks */}
      {/* N */}
      <line x1="60" y1="16" x2="60" y2="22" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      <text x="60" y="13" textAnchor="middle" fontSize="7" fontWeight="700" fill="var(--accent)" fontFamily="system-ui, sans-serif">N</text>
      {/* S */}
      <line x1="60" y1="86" x2="60" y2="92" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3" />
      {/* E */}
      <line x1="92" y1="54" x2="98" y2="54" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3" />
      {/* W */}
      <line x1="22" y1="54" x2="28" y2="54" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3" />

      {/* Minor tick marks */}
      {[45, 135, 225, 315].map((deg) => {
        const rad = (deg - 90) * Math.PI / 180;
        return (
          <line
            key={deg}
            x1={60 + 35 * Math.cos(rad)}
            y1={54 + 35 * Math.sin(rad)}
            x2={60 + 38 * Math.cos(rad)}
            y2={54 + 38 * Math.sin(rad)}
            stroke="var(--muted)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeOpacity="0.2"
          />
        );
      })}

      {/* Navigation arrow pointing NE */}
      <g transform="translate(60, 54)">
        {/* Arrow shadow */}
        <path d="M0 -22 L14 14 L0 6 L-14 14 Z" fill="var(--accent)" fillOpacity="0.1" transform="rotate(45) translate(1, 1)" />
        {/* North half (filled mint) */}
        <path d="M0 -22 L14 14 L0 6 Z" fill="var(--accent)" transform="rotate(45)" />
        {/* South half (darker) */}
        <path d="M0 -22 L-14 14 L0 6 Z" fill="var(--accent)" fillOpacity="0.45" transform="rotate(45)" />
      </g>

      {/* Center dot */}
      <circle cx="60" cy="54" r="3" fill="white" stroke="var(--accent)" strokeWidth="1.5" />

      {/* Curved road path below */}
      <path
        d="M16 105 C30 95, 50 108, 65 98 C80 88, 90 102, 104 95"
        stroke="var(--muted)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        strokeOpacity="0.15"
      />
      <path
        d="M16 105 C30 95, 50 108, 65 98 C80 88, 90 102, 104 95"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        strokeOpacity="0.35"
        strokeDasharray="4 3"
      />

      {/* Small position dot on road */}
      <circle cx="65" cy="98" r="3" fill="var(--accent)" />
      <circle cx="65" cy="98" r="6" fill="var(--accent)" fillOpacity="0.15" />
    </svg>
  );
}
