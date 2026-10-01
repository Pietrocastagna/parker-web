import type { Metadata } from 'next';
import { FloatingHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  EditorialHeading,
  FinalCinematicCTA,
  PageHero,
  PrimaryCTA,
  ReferralEquation,
  RelatedLinks,
  Reveal,
} from '../components/ui';
import { AssetSlot } from '../components/site-asset';
import { ReferralCodeCard } from '../components/hero-visuals';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Invita un amico su ParkHub — €2,50 + €2,50 + €5',
  description:
    'Invita chi userà davvero ParkHub. Il bonus arriva al primo scambio dell’amico: €2,50, €2,50, poi €5. €10 ogni 3 amici qualificati.',
};

export default function InvitaPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <FloatingHeader />
      <PageHero
        eyebrow="Invita"
        title="Invita qualcuno che userà davvero ParkHub. Il bonus arriva al primo scambio."
        lead="Codice, link o QR: l’amico lo usa in registrazione. Quando completa il primo scambio, il bonus si sblocca per te."
        asset="invite-01-hero-friends-smartphone-wide.webp"
        visual={<ReferralCodeCard />}
      >
        <PrimaryCTA href={portalPath('/signup')}>Registrati e apri Invita</PrimaryCTA>
      </PageHero>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-site">
          <EditorialHeading eyebrow="La formula" title="€2,50 → €2,50 → €5,00. €10 ogni tre amici." lead="Il terzo amico qualificato vale il doppio. Poi il ciclo riparte." align="center" />
          <Reveal className="mt-12 flex justify-center">
            <ReferralEquation />
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {[
              ['Codice in registrazione', 'L’amico inserisce il codice quando crea l’account. Dopo non si può aggiungere.'],
              ['Pending fino al primo swap', 'Il bonus resta in attesa finché l’amico non completa davvero uno scambio.'],
              ['Solo swap', 'Il credito bonus si usa per prenotare posti. Non per pacchetti.'],
              ['Non prelevabile', 'Resta nel circuito ParkHub, come tutto il credito.'],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 80}>
                <div className="h-full rounded-card border border-line bg-paper p-6">
                  <span className="font-mono text-xs font-bold text-brand-deep">0{i + 1}</span>
                  <p className="mt-2 font-display text-lg font-bold">{t}</p>
                  <p className="mt-1 text-sm text-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-mist/60">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <EditorialHeading
              eyebrow="Landing dedicata"
              title="Chi apre il tuo link vede subito di chi è l’invito."
              lead="Una pagina minimale con il tuo nome, il codice già applicato e i pulsanti per scaricare l’app o registrarsi sul web. Nessun menu, nessuna distrazione."
            />
            <Reveal delay={120} className="mt-8">
              <ol className="space-y-3">
                {['Condividi codice, link o QR', 'L’amico si registra con il codice', 'Completa il primo scambio', 'Il bonus arriva nel tuo wallet'].map((s, i) => (
                  <li key={s} className="flex items-center gap-4 rounded-2xl border border-line bg-white px-4 py-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-mono text-xs font-bold text-brand">{i + 1}</span>
                    <span className="font-semibold">{s}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7">
            <AssetSlot label="invite-03-referral-qr-context.webp" tone="dark" className="!rounded-stage" />
          </Reveal>
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
