import type { Metadata } from 'next';
import { FloatingHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  CreateAccountCTA,
  DownloadParkHub,
  EditorialHeading,
  FinalCinematicCTA,
  PageHero,
  RelatedLinks,
} from '../components/ui';
import { AssetSlot } from '../components/site-asset';
import { SignalLine } from '../components/signal';

export const metadata: Metadata = {
  title: 'Come funziona ParkHub — Cerca, prenota, raggiungi',
  description:
    'Dal “sto uscendo” al posto prenotato. Senza aste, senza chat. Flussi venditore e acquirente, annulli e report.',
};

export default function ComeFunzionaPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <FloatingHeader />
      <PageHero
        eyebrow="Dal credito allo scambio"
        title="Dal “sto uscendo” al posto prenotato. Senza aste, senza chat."
        lead="ParkHub usa prezzi fissi e un flusso guidato per mettere in contatto chi esce e chi arriva."
        asset="how-01-hero-two-drivers-signal-wide.webp"
      >
        <DownloadParkHub />
        <CreateAccountCTA light />
      </PageHero>

      <section className="section-pad bg-brand-mist/40">
        <div className="mx-auto max-w-site">
          <SignalLine className="mb-8 w-full max-w-md text-brand" />
          <div className="grid gap-4 md:grid-cols-3">
            {['Segnala', 'Prenota', 'Completa'].map((t, i) => (
              <div key={t} className="rounded-card border border-line bg-white p-6">
                <p className="font-mono text-xs font-bold text-brand-deep">0{i + 1}</p>
                <h3 className="mt-2 font-display text-xl font-bold">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-paper">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <EditorialHeading title="Percorso venditore" />
            <ol className="mt-8 space-y-3 text-sm text-muted">
              {['Vendi', 'Veicolo', 'Livello', 'Pubblica', 'Prenotazione', 'Chiusura', 'Credito', 'Valuta'].map(
                (s, i) => (
                  <li key={s}>
                    <strong className="text-ink">{i + 1}.</strong> {s}
                  </li>
                ),
              )}
            </ol>
          </div>
          <div className="lg:col-span-7">
            <AssetSlot label="how-02-seller-publish-context.webp" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:order-2">
            <AssetSlot label="how-03-buyer-navigation-context.webp" />
          </div>
          <div className="lg:col-span-5 lg:order-1">
            <EditorialHeading title="Percorso acquirente" />
            <ol className="mt-8 space-y-3 text-sm text-muted">
              {['Cerca', 'Dettaglio', 'Prenota', 'Naviga', 'Arriva', 'Completa', 'Valuta'].map((s, i) => (
                <li key={s}>
                  <strong className="text-ink">{i + 1}.</strong> {s}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="mx-auto max-w-site">
          <EditorialHeading light title="Quando qualcosa cambia" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ['Lontano + tempo', 'Annullo e rimborso 100%, nessuna penale ranking.'],
              ['Vicino (≤250 m)', 'Completa lo scambio oppure apri un report.'],
              ['Lontano ma ultimi 3 min', 'Rimborso 100% + possibile penale ranking.'],
            ].map(([t, d]) => (
              <div key={t} className="rounded-card border border-white/10 bg-white/5 p-6">
                <h3 className="font-display text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-white/65">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-bold">Report</h3>
              <p className="mt-3 text-sm text-white/65">
                Foto obbligatorie, categorie predefinite, revisione admin. Può incidere sul ranking
                di chi è in torto.
              </p>
            </div>
            <AssetSlot label="how-05-report-evidence-context.webp" />
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/prezzi', label: 'Prezzi', desc: 'Pacchetti e livelli.' },
          { href: '/ranking', label: 'Ranking', desc: 'Stelle personali.' },
          { href: '/app', label: 'Scarica app', desc: 'Inizia dalla mappa.' },
        ]}
      />
      <FinalCinematicCTA asset="how-04-handoff-two-cars-wide.webp" />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
