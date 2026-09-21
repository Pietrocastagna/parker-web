export function AuthIllustration({ className, width = 400, height = 600 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* ===== Background dot pattern ===== */}
      {Array.from({ length: 12 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle
            key={`dot-${row}-${col}`}
            cx={25 + col * 50}
            cy={25 + row * 50}
            r="1.5"
            fill="var(--accent)"
            fillOpacity={0.06 + (row % 3) * 0.02}
          />
        ))
      )}

      {/* ===== Subtle radial glow behind pin ===== */}
      <circle cx="200" cy="260" r="120" fill="var(--accent)" fillOpacity="0.04" />
      <circle cx="200" cy="260" r="80" fill="var(--accent)" fillOpacity="0.05" />

      {/* ===== Roads / Paths ===== */}
      {/* Main horizontal road */}
      <rect x="0" y="420" width="400" height="28" rx="2" fill="var(--muted)" fillOpacity="0.1" />
      {/* Road center dashes */}
      {Array.from({ length: 10 }).map((_, i) => (
        <rect
          key={`road-dash-h-${i}`}
          x={15 + i * 40}
          y="432"
          width="20"
          height="3"
          rx="1.5"
          fill="var(--muted)"
          fillOpacity="0.2"
        />
      ))}

      {/* Vertical road leading up to pin */}
      <rect x="186" y="310" width="28" height="140" rx="2" fill="var(--muted)" fillOpacity="0.1" />
      {/* Vertical road center dashes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <rect
          key={`road-dash-v-${i}`}
          x="198"
          y={318 + i * 22}
          width="3"
          height="12"
          rx="1.5"
          fill="var(--muted)"
          fillOpacity="0.2"
        />
      ))}

      {/* Curved road from bottom-left going up */}
      <path
        d="M0 480 Q80 480 120 440 Q160 400 186 400"
        stroke="var(--muted)"
        strokeWidth="24"
        strokeOpacity="0.07"
        fill="none"
        strokeLinecap="round"
      />
      {/* Curved road dashes */}
      <path
        d="M20 480 Q90 478 128 440 Q158 408 186 406"
        stroke="var(--muted)"
        strokeWidth="2"
        strokeOpacity="0.15"
        fill="none"
        strokeDasharray="8 6"
        strokeLinecap="round"
      />

      {/* Curved road from bottom-right */}
      <path
        d="M400 460 Q340 460 290 440 Q240 420 214 400"
        stroke="var(--muted)"
        strokeWidth="20"
        strokeOpacity="0.06"
        fill="none"
        strokeLinecap="round"
      />

      {/* Road intersection circle */}
      <circle cx="200" cy="434" r="20" fill="var(--muted)" fillOpacity="0.06" stroke="var(--muted)" strokeOpacity="0.12" strokeWidth="1" />

      {/* ===== P Parking Marker Pin (center, large) ===== */}
      <g>
        {/* Pin shadow */}
        <ellipse cx="200" cy="330" rx="28" ry="7" fill="var(--accent)" fillOpacity="0.12" />

        {/* Pin stem */}
        <rect x="196" y="290" width="8" height="44" rx="4" fill="var(--accent)" fillOpacity="0.6" />

        {/* Pin pointer triangle */}
        <path d="M188 270 L200 300 L212 270" fill="var(--accent)" />

        {/* Pin outer glow */}
        <circle cx="200" cy="220" r="58" fill="var(--accent)" fillOpacity="0.08" />

        {/* Pin head outer */}
        <circle cx="200" cy="220" r="48" fill="var(--accent)" fillOpacity="0.15" />

        {/* Pin head main */}
        <circle cx="200" cy="220" r="40" fill="var(--accent)" />

        {/* Pin head inner ring */}
        <circle cx="200" cy="220" r="34" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.15" />

        {/* P letter */}
        <text x="200" y="232" textAnchor="middle" fontSize="38" fontWeight="800" fill="white" fontFamily="system-ui, sans-serif">P</text>

        {/* Pin highlight */}
        <path d="M180 202 Q186 190 200 194" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.25" fill="none" />
      </g>

      {/* ===== Car on the horizontal road ===== */}
      <g>
        {/* Car body */}
        <rect x="82" y="414" width="48" height="22" rx="6" fill="var(--text)" fillOpacity="0.15" />
        {/* Car roof */}
        <rect x="90" y="404" width="32" height="14" rx="5" fill="var(--text)" fillOpacity="0.12" />
        {/* Windows */}
        <rect x="94" y="406" width="12" height="9" rx="2" fill="var(--accent)" fillOpacity="0.2" />
        <rect x="108" y="406" width="12" height="9" rx="2" fill="var(--accent)" fillOpacity="0.2" />
        {/* Wheels */}
        <circle cx="94" cy="436" r="5" fill="var(--text)" fillOpacity="0.25" />
        <circle cx="94" cy="436" r="2.5" fill="var(--text)" fillOpacity="0.12" />
        <circle cx="118" cy="436" r="5" fill="var(--text)" fillOpacity="0.25" />
        <circle cx="118" cy="436" r="2.5" fill="var(--text)" fillOpacity="0.12" />
        {/* Headlights */}
        <rect x="130" y="420" width="4" height="5" rx="1.5" fill="var(--accent)" fillOpacity="0.45" />
        <rect x="78" y="420" width="4" height="5" rx="1.5" fill="var(--accent)" fillOpacity="0.3" />
      </g>

      {/* ===== Second car on curved road (smaller, further away) ===== */}
      <g transform="translate(310, 448) scale(0.7) rotate(-8)">
        <rect x="0" y="0" width="40" height="18" rx="5" fill="var(--text)" fillOpacity="0.1" />
        <rect x="6" y="-8" width="28" height="12" rx="4" fill="var(--text)" fillOpacity="0.08" />
        <circle cx="10" cy="18" r="4" fill="var(--text)" fillOpacity="0.15" />
        <circle cx="30" cy="18" r="4" fill="var(--text)" fillOpacity="0.15" />
      </g>

      {/* ===== City Skyline (bottom) ===== */}
      <g>
        {/* Sky gradient effect */}
        <rect x="0" y="470" width="400" height="130" fill="var(--muted)" fillOpacity="0.04" />

        {/* Building 1 — tall left */}
        <rect x="8" y="488" width="34" height="112" rx="2" fill="var(--muted)" fillOpacity="0.1" stroke="var(--muted)" strokeOpacity="0.12" strokeWidth="1" />
        {/* Windows */}
        {[0, 1, 2, 3, 4].map(r => (
          <g key={`b1-row-${r}`}>
            <rect x="14" y={496 + r * 20} width="6" height="8" rx="1" fill="var(--accent)" fillOpacity={0.08 + r * 0.02} />
            <rect x="24" y={496 + r * 20} width="6" height="8" rx="1" fill="var(--accent)" fillOpacity={0.06 + r * 0.02} />
          </g>
        ))}

        {/* Building 2 — short */}
        <rect x="48" y="530" width="28" height="70" rx="2" fill="var(--muted)" fillOpacity="0.08" stroke="var(--muted)" strokeOpacity="0.1" strokeWidth="1" />
        {[0, 1, 2].map(r => (
          <g key={`b2-row-${r}`}>
            <rect x="54" y={538 + r * 18} width="5" height="7" rx="1" fill="var(--accent)" fillOpacity={0.06 + r * 0.015} />
            <rect x="63" y={538 + r * 18} width="5" height="7" rx="1" fill="var(--accent)" fillOpacity={0.05 + r * 0.015} />
          </g>
        ))}

        {/* Building 3 — medium-tall */}
        <rect x="82" y="500" width="30" height="100" rx="2" fill="var(--muted)" fillOpacity="0.09" stroke="var(--muted)" strokeOpacity="0.11" strokeWidth="1" />
        {[0, 1, 2, 3].map(r => (
          <g key={`b3-row-${r}`}>
            <rect x="88" y={508 + r * 20} width="6" height="8" rx="1" fill="var(--accent)" fillOpacity={0.07 + r * 0.015} />
            <rect x="98" y={508 + r * 20} width="6" height="8" rx="1" fill="var(--accent)" fillOpacity={0.06 + r * 0.015} />
          </g>
        ))}

        {/* Building 4 — tallest (near center) */}
        <rect x="120" y="478" width="38" height="122" rx="2" fill="var(--muted)" fillOpacity="0.11" stroke="var(--muted)" strokeOpacity="0.13" strokeWidth="1" />
        {/* Antenna */}
        <rect x="138" y="468" width="2" height="12" rx="1" fill="var(--muted)" fillOpacity="0.2" />
        <circle cx="139" cy="466" r="2" fill="var(--accent)" fillOpacity="0.3" />
        {[0, 1, 2, 3, 4, 5].map(r => (
          <g key={`b4-row-${r}`}>
            <rect x="126" y={486 + r * 18} width="6" height="7" rx="1" fill="var(--accent)" fillOpacity={0.07 + r * 0.012} />
            <rect x="136" y={486 + r * 18} width="6" height="7" rx="1" fill="var(--accent)" fillOpacity={0.06 + r * 0.012} />
            <rect x="146" y={486 + r * 18} width="6" height="7" rx="1" fill="var(--accent)" fillOpacity={0.05 + r * 0.012} />
          </g>
        ))}

        {/* Building 5 — gap, then medium */}
        <rect x="168" y="518" width="26" height="82" rx="2" fill="var(--muted)" fillOpacity="0.08" stroke="var(--muted)" strokeOpacity="0.1" strokeWidth="1" />
        {[0, 1, 2, 3].map(r => (
          <g key={`b5-row-${r}`}>
            <rect x="174" y={526 + r * 18} width="5" height="7" rx="1" fill="var(--accent)" fillOpacity={0.06 + r * 0.01} />
            <rect x="183" y={526 + r * 18} width="5" height="7" rx="1" fill="var(--accent)" fillOpacity={0.05 + r * 0.01} />
          </g>
        ))}

        {/* Building 6 — right of center, tall */}
        <rect x="202" y="490" width="32" height="110" rx="2" fill="var(--muted)" fillOpacity="0.1" stroke="var(--muted)" strokeOpacity="0.12" strokeWidth="1" />
        {[0, 1, 2, 3, 4].map(r => (
          <g key={`b6-row-${r}`}>
            <rect x="208" y={498 + r * 20} width="6" height="8" rx="1" fill="var(--accent)" fillOpacity={0.07 + r * 0.012} />
            <rect x="220" y={498 + r * 20} width="6" height="8" rx="1" fill="var(--accent)" fillOpacity={0.06 + r * 0.012} />
          </g>
        ))}

        {/* Building 7 — short-wide */}
        <rect x="240" y="540" width="36" height="60" rx="2" fill="var(--muted)" fillOpacity="0.07" stroke="var(--muted)" strokeOpacity="0.09" strokeWidth="1" />
        {[0, 1].map(r => (
          <g key={`b7-row-${r}`}>
            <rect x="248" y={548 + r * 20} width="5" height="7" rx="1" fill="var(--accent)" fillOpacity={0.05 + r * 0.01} />
            <rect x="258" y={548 + r * 20} width="5" height="7" rx="1" fill="var(--accent)" fillOpacity={0.04 + r * 0.01} />
            <rect x="268" y={548 + r * 20} width="5" height="7" rx="1" fill="var(--accent)" fillOpacity={0.04 + r * 0.01} />
          </g>
        ))}

        {/* Building 8 — medium-right */}
        <rect x="284" y="508" width="30" height="92" rx="2" fill="var(--muted)" fillOpacity="0.09" stroke="var(--muted)" strokeOpacity="0.11" strokeWidth="1" />
        {[0, 1, 2, 3].map(r => (
          <g key={`b8-row-${r}`}>
            <rect x="290" y={516 + r * 18} width="6" height="7" rx="1" fill="var(--accent)" fillOpacity={0.06 + r * 0.01} />
            <rect x="300" y={516 + r * 18} width="6" height="7" rx="1" fill="var(--accent)" fillOpacity={0.05 + r * 0.01} />
          </g>
        ))}

        {/* Building 9 — tall rightmost */}
        <rect x="320" y="494" width="34" height="106" rx="2" fill="var(--muted)" fillOpacity="0.1" stroke="var(--muted)" strokeOpacity="0.12" strokeWidth="1" />
        {[0, 1, 2, 3, 4].map(r => (
          <g key={`b9-row-${r}`}>
            <rect x="326" y={502 + r * 18} width="6" height="7" rx="1" fill="var(--accent)" fillOpacity={0.06 + r * 0.012} />
            <rect x="338" y={502 + r * 18} width="6" height="7" rx="1" fill="var(--accent)" fillOpacity={0.05 + r * 0.012} />
          </g>
        ))}

        {/* Building 10 — far right small */}
        <rect x="360" y="534" width="32" height="66" rx="2" fill="var(--muted)" fillOpacity="0.07" stroke="var(--muted)" strokeOpacity="0.09" strokeWidth="1" />
        {[0, 1, 2].map(r => (
          <g key={`b10-row-${r}`}>
            <rect x="366" y={542 + r * 18} width="5" height="7" rx="1" fill="var(--accent)" fillOpacity={0.05 + r * 0.01} />
            <rect x="378" y={542 + r * 18} width="5" height="7" rx="1" fill="var(--accent)" fillOpacity={0.04 + r * 0.01} />
          </g>
        ))}
      </g>

      {/* ===== Parking Spots on the road ===== */}
      {/* Parking spot markers near intersection */}
      <g>
        <rect x="222" y="424" width="14" height="22" rx="1" fill="none" stroke="var(--muted)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 2" />
        <rect x="240" y="424" width="14" height="22" rx="1" fill="none" stroke="var(--muted)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 2" />
        <rect x="258" y="424" width="14" height="22" rx="1" fill="none" stroke="var(--muted)" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 2" />
      </g>

      {/* ===== Decorative elements top area ===== */}
      {/* WiFi/signal arcs from pin */}
      <path d="M160 180 Q158 164 168 154" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.15" fill="none" strokeLinecap="round" />
      <path d="M152 190 Q148 168 162 148" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.1" fill="none" strokeLinecap="round" />
      <path d="M240 180 Q242 164 232 154" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.15" fill="none" strokeLinecap="round" />
      <path d="M248 190 Q252 168 238 148" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.1" fill="none" strokeLinecap="round" />

      {/* Floating sparkles — top */}
      <g>
        <line x1="60" y1="80" x2="60" y2="92" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.3" />
        <line x1="54" y1="86" x2="66" y2="86" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.3" />
      </g>
      <g>
        <line x1="340" y1="100" x2="340" y2="110" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.25" />
        <line x1="335" y1="105" x2="345" y2="105" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.25" />
      </g>

      {/* Diamond sparkles */}
      <path d="M50 140 L52 134 L54 140 L52 146 Z" fill="var(--accent)" fillOpacity="0.2" />
      <path d="M348 160 L350 154 L352 160 L350 166 Z" fill="var(--accent)" fillOpacity="0.18" />
      <path d="M310 60 L312 56 L314 60 L312 64 Z" fill="var(--accent)" fillOpacity="0.15" />
      <path d="M80 50 L82 46 L84 50 L82 54 Z" fill="var(--accent)" fillOpacity="0.15" />

      {/* Floating circles */}
      <circle cx="36" cy="200" r="3" fill="var(--accent)" fillOpacity="0.12" />
      <circle cx="370" cy="220" r="2.5" fill="var(--accent)" fillOpacity="0.1" />
      <circle cx="100" cy="120" r="2" fill="var(--accent)" fillOpacity="0.15" />
      <circle cx="300" cy="130" r="2" fill="var(--accent)" fillOpacity="0.12" />
      <circle cx="160" cy="380" r="2" fill="var(--muted)" fillOpacity="0.1" />
      <circle cx="260" cy="370" r="1.5" fill="var(--muted)" fillOpacity="0.1" />

      {/* ===== Tree silhouettes near road ===== */}
      {/* Tree 1 — left side */}
      <g>
        <rect x="28" y="450" width="3" height="20" rx="1.5" fill="var(--muted)" fillOpacity="0.15" />
        <circle cx="30" cy="444" r="10" fill="var(--accent)" fillOpacity="0.08" />
        <circle cx="30" cy="444" r="7" fill="var(--accent)" fillOpacity="0.06" />
      </g>

      {/* Tree 2 — right side */}
      <g>
        <rect x="368" y="452" width="3" height="18" rx="1.5" fill="var(--muted)" fillOpacity="0.12" />
        <circle cx="370" cy="446" r="9" fill="var(--accent)" fillOpacity="0.07" />
        <circle cx="370" cy="446" r="6" fill="var(--accent)" fillOpacity="0.05" />
      </g>

      {/* Tree 3 — mid-left near buildings */}
      <g>
        <rect x="60" y="456" width="2.5" height="14" rx="1.2" fill="var(--muted)" fillOpacity="0.12" />
        <circle cx="61" cy="450" r="8" fill="var(--accent)" fillOpacity="0.06" />
      </g>

      {/* ===== Brand text at bottom ===== */}
      <text x="200" y="592" textAnchor="middle" fontSize="10" fontWeight="500" fill="var(--muted)" fillOpacity="0.3" fontFamily="system-ui, sans-serif" letterSpacing="3">
        PARKERNOW
      </text>
    </svg>
  );
}
