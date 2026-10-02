'use client';

/** Motif proprietario: linea teal che collega punti / route. */
export function SignalLine({
  className = '',
  variant = 'horizontal',
  draw = false,
}: {
  className?: string;
  variant?: 'horizontal' | 'diagonal' | 'route' | 'vertical' | 'arc';
  draw?: boolean;
}) {
  const strokeCls = draw ? 'draw-line' : '';

  if (variant === 'route') {
    return (
      <svg className={className} viewBox="0 0 320 80" fill="none" aria-hidden>
        <path
          d="M8 60 C 80 10, 140 70, 200 28 S 280 20, 312 40"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={draw ? undefined : '4 6'}
          className={`${strokeCls} ${draw ? '' : 'route-flow'}`}
          opacity="0.9"
        />
        <circle cx="8" cy="60" r="5" fill="currentColor" />
        <circle cx="200" cy="28" r="5" fill="currentColor" />
        <circle cx="200" cy="28" r="12" fill="currentColor" opacity="0.25" className="signal-pulse" />
        <circle cx="312" cy="40" r="5" fill="#fff" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (variant === 'arc') {
    return (
      <svg className={className} viewBox="0 0 400 200" fill="none" aria-hidden>
        <path d="M20 180 C 100 40, 300 40, 380 180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 7" className="route-flow" opacity="0.7" />
        <circle cx="20" cy="180" r="5" fill="currentColor" />
        <circle cx="380" cy="180" r="5" fill="currentColor" className="signal-pulse" />
        <circle cx="380" cy="180" r="5" fill="currentColor" />
      </svg>
    );
  }

  if (variant === 'vertical') {
    return (
      <svg className={className} viewBox="0 0 24 400" fill="none" preserveAspectRatio="none" aria-hidden>
        <path d="M12 0 V 400" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.5" />
        <circle cx="12" cy="40" r="4" fill="currentColor" />
        <circle cx="12" cy="200" r="4" fill="currentColor" />
        <circle cx="12" cy="360" r="4" fill="currentColor" />
      </svg>
    );
  }

  if (variant === 'diagonal') {
    return (
      <svg className={className} viewBox="0 0 200 120" fill="none" aria-hidden>
        <path d="M10 100 L 190 20" stroke="currentColor" strokeWidth="1.5" opacity="0.7" className={strokeCls} />
        <circle cx="10" cy="100" r="4" fill="currentColor" />
        <circle cx="190" cy="20" r="4" fill="currentColor" />
        <circle cx="190" cy="20" r="10" fill="currentColor" opacity="0.3" className="signal-pulse" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 400 24" fill="none" aria-hidden>
      <path d="M4 12 H 396" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 8" className="route-flow" />
      <circle cx="40" cy="12" r="5" fill="currentColor" />
      <circle cx="200" cy="12" r="5" fill="currentColor" />
      <circle cx="200" cy="12" r="10" fill="currentColor" opacity="0.3" className="signal-pulse" />
      <circle cx="360" cy="12" r="5" fill="currentColor" />
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
  className = '',
}: {
  children: React.ReactNode;
  tone?: 'dark' | 'brand' | 'light';
  className?: string;
}) {
  const cls =
    tone === 'brand'
      ? 'bg-brand text-ink shadow-[0_10px_30px_rgba(0,201,167,0.35)]'
      : tone === 'light'
        ? 'bg-white text-ink shadow-float border border-line'
        : 'bg-ink/90 text-white backdrop-blur border border-white/10 shadow-float';
  return <div className={`chip ${cls} ${className}`}>{children}</div>;
}
