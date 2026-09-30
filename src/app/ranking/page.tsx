import type { Metadata } from 'next';
import { SiteHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  AssetSlot,
  CTASection,
  FeatureCard,
  PageHero,
  RelatedLinks,
  SectionHeading,
} from '../components/ui';

export const metadata: Metadata = {
  title: 'Ranking ParkHub — Affidabilità negli scambi',
  description:
    'Le stelle ParkHub misurano come ti comporti negli scambi. Non una classifica pubblica. Separato dalle missioni.',
};

const events = [
  { title: 'Report approvato contro il venditore', effect: 'circa −50' },
  { title: 'Report respinto contro chi ha segnalato', effect: 'circa −30' },
  { title: 'Valutazione post-scambio', effect: 'da −20 a +20' },
  { title: 'Annullo acquirente in ritardo', effect: 'circa −15' },
  { title: 'Venditore che cancella dopo prenotazione', effect: 'circa −10' },
];

export default function RankingPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader dark />
      <PageHero
        eyebrow="Affidabilità ParkHub"
        title="Le stelle misurano come ti comporti negli scambi. Non quanto sei popolare."
        lead="Il ranking è personale. Premia chi completa correttamente e penalizza chi fa perdere tempo agli altri."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              title="Da 1 a 5 stelle"
              lead="Dietro le stelle c’è uno score interno (circa 100 punti ≈ 1 stella). Lo vedi in Home e in Account → Reputazione, con la motivazione di ogni variazione."
            />
            <div className="mt-8 flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white font-display text-lg font-bold text-teal-dark shadow-card"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
          <AssetSlot label="ranking-city-user.webp" />
        </div>
      </section>

      <section className="border-y border-border bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading title="Cosa cambia se le stelle scendono" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <FeatureCard
              title="Venditore"
              body="Puoi sempre pubblicare. Sotto soglia (default sotto 4★) solo al livello di prezzo base."
            />
            <FeatureCard
              title="Acquirente"
              body="Nessun blocco dal ranking sul cercare e prenotare. Eccezione: sospensione o ban."
            />
            <FeatureCard
              title="Inviti e missioni"
              body="Puoi sempre invitare. Completare missioni non alza le stelle."
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Eventi che incidono"
            lead="I valori tipici sono configurabili. In app vedi sempre la motivazione accanto alla variazione."
          />
          <div className="mt-8 space-y-3">
            {events.map((e) => (
              <div
                key={e.title}
                className="flex flex-wrap items-baseline justify-between gap-2 rounded-card border border-border bg-white p-5 shadow-card"
              >
                <h3 className="font-display font-bold">{e.title}</h3>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-dark">
                  {e.effect}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Cosa NON fa il ranking</h2>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            <li>· non crea una classifica pubblica;</li>
            <li>· non compra premi;</li>
            <li>· non blocca gli inviti;</li>
            <li>· non è la stessa cosa delle missioni.</li>
          </ul>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/missioni', label: 'Missioni', desc: 'Premi solo-swap, sistema separato.' },
          { href: '/come-funziona', label: 'Come funziona', desc: 'Annulli e report.' },
          { href: '/invita', label: 'Invita', desc: 'Gli inviti non dipendono dal ranking.' },
        ]}
      />
      <CTASection />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
