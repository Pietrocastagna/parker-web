'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { AssetSlot } from './site-asset';
import { CreateAccountCTA, DownloadParkHub, PrimaryCTA, SecondaryCTA } from './ui-buttons';
import { portalPath } from '../lib/urls';

export function SectionEyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={light ? 'eyebrow-light' : 'eyebrow'}>{children}</p>;
}

export function EditorialHeading({
  eyebrow,
  title,
  lead,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-prose">
      {eyebrow ? <SectionEyebrow light={light}>{eyebrow}</SectionEyebrow> : null}
      <h2 className={`display-h2 mt-3 ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {lead ? <p className={`lead mt-4 ${light ? 'text-white/70' : ''}`}>{lead}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  asset,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
  asset?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-ink px-5 pb-16 pt-28 text-white sm:px-8 sm:pb-20 sm:pt-32 lg:px-12">
      {asset ? (
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <AssetSlot label={asset} className="!aspect-auto h-full min-h-full rounded-none" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,201,167,0.2),_transparent_55%)]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/70" />
      <div className="relative mx-auto max-w-3xl">
        <SectionEyebrow light>{eyebrow}</SectionEyebrow>
        <h1 className="display-h1 mt-3 text-[2.6rem] sm:text-5xl lg:text-[3.5rem]">{title}</h1>
        <p className="mt-5 text-base leading-relaxed text-white/72 sm:text-lg">{lead}</p>
        {children ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
      </div>
    </section>
  );
}

export function FAQAccordion({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-white outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-brand">
            <span className="pr-2 leading-snug">{item.q}</span>
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/15 text-sm font-bold text-brand transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-white/65">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function FAQAccordionLight({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-brand">
            <span className="pr-2 leading-snug">{item.q}</span>
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-mist text-sm font-bold text-brand-deep transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function RelatedLinks({ items }: { items: { href: string; label: string; desc: string }[] }) {
  return (
    <section className="border-t border-line bg-white px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-site">
        <h2 className="font-display text-xl font-bold">Continua</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-card border border-line bg-warm-paper p-5 transition hover:border-brand/40"
            >
              <p className="font-display font-bold">{item.label}</p>
              <p className="mt-1 text-sm text-muted">{item.desc}</p>
              <p className="mt-3 text-sm font-bold text-brand-deep">Apri →</p>
            </Link>
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
    <section className="relative min-h-[70vh] overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <AssetSlot label={asset} className="!aspect-auto h-full min-h-full rounded-none" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-site flex-col justify-end px-5 py-16 sm:px-8 lg:px-12">
        <SectionEyebrow light>{eyebrow}</SectionEyebrow>
        <h2 className="display-h2 mt-3 max-w-2xl">{title}</h2>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <DownloadParkHub />
          <CreateAccountCTA light />
        </div>
      </div>
    </section>
  );
}

export function LevelLadder({
  tiers,
}: {
  tiers: readonly { level: number; buyer: string; seller: string }[];
}) {
  return (
    <div>
      <div className="hidden items-end gap-2 md:flex">
        {tiers.map((t, i) => (
          <div key={t.level} className="relative flex-1">
            {i < tiers.length - 1 ? (
              <div className="absolute left-1/2 top-6 z-0 h-0.5 w-full bg-brand/30" aria-hidden />
            ) : null}
            <div
              className="relative z-10 rounded-card border border-line bg-white p-4 text-center shadow-soft transition hover:-translate-y-1 hover:border-brand/50"
              style={{ marginTop: `${(5 - t.level) * 10}px` }}
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-ink">
                {t.level}
              </div>
              <p className="font-mono text-lg font-bold">{t.buyer}</p>
              <p className="mt-1 text-xs text-muted">seller {t.seller}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-3 md:hidden">
        {tiers.map((t) => (
          <div key={t.level} className="flex items-center gap-4 rounded-card border border-line bg-white p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-bold text-ink">
              {t.level}
            </div>
            <div>
              <p className="font-mono font-bold">{t.buyer}</p>
              <p className="text-xs text-muted">seller {t.seller}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReferralEquation() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {[
        { n: '1°', v: '€2,50' },
        { n: '2°', v: '€2,50' },
        { n: '3°', v: '€5,00' },
      ].map((x) => (
        <div key={x.n} className="rounded-card border border-line bg-white p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-muted">{x.n} amico</p>
          <p className="mt-2 font-mono text-3xl font-bold text-brand-deep">{x.v}</p>
        </div>
      ))}
      <div className="rounded-card border border-brand/40 bg-brand-mist p-5 text-center sm:col-span-3">
        <p className="font-display text-lg font-bold text-ink">
          = <span className="font-mono text-3xl text-brand-deep">€10</span> ogni 3 amici qualificati
        </p>
      </div>
    </div>
  );
}

export { AssetSlot, DownloadParkHub, CreateAccountCTA, PrimaryCTA, SecondaryCTA, portalPath };
