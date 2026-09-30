'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SiteHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import { TrustRow } from '../components/ui';
import { StoreButtons } from '../components/store-badges';
import { portalPath } from '../lib/urls';

function ReferralInner() {
  const params = useSearchParams();
  const code = (params.get('code') || '').trim();
  const name = (params.get('name') || '').trim();

  const headline = name
    ? `${name} ti ha invitato a provare ParkHub.`
    : code
      ? `Sei stato invitato su ParkHub con il codice ${code}.`
      : 'Sei stato invitato su ParkHub.';

  const signupUrl = code
    ? portalPath(`/signup?ref=${encodeURIComponent(code)}`)
    : portalPath('/signup');

  return (
    <>
      <section className="relative overflow-hidden bg-ink px-5 pb-16 pt-28 text-white sm:px-8 sm:pb-20 sm:pt-32 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,201,167,0.2),_transparent_55%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">
            Sei stato invitato su ParkHub
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/72 sm:text-lg">
            Scarica l&apos;app e registrati usando il codice già associato al tuo invito.
          </p>
          {code ? (
            <p className="mt-4 inline-flex rounded-pill border border-teal/40 bg-teal/10 px-4 py-2 text-sm font-semibold text-teal">
              Codice: {code}
            </p>
          ) : null}
          <div className="mt-8">
            <StoreButtons variant="dark" />
          </div>
          <div className="mt-6">
            <a
              href={signupUrl}
              className="inline-flex rounded-pill border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Continua al portale
            </a>
          </div>
          <TrustRow
            light
            items={[
              'Codice già collegato',
              'Nessun acquisto automatico',
              'Bonus per chi invita solo dopo il tuo primo scambio',
            ]}
          />
          <p className="mt-8 text-sm text-white/50">
            Il codice referral può essere applicato solo durante la registrazione.
          </p>
        </div>
      </section>
    </>
  );
}

export default function ReferralPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader dark />
      <Suspense
        fallback={
          <section className="bg-ink px-5 pb-16 pt-28 text-white">
            <p className="text-sm text-white/60">Caricamento invito…</p>
          </section>
        }
      >
        <ReferralInner />
      </Suspense>
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
