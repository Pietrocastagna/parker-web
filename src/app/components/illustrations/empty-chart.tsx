export function EmptyChartIllustration({ className, width = 160, height = 120 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Chart Y axis */}
      <line x1="32" y1="20" x2="32" y2="95" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />

      {/* Chart X axis */}
      <line x1="32" y1="95" x2="140" y2="95" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />

      {/* Y-axis tick marks */}
      <line x1="28" y1="35" x2="32" y2="35" stroke="var(--muted)" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="28" y1="55" x2="32" y2="55" stroke="var(--muted)" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="28" y1="75" x2="32" y2="75" stroke="var(--muted)" strokeWidth="1" strokeOpacity="0.3" />

      {/* Horizontal grid lines (dashed) */}
      <line x1="32" y1="35" x2="140" y2="35" stroke="var(--muted)" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="4 3" />
      <line x1="32" y1="55" x2="140" y2="55" stroke="var(--muted)" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="4 3" />
      <line x1="32" y1="75" x2="140" y2="75" stroke="var(--muted)" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="4 3" />

      {/* Ghost bar 1 (dashed outline, no data) */}
      <rect x="46" y="42" width="18" height="53" rx="3" fill="var(--muted)" fillOpacity="0.04" stroke="var(--muted)" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Ghost bar 2 (dashed outline, taller) */}
      <rect x="74" y="30" width="18" height="65" rx="3" fill="var(--muted)" fillOpacity="0.04" stroke="var(--muted)" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Ghost bar 3 (dashed outline, medium) */}
      <rect x="102" y="52" width="18" height="43" rx="3" fill="var(--muted)" fillOpacity="0.04" stroke="var(--muted)" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Question mark above center bar */}
      <text x="83" y="22" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--muted)" fillOpacity="0.4" fontFamily="system-ui, sans-serif">?</text>

      {/* X-axis labels (placeholder dashes) */}
      <rect x="50" y="100" width="10" height="2" rx="1" fill="var(--muted)" fillOpacity="0.15" />
      <rect x="78" y="100" width="10" height="2" rx="1" fill="var(--muted)" fillOpacity="0.15" />
      <rect x="106" y="100" width="10" height="2" rx="1" fill="var(--muted)" fillOpacity="0.15" />

      {/* Arrow tip on Y axis */}
      <path d="M28 24 L32 16 L36 24" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" fill="none" />

      {/* Decorative dot accents */}
      <circle cx="136" cy="28" r="1.5" fill="var(--accent)" fillOpacity="0.2" />
      <circle cx="142" cy="80" r="1" fill="var(--muted)" fillOpacity="0.15" />

      {/* Bottom shadow */}
      <ellipse cx="86" cy="112" rx="42" ry="3" fill="var(--muted)" fillOpacity="0.08" />
    </svg>
  );
}
