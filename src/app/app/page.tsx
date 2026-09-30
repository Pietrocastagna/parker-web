import type { Metadata } from 'next';
import { SiteHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  CTASection,
  CreateAccountButton,
  PageHero,
  RelatedLinks,
  SectionHeading,
} from '../components/ui';
import { AppMockup } from '../components/app-mockup';
import { StoreButtons } from '../components/store-badges';
import { ANDROID_PACKAGE } from '../lib/stores';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Scarica l’app ParkHub',
  description:
    'L’app ParkHub è il cuore dello scambio: mappa, vendi, prenota, naviga. Stesso account del portale.',
};

export default function AppPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader dark />
      <PageHero
        eyebrow="L’app per quando sei in strada."
        title="Qui avviene lo scambio."
        lead="Apri la mappa, trova un posto, prenotalo e raggiungilo. Oppure segnala il posto che stai lasciando."
      >
        <CreateAccountButton light />
      </PageHero>

      <section id="scarica" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              title="Scarica ParkHub"
              lead={`Su iPhone e Android. Package Android: ${ANDROID_PACKAGE}.`}
            />
            <StoreButtons className="mt-8" />
          </div>
          <AppMockup />
        </div>
      </section>

      <section className="border-y border-border bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading title="App e portale: chi fa cosa" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-card border border-teal/30 bg-teal-soft/30 p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-dark">App (cuore)</p>
              <h3 className="mt-2 font-display text-xl font-bold">Dove scambi</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>· Mappa con posti in vendita</li>
                <li>· Pubblicare il posto quando esci</li>
                <li>· Prenotare e navigare</li>
                <li>· Notifiche e stato dello scambio</li>
                <li>· Wallet in lettura + link al portale</li>
              </ul>
            </article>
            <article className="rounded-card border border-border bg-paper p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">Portale web</p>
              <h3 className="mt-2 font-display text-xl font-bold">Dove gestisci il credito</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>· Registrazione / login</li>
                <li>· Acquisto pacchetti</li>
                <li>· Missioni, invita, ranking</li>
                <li>· Profilo, veicoli, supporto</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Dopo il download</h2>
          <ol className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
            <li>
              <strong className="text-ink">1.</strong> Accedi (o registrati).
            </li>
            <li>
              <strong className="text-ink">2.</strong> Completa profilo e veicolo.
            </li>
            <li>
              <strong className="text-ink">3.</strong> Apri il portale e carica credito.
            </li>
            <li>
              <strong className="text-ink">4.</strong> Torna in app.
            </li>
            <li>
              <strong className="text-ink">5.</strong> Cerca o pubblica.
            </li>
          </ol>
          <a
            href={portalPath('/signup')}
            className="mt-8 inline-flex rounded-pill bg-teal px-6 py-3 text-sm font-bold text-ink"
          >
            Crea account sul portale
          </a>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/come-funziona', label: 'Come funziona', desc: 'Venditore e acquirente.' },
          { href: '/prezzi', label: 'Prezzi', desc: 'Pacchetti di credito.' },
          { href: '/about', label: 'About', desc: 'Perché esiste ParkHub.' },
        ]}
      />
      <CTASection title="Scarica l’app e inizia a scambiare" body="Poi ricarica sul portale con lo stesso account." />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
