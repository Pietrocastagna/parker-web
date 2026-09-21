export function NotificationIllustration({ className, width = 120, height = 120 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sound wave arcs - right side */}
      <path d="M82 42 A16 16 0 0 1 82 72" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.2" />
      <path d="M88 36 A24 24 0 0 1 88 78" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.12" />
      <path d="M94 30 A32 32 0 0 1 94 84" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.07" />

      {/* Sound wave arcs - left side */}
      <path d="M38 42 A16 16 0 0 0 38 72" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.2" />
      <path d="M32 36 A24 24 0 0 0 32 78" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.12" />
      <path d="M26 30 A32 32 0 0 0 26 84" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.07" />

      {/* Bell body */}
      <g transform="translate(60, 58)">
        {/* Bell shadow/glow */}
        <path
          d="M-24 8 C-24 -8 -20 -28 0 -32 C20 -28 24 -8 24 8 L28 12 L-28 12 Z"
          fill="var(--accent)"
          fillOpacity="0.06"
          transform="translate(1, 2)"
        />
        {/* Bell shape */}
        <path
          d="M-24 8 C-24 -8 -20 -28 0 -32 C20 -28 24 -8 24 8 L28 12 L-28 12 Z"
          fill="var(--text)"
          fillOpacity="0.12"
          stroke="var(--text)"
          strokeOpacity="0.15"
          strokeWidth="1.5"
        />
        {/* Bell inner highlight */}
        <path
          d="M-18 6 C-18 -4 -14 -22 0 -26 C4 -25 8 -22 10 -16"
          stroke="var(--text)"
          strokeOpacity="0.06"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Clapper */}
        <ellipse cx="0" cy="16" rx="7" ry="3" fill="var(--text)" fillOpacity="0.15" />
        {/* Bell top nub */}
        <circle cx="0" cy="-32" r="3" fill="var(--text)" fillOpacity="0.15" stroke="var(--text)" strokeOpacity="0.12" strokeWidth="1" />
      </g>

      {/* Notification badge (mint dot) */}
      <g transform="translate(72, 22)">
        {/* Badge glow */}
        <circle cx="0" cy="0" r="12" fill="var(--accent)" fillOpacity="0.1" />
        <circle cx="0" cy="0" r="8" fill="var(--accent)" fillOpacity="0.15" />
        {/* Badge */}
        <circle cx="0" cy="0" r="6" fill="var(--accent)" />
        {/* Badge number */}
        <text x="0" y="2.5" textAnchor="middle" fontSize="7" fontWeight="700" fill="white" fontFamily="system-ui, sans-serif">3</text>
      </g>

      {/* Motion lines (bell ringing) */}
      <line x1="44" y1="30" x2="40" y2="26" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.2" />
      <line x1="42" y1="36" x2="37" y2="34" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.15" />
      <line x1="76" y1="38" x2="81" y2="36" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.15" />

      {/* Text lines (notification preview) */}
      <g transform="translate(30, 90)">
        <rect x="0" y="0" width="60" height="4" rx="2" fill="var(--muted)" fillOpacity="0.12" />
        <rect x="8" y="8" width="44" height="3" rx="1.5" fill="var(--muted)" fillOpacity="0.08" />
        <rect x="14" y="15" width="32" height="3" rx="1.5" fill="var(--muted)" fillOpacity="0.05" />
      </g>
    </svg>
  );
}
