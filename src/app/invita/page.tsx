import type { Metadata } from 'next';
import { FloatingHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  EditorialHeading,
  FinalCinematicCTA,
  PageHero,
  ReferralEquation,
  RelatedLinks,
} from '../components/ui';
import { AssetSlot } from '../components/site-asset';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Invita amici su ParkHub — Bonus referral',
  description:
    'Invita qualcuno che userà davvero ParkHub. Bonus al primo scambio: €2,50 + €2,50 + €5 = €10.',
};

export default function InvitaPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <FloatingHeader />
      <PageHero
        eyebrow="Più persone, più posti"
        title="Invita qualcuno che userà davvero ParkHub. Il bonus arriva al primo scambio."
        lead="Il referral non premia il solo download. Premia l’uso reale."
        asset="invite-01-hero-friends-smartphone-wide.webp"
      />

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-site">
          <EditorialHeading title="La formula" />
          <div className="mt-10">
            <ReferralEquation />
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-mist/40">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <EditorialHeading
              title="Come funziona"
              lead="Codice solo in registrazione. Pending fino al primo swap. Solo swap, non prelevabile."
            />
            <ol className="mt-8 space-y-3 text-sm text-muted">
              {[
                'Apri Invita',
                'Condividi link o QR',
                'L’amico si registra',
                'Completa il primo scambio',
                'Il bonus si sblocca',
                'Parte il nuovo blocco',
              ].map((s, i) => (
                <li key={s}>
                  <strong className="text-ink">{i + 1}.</strong> {s}
                </li>
              ))}
            </ol>
            <a href={portalPath('/signup')} className="mt-8 inline-flex rounded-pill bg-brand px-7 py-3 text-sm font-bold text-ink">
              Registrati e apri Invita
            </a>
          </div>
          <AssetSlot label="invite-03-referral-qr-context.webp" />
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/missioni', label: 'Missioni', desc: 'Altri premi solo-swap.' },
          { href: '/come-funziona', label: 'Come funziona', desc: 'Il primo swap dell’amico.' },
          { href: '/prezzi', label: 'Prezzi', desc: 'Credito subito.' },
        ]}
      />
      <FinalCinematicCTA title="Invita e fai crescere la mappa." />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
