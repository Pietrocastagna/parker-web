export function PaymentIllustration({ className, width = 120, height = 120 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Card shadow */}
      <rect x="14" y="34" width="82" height="54" rx="8" fill="var(--text)" fillOpacity="0.05" transform="rotate(-6 14 34)" />

      {/* Credit card body */}
      <g transform="rotate(-6 14 30)">
        <rect x="12" y="30" width="82" height="54" rx="8" fill="var(--text)" fillOpacity="0.08" stroke="var(--text)" strokeOpacity="0.12" strokeWidth="1.5" />

        {/* Card stripe */}
        <rect x="12" y="42" width="82" height="10" fill="var(--text)" fillOpacity="0.08" />

        {/* Chip */}
        <rect x="22" y="36" width="14" height="10" rx="2" fill="var(--muted)" fillOpacity="0.25" stroke="var(--muted)" strokeOpacity="0.15" strokeWidth="0.5" />
        <line x1="22" y1="41" x2="36" y2="41" stroke="var(--muted)" strokeOpacity="0.2" strokeWidth="0.5" />
        <line x1="29" y1="36" x2="29" y2="46" stroke="var(--muted)" strokeOpacity="0.2" strokeWidth="0.5" />

        {/* Card number dots */}
        {[0, 1, 2, 3].map((g) => (
          <g key={g}>
            {[0, 1, 2, 3].map((d) => (
              <circle key={d} cx={24 + g * 18 + d * 4} cy="58" r="1.2" fill="var(--text)" fillOpacity="0.2" />
            ))}
          </g>
        ))}

        {/* Cardholder name placeholder */}
        <rect x="22" y="66" width="30" height="3" rx="1.5" fill="var(--text)" fillOpacity="0.1" />
        <rect x="22" y="72" width="18" height="3" rx="1.5" fill="var(--text)" fillOpacity="0.07" />

        {/* Contactless icon */}
        <g transform="translate(72, 32)">
          <path d="M4 8 A4 4 0 0 1 4 2" stroke="var(--muted)" strokeWidth="1" strokeLinecap="round" fill="none" strokeOpacity="0.3" />
          <path d="M4 10 A6 6 0 0 1 4 0" stroke="var(--muted)" strokeWidth="1" strokeLinecap="round" fill="none" strokeOpacity="0.2" />
          <path d="M4 12 A8 8 0 0 1 4 -2" stroke="var(--muted)" strokeWidth="1" strokeLinecap="round" fill="none" strokeOpacity="0.12" />
        </g>
      </g>

      {/* Shield / lock overlay */}
      <g transform="translate(68, 52)">
        {/* Shield glow */}
        <path d="M20 4 L20 22 C20 32 10 38 10 38 C10 38 0 32 0 22 L0 4 L10 0 L20 4 Z" fill="var(--accent)" fillOpacity="0.1" transform="scale(1.3) translate(-3, -3)" />
        {/* Shield body */}
        <path d="M20 4 L20 22 C20 32 10 38 10 38 C10 38 0 32 0 22 L0 4 L10 0 L20 4 Z" fill="var(--accent)" />
        {/* Shield highlight */}
        <path d="M10 0 L20 4 L20 22 C20 32 10 38 10 38 Z" fill="white" fillOpacity="0.12" />
        {/* Lock icon inside shield */}
        <rect x="6" y="16" width="8" height="7" rx="1.5" fill="white" fillOpacity="0.9" />
        <path d="M8 16 L8 13 A2 2 0 0 1 12 13 L12 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.9" />
        <circle cx="10" cy="20" r="1" fill="var(--accent)" />
      </g>

      {/* Checkmark badge */}
      <g transform="translate(82, 48)">
        <circle cx="8" cy="8" r="8" fill="var(--accent)" fillOpacity="0.9" />
        <path d="M4.5 8 L7 10.5 L11.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
