import type { Metadata } from 'next';
import { SiteHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import { CTASection, FAQAccordion, PageHero, RelatedLinks } from '../components/ui';
import { FAQS } from '../lib/content';

export const metadata: Metadata = {
  title: 'FAQ ParkHub',
  description:
    'Domande frequenti su ParkHub: prezzi, credito, ranking, annulli, invita un amico, app e portale.',
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader dark />
      <PageHero
        eyebrow="FAQ"
        title="Le domande che vengono prima di provare ParkHub."
        lead="Risposte chiare su ciò che ParkHub fa oggi: scambio tra automobilisti, credito sul portale, ranking e invita."
      />
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={FAQS} />
        </div>
      </section>
      <RelatedLinks
        items={[
          { href: '/come-funziona', label: 'Come funziona', desc: 'Flusso completo.' },
          { href: '/prezzi', label: 'Prezzi', desc: 'Pacchetti e livelli.' },
          { href: '/app', label: 'Scarica app', desc: 'Inizia dalla mappa.' },
        ]}
      />
      <CTASection />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
