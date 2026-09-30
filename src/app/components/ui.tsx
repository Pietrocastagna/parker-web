'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { CreateAccountButton, DownloadAppButton, PrimaryButton, SecondaryButton } from './ui-buttons';
import { portalPath } from '../lib/urls';

export function SectionHeading({
  eyebrow,
  title,
  lead,
  light = false,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  light?: boolean;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-bold uppercase tracking-[0.14em] ${
            light ? 'text-teal' : 'text-teal-dark'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 font-display text-[2.1rem] font-bold leading-[1.05] sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/70' : 'text-muted'}`}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-ink px-5 pb-16 pt-28 text-white sm:px-8 sm:pb-20 sm:pt-32 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,201,167,0.18),_transparent_55%)]" />
      <div className="relative mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white/72 sm:text-lg">{lead}</p>
        {children ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
      </div>
    </section>
  );
}

export function TrustRow({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul
      className={`mt-8 grid gap-3 sm:grid-cols-2 ${light ? 'text-white/75' : 'text-muted'}`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm">
          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${light ? 'bg-teal' : 'bg-teal-dark'}`} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function FeatureCard({
  title,
  body,
  eyebrow,
}: {
  title: string;
  body: string;
  eyebrow?: string;
}) {
  return (
    <article className="rounded-card border border-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      {eyebrow ? (
        <p className="text-[11px] font-bold uppercase tracking-wider text-teal-dark">{eyebrow}</p>
      ) : null}
      <h3 className={`font-display text-lg font-bold ${eyebrow ? 'mt-2' : ''}`}>{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </article>
  );
}

export function StepCard({
  step,
  title,
  body,
}: {
  step: number | string;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-card border border-border bg-white p-6 shadow-card">
      <p className="text-xs font-bold text-teal-dark">Passo {step}</p>
      <h3 className="mt-2 font-display text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </article>
  );
}

export function PricingCard({
  name,
  price,
  credit,
  hint,
  note,
  featured,
}: {
  name: string;
  price: string;
  credit: string;
  hint: string;
  note?: string | null;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex flex-col rounded-card border p-5 ${
        featured
          ? 'border-teal bg-ink text-white shadow-soft'
          : 'border-border bg-white shadow-card'
      }`}
    >
      <p className={`text-[11px] font-bold uppercase tracking-wider ${featured ? 'text-teal' : 'text-muted'}`}>
        {hint}
      </p>
      <h3 className="mt-2 font-display text-xl font-bold">{name}</h3>
      <p className="mt-3 font-display text-3xl font-bold tracking-tight">{price}</p>
      <p className={`mt-1 text-sm ${featured ? 'text-white/60' : 'text-muted'}`}>{credit}</p>
      {note ? (
        <p className={`mt-3 text-xs ${featured ? 'text-white/50' : 'text-muted'}`}>{note}</p>
      ) : null}
    </article>
  );
}

export function MissionCard({
  title,
  kind,
  prize,
}: {
  title: string;
  kind: string;
  prize: string;
}) {
  return (
    <article className="rounded-card border border-border bg-white p-6 shadow-card">
      <p className="text-[11px] font-bold uppercase tracking-wider text-teal-dark">{kind}</p>
      <h3 className="mt-2 font-display text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted">Premio: {prize}</p>
    </article>
  );
}

export function ReferralReward() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {[
        { n: '1° amico', v: '€2,50' },
        { n: '2° amico', v: '€2,50' },
        { n: '3° amico', v: '€5,00' },
      ].map((x) => (
        <div key={x.n} className="rounded-card border border-border bg-white p-5 text-center shadow-card">
          <p className="text-xs font-bold uppercase tracking-wider text-muted">{x.n}</p>
          <p className="mt-2 font-display text-3xl font-bold text-teal-dark">{x.v}</p>
        </div>
      ))}
      <div className="rounded-card border border-teal/40 bg-teal-soft p-5 text-center sm:col-span-3">
        <p className="text-sm font-semibold text-ink">
          Totale blocco · <span className="font-display text-2xl font-bold">€10</span> — poi il ciclo ricomincia
        </p>
      </div>
    </div>
  );
}

export function FAQAccordion({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-teal">
            <span className="pr-2 leading-snug">{item.q}</span>
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-soft text-sm font-bold text-teal-dark transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CTASection({
  eyebrow = 'MENO GIRI. PIÙ TEMPO PER TE.',
  title = 'La prossima volta che cerchi parcheggio, non cercare alla cieca.',
  body = 'Scarica ParkHub, crea il tuo account e guarda se qualcuno vicino a te sta già uscendo.',
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-teal px-5 py-16 text-center text-ink sm:px-8 sm:py-20 lg:px-12">
      <div className="relative mx-auto max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/60">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink/75">{body}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <DownloadAppButton />
          <CreateAccountButton />
        </div>
      </div>
    </section>
  );
}

export function RelatedLinks({
  items,
}: {
  items: { href: string; label: string; desc: string }[];
}) {
  return (
    <section className="border-t border-border bg-white px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-site">
        <h2 className="font-display text-xl font-bold">Continua</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-card border border-border bg-paper p-5 transition hover:border-teal/40"
            >
              <p className="font-display font-bold text-ink">{item.label}</p>
              <p className="mt-1 text-sm text-muted">{item.desc}</p>
              <p className="mt-3 text-sm font-bold text-teal-dark">Apri →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export { AssetSlot } from './site-asset';

export { PrimaryButton, SecondaryButton, DownloadAppButton, CreateAccountButton, portalPath };
