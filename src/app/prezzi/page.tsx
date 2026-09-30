import type { Metadata } from 'next';
import { SiteHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  CTASection,
  CreateAccountButton,
  DownloadAppButton,
  FeatureCard,
  PageHero,
  PricingCard,
  RelatedLinks,
  SectionHeading,
} from '../components/ui';
import { BUNDLES, PACKAGES, PRICE_TIERS } from '../lib/content';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Prezzi ParkHub — Pacchetti e credito',
  description:
    'Pacchetti ParkHub: Prova €4,99, Carnet 8 €8,99, Mensile €23,90, Semestrale, Annuale. Bundle e livelli di scambio da €1,20.',
};

export default function PrezziPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader dark />
      <PageHero
        eyebrow="Credito ParkHub"
        title="Carichi il credito sul portale. Lo usi quando trovi il posto giusto."
        lead="Scegli un pacchetto, tieni il saldo nel wallet e usa ParkHub quando ti serve."
      >
        <a
          href={portalPath('/signup')}
          className="inline-flex items-center justify-center rounded-pill bg-teal px-7 py-3.5 text-sm font-bold text-ink hover:bg-teal-dark hover:text-white"
        >
          Vai al portale
        </a>
        <DownloadAppButton light />
      </PageHero>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading title="Pacchetti" lead="Acquisto solo sul portale. Niente ricarica libera." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {PACKAGES.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading
            title="Ti serve più credito? Aggiungi un bundle."
            lead="Validità 30 giorni, niente rollover. Catalogo completo sbloccato con un piano."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {BUNDLES.map((b) => (
              <div key={b.name} className="rounded-card border border-border bg-paper p-6">
                <h3 className="font-display text-xl font-bold">{b.name}</h3>
                <p className="mt-2 font-display text-3xl font-bold">{b.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading
            title="Cinque livelli. Prezzo sempre chiaro."
            lead="Per sbloccare i livelli superiori servono sia il numero di vendite richiesto sia un ranking sufficiente. Con un ranking sotto soglia puoi comunque pubblicare, ma al livello base."
          />
          <div className="mt-10 hidden overflow-hidden rounded-card border border-border bg-white sm:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted">
                  <th className="px-5 py-4">Livello</th>
                  <th className="px-5 py-4">Vendite</th>
                  <th className="px-5 py-4">Acquirente</th>
                  <th className="px-5 py-4">Venditore</th>
                  <th className="px-5 py-4">Fee ParkHub</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_TIERS.map((t) => (
                  <tr key={t.level} className="border-b border-border last:border-0">
                    <td className="px-5 py-3.5 font-semibold">{t.level}</td>
                    <td className="px-5 py-3.5 text-muted">{t.sales}</td>
                    <td className="px-5 py-3.5 tabular-nums">{t.buyer}</td>
                    <td className="px-5 py-3.5 tabular-nums font-medium text-teal-dark">{t.seller}</td>
                    <td className="px-5 py-3.5 tabular-nums text-muted">{t.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid gap-3 sm:hidden">
            {PRICE_TIERS.map((t) => (
              <div key={t.level} className="rounded-card border border-border bg-white p-4">
                <p className="font-display font-bold">Livello {t.level}</p>
                <p className="mt-1 text-sm text-muted">Vendite {t.sales}</p>
                <p className="mt-2 text-sm">Acquirente {t.buyer} · Venditore {t.seller} · Fee {t.fee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading title="Come viene speso il credito" lead="Ordine automatico — non scegli a mano." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <FeatureCard title="1. Bonus" body="Premi e referral. Solo swap, scadenza breve." />
            <FeatureCard title="2. Credito pacchetto" body="Da piani e pacchetti. FIFO / scadenza bundle." />
            <FeatureCard title="3. Proventi delle vendite" body="Netto degli scambi venduti. Non scadono. Solo da qui i voucher." />
          </div>
          <p className="mt-8 text-sm text-muted">
            Rimborso acquisto: entro 14 giorni se il lotto di credito è ancora intatto.
          </p>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/come-funziona', label: 'Come funziona', desc: 'Dal pacchetto allo scambio.' },
          { href: '/missioni', label: 'Missioni', desc: 'Premi extra solo-swap.' },
          { href: '/app', label: 'Scarica app', desc: 'Usa il credito sulla mappa.' },
        ]}
      />
      <CTASection title="Scegli un pacchetto e inizia" />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
