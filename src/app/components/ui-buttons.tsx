'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { portalPath, siteHref } from '../lib/urls';

export function PrimaryCTA({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const cls = `inline-flex min-h-[44px] items-center justify-center rounded-pill bg-brand px-7 py-3.5 text-sm font-bold text-ink transition hover:bg-brand-deep hover:text-white ${className}`;
  if (href.startsWith('http')) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function SecondaryCTA({
  href,
  children,
  light = false,
  className = '',
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  const cls = light
    ? `inline-flex min-h-[44px] items-center justify-center rounded-pill border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 ${className}`
    : `inline-flex min-h-[44px] items-center justify-center rounded-pill border border-line bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink/5 ${className}`;
  if (href.startsWith('http')) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function DownloadParkHub({ className = '', light = false }: { className?: string; light?: boolean }) {
  if (light) return <SecondaryCTA href={siteHref('/app')} light className={className}>Scarica ParkHub</SecondaryCTA>;
  return <PrimaryCTA href={siteHref('/app')} className={className}>Scarica ParkHub</PrimaryCTA>;
}

export function CreateAccountCTA({ className = '', light = false }: { className?: string; light?: boolean }) {
  return (
    <SecondaryCTA href={portalPath('/signup')} light={light} className={className}>
      Crea account
    </SecondaryCTA>
  );
}

/** Device frame con schermo scuro per mock UI HTML. */
export function DeviceFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[300px] ${className}`}>
      <div className="absolute -inset-6 rounded-[2.5rem] bg-brand/20 blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink shadow-device">
        <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[10px] font-semibold text-white/45">
          <span>9:41</span>
          <span className="h-1.5 w-16 rounded-full bg-white/20" />
          <span>5G</span>
        </div>
        {children}
      </div>
    </div>
  );
}

export function AppMapScreen() {
  const spots = [
    { street: 'Via dei Tigli 12', dist: '180 m', price: '€1,20', eta: '2 min', hot: true },
    { street: 'Piazza Europa', dist: '320 m', price: '€2,00', eta: '4 min', hot: false },
    { street: 'Corso Nuovo 8', dist: '450 m', price: '€1,20', eta: '6 min', hot: false },
  ];
  return (
    <>
      <div className="relative mx-3 h-44 overflow-hidden rounded-2xl bg-[#152033]">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              'linear-gradient(#2a3548 1px, transparent 1px), linear-gradient(90deg, #2a3548 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute left-[18%] top-[32%] h-8 w-8 rounded-full bg-brand/25 ring-2 ring-brand">
          <span className="absolute inset-1.5 rounded-full bg-brand" />
          <span className="absolute -inset-2 rounded-full border border-brand/40 signal-pulse" />
        </div>
        <div className="absolute right-[20%] top-[46%] rounded-lg bg-white px-2 py-1 font-mono text-[10px] font-bold text-ink shadow">
          €1,20
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex gap-2">
          <span className="rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-semibold text-white">Vicini a te</span>
          <span className="rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold text-ink">3 live</span>
        </div>
      </div>
      <div className="space-y-2 px-3 py-3">
        {spots.map((s) => (
          <div
            key={s.street}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${
              s.hot ? 'bg-brand/15 ring-1 ring-brand/40' : 'bg-white/5'
            }`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/20 font-display text-xs font-bold text-brand">
              P
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-white">{s.street}</p>
              <p className="font-mono text-[10px] text-white/45">
                {s.dist} · ~{s.eta}
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm font-bold text-white">{s.price}</p>
              <p className="text-[9px] text-white/40">fisso</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-4 py-3">
        <div className="rounded-full bg-brand py-2.5 text-center text-xs font-bold text-ink">Prenota questo posto</div>
      </div>
    </>
  );
}
