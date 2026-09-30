import type { Metadata } from 'next';
import { SiteHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  AssetSlot,
  CTASection,
  PageHero,
  RelatedLinks,
  SectionHeading,
} from '../components/ui';

export const metadata: Metadata = {
  title: 'Cos’è ParkHub — Scambio di parcheggi tra automobilisti',
  description:
    'ParkHub è uno scambio geolocalizzato di parcheggi tra automobilisti. Prezzo fisso, navigazione, credito interno.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader dark />
      <PageHero
        eyebrow="Perché esiste ParkHub"
        title="Il parcheggio è già lì. Manca solo il collegamento tra chi esce e chi arriva."
        lead="ParkHub collega chi sta liberando un posto auto e chi lo sta cercando — nello stesso momento."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="In una frase"
            lead="ParkHub è uno scambio geolocalizzato di parcheggi tra automobilisti."
          />
        </div>
      </section>

      <section className="border-y border-border bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-site">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Cosa è / cosa non è</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-card border border-teal/30 bg-teal-soft/30 p-7">
              <h3 className="font-display text-xl font-bold text-teal-dark">È</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>· scambio P2P</li>
                <li>· in tempo reale</li>
                <li>· prezzo fisso</li>
                <li>· navigazione</li>
                <li>· credito interno</li>
                <li>· ranking personale</li>
              </ul>
            </article>
            <article className="rounded-card border border-border bg-paper p-7">
              <h3 className="font-display text-xl font-bold">Non è</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>· parcometro</li>
                <li>· garage</li>
                <li>· aste</li>
                <li>· chat di trattativa</li>
                <li>· prelievo bancario del credito</li>
              </ul>
            </article>
          </div>
          <div className="mt-10">
            <AssetSlot label="hero-city-parkhub.webp" />
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/come-funziona', label: 'Come funziona', desc: 'Passi da venditore e acquirente.' },
          { href: '/prezzi', label: 'Prezzi', desc: 'Pacchetti e livelli.' },
          { href: '/ranking', label: 'Ranking', desc: 'Affidabilità negli scambi.' },
        ]}
      />
      <CTASection />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
