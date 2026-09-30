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
import { MILESTONES, MISSIONS } from '../lib/content';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Missioni ParkHub — Obiettivi e premi',
  description:
    'Più offerta sulla mappa. Premi solo-swap, tetto €3/mese, traguardi 100/200/500. Non toccano il ranking.',
};

export default function MissioniPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <FloatingHeader />
      <PageHero
        eyebrow="Obiettivi utili"
        title="Più offerta sulla mappa. Più valore per tutti."
        lead="Le missioni premiano comportamenti utili allo scambio, senza modificare il ranking."
        asset="missions-01-hero-active-city-user-wide.webp"
      />

      <section className="section-pad bg-brand-mist/40">
        <div className="mx-auto max-w-site">
          <EditorialHeading
            title="Missioni base"
            lead="Credito solo-swap, scadenza 5–7 giorni, tetto €3/mese sui piccoli premi."
          />
          <div className="mt-10 space-y-4">
            {MISSIONS.map((m, i) => (
              <div key={m.title} className="rounded-card border border-line bg-white p-5 shadow-soft">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-brand-deep">{m.kind}</p>
                    <h3 className="mt-1 font-display text-lg font-bold">{m.title}</h3>
                  </div>
                  <p className="text-sm text-muted">{m.prize}</p>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-paper">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${28 + i * 16}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <EditorialHeading title="Traguardi lunghi" lead="Fuori dal tetto mensile. Calendario Roma." />
            <div className="mt-8 space-y-3">
              {MILESTONES.map((m) => (
                <div key={m.title} className="rounded-card border border-line bg-warm-paper p-5">
                  <h3 className="font-display font-bold">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted">{m.prize}</p>
                </div>
              ))}
            </div>
            <a href={portalPath('/signup')} className="mt-8 inline-flex rounded-pill bg-ink px-6 py-3 text-sm font-bold text-white">
              Vedi missioni sul portale
            </a>
          </div>
          <AssetSlot label="missions-03-progress-lifestyle-wide.webp" />
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/ranking', label: 'Ranking', desc: 'Sistema separato.' },
          { href: '/invita', label: 'Invita', desc: 'Altri bonus solo-swap.' },
          { href: '/prezzi', label: 'Prezzi', desc: 'Pacchetti di credito.' },
        ]}
      />
      <FinalCinematicCTA />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
