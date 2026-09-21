export function EmptyWalletIllustration({ className, width = 160, height = 120 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Shadow */}
      <ellipse cx="80" cy="106" rx="44" ry="5" fill="var(--muted)" fillOpacity="0.1" />

      {/* Wallet body — back */}
      <rect x="36" y="48" width="88" height="52" rx="6" fill="var(--muted)" fillOpacity="0.08" stroke="var(--muted)" strokeOpacity="0.25" strokeWidth="1.5" />

      {/* Wallet inner pocket line */}
      <rect x="36" y="68" width="88" height="2" rx="1" fill="var(--muted)" fillOpacity="0.1" />

      {/* Wallet clasp / card slot */}
      <rect x="94" y="62" width="24" height="16" rx="4" fill="var(--muted)" fillOpacity="0.06" stroke="var(--muted)" strokeOpacity="0.2" strokeWidth="1" />
      <circle cx="106" cy="70" r="3" fill="var(--muted)" fillOpacity="0.15" />

      {/* Wallet flap (open, tilted up) */}
      <path d="M36 48 Q36 28 56 26 L110 26 Q124 28 124 48" fill="var(--muted)" fillOpacity="0.05" stroke="var(--muted)" strokeOpacity="0.2" strokeWidth="1.5" />

      {/* Flap top edge */}
      <path d="M56 26 L110 26" stroke="var(--muted)" strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />

      {/* Empty card slots (dashed) */}
      <rect x="48" y="54" width="30" height="18" rx="2" fill="none" stroke="var(--muted)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 2" />
      <rect x="58" y="50" width="30" height="18" rx="2" fill="none" stroke="var(--muted)" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="3 2" />

      {/* Coin — floating above wallet */}
      <g>
        {/* Coin shadow on wallet */}
        <ellipse cx="80" cy="38" rx="8" ry="2" fill="var(--accent)" fillOpacity="0.1" />

        {/* Coin body */}
        <circle cx="80" cy="18" r="14" fill="var(--accent)" fillOpacity="0.15" />
        <circle cx="80" cy="18" r="11" fill="var(--accent)" fillOpacity="0.8" />
        <circle cx="80" cy="18" r="9" fill="var(--accent)" />

        {/* Euro symbol */}
        <text x="80" y="23" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="system-ui, sans-serif">€</text>

        {/* Coin shine */}
        <path d="M74 12 Q76 8 82 10" stroke="white" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" fill="none" />
      </g>

      {/* Motion lines (coin falling) */}
      <line x1="72" y1="30" x2="72" y2="36" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.3" />
      <line x1="80" y1="32" x2="80" y2="40" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.25" />
      <line x1="88" y1="30" x2="88" y2="36" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.3" />

      {/* Small decorative dots */}
      <circle cx="140" cy="42" r="1.5" fill="var(--muted)" fillOpacity="0.15" />
      <circle cx="22" cy="56" r="1" fill="var(--muted)" fillOpacity="0.12" />
      <circle cx="146" cy="72" r="1" fill="var(--accent)" fillOpacity="0.2" />
    </svg>
  );
}
