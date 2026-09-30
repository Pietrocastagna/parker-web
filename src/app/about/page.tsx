import type { Metadata } from 'next';
import { FloatingHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  EditorialHeading,
  FinalCinematicCTA,
  PageHero,
  RelatedLinks,
} from '../components/ui';
import { AssetSlot } from '../components/site-asset';

export const metadata: Metadata = {
  title: 'Cos’è ParkHub — Scambio di parcheggi tra automobilisti',
  description:
    'Un parcheggio si libera. Qualcuno lo sta cercando. ParkHub esiste per farli incontrare.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <FloatingHeader />
      <PageHero
        eyebrow="Perché esiste ParkHub"
        title="Un parcheggio si libera. Qualcuno lo sta cercando. ParkHub esiste per farli incontrare."
        lead="Non è un garage e non è un parcometro: è il segnale tra chi esce e chi arriva."
        asset="about-01-hero-city-handoff-wide.webp"
      />

      <section className="section-pad bg-warm-paper">
        <div className="mx-auto max-w-3xl">
          <EditorialHeading
            title="Il segnale"
            lead="Il posto esiste nel momento in cui qualcuno lo libera. Senza un canale in tempo reale, l’opportunità dura pochi secondi e sparisce."
          />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-site">
          <h2 className="display-h2 text-[2rem] sm:text-4xl">Cosa è / cosa non è</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-card border border-brand/30 bg-brand-mist/50 p-7">
              <h3 className="font-display text-xl font-bold text-brand-deep">È</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>· scambio P2P in tempo reale</li>
                <li>· prezzo fisso + navigazione</li>
                <li>· credito interno + ranking personale</li>
              </ul>
            </article>
            <article className="rounded-card border border-line bg-warm-paper p-7">
              <h3 className="font-display text-xl font-bold">Non è</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>· parcometro / garage / aste</li>
                <li>· chat di trattativa</li>
                <li>· prelievo bancario del credito</li>
              </ul>
            </article>
          </div>
          <div className="mt-10">
            <AssetSlot label="about-03-human-city-parking-wide.webp" />
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">
            La densità locale decide quanti listing vedi. Più gente pubblica nella tua zona, più la
            mappa ha senso.
          </p>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/come-funziona', label: 'Come funziona', desc: 'Dal segnale allo scambio.' },
          { href: '/prezzi', label: 'Prezzi', desc: 'Pacchetti e livelli.' },
          { href: '/app', label: 'Scarica app', desc: 'Inizia dalla mappa.' },
        ]}
      />
      <FinalCinematicCTA />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
