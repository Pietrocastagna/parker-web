'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { portalPath, siteHref } from '../lib/urls';
import { PhoneFrame } from './device';
import { MapSearchScreen } from './map-canvas';

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Smart({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  if (href.startsWith('http')) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function PrimaryCTA({
  href,
  children,
  className = '',
  tone = 'brand',
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: 'brand' | 'ink' | 'white';
}) {
  const t =
    tone === 'ink'
      ? 'bg-ink text-white hover:bg-ink-2 shadow-[0_10px_30px_rgba(7,19,31,0.25)]'
      : tone === 'white'
        ? 'bg-white text-ink hover:bg-brand-mist shadow-float'
        : 'bg-brand text-ink hover:bg-[#12dcb9] shadow-[0_12px_32px_rgba(0,201,167,0.35)]';
  return (
    <Smart
      href={href}
      className={`group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-pill px-7 py-3.5 text-[15px] font-bold transition-all duration-300 hover:-translate-y-0.5 ${t} ${className}`}
    >
      {children}
      <Arrow />
    </Smart>
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
    ? `inline-flex min-h-[48px] items-center justify-center rounded-pill border border-white/25 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur transition hover:bg-white/20 ${className}`
    : `inline-flex min-h-[48px] items-center justify-center rounded-pill border border-ink/15 bg-white/70 px-7 py-3.5 text-[15px] font-semibold text-ink backdrop-blur transition hover:border-ink/30 hover:bg-white ${className}`;
  return (
    <Smart href={href} className={cls}>
      {children}
    </Smart>
  );
}

export function DownloadParkHub({
  className = '',
  light = false,
  tone,
}: {
  className?: string;
  light?: boolean;
  tone?: 'brand' | 'ink' | 'white';
}) {
  if (light) {
    return (
      <SecondaryCTA href={siteHref('/app')} light className={className}>
        Scarica ParkHub
      </SecondaryCTA>
    );
  }
  return (
    <PrimaryCTA href={siteHref('/app')} className={className} tone={tone}>
      Scarica ParkHub
    </PrimaryCTA>
  );
}

export function CreateAccountCTA({ className = '', light = false }: { className?: string; light?: boolean }) {
  return (
    <SecondaryCTA href={portalPath('/signup')} light={light} className={className}>
      Crea account
    </SecondaryCTA>
  );
}

/** Compat: DeviceFrame = PhoneFrame; AppMapScreen = MapSearchScreen. */
export function DeviceFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <PhoneFrame className={className}>{children}</PhoneFrame>;
}

export function AppMapScreen() {
  return <MapSearchScreen />;
}
