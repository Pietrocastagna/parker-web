import { storeHref, storeIsLive } from '../lib/stores';

export function StoreBadges({
  className = '',
  variant = 'light',
}: {
  className?: string;
  /** light = su sfondo chiaro; dark = su hero scuro */
  variant?: 'light' | 'dark';
}) {
  const ios = storeIsLive('ios');
  const and = storeIsLive('android');
  const appleCls =
    variant === 'dark'
      ? 'inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-ink transition hover:bg-white/90'
      : 'inline-flex items-center gap-3 rounded-xl bg-ink px-5 py-3 text-white transition hover:bg-ink/90';
  const playCls =
    variant === 'dark'
      ? 'inline-flex items-center gap-3 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-white transition hover:bg-white/15'
      : 'inline-flex items-center gap-3 rounded-xl border border-ink/15 bg-white px-5 py-3 text-ink transition hover:border-teal/50';

  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      <a
        href={storeHref('ios')}
        {...(ios ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={appleCls}
        aria-label={ios ? 'Scarica su App Store' : 'App Store — in arrivo'}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <span className="text-left leading-tight">
          <span
            className={`block text-[10px] uppercase tracking-wide ${
              variant === 'dark' ? 'text-ink/50' : 'text-white/60'
            }`}
          >
            {ios ? 'Scarica su' : 'Presto su'}
          </span>
          <span className="block text-base font-bold">App Store</span>
        </span>
      </a>
      <a
        href={storeHref('android')}
        {...(and ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={playCls}
        aria-label={and ? 'Scarica su Google Play' : 'Google Play — in arrivo'}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <path fill="#EA4335" d="M3.6 2.2 13.5 12 3.6 21.8c-.4-.3-.6-.8-.6-1.3V3.5c0-.5.2-1 .6-1.3z" />
          <path fill="#FBBC04" d="m13.5 12 2.7-2.7 4.6 2.6c.7.4.7 1.4 0 1.8l-4.6 2.6L13.5 12z" />
          <path fill="#4285F4" d="M13.5 12 3.6 2.2c.3-.2.6-.2.9-.1L16.2 9.3 13.5 12z" />
          <path fill="#34A853" d="M13.5 12 16.2 14.7 4.5 21.9c-.3.1-.6.1-.9-.1L13.5 12z" />
        </svg>
        <span className="text-left leading-tight">
          <span
            className={`block text-[10px] uppercase tracking-wide ${
              variant === 'dark' ? 'text-white/55' : 'text-muted'
            }`}
          >
            {and ? 'Scarica su' : 'Presto su'}
          </span>
          <span className="block text-base font-bold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
