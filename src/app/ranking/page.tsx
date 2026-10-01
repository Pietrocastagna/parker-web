import type { Metadata } from 'next';
import { FloatingHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  EditorialHeading,
  FinalCinematicCTA,
  PageHero,
  RelatedLinks,
  Reveal,
  ScoreFeed,
  StarMeter,
} from '../components/ui';
import { AssetSlot } from '../components/site-asset';
import { RankingStage } from '../components/hero-visuals';

export const metadata: Metadata = {
  title: 'Ranking ParkHub — Affidabilità negli scambi',
  description:
    'Affidabilità a stelle, visibile solo a te. Non una classifica pubblica. Separato dalle missioni.',
};

const EVENTS = [
  { title: 'Report approvato contro il venditore', effect: '−50', bad: true },
  { title: 'Report respinto contro chi ha segnalato', effect: '−30', bad: true },
  { title: 'Valutazione dopo lo scambio', effect: '−20 / +20', bad: false },
  { title: 'Annullo tardivo dell’acquirente', effect: '−15', bad: true },
  { title: 'Venditore cancella dopo prenotazione', effect: '−10', bad: true },
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
        visual={<RankingStage />}
      />

      <section className="section-pad bg-warm-paper">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <EditorialHeading
              eyebrow="Da 1 a 5 stelle"
              title="Un numero che si muove con quello che fai."
              lead="Ogni scambio lascia una traccia: valutazioni, annulli, report. Le stelle le vedi solo tu e, in app, trovi sempre il motivo di ogni variazione."
            />
            <Reveal delay={120} className="mt-10">
              <StarMeter value={4.6} />
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow mb-4">Eventi che muovono il punteggio</p>
            <ul className="space-y-2.5">
              {EVENTS.map((e, i) => (
                <Reveal as="li" key={e.title} delay={i * 60}>
                  <div className="flex items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4 shadow-soft">
                    <span className={`h-2.5 w-2.5 rounded-full ${e.bad ? 'bg-danger' : 'bg-brand'}`} />
                    <p className="flex-1 font-semibold">{e.title}</p>
                    <span className={`rounded-pill px-3 py-1 font-mono text-xs font-bold ${e.bad ? 'bg-danger/10 text-danger' : 'bg-brand-mist text-brand-deep'}`}>{e.effect}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">Valori di default, configurabili. Non una classifica: solo il tuo punteggio.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <EditorialHeading
              light
              eyebrow="La regola chiave"
              title="Sotto 4 stelle vendi al livello 1. Non sei bloccato."
              lead="Il ranking limita il livello di vendita, quindi il prezzo che puoi incassare. Sospensione e ban sono misure separate, decise da un umano."
            />
            <Reveal delay={100}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {['Non crea una classifica pubblica', 'Non compra premi', 'Non blocca gli inviti', 'Non è la stessa cosa delle missioni'].map((x) => (
                  <li key={x} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold">
                    {x}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6">
            <AssetSlot label="ranking-03-trust-event-feed-context.webp" tone="dark" className="!rounded-stage" />
          </Reveal>
        </div>
      </section>

      <section className="section-pad-tight bg-white">
        <div className="mx-auto max-w-site">
          <p className="eyebrow mb-4">Esempio di storico</p>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ScoreFeed />
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-card border border-line bg-warm-paper p-7">
                <p className="font-display text-xl font-bold">Perché conta</p>
                <p className="mt-2 text-muted">Chi arriva deve potersi fidare che il posto ci sia davvero. Chi esce deve sapere che l’altro arriva. Le stelle rendono conveniente comportarsi bene, senza premi e senza punizioni automatiche.</p>
              </div>
            </div>
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
