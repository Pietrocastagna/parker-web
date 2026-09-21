export function ParkingSpotIllustration({ className, width = 200, height = 160 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Ground / road */}
      <rect x="0" y="120" width="200" height="40" rx="4" fill="var(--muted)" fillOpacity="0.18" />
      <rect x="0" y="118" width="200" height="4" rx="2" fill="var(--muted)" fillOpacity="0.3" />

      {/* Parking spot lines (3 spots) */}
      <rect x="30" y="122" width="2" height="34" fill="var(--muted)" fillOpacity="0.5" />
      <rect x="75" y="122" width="2" height="34" fill="var(--muted)" fillOpacity="0.5" />
      <rect x="123" y="122" width="2" height="34" fill="var(--muted)" fillOpacity="0.5" />
      <rect x="168" y="122" width="2" height="34" fill="var(--muted)" fillOpacity="0.5" />

      {/* Dashed center lines in spots */}
      {[44, 90, 138].map((x, i) => (
        <g key={i}>
          <rect x={x} y="126" width="16" height="2" rx="1" fill="var(--muted)" fillOpacity="0.25" />
          <rect x={x} y="134" width="16" height="2" rx="1" fill="var(--muted)" fillOpacity="0.25" />
          <rect x={x} y="142" width="16" height="2" rx="1" fill="var(--muted)" fillOpacity="0.25" />
          <rect x={x} y="150" width="16" height="2" rx="1" fill="var(--muted)" fillOpacity="0.25" />
        </g>
      ))}

      {/* Empty car silhouette spot 1 (faded) */}
      <rect x="38" y="128" width="32" height="16" rx="4" fill="var(--muted)" fillOpacity="0.1" stroke="var(--muted)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 2" />

      {/* Car in middle spot */}
      <g>
        {/* Car body */}
        <rect x="82" y="126" width="36" height="18" rx="5" fill="var(--text)" fillOpacity="0.12" />
        <rect x="86" y="119" width="28" height="12" rx="4" fill="var(--text)" fillOpacity="0.1" />
        {/* Windows */}
        <rect x="89" y="121" width="10" height="7" rx="2" fill="var(--accent)" fillOpacity="0.15" />
        <rect x="101" y="121" width="10" height="7" rx="2" fill="var(--accent)" fillOpacity="0.15" />
        {/* Wheels */}
        <circle cx="90" cy="144" r="4" fill="var(--text)" fillOpacity="0.2" />
        <circle cx="90" cy="144" r="2" fill="var(--text)" fillOpacity="0.1" />
        <circle cx="110" cy="144" r="4" fill="var(--text)" fillOpacity="0.2" />
        <circle cx="110" cy="144" r="2" fill="var(--text)" fillOpacity="0.1" />
        {/* Headlights */}
        <rect x="118" y="131" width="3" height="4" rx="1" fill="var(--accent)" fillOpacity="0.4" />
        <rect x="79" y="131" width="3" height="4" rx="1" fill="var(--accent)" fillOpacity="0.3" />
      </g>

      {/* Empty spot 3 (faded outline) */}
      <rect x="130" y="128" width="32" height="16" rx="4" fill="var(--muted)" fillOpacity="0.1" stroke="var(--muted)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 2" />

      {/* P marker pin */}
      <g>
        {/* Pin shadow */}
        <ellipse cx="100" cy="108" rx="12" ry="3" fill="var(--accent)" fillOpacity="0.15" />
        {/* Pin stem */}
        <rect x="98" y="82" width="4" height="28" rx="2" fill="var(--accent)" fillOpacity="0.6" />
        {/* Pin head */}
        <circle cx="100" cy="52" r="28" fill="var(--accent)" fillOpacity="0.12" />
        <circle cx="100" cy="52" r="22" fill="var(--accent)" />
        {/* Pin pointer */}
        <path d="M92 70 L100 86 L108 70" fill="var(--accent)" />
        {/* P letter */}
        <text x="100" y="59" textAnchor="middle" fontSize="22" fontWeight="700" fill="white" fontFamily="system-ui, sans-serif">P</text>
      </g>

      {/* Decorative lines on road */}
      <rect x="10" y="155" width="20" height="2" rx="1" fill="var(--muted)" fillOpacity="0.15" />
      <rect x="170" y="155" width="20" height="2" rx="1" fill="var(--muted)" fillOpacity="0.15" />
    </svg>
  );
}
