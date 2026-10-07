'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { AssetSlot } from './site-asset';
import { CreateAccountCTA, DownloadParkHub, PrimaryCTA, SecondaryCTA } from './ui-buttons';
import { portalPath } from '../lib/urls';
import { Reveal } from './reveal';
import { LiveDot, SignalLine } from './signal';

export function SectionEyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`${light ? 'eyebrow-light' : 'eyebrow'} flex items-center gap-2`}>
      <span className={`h-px w-6 ${light ? 'bg-brand' : 'bg-brand-deep'}`} aria-hidden />
      {children}
    </p>
  );
}

export function EditorialHeading({
  eyebrow,
  title,
  lead,
  light = false,
  align = 'left',
  className = '',
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  light?: boolean;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <Reveal className={`max-w-prose ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow ? (
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <SectionEyebrow light={light}>{eyebrow}</SectionEyebrow>
        </div>
      ) : null}
      <h2 className={`display-h2 text-balance mt-3 ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {lead ? <p className={`lead mt-5 ${light ? 'text-white/70' : ''}`}>{lead}</p> : null}
    </Reveal>
  );
}

/** Hero pagine interne: testo 6 col + stage visivo 6 col. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  asset,
  visual,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
  asset?: string;
  visual?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 opacity-90">
        {asset ? <AssetSlot label={asset} fill tone="dark" /> : null}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,19,31,0.94)_0%,rgba(7,19,31,0.78)_42%,rgba(7,19,31,0.38)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" aria-hidden />
      <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-brand/15 blur-[120px]" aria-hidden />
      <div className="relative mx-auto grid max-w-site items-center gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:grid-cols-12 lg:px-12 lg:pb-24 lg:pt-40">
        <div className={visual ? 'lg:col-span-6' : 'lg:col-span-8'}>
          <SectionEyebrow light>{eyebrow}</SectionEyebrow>
          <h1 className="text-balance mt-4 font-display text-[2.4rem] font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-5xl lg:text-[3.6rem]">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/72">{lead}</p>
          {children ? <div className="mt-9 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
        </div>
        {visual ? <div className="relative lg:col-span-6">{visual}</div> : null}
      </div>
    </section>
  );
}

export function FAQAccordion({ items, light = true }: { items: readonly { q: string; a: string }[]; light?: boolean }) {
  return (
    <div className={`divide-y ${light ? 'divide-white/10' : 'divide-line'}`}>
      {items.map((item, i) => (
        <details key={item.q} className="group py-1">
          <summary
            className={`flex cursor-pointer list-none items-center justify-between gap-5 rounded-2xl px-4 py-5 outline-none transition marker:content-none focus-visible:ring-2 focus-visible:ring-brand ${
              light ? 'hover:bg-white/5' : 'hover:bg-ink/[0.03]'
            }`}
          >
            <span className="flex items-start gap-4">
              <span className={`mt-0.5 font-mono text-xs ${light ? 'text-brand' : 'text-brand-deep'}`}>{String(i + 1).padStart(2, '0')}</span>
              <span className={`text-[17px] font-semibold leading-snug ${light ? 'text-white' : 'text-ink'}`}>{item.q}</span>
            </span>
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-transform duration-300 group-open:rotate-45 ${
                light ? 'bg-brand/15 text-brand' : 'bg-brand-mist text-brand-deep'
              }`}
            >
              +
            </span>
          </summary>
          <p className={`px-4 pb-6 pl-[3.1rem] text-[15px] leading-relaxed ${light ? 'text-white/65' : 'text-muted'}`}>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function FAQAccordionLight({ items }: { items: readonly { q: string; a: string }[] }) {
  return <FAQAccordion items={items} light={false} />;
}

export function RelatedLinks({ items }: { items: { href: string; label: string; desc: string }[] }) {
  return (
    <section className="border-t border-line bg-white px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-site">
        <SectionEyebrow>Continua</SectionEyebrow>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.href} delay={i * 70}>
              <Link
                href={item.href}
                className="group block rounded-card border border-line bg-warm-paper p-6 transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-soft"
              >
                <p className="font-display text-lg font-bold">{item.label}</p>
                <p className="mt-1 text-sm text-muted">{item.desc}</p>
                <p className="link-arrow mt-4 text-brand-deep">Apri</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCinematicCTA({
  eyebrow = 'Il prossimo posto potrebbe liberarsi adesso.',
  title = 'Non arrivare e poi cercare. Guarda prima chi sta uscendo.',
  asset = 'home-17-final-cta-blue-hour-wide.webp',
}: {
  eyebrow?: string;
  title?: string;
  asset?: string;
}) {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-ink text-white">
      <AssetSlot label={asset} fill tone="dark" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />
      <SignalLine
        variant="arc"
        className="pointer-events-none absolute right-[8%] top-[10%] hidden w-[34%] text-brand opacity-70 lg:block"
      />
      <div className="relative mx-auto flex min-h-[72vh] max-w-site flex-col justify-end px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <Reveal>
          <SectionEyebrow light>{eyebrow}</SectionEyebrow>
          <h2 className="display-h2 text-balance mt-4 max-w-3xl">{title}</h2>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <DownloadParkHub />
            <CreateAccountCTA light />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Scala livelli 1→5 come barre crescenti. */
export function LevelLadder({
  tiers,
  light = false,
}: {
  tiers: readonly { level: number; buyer: string; seller: string; sales?: string }[];
  light?: boolean;
}) {
  return (
    <div>
      <div className="hidden items-end gap-3 md:flex">
        {tiers.map((t, i) => (
          <Reveal key={t.level} delay={i * 80} className="flex-1">
            <div className="group text-center">
              <p className={`font-mono text-2xl font-bold ${light ? 'text-white' : 'text-ink'}`}>{t.buyer}</p>
              <p className={`mt-1 text-xs ${light ? 'text-white/55' : 'text-muted'}`}>
                venditore <span className="font-mono font-semibold">{t.seller}</span>
              </p>
              <div
                className={`relative mt-4 overflow-hidden rounded-t-2xl transition-all duration-500 group-hover:brightness-110 ${
                  i === 0 ? 'bg-brand/40' : 'bg-gradient-to-t from-brand-deep to-brand'
                }`}
                style={{ height: `${56 + i * 34}px` }}
              >
                <span className="absolute inset-x-0 bottom-3 font-display text-sm font-extrabold text-ink/80">{t.level}P</span>
              </div>
              <div className={`h-px ${light ? 'bg-white/20' : 'bg-line'}`} />
              {t.sales ? <p className={`mt-2 text-[11px] font-semibold ${light ? 'text-white/50' : 'text-muted'}`}>{t.sales} vendite</p> : null}
            </div>
          </Reveal>
        ))}
      </div>
      <ol className="relative space-y-3 border-l-2 border-brand/40 pl-6 md:hidden">
        {tiers.map((t) => (
          <li key={t.level} className="relative">
            <span className="absolute -left-[31px] top-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-ink">
              {t.level}
            </span>
            <div className={`flex items-center justify-between rounded-card border p-4 ${light ? 'border-white/10 bg-white/5' : 'border-line bg-white'}`}>
              <div>
                <p className={`font-mono text-lg font-bold ${light ? 'text-white' : ''}`}>{t.buyer}</p>
                <p className={`text-xs ${light ? 'text-white/55' : 'text-muted'}`}>venditore {t.seller}</p>
              </div>
              {t.sales ? <p className={`text-xs font-semibold ${light ? 'text-white/50' : 'text-muted'}`}>{t.sales} vendite</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ReferralEquation({ compact = false }: { compact?: boolean }) {
  const items = [
    { n: '1° amico', v: '2,50' },
    { n: '2° amico', v: '2,50' },
    { n: '3° amico', v: '5,00' },
  ];
  return (
    <div className={`flex flex-wrap items-stretch gap-2 ${compact ? '' : 'sm:gap-3'}`}>
      {items.map((x, i) => (
        <div key={x.n} className="flex items-center gap-2 sm:gap-3">
          <div className="rounded-2xl border border-line bg-white px-4 py-3 text-center shadow-soft">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted">{x.n}</p>
            <p className="mt-1 font-mono text-2xl font-bold text-ink">
              <span className="text-base text-muted">€</span>
              {x.v}
            </p>
          </div>
          <span className="font-display text-2xl font-bold text-brand-deep">{i < 2 ? '+' : '='}</span>
        </div>
      ))}
      <div className="flex items-center rounded-2xl bg-ink px-5 py-3 text-white shadow-float">
        <p className="font-mono text-3xl font-bold text-brand">€10</p>
        <p className="ml-3 max-w-[8rem] text-xs leading-tight text-white/65">ogni 3 amici qualificati</p>
      </div>
    </div>
  );
}

/** Gauge stelle 1–5. */
export function StarMeter({ value = 4.6, light = false }: { value?: number; light?: boolean }) {
  const pct = Math.min(1, Math.max(0, (value - 1) / 4));
  const r = 84;
  const c = Math.PI * r; // semicerchio
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <svg viewBox="0 0 200 120" className="w-full" aria-hidden>
        <path d="M16 110 A 84 84 0 0 1 184 110" stroke={light ? 'rgba(255,255,255,0.12)' : 'rgba(7,19,31,0.08)'} strokeWidth="14" fill="none" strokeLinecap="round" />
        <path
          d="M16 110 A 84 84 0 0 1 184 110"
          stroke="url(#starGrad)"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${c * pct} ${c}`}
        />
        <defs>
          <linearGradient id="starGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#F6B64A" />
            <stop offset="1" stopColor="#00C9A7" />
          </linearGradient>
        </defs>
        {[1, 2, 3, 4, 5].map((n, i) => {
          const a = Math.PI - (Math.PI * i) / 4;
          const x = 100 + Math.cos(a) * 62;
          const y = 110 - Math.sin(a) * 62;
          return (
            <text key={n} x={x} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill={light ? 'rgba(255,255,255,0.5)' : 'rgba(7,19,31,0.45)'}>
              {n}
            </text>
          );
        })}
      </svg>
      <div className="absolute inset-x-0 bottom-0 text-center">
        <p className={`font-mono text-4xl font-bold ${light ? 'text-white' : 'text-ink'}`}>{value.toFixed(1)}</p>
        <p className={`text-xs font-semibold ${light ? 'text-white/55' : 'text-muted'}`}>la tua affidabilità</p>
      </div>
    </div>
  );
}

export function ScoreFeed({ light = false }: { light?: boolean }) {
  const events = [
    { t: 'Valutazione 5 stelle dopo lo scambio', d: '+20', good: true },
    { t: 'Scambio completato in orario', d: '+0', good: true },
    { t: 'Annullo tardivo come acquirente', d: '−15', good: false },
    { t: 'Report approvato contro venditore', d: '−50', good: false },
    { t: 'Report respinto contro segnalante', d: '−30', good: false },
  ];
  return (
    <ul className="space-y-2.5">
      {events.map((e, i) => (
        <Reveal as="li" key={e.t} delay={i * 60}>
          <div className={`flex items-center gap-4 rounded-2xl border px-4 py-3.5 ${light ? 'border-white/10 bg-white/5' : 'border-line bg-white shadow-soft'}`}>
            <span className={`h-2.5 w-2.5 rounded-full ${e.good ? 'bg-success' : 'bg-danger'}`} />
            <p className={`flex-1 text-sm font-semibold ${light ? 'text-white' : 'text-ink'}`}>{e.t}</p>
            <span className={`rounded-pill px-2.5 py-1 font-mono text-xs font-bold ${e.good ? 'bg-success/15 text-success' : 'bg-danger/15 text-danger'}`}>
              {e.d}
            </span>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

/** Tre tasche del wallet, sovrapposte come carte. */
export function WalletBuckets() {
  const buckets = [
    { n: '01', t: 'Bonus P', v: '2 P', d: 'Promo, missioni, referral. Scadenza breve. Solo per prenotare.', bg: 'from-[#F6B64A] to-[#E59A1F]', fg: 'text-ink', order: 'Prima sullo swap' },
    { n: '02', t: 'Pacchetto P', v: '12 P', d: 'Pacchetto digitale comprato sul portale. Si spende in P sugli scambi.', bg: 'from-brand to-brand-deep', fg: 'text-ink', order: 'P per scambi' },
    { n: '03', t: 'Guadagni da vendite', v: '€1,00', d: 'Quando vendi. Per ricaricare o buoni — non diventano P da soli.', bg: 'from-[#2a3a4d] to-ink-2', fg: 'text-white', order: 'A parte' },
  ];
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
      <div className="relative mx-auto h-[300px] w-full max-w-[420px] lg:col-span-6">
        {buckets.map((b, i) => (
          <Reveal
            key={b.t}
            delay={i * 120}
            className="absolute inset-x-0"
          >
            <div
              className={`rounded-[22px] bg-gradient-to-br p-5 shadow-device transition-transform duration-500 hover:-translate-y-2 ${b.bg} ${b.fg}`}
              style={{ transform: `translateY(${i * 78}px) scale(${1 - (2 - i) * 0.04})`, zIndex: i + 1 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider opacity-70">{b.n} · {b.t}</p>
                  <p className="mt-1 font-mono text-3xl font-bold">{b.v}</p>
                </div>
                <span className="rounded-pill bg-black/15 px-2.5 py-1 text-[10px] font-bold">{b.order}</span>
              </div>
              <div className="mt-6 flex items-center gap-2 opacity-70">
                <span className="h-6 w-9 rounded bg-white/40" />
                <span className="font-mono text-[11px]">ParkHub Wallet</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <ol className="space-y-5 lg:col-span-6">
        {buckets.map((b, i) => (
          <Reveal as="li" key={b.t} delay={i * 90}>
            <div className="flex gap-4">
              <span className="mt-1 font-mono text-sm font-bold text-brand">{b.n}</span>
              <div>
                <p className="font-display text-xl font-bold text-white">{b.t}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/65">{b.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

/** Stack identità verificata, come diagramma verticale. */
export function IdentityStack() {
  const items = [
    ['Email verificata', 'Prima di tutto: un contatto reale.'],
    ['Telefono verificato', 'Codice SMS. Serve per prenotare e vendere.'],
    ['Veicolo associato', 'Targa e modello: chi arriva sa cosa cercare.'],
    ['Ranking personale', 'Stelle visibili solo a te. Muovono il livello.'],
    ['Segnalazioni documentate', 'Foto obbligatorie, categorie, revisione admin.'],
  ];
  return (
    <ol className="relative">
      <span className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-brand via-brand/60 to-brand/10" aria-hidden />
      {items.map(([t, d], i) => (
        <Reveal as="li" key={t} delay={i * 80} className="relative flex gap-5 py-3">
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-white shadow-soft">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007F6D" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </span>
          <div className="flex-1 rounded-2xl border border-line bg-white px-5 py-4 shadow-soft">
            <p className="font-display text-base font-bold">{t}</p>
            <p className="mt-0.5 text-sm text-muted">{d}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export function MissionProgress({
  title,
  kind,
  prize,
  value,
  max,
  expires,
}: {
  title: string;
  kind: string;
  prize: string;
  value: number;
  max: number;
  expires?: string;
}) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="rounded-card border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-brand/40">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-brand-deep">{kind}</p>
          <h3 className="mt-1 font-display text-lg font-bold">{title}</h3>
        </div>
        <span className="rounded-pill bg-brand-mist px-3 py-1 text-xs font-semibold text-brand-deep">{prize}</span>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-paper">
          <div className="h-full rounded-full bg-gradient-to-r from-brand-deep to-brand transition-all duration-700" style={{ width: `${pct}%` }} />
        </div>
        <span className="font-mono text-xs font-bold text-ink">
          {value}/{max}
        </span>
      </div>
      {expires ? <p className="mt-2 text-[11px] text-muted">{expires}</p> : null}
    </div>
  );
}

export function NotificationCard({ light = false }: { light?: boolean }) {
  return (
    <div className={`flex items-start gap-3 rounded-[20px] p-4 shadow-float ${light ? 'bg-white/95 text-ink backdrop-blur' : 'bg-ink/90 text-white backdrop-blur'}`}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-ink">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
          <path d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6zM10 20a2 2 0 0 0 4 0" />
        </svg>
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[13px] font-bold">ParkHub</p>
          <p className={`text-[11px] ${light ? 'text-muted' : 'text-white/50'}`}>adesso</p>
        </div>
        <p className="text-sm font-semibold">Marco sta arrivando</p>
        <p className={`text-[13px] ${light ? 'text-muted' : 'text-white/65'}`}>
          <LiveDot className="mr-1.5 align-middle" /> 180 m · 2 min · Via dei Tigli 12
        </p>
      </div>
    </div>
  );
}

export { AssetSlot, DownloadParkHub, CreateAccountCTA, PrimaryCTA, SecondaryCTA, portalPath, Reveal };
