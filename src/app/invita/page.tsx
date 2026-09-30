import type { Metadata } from 'next';
import { SiteHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  AssetSlot,
  CTASection,
  PageHero,
  ReferralReward,
  RelatedLinks,
  SectionHeading,
  StepCard,
} from '../components/ui';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Invita amici su ParkHub — Bonus referral',
  description:
    'Condividi il codice ParkHub. Guadagni €2,50 quando l’amico completa il primo scambio. Blocco da 3 = €10.',
};

const steps = [
  { n: 1, t: 'Apri Invita', d: 'Sul portale e in Account in app: codice, link, QR.' },
  { n: 2, t: 'Condividi link o QR', d: 'WhatsApp, messaggio, email o stampa.' },
  { n: 3, t: 'L’amico si registra', d: 'Il codice si applica solo in registrazione.' },
  { n: 4, t: 'Completa il primo scambio', d: 'Scaricare o creare l’account non basta.' },
  { n: 5, t: 'Il bonus si sblocca', d: 'Tu ricevi €2,50 spendibili sugli swap.' },
  { n: 6, t: 'Parte il nuovo blocco', d: 'Ogni 3 amici qualificati = €10 totali.' },
];

export default function InvitaPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader dark />
      <PageHero
        eyebrow="Più amici, più ParkHub funziona."
        title="Condividi il codice. Il bonus arriva quando il tuo amico fa il primo scambio."
        lead="Il referral non premia il solo download. Premia l’uso reale: così cresce la mappa."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading title="Come funziona il reward" />
          <div className="mt-10">
            <ReferralReward />
          </div>
          <p className="mt-6 text-sm text-muted">
            €2,50 + €2,50 + €5 = €10 ogni blocco di 3. Poi il ciclo ricomincia. L’invitato non riceve
            un bonus di ingresso da referral.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading title="Sei passi" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <StepCard key={s.n} step={s.n} title={s.t} body={s.d} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold">Regole</h2>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li>· codice valido solo in registrazione;</li>
              <li>· bonus in attesa fino al primo scambio;</li>
              <li>· spendibile solo sugli swap;</li>
              <li>· non prelevabile.</li>
            </ul>
            <a
              href={portalPath('/signup')}
              className="mt-8 inline-flex rounded-pill bg-teal px-7 py-3 text-sm font-bold text-ink"
            >
              Registrati e apri Invita amici
            </a>
          </div>
          <AssetSlot label="invite-friends-city.webp" />
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/missioni', label: 'Missioni', desc: 'Altri premi solo-swap.' },
          { href: '/come-funziona', label: 'Come funziona', desc: 'Cosa deve fare l’amico al primo swap.' },
          { href: '/prezzi', label: 'Prezzi', desc: 'Pacchetti se vuoi credito subito.' },
        ]}
      />
      <CTASection title="Invita e fai crescere la mappa" />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
