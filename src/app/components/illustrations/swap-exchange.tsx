export function SwapExchangeIllustration({ className, width = 200, height = 160 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Ground / road */}
      <rect x="0" y="120" width="200" height="40" rx="4" fill="var(--muted)" fillOpacity="0.18" />
      <rect x="0" y="118" width="200" height="4" rx="2" fill="var(--muted)" fillOpacity="0.3" />

      {/* Car A (left side, going right) */}
      <g>
        {/* Car body */}
        <rect x="18" y="126" width="36" height="18" rx="5" fill="var(--accent)" fillOpacity="0.15" />
        <rect x="22" y="119" width="28" height="12" rx="4" fill="var(--accent)" fillOpacity="0.12" />
        {/* Windows */}
        <rect x="25" y="121" width="10" height="7" rx="2" fill="var(--accent)" fillOpacity="0.2" />
        <rect x="37" y="121" width="10" height="7" rx="2" fill="var(--accent)" fillOpacity="0.2" />
        {/* Wheels */}
        <circle cx="26" cy="144" r="4" fill="var(--text)" fillOpacity="0.2" />
        <circle cx="46" cy="144" r="4" fill="var(--text)" fillOpacity="0.2" />
        {/* Headlight (right, going right) */}
        <rect x="54" y="131" width="3" height="4" rx="1" fill="var(--accent)" fillOpacity="0.5" />
      </g>

      {/* Car B (right side, going left) */}
      <g>
        {/* Car body */}
        <rect x="146" y="126" width="36" height="18" rx="5" fill="var(--text)" fillOpacity="0.15" />
        <rect x="150" y="119" width="28" height="12" rx="4" fill="var(--text)" fillOpacity="0.12" />
        {/* Windows */}
        <rect x="153" y="121" width="10" height="7" rx="2" fill="var(--accent)" fillOpacity="0.12" />
        <rect x="165" y="121" width="10" height="7" rx="2" fill="var(--accent)" fillOpacity="0.12" />
        {/* Wheels */}
        <circle cx="154" cy="144" r="4" fill="var(--text)" fillOpacity="0.2" />
        <circle cx="174" cy="144" r="4" fill="var(--text)" fillOpacity="0.2" />
        {/* Headlight (left, going left) */}
        <rect x="143" y="131" width="3" height="4" rx="1" fill="var(--text)" fillOpacity="0.3" />
      </g>

      {/* Swap arrows (circular exchange between cars) */}
      <g>
        {/* Top arrow (left to right) */}
        <path d="M65 125 C80 112, 105 112, 120 118" stroke="var(--accent)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M116 114 L122 118 L116 122" stroke="var(--accent)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* Bottom arrow (right to left) */}
        <path d="M135 148 C120 155, 95 155, 80 150" stroke="var(--accent)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M84 153 L78 150 L84 146" stroke="var(--accent)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Central swap icon circle */}
      <circle cx="100" cy="135" r="14" fill="var(--accent)" fillOpacity="0.12" />
      <circle cx="100" cy="135" r="10" fill="var(--accent)" />
      {/* Swap arrows icon inside circle */}
      <path d="M95 132 L105 132 M102 129 L105 132 L102 135" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M105 138 L95 138 M98 141 L95 138 L98 135" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* P pin marker (above, centered) */}
      <g>
        <ellipse cx="100" cy="98" rx="10" ry="3" fill="var(--accent)" fillOpacity="0.12" />
        <rect x="98" y="82" width="4" height="18" rx="2" fill="var(--accent)" fillOpacity="0.5" />
        <circle cx="100" cy="52" r="26" fill="var(--accent)" fillOpacity="0.1" />
        <circle cx="100" cy="52" r="20" fill="var(--accent)" />
        <path d="M92 68 L100 80 L108 68" fill="var(--accent)" />
        <text x="100" y="59" textAnchor="middle" fontSize="20" fontWeight="700" fill="white" fontFamily="system-ui, sans-serif">P</text>
      </g>

      {/* Wallet / payment indicator (top-right) */}
      <g>
        <rect x="155" y="20" width="32" height="22" rx="5" fill="var(--accent)" fillOpacity="0.12" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1" />
        <rect x="159" y="28" width="14" height="8" rx="2" fill="var(--accent)" fillOpacity="0.25" />
        <circle cx="180" cy="31" r="4" fill="var(--accent)" fillOpacity="0.4" />
        {/* Checkmark */}
        <path d="M178 30 L180 33 L183 28" stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Navigation indicator (top-left) */}
      <g>
        <circle cx="28" cy="32" r="16" fill="var(--accent)" fillOpacity="0.08" />
        <path d="M28 22 L34 38 L28 34 L22 38 Z" fill="var(--accent)" fillOpacity="0.5" />
      </g>

      {/* Decorative elements */}
      <circle cx="70" cy="30" r="2" fill="var(--muted)" fillOpacity="0.15" />
      <circle cx="130" cy="25" r="1.5" fill="var(--muted)" fillOpacity="0.12" />
      <circle cx="55" cy="45" r="1" fill="var(--muted)" fillOpacity="0.1" />
      <circle cx="145" cy="50" r="1.5" fill="var(--muted)" fillOpacity="0.1" />
    </svg>
  );
}
