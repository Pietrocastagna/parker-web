'use client';

import { storeHref, storeIsLive } from '../lib/stores';

export function StoreButtons({
  className = '',
  variant = 'light',
}: {
  className?: string;
  variant?: 'light' | 'dark';
}) {
  const border =
    variant === 'dark'
      ? 'border-white/20 text-white hover:bg-white/10'
      : 'border-ink/12 text-ink hover:bg-ink/5';

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={storeHref('ios')}
        className={`inline-flex items-center gap-2 rounded-pill border px-4 py-2.5 text-sm font-semibold ${border}`}
        aria-label="Scarica su App Store"
      >
        <AppleIcon />
        {storeIsLive('ios') ? 'App Store' : 'App Store · in arrivo'}
      </a>
      <a
        href={storeHref('android')}
        className={`inline-flex items-center gap-2 rounded-pill border px-4 py-2.5 text-sm font-semibold ${border}`}
        aria-label="Scarica su Google Play"
      >
        <PlayIcon />
        {storeIsLive('android') ? 'Google Play' : 'Google Play · in arrivo'}
      </a>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M13.5 2c.1 1-.3 2-1 2.8-.7.8-1.7 1.4-2.7 1.3-.1-1 .4-2 1-2.7.7-.8 1.8-1.3 2.7-1.4zM16.4 15c-.5 1.1-.7 1.5-1.4 2.5-.9 1.3-2.2 3-3.7 3-1.4 0-1.8-.9-3.6-.9s-2.3.9-3.6.9c-1.6 0-2.8-1.5-3.7-2.9C-1.6 14 .2 8.5 3 7.2c1.3-.6 2.6-.3 3.6.4.8.5 1.5.5 2.3 0 1.1-.7 2.6-1 3.9-.3.9.5 1.7 1.3 2.2 2.3-2 1.2-1.7 4.1 1.4 5.4z" transform="scale(0.9)" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M3 2.5v15c0 .3.3.5.6.4l8.7-7.2c.2-.2.2-.5 0-.7L3.6 2.1c-.3-.1-.6.1-.6.4zM13.6 8.3l2.6 1.4c.4.2.4.7 0 .9l-2.6 1.4-2-1.8 2-1.9z" />
    </svg>
  );
}
