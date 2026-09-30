'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ParkHubLogo } from '../components/parkhub-logo';
import { LiveDot } from '../components/signal';
import { StoreButtons } from '../components/store-badges';
import { portalPath } from '../lib/urls';

function ReferralInner() {
  const params = useSearchParams();
  const code = (params.get('code') || '').trim();
  const name = (params.get('name') || '').trim();

  const headline = name
    ? `Stai entrando tramite l’invito di ${name}.`
    : code
      ? `Sei stato invitato su ParkHub.`
      : 'Sei stato invitato su ParkHub.';

  const signupUrl = code
    ? portalPath(`/signup?ref=${encodeURIComponent(code)}`)
    : portalPath('/signup');

  return (
    <main className="flex min-h-screen flex-col bg-ink text-white">
      <div className="mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-5 py-16">
        <ParkHubLogo variant="light" height={28} priority />
        <p className="mt-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand">
          <LiveDot /> Invito ParkHub
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">{headline}</h1>
        <p className="mt-5 text-base leading-relaxed text-white/70">
          Scarica l&apos;app e registrati. Il codice è già associato al tuo invito.
        </p>
        {code ? (
          <p className="mt-5 inline-flex w-fit rounded-pill border border-brand/40 bg-brand/10 px-4 py-2 font-mono text-sm font-semibold text-brand">
            {code}
          </p>
        ) : null}
        <StoreButtons className="mt-8" variant="dark" />
        <a
          href={signupUrl}
          className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-pill border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
        >
          Continua al portale
        </a>
        <ul className="mt-10 space-y-2 text-sm text-white/50">
          <li>· codice già collegato</li>
          <li>· nessun acquisto automatico</li>
          <li>· bonus per chi invita solo dopo il tuo primo scambio</li>
        </ul>
        <p className="mt-8 text-xs text-white/35">
          Il codice referral può essere applicato solo durante la registrazione.
        </p>
      </div>
    </main>
  );
}

/** Landing referral minimale — no menu complesso (V2). */
export default function ReferralPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-ink text-white/60">
          Caricamento invito…
        </main>
      }
    >
      <ReferralInner />
    </Suspense>
  );
}
