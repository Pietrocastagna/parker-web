import type { Metadata } from 'next';
import { FloatingHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  CreateAccountCTA,
  EditorialHeading,
  FinalCinematicCTA,
  PageHero,
  RelatedLinks,
} from '../components/ui';
import { DeviceFrame, AppMapScreen } from '../components/ui-buttons';
import { StoreButtons } from '../components/store-badges';
import { AssetSlot } from '../components/site-asset';
import { ANDROID_PACKAGE } from '../lib/stores';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Scarica l’app ParkHub',
  description:
    'La strada è qui. Account e credito stanno dietro. Mappa, vendi, prenota, naviga. Stesso account del portale.',
};

export default function AppPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <FloatingHeader />
      <PageHero
        eyebrow="L’app per quando sei in strada"
        title="La strada è qui. Account e credito stanno dietro."
        lead="Apri la mappa, trova un posto, prenotalo e raggiungilo. Oppure segnala il posto che stai lasciando."
        asset="app-01-hero-city-map-device-stage.webp"
      >
        <CreateAccountCTA light />
      </PageHero>

      <section id="scarica" className="section-pad bg-white">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <EditorialHeading
              title="Scarica ParkHub"
              lead={`iPhone e Android. Package: ${ANDROID_PACKAGE}.`}
            />
            <StoreButtons className="mt-8" />
          </div>
          <div className="lg:col-span-7">
            <DeviceFrame className="max-w-[320px]">
              <AppMapScreen />
            </DeviceFrame>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-mist/40">
        <div className="mx-auto max-w-site">
          <EditorialHeading title="App e portale" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="rounded-card border border-brand/30 bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-deep">App</p>
              <h3 className="mt-2 font-display text-xl font-bold">Dove scambi</h3>
              <p className="mt-3 text-sm text-muted">
                Cerca · Navigatore · Vendi · Salva parcheggio · Veicoli · Gruppi · Preferiti · Wallet in lettura
              </p>
            </article>
            <article className="rounded-card border border-line bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">Portale</p>
              <h3 className="mt-2 font-display text-xl font-bold">Dove gestisci il credito</h3>
              <p className="mt-3 text-sm text-muted">
                Account · Pacchetti · Wallet · Missioni · Invita · Ranking · Supporto
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-paper">
        <div className="mx-auto grid max-w-site gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <EditorialHeading title="Dopo il download" />
            <ol className="mt-6 space-y-3 text-sm text-muted">
              <li><strong className="text-ink">1.</strong> Accedi</li>
              <li><strong className="text-ink">2.</strong> Completa profilo e veicolo</li>
              <li><strong className="text-ink">3.</strong> Carica credito sul portale</li>
              <li><strong className="text-ink">4.</strong> Torna in app</li>
              <li><strong className="text-ink">5.</strong> Cerca o pubblica</li>
            </ol>
            <a href={portalPath('/signup')} className="mt-8 inline-flex rounded-pill bg-brand px-6 py-3 text-sm font-bold text-ink">
              Crea account sul portale
            </a>
          </div>
          <AssetSlot label="app-04-download-city-evening-wide.webp" />
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/come-funziona', label: 'Come funziona', desc: 'Flusso completo.' },
          { href: '/prezzi', label: 'Prezzi', desc: 'Pacchetti di credito.' },
          { href: '/about', label: 'About', desc: 'Perché esiste ParkHub.' },
        ]}
      />
      <FinalCinematicCTA />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
