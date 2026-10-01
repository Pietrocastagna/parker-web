'use client';

import type { ReactNode } from 'react';

/** Telefono realistico: cornice titanio, dynamic island, tasti laterali. */
export function PhoneFrame({
  children,
  className = '',
  glow = true,
  tilt = 0,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  tilt?: number;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[320px] ${className}`}
      style={tilt ? { transform: `rotate(${tilt}deg)` } : undefined}
    >
      {glow ? <div className="absolute -inset-10 rounded-[3rem] bg-brand/25 blur-3xl" aria-hidden /> : null}
      {/* tasti */}
      <span className="absolute -left-[3px] top-[18%] h-10 w-[3px] rounded-l bg-[#2a3038]" aria-hidden />
      <span className="absolute -left-[3px] top-[30%] h-16 w-[3px] rounded-l bg-[#2a3038]" aria-hidden />
      <span className="absolute -right-[3px] top-[24%] h-20 w-[3px] rounded-r bg-[#2a3038]" aria-hidden />
      <div className="relative aspect-[9/19.2] rounded-[2.9rem] bg-gradient-to-b from-[#3a4149] via-[#1c2128] to-[#2b3138] p-[6px] shadow-device">
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-ink ring-1 ring-black/60">
          <div className="absolute left-1/2 top-2.5 z-20 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" aria-hidden />
          <div className="absolute inset-0">{children}</div>
          <div className="pointer-events-none absolute bottom-2 left-1/2 z-20 h-1.5 w-28 -translate-x-1/2 rounded-full bg-black/60" aria-hidden />
        </div>
      </div>
    </div>
  );
}

/** Laptop stilizzato per il portale. */
export function LaptopFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[720px] ${className}`}>
      <div className="rounded-t-[18px] bg-gradient-to-b from-[#3a4149] to-[#1c2128] p-[8px] pb-0 shadow-device">
        <div className="aspect-[16/10] overflow-hidden rounded-t-[12px] bg-paper ring-1 ring-black/50">{children}</div>
      </div>
      <div className="h-3 rounded-b-[14px] bg-gradient-to-b from-[#2b3138] to-[#171b20]" />
      <div className="mx-auto h-1.5 w-[32%] rounded-b-md bg-[#0f1216]" />
    </div>
  );
}

/** Finestra browser leggera (per screenshot portale in piano). */
export function BrowserFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-card border border-line bg-white shadow-soft ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line bg-paper px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="ml-3 h-4 flex-1 rounded-md bg-white text-center text-[9px] leading-4 text-ink/40">portale.parkhub</span>
      </div>
      {children}
    </div>
  );
}
