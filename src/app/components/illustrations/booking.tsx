export function BookingIllustration({ className, width = 200, height = 160 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Phone / screen outline */}
      <rect x="45" y="8" width="110" height="144" rx="14" fill="var(--text)" fillOpacity="0.06" stroke="var(--text)" strokeOpacity="0.15" strokeWidth="2" />
      {/* Screen notch */}
      <rect x="80" y="12" width="40" height="4" rx="2" fill="var(--muted)" fillOpacity="0.25" />

      {/* Calendar header */}
      <rect x="55" y="26" width="90" height="20" rx="4" fill="var(--accent)" fillOpacity="0.1" />
      <text x="100" y="40" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--accent)" fontFamily="system-ui, sans-serif">Febbraio 2026</text>

      {/* Day labels */}
      {['L', 'M', 'M', 'G', 'V', 'S', 'D'].map((d, i) => (
        <text key={i} x={60 + i * 13} y="58" textAnchor="middle" fontSize="7" fill="var(--muted)" fontFamily="system-ui, sans-serif">{d}</text>
      ))}

      {/* Calendar grid - row 1 */}
      {[1, 2, 3, 4, 5, 6, 7].map((d, i) => (
        <g key={`r1-${i}`}>
          <rect x={53 + i * 13} y="62" width="11" height="11" rx="2" fill="var(--muted)" fillOpacity="0.06" />
          <text x={58.5 + i * 13} y="70.5" textAnchor="middle" fontSize="6.5" fill="var(--text)" fillOpacity="0.5" fontFamily="system-ui, sans-serif">{d}</text>
        </g>
      ))}
      {/* Calendar grid - row 2 */}
      {[8, 9, 10, 11, 12, 13, 14].map((d, i) => (
        <g key={`r2-${i}`}>
          <rect x={53 + i * 13} y="76" width="11" height="11" rx="2" fill="var(--muted)" fillOpacity="0.06" />
          <text x={58.5 + i * 13} y="84.5" textAnchor="middle" fontSize="6.5" fill="var(--text)" fillOpacity="0.5" fontFamily="system-ui, sans-serif">{d}</text>
        </g>
      ))}
      {/* Calendar grid - row 3 with highlighted date */}
      {[15, 16, 17, 18, 19, 20, 21].map((d, i) => (
        <g key={`r3-${i}`}>
          <rect
            x={53 + i * 13}
            y="90"
            width="11"
            height="11"
            rx={d === 17 ? 5.5 : 2}
            fill={d === 17 ? 'var(--accent)' : 'var(--muted)'}
            fillOpacity={d === 17 ? 1 : 0.06}
          />
          <text
            x={58.5 + i * 13}
            y="98.5"
            textAnchor="middle"
            fontSize="6.5"
            fill={d === 17 ? 'white' : 'var(--text)'}
            fillOpacity={d === 17 ? 1 : 0.5}
            fontWeight={d === 17 ? 700 : 400}
            fontFamily="system-ui, sans-serif"
          >{d}</text>
        </g>
      ))}
      {/* Calendar grid - row 4 */}
      {[22, 23, 24, 25, 26, 27, 28].map((d, i) => (
        <g key={`r4-${i}`}>
          <rect x={53 + i * 13} y="104" width="11" height="11" rx="2" fill="var(--muted)" fillOpacity="0.06" />
          <text x={58.5 + i * 13} y="112.5" textAnchor="middle" fontSize="6.5" fill="var(--text)" fillOpacity="0.5" fontFamily="system-ui, sans-serif">{d}</text>
        </g>
      ))}

      {/* Checkmark on selected date */}
      <path d="M76 95 L78.5 97.5 L82 93" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Confirm button */}
      <rect x="60" y="122" width="80" height="16" rx="8" fill="var(--accent)" fillOpacity="0.85" />
      <text x="100" y="133" textAnchor="middle" fontSize="8" fontWeight="600" fill="white" fontFamily="system-ui, sans-serif">Conferma</text>

      {/* Clock icon (top-right corner) */}
      <g transform="translate(148, 14)">
        <circle cx="12" cy="12" r="11" fill="var(--accent)" fillOpacity="0.12" stroke="var(--accent)" strokeWidth="1.5" />
        <line x1="12" y1="7" x2="12" y2="12" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="12" x2="16" y2="14" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
        {/* Hour dots */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((h) => (
          <circle
            key={h}
            cx={12 + 8.5 * Math.cos((h * 30 - 90) * Math.PI / 180)}
            cy={12 + 8.5 * Math.sin((h * 30 - 90) * Math.PI / 180)}
            r="0.7"
            fill="var(--accent)"
            fillOpacity="0.4"
          />
        ))}
      </g>
    </svg>
  );
}
