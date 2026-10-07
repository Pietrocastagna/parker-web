'use client';

import { PhoneFrame } from './device';
import {
  BookedScreen,
  CompleteScreen,
  ListingDetailScreen,
  MapSearchScreen,
  NavigationScreen,
  SellScreen,
  WalletScreen,
} from './map-canvas';
import { FloatingStatusChip, LiveDot, SignalLine } from './signal';
import { StarMeter } from './ui';

const SCREENS = {
  map: MapSearchScreen,
  sell: SellScreen,
  booked: BookedScreen,
  navigation: NavigationScreen,
  complete: CompleteScreen,
  wallet: WalletScreen,
  detail: ListingDetailScreen,
} as const;

export type ScreenKey = keyof typeof SCREENS;

/** Telefono su stage scuro con chip; props serializzabili per uso da server components. */
export function PhoneStage({
  screen = 'map',
  chip,
  secondary,
  tilt = -4,
}: {
  screen?: ScreenKey;
  chip?: string;
  secondary?: { screen: ScreenKey; tilt?: number };
  tilt?: number;
}) {
  const Screen = SCREENS[screen];
  const Second = secondary ? SCREENS[secondary.screen] : null;
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[520px] sm:h-[600px]">
      <SignalLine variant="arc" className="pointer-events-none absolute left-0 top-0 w-[70%] text-brand" />
      {Second ? (
        <div className="absolute left-0 top-[14%] w-[210px] opacity-80 sm:w-[240px]">
          <PhoneFrame glow={false} tilt={secondary?.tilt ?? 6}>
            <Second />
          </PhoneFrame>
        </div>
      ) : null}
      <div className={`absolute top-[8%] w-[280px] sm:w-[310px] ${Second ? 'right-0' : 'left-1/2 -translate-x-1/2'}`}>
        <PhoneFrame tilt={tilt}>
          <Screen />
        </PhoneFrame>
      </div>
      {chip ? (
        <div className="absolute bottom-[10%] left-0 z-20">
          <FloatingStatusChip tone="brand" className="!px-4 !py-2.5 !text-sm">
            <LiveDot /> {chip}
          </FloatingStatusChip>
        </div>
      ) : null}
    </div>
  );
}

export function RankingStage() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] rounded-stage border border-white/10 bg-white/5 p-8 backdrop-blur">
      <StarMeter value={4.6} light />
      <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-brand">Ultimo evento</p>
          <p className="mt-1 font-semibold text-white">Valutazione 5 stelle</p>
          <p className="font-mono text-xs text-success">+20</p>
        </div>
        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-brand">Livello venditore</p>
          <p className="mt-1 font-semibold text-white">1 P → 2 P a 20 vendite</p>
          <p className="font-mono text-xs text-white/50">12 / 20</p>
        </div>
      </div>
      <p className="mt-4 text-xs text-white/50">Visibile solo a te. Nessuna classifica pubblica.</p>
    </div>
  );
}

/** QR deterministico (solo grafico). */
function QrMock({ size = 160 }: { size?: number }) {
  const n = 21;
  const cells: boolean[] = [];
  let seed = 7;
  for (let i = 0; i < n * n; i++) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    cells.push(seed % 3 === 0);
  }
  const finder = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width={7} height={7} fill="#07131F" />
      <rect x={x + 1} y={y + 1} width={5} height={5} fill="#fff" />
      <rect x={x + 2} y={y + 2} width={3} height={3} fill="#07131F" />
    </g>
  );
  return (
    <svg viewBox={`0 0 ${n} ${n}`} width={size} height={size} shapeRendering="crispEdges" aria-hidden>
      <rect width={n} height={n} fill="#fff" />
      {cells.map((on, i) => {
        const x = i % n;
        const y = Math.floor(i / n);
        const inFinder = (x < 8 && y < 8) || (x > n - 9 && y < 8) || (x < 8 && y > n - 9);
        return on && !inFinder ? <rect key={i} x={x} y={y} width={1} height={1} fill="#07131F" /> : null;
      })}
      {finder(0, 0)}
      {finder(n - 7, 0)}
      {finder(0, n - 7)}
    </svg>
  );
}

export function ReferralCodeCard({ code = 'MARCO-7K2Q' }: { code?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[460px] rounded-stage bg-white p-6 text-ink shadow-device sm:p-8">
      <div className="flex items-center justify-between">
        <p className="eyebrow">Il tuo codice invito</p>
        <span className="chip bg-brand-mist text-brand-deep">
          <LiveDot /> attivo
        </span>
      </div>
      <div className="mt-5 flex flex-col items-center gap-6 sm:flex-row">
        <div className="rounded-2xl border border-line p-3">
          <QrMock size={150} />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <p className="font-mono text-2xl font-bold tracking-wider">{code}</p>
          <p className="mt-2 text-sm text-muted">parkhub.it/referral/?code={code}</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <span className="rounded-pill bg-ink py-2 text-center text-xs font-bold text-brand">Copia link</span>
            <span className="rounded-pill border border-line py-2 text-center text-xs font-semibold">Condividi</span>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2 text-center">
        {[
          ['Invitati', '5'],
          ['Qualificati', '3'],
          ['Bonus', '€10'],
        ].map(([t, v]) => (
          <div key={t} className="rounded-2xl bg-paper px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted">{t}</p>
            <p className="mt-1 font-mono text-lg font-bold">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
