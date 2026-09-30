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
  title: 'Ranking ParkHub — Affidabilità negli scambi',
  description:
    'Affidabilità a stelle, visibile solo a te. Non una classifica pubblica. Separato dalle missioni.',
};

const events = [
  { title: 'Report approvato contro il venditore', effect: 'circa −50' },
  { title: 'Report respinto contro chi ha segnalato', effect: 'circa −30' },
  { title: 'Valutazione post-scambio', effect: 'da −20 a +20' },
  { title: 'Annullo acquirente in ritardo', effect: 'circa −15' },
  { title: 'Venditore cancella dopo prenotazione', effect: 'circa −10' },
];

export default function RankingPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <FloatingHeader />
      <PageHero
        eyebrow="Affidabilità ParkHub"
        title="Affidabilità a stelle. Visibile solo a te."
        lead="Il ranking misura come ti comporti negli scambi. Non quanto sei popolare. Non crea una classifica pubblica."
        asset="ranking-01-hero-user-city-wide.webp"
      />

      <section className="section-pad bg-warm-paper">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <EditorialHeading title="Da 1 a 5 stelle" lead="Sotto 4★ il venditore resta al livello 1, ma non è automaticamente bloccato." />
            <div className="mt-8 flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-white font-display text-xl font-bold text-brand-deep shadow-soft">
                  {n}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3 lg:col-span-7">
            {events.map((e) => (
              <div key={e.title} className="flex flex-wrap items-baseline justify-between gap-2 rounded-card border border-line bg-white p-5 shadow-soft">
                <h3 className="font-display font-bold">{e.title}</h3>
                <span className="font-mono text-xs font-bold text-brand-deep">{e.effect}</span>
              </div>
            ))}
            <p className="text-sm text-muted">Valori tipici, configurabili. In app vedi sempre la motivazione.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-site gap-8 lg:grid-cols-2 lg:items-center">
          <AssetSlot label="ranking-03-trust-event-feed-context.webp" />
          <div>
            <h2 className="font-display text-2xl font-bold">Cosa NON fa</h2>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li>· non crea una classifica pubblica;</li>
              <li>· non compra premi;</li>
              <li>· non blocca gli inviti;</li>
              <li>· non è la stessa cosa delle missioni.</li>
            </ul>
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/missioni', label: 'Missioni', desc: 'Sistema separato.' },
          { href: '/come-funziona', label: 'Come funziona', desc: 'Annulli e report.' },
          { href: '/invita', label: 'Invita', desc: 'Sempre disponibile.' },
        ]}
      />
      <FinalCinematicCTA />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
