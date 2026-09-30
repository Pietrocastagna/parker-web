import type { Metadata } from 'next';
import { FloatingHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  FinalCinematicCTA,
  FAQAccordionLight,
  PageHero,
  RelatedLinks,
} from '../components/ui';
import { FAQS } from '../lib/content';

export const metadata: Metadata = {
  title: 'FAQ ParkHub',
  description:
    'Domande su ParkHub: prezzi, credito, ranking, annulli, invita, app e portale.',
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <FloatingHeader />
      <PageHero
        eyebrow="FAQ"
        title="Prima di provarlo, è normale voler capire bene."
        lead="Risposte su ciò che ParkHub fa oggi."
      />
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-3xl">
          <FAQAccordionLight items={FAQS} />
        </div>
      </section>
      <RelatedLinks
        items={[
          { href: '/come-funziona', label: 'Come funziona', desc: 'Flusso completo.' },
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
