export function WasherIllustration({ className, width = 240, height = 160 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Ground */}
      <rect x="0" y="138" width="240" height="22" rx="4" fill="var(--muted)" fillOpacity="0.1" />
      <rect x="0" y="136" width="240" height="3" rx="1.5" fill="var(--muted)" fillOpacity="0.12" />

      {/* Car body */}
      <g transform="translate(100, 88)">
        {/* Car body lower */}
        <rect x="0" y="12" width="110" height="32" rx="6" fill="var(--text)" fillOpacity="0.08" stroke="var(--text)" strokeOpacity="0.1" strokeWidth="1.5" />
        {/* Car body upper (cabin) */}
        <rect x="20" y="0" width="70" height="18" rx="6" fill="var(--text)" fillOpacity="0.06" stroke="var(--text)" strokeOpacity="0.08" strokeWidth="1" />
        {/* Windshield */}
        <path d="M24 16 L32 4 L54 4 L54 16 Z" fill="var(--muted)" fillOpacity="0.08" />
        {/* Rear window */}
        <path d="M86 16 L78 4 L58 4 L58 16 Z" fill="var(--muted)" fillOpacity="0.06" />
        {/* Wheels */}
        <circle cx="24" cy="44" r="8" fill="var(--text)" fillOpacity="0.16" />
        <circle cx="24" cy="44" r="4" fill="var(--text)" fillOpacity="0.08" />
        <circle cx="86" cy="44" r="8" fill="var(--text)" fillOpacity="0.16" />
        <circle cx="86" cy="44" r="4" fill="var(--text)" fillOpacity="0.08" />
        {/* Headlights */}
        <rect x="106" y="20" width="5" height="8" rx="2" fill="var(--muted)" fillOpacity="0.15" />

        {/* Clean shine lines on car */}
        <line x1="35" y1="18" x2="45" y2="18" stroke="var(--warning)" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
        <line x1="60" y1="18" x2="72" y2="18" stroke="var(--warning)" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
      </g>

      {/* Washer person */}
      <g transform="translate(68, 42)">
        {/* Body glow */}
        <ellipse cx="16" cy="50" rx="18" ry="40" fill="var(--warning)" fillOpacity="0.04" />

        {/* Head */}
        <circle cx="16" cy="8" r="10" fill="var(--warning)" fillOpacity="0.2" stroke="var(--warning)" strokeOpacity="0.3" strokeWidth="1.5" />
        {/* Cap/visor */}
        <path d="M6 6 L26 6 L24 2 L8 2 Z" fill="var(--warning)" fillOpacity="0.35" />

        {/* Body / torso */}
        <path d="M8 18 L6 60 L12 60 L14 38 L18 38 L20 60 L26 60 L24 18 Z" fill="var(--warning)" fillOpacity="0.2" stroke="var(--warning)" strokeOpacity="0.25" strokeWidth="1" />

        {/* Apron */}
        <rect x="9" y="30" width="14" height="20" rx="2" fill="var(--warning)" fillOpacity="0.1" stroke="var(--warning)" strokeOpacity="0.15" strokeWidth="0.5" />

        {/* Left arm (holding spray gun) - extended */}
        <path d="M24 22 L40 30 L56 26" stroke="var(--warning)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" fill="none" />
        {/* Arm highlight */}
        <circle cx="40" cy="30" r="2" fill="var(--warning)" fillOpacity="0.15" />

        {/* Right arm (at side) */}
        <path d="M8 22 L2 40 L4 48" stroke="var(--warning)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" fill="none" />

        {/* Legs */}
        <line x1="12" y1="60" x2="8" y2="82" stroke="var(--warning)" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.2" />
        <line x1="20" y1="60" x2="24" y2="82" stroke="var(--warning)" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.2" />
        {/* Feet */}
        <rect x="4" y="80" width="10" height="4" rx="2" fill="var(--warning)" fillOpacity="0.2" />
        <rect x="20" y="80" width="10" height="4" rx="2" fill="var(--warning)" fillOpacity="0.2" />

        {/* Spray gun */}
        <g transform="translate(52, 20)">
          <rect x="0" y="0" width="16" height="6" rx="2" fill="var(--text)" fillOpacity="0.2" stroke="var(--text)" strokeOpacity="0.15" strokeWidth="1" />
          <rect x="14" y="1" width="6" height="4" rx="1" fill="var(--text)" fillOpacity="0.15" />
          {/* Trigger */}
          <rect x="4" y="6" width="3" height="5" rx="1" fill="var(--text)" fillOpacity="0.15" />
          {/* Hose */}
          <path d="M0 3 L-8 8 L-12 20" stroke="var(--text)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.12" fill="none" />
        </g>

        {/* Spray from gun */}
        <g>
          <path d="M72 23 L88 20" stroke="var(--info)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          <path d="M72 25 L90 26" stroke="var(--info)" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
          <path d="M72 27 L88 32" stroke="var(--info)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          <path d="M72 22 L85 16" stroke="var(--info)" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
          <path d="M72 28 L86 36" stroke="var(--info)" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
          {/* Spray droplets */}
          <circle cx="90" cy="22" r="1.5" fill="var(--info)" fillOpacity="0.2" />
          <circle cx="92" cy="28" r="1" fill="var(--info)" fillOpacity="0.15" />
          <circle cx="88" cy="34" r="1.2" fill="var(--info)" fillOpacity="0.18" />
          <circle cx="86" cy="17" r="1" fill="var(--info)" fillOpacity="0.12" />
        </g>
      </g>

      {/* Bucket */}
      <g transform="translate(40, 110)">
        {/* Bucket body */}
        <path d="M2 8 L6 28 L26 28 L30 8 Z" fill="var(--text)" fillOpacity="0.08" stroke="var(--text)" strokeOpacity="0.12" strokeWidth="1.5" />
        {/* Bucket rim */}
        <rect x="0" y="6" width="32" height="4" rx="2" fill="var(--text)" fillOpacity="0.1" />
        {/* Water inside */}
        <path d="M4 14 L7 26 L25 26 L28 14 Z" fill="var(--info)" fillOpacity="0.1" />
        {/* Handle */}
        <path d="M4 8 C4 -2 28 -2 28 8" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.12" />
        {/* Soap suds on top */}
        <circle cx="10" cy="12" r="3" fill="white" fillOpacity="0.2" />
        <circle cx="16" cy="10" r="4" fill="white" fillOpacity="0.15" />
        <circle cx="22" cy="12" r="3" fill="white" fillOpacity="0.2" />
      </g>

      {/* Sponge on ground */}
      <g transform="translate(78, 126)">
        <rect x="0" y="0" width="14" height="8" rx="2" fill="var(--warning)" fillOpacity="0.2" stroke="var(--warning)" strokeOpacity="0.15" strokeWidth="0.5" />
        <circle cx="4" cy="3" r="1" fill="var(--warning)" fillOpacity="0.1" />
        <circle cx="8" cy="5" r="1" fill="var(--warning)" fillOpacity="0.1" />
        <circle cx="11" cy="3" r="1" fill="var(--warning)" fillOpacity="0.1" />
      </g>

      {/* Sparkle / clean effect */}
      {[
        { x: 185, y: 80 },
        { x: 200, y: 95 },
        { x: 220, y: 75 },
      ].map((s, i) => (
        <g key={i} opacity={0.15 + i * 0.05}>
          <line x1={s.x - 4} y1={s.y} x2={s.x + 4} y2={s.y} stroke="var(--warning)" strokeWidth="1" strokeLinecap="round" />
          <line x1={s.x} y1={s.y - 4} x2={s.x} y2={s.y + 4} stroke="var(--warning)" strokeWidth="1" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}
