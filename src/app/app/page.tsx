import type { Metadata } from 'next';
import { FloatingHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  CreateAccountCTA,
  EditorialHeading,
  FinalCinematicCTA,
  PageHero,
  PrimaryCTA,
  RelatedLinks,
  Reveal,
} from '../components/ui';
import { PhoneStage } from '../components/hero-visuals';
import { StoreButtons } from '../components/store-badges';
import { AssetSlot } from '../components/site-asset';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Scarica l’app ParkHub',
  description:
    'La strada è qui. Account e P stanno dietro. Mappa, vendi, prenota, naviga. Stesso account del portale.',
};

const FEATURES = [
  ['Cerca parcheggio', 'Posti pubblicati adesso, con prezzo e distanza.'],
  ['Navigatore', 'Indicazioni fino al punto esatto, dentro l’app.'],
  ['Vendi', 'Stai uscendo? Pubblica in pochi tap.'],
  ['Salva parcheggio', 'Ricorda dove hai lasciato l’auto.'],
  ['Veicoli', 'Più auto, una scelta rapida quando vendi.'],
  ['Gruppi', 'Credito condiviso con famiglia o colleghi.'],
  ['Preferiti', 'Zone e indirizzi che usi spesso.'],
  ['Wallet in lettura', 'Saldo e movimenti sempre visibili.'],
];

export default function AppPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <FloatingHeader />
      <PageHero
        eyebrow="L’app per quando sei in strada"
        title="La strada è qui. Account e P stanno dietro."
        lead="Apri la mappa, trova un posto, prenotalo e raggiungilo. Oppure segnala il posto che stai lasciando."
        asset="app-01-hero-city-map-device-stage.webp"
        visual={<PhoneStage screen="map" chip="3 posti live vicino a te" secondary={{ screen: 'navigation', tilt: 6 }} />}
      >
        <CreateAccountCTA light />
      </PageHero>

      <section id="scarica" className="section-pad bg-white">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <EditorialHeading eyebrow="Download" title="Scarica ParkHub" lead="iPhone e Android. Un solo account, lo stesso del portale." />
            <StoreButtons className="mt-8" />
            <p className="mt-4 text-xs text-muted">I link agli store si attivano alla pubblicazione.</p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {FEATURES.map(([t, d], i) => (
                <Reveal key={t} delay={i * 50}>
                  <div className="flex gap-3 rounded-2xl border border-line bg-paper p-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-mist font-mono text-[10px] font-bold text-brand-deep">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="font-display text-sm font-bold">{t}</p>
                      <p className="mt-0.5 text-sm text-muted">{d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-mist/50">
        <div className="mx-auto max-w-site">
          <EditorialHeading eyebrow="App e portale" title="Dove scambi, dove gestisci." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-card border border-brand/30 bg-white p-8">
                <p className="eyebrow">App</p>
                <h3 className="mt-2 font-display text-2xl font-bold">Dove scambi</h3>
                <p className="mt-3 text-muted">Cerca · Navigatore · Vendi · Salva parcheggio · Veicoli · Gruppi · Preferiti · Wallet in lettura</p>
              </article>
            </Reveal>
            <Reveal delay={100}>
              <article className="h-full rounded-card border border-line bg-ink p-8 text-white">
                <p className="eyebrow-light">Portale</p>
                <h3 className="mt-2 font-display text-2xl font-bold">Dove gestisci i P</h3>
                <p className="mt-3 text-white/65">Account · Pacchetti · Wallet · Missioni · Invita · Ranking · Supporto</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-paper">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <EditorialHeading eyebrow="Dopo il download" title="Cinque passi e sei sulla mappa." />
            <ol className="mt-8 space-y-3">
              {['Accedi', 'Completa profilo e veicolo', 'Compra P sul portale', 'Torna in app', 'Cerca o pubblica'].map((s, i) => (
                <Reveal as="li" key={s} delay={i * 60}>
                  <div className="flex items-center gap-4 rounded-2xl border border-line bg-white px-4 py-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-mono text-xs font-bold text-brand">{i + 1}</span>
                    <span className="font-semibold">{s}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
            <div className="mt-8">
              <PrimaryCTA href={portalPath('/signup')} tone="ink">Crea account sul portale</PrimaryCTA>
            </div>
          </div>
          <Reveal className="lg:col-span-7">
            <AssetSlot label="app-04-download-city-evening-wide.webp" tone="dark" className="!rounded-stage" />
          </Reveal>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/come-funziona', label: 'Come funziona', desc: 'Flusso completo.' },
          { href: '/prezzi', label: 'Prezzi', desc: 'Pacchetti digitali in P.' },
          { href: '/about', label: 'About', desc: 'Perché esiste ParkHub.' },
        ]}
      />
      <FinalCinematicCTA />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
