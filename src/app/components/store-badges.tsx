'use client';

import { storeHref, storeIsLive } from '../lib/stores';

/**
 * Badge store "classici": rettangolo nero, bordo grigio, logo + due righe di testo.
 * Disegnati in SVG inline (nessun asset esterno, nitidi a ogni densità).
 */
export function StoreButtons({
  className = '',
  variant = 'light',
  note = true,
}: {
  className?: string;
  variant?: 'light' | 'dark';
  /** Mostra la riga "App in arrivo sugli store" finché i link non sono attivi. */
  note?: boolean;
}) {
  const live = storeIsLive('ios') || storeIsLive('android');
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={storeHref('ios')}
          aria-label="Scarica su App Store"
          className="group inline-flex h-[48px] items-center gap-2.5 rounded-[9px] border border-[#A6A6A6] bg-black pl-3 pr-4 text-white shadow-[0_6px_18px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)]"
        >
          <AppleLogo />
          <span className="flex flex-col leading-none">
            <span className="text-[10px] font-medium tracking-wide text-white/85">Scarica su</span>
            <span className="mt-[3px] font-sans text-[19px] font-semibold tracking-[-0.01em]">App Store</span>
          </span>
        </a>
        <a
          href={storeHref('android')}
          aria-label="Disponibile su Google Play"
          className="group inline-flex h-[48px] items-center gap-2.5 rounded-[9px] border border-[#A6A6A6] bg-black pl-2.5 pr-4 text-white shadow-[0_6px_18px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)]"
        >
          <GooglePlayLogo />
          <span className="flex flex-col leading-none">
            <span className="text-[9px] font-medium uppercase tracking-[0.08em] text-white/85">Disponibile su</span>
            <span className="mt-[3px] font-sans text-[19px] font-semibold tracking-[-0.01em]">Google Play</span>
          </span>
        </a>
      </div>
      {note && !live ? (
        <p className={`mt-2.5 text-xs ${variant === 'dark' ? 'text-white/55' : 'text-muted'}`}>
          App in arrivo sugli store. Intanto crea l’account dal portale.
        </p>
      ) : null}
    </div>
  );
}

function AppleLogo() {
  return (
    <svg width="26" height="30" viewBox="0 0 814 1000" fill="#fff" aria-hidden className="shrink-0">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  );
}

function GooglePlayLogo() {
  return (
    <svg width="28" height="30" viewBox="0 0 24 26" aria-hidden className="shrink-0">
      <defs>
        <linearGradient id="gp-a" x1="12.4" y1="1.8" x2="2.5" y2="11.7" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A0FF" />
          <stop offset="1" stopColor="#00E2FF" />
        </linearGradient>
        <linearGradient id="gp-b" x1="22.9" y1="13" x2="0.6" y2="13" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE000" />
          <stop offset="1" stopColor="#FFA000" />
        </linearGradient>
        <linearGradient id="gp-c" x1="15.8" y1="15.1" x2="-1.2" y2="32.1" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3A44" />
          <stop offset="1" stopColor="#C31162" />
        </linearGradient>
        <linearGradient id="gp-d" x1="2.7" y1="-3.8" x2="10.3" y2="3.8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#32A071" />
          <stop offset="1" stopColor="#00A076" />
        </linearGradient>
      </defs>
      <path fill="url(#gp-a)" d="M1.1 1.3C.8 1.6.6 2.1.6 2.8v20.4c0 .7.2 1.2.5 1.5l.1.1 11.4-11.4v-.3L1.1 1.3z" />
      <path fill="url(#gp-b)" d="M16.4 17.2l-3.8-3.8v-.3l3.8-3.8.1.1 4.5 2.6c1.3.7 1.3 1.9 0 2.7l-4.5 2.6-.1-.1z" />
      <path fill="url(#gp-c)" d="M16.5 17.2L12.6 13.3 1.1 24.8c.4.4 1.1.5 1.9.1l13.5-7.7" />
      <path fill="url(#gp-d)" d="M16.5 9.4L3 1.7c-.8-.5-1.5-.4-1.9.1l11.5 11.5 3.9-3.9z" />
    </svg>
  );
}
