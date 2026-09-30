import type { Metadata } from 'next';
import { SiteHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  AssetSlot,
  CTASection,
  MissionCard,
  PageHero,
  RelatedLinks,
  SectionHeading,
} from '../components/ui';
import { MILESTONES, MISSIONS } from '../lib/content';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Missioni ParkHub — Obiettivi e premi',
  description:
    'Missioni ParkHub: vendi 3, ogni 10 vendite, 5 scambi a settimana, streak. Traguardi 100/200/500. Premi solo-swap.',
};

export default function MissioniPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader dark />
      <PageHero
        eyebrow="Obiettivi semplici"
        title="Aiuta la mappa a restare viva. ParkHub ti restituisce qualcosa."
        lead="Le missioni ti spingono a pubblicare e scambiare con continuità. I premi in credito servono solo per gli swap e non toccano il ranking."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            title="Missioni base"
            lead="Credito solo-swap, scadenza 5–7 giorni, tetto €3/mese sui piccoli premi. Stelle separate. Badge senza valore economico."
          />
          <AssetSlot label="missions-city-user.webp" />
        </div>
        <div className="mx-auto mt-10 grid max-w-site gap-4 sm:grid-cols-2">
          {MISSIONS.map((m) => (
            <MissionCard key={m.title} {...m} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading title="Traguardi più lunghi" lead="Fuori dal tetto mensile dei premi piccoli. Calendario Roma." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {MILESTONES.map((m) => (
              <article key={m.title} className="rounded-card border border-border bg-paper p-6">
                <h3 className="font-display text-lg font-bold">{m.title}</h3>
                <p className="mt-2 text-sm text-muted">Premio: {m.prize}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 text-center sm:px-8 lg:px-12">
        <a
          href={portalPath('/signup')}
          className="inline-flex rounded-pill bg-ink px-7 py-3 text-sm font-bold text-white hover:bg-ink/90"
        >
          Registrati e vedi le missioni sul portale
        </a>
      </section>

      <RelatedLinks
        items={[
          { href: '/ranking', label: 'Ranking', desc: 'Sistema di fiducia separato.' },
          { href: '/invita', label: 'Invita', desc: 'Altro modo di guadagnare credito solo-swap.' },
          { href: '/prezzi', label: 'Prezzi', desc: 'Pacchetti di credito.' },
        ]}
      />
      <CTASection />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
