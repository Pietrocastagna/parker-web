'use client';

/** Motif proprietario: linea teal che collega punti / route. */
export function SignalLine({
  className = '',
  variant = 'horizontal',
}: {
  className?: string;
  variant?: 'horizontal' | 'diagonal' | 'route';
}) {
  if (variant === 'route') {
    return (
      <svg
        className={className}
        viewBox="0 0 320 80"
        fill="none"
        aria-hidden
      >
        <path
          d="M8 60 C 80 10, 140 70, 200 28 S 280 20, 312 40"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-brand"
          strokeDasharray="4 6"
        />
        <circle cx="8" cy="60" r="5" className="fill-brand" />
        <circle cx="200" cy="28" r="5" className="fill-brand" />
        <circle cx="312" cy="40" r="5" className="fill-white stroke-brand" strokeWidth="2" />
      </svg>
    );
  }

  if (variant === 'diagonal') {
    return (
      <svg className={className} viewBox="0 0 200 120" fill="none" aria-hidden>
        <path
          d="M10 100 L 190 20"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brand/70"
        />
        <circle cx="10" cy="100" r="4" className="fill-brand" />
        <circle cx="190" cy="20" r="4" className="fill-brand signal-pulse" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 400 24" fill="none" aria-hidden>
      <path
        d="M4 12 H 396"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand/50"
      />
      <circle cx="40" cy="12" r="5" className="fill-brand" />
      <circle cx="200" cy="12" r="5" className="fill-brand" />
      <circle cx="360" cy="12" r="5" className="fill-brand" />
    </svg>
  );
}

export function LiveDot({ className = '' }: { className?: string }) {
  return (
    <span className={`relative inline-flex h-2 w-2 ${className}`} aria-hidden>
      <span className="absolute inset-0 rounded-full bg-brand signal-pulse" />
      <span className="relative h-2 w-2 rounded-full bg-brand live-dot" />
    </span>
  );
}

export function FloatingStatusChip({
  children,
  tone = 'dark',
}: {
  children: React.ReactNode;
  tone?: 'dark' | 'brand' | 'light';
}) {
  const cls =
    tone === 'brand'
      ? 'bg-brand text-ink'
      : tone === 'light'
        ? 'bg-white text-ink shadow-float'
        : 'bg-ink/85 text-white backdrop-blur border border-white/10';
  return (
    <div className={`inline-flex items-center gap-2 rounded-pill px-3.5 py-2 text-xs font-semibold ${cls}`}>
      {children}
    </div>
  );
}
