import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  AssetSlot,
  CTASection,
  CreateAccountButton,
  DownloadAppButton,
  PageHero,
  RelatedLinks,
  SectionHeading,
  StepCard,
} from '../components/ui';
import { AppMockup } from '../components/app-mockup';

export const metadata: Metadata = {
  title: 'Come funziona ParkHub — Cerca, prenota, raggiungi',
  description:
    'Dal “sto uscendo” al posto prenotato. Prezzi fissi, navigazione e credito ParkHub. Flussi venditore e acquirente.',
};

export default function ComeFunzionaPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader dark />
      <PageHero
        eyebrow="Dal credito allo scambio"
        title="Dal “sto uscendo” al posto prenotato. In pochi minuti."
        lead="Niente aste, niente chat, niente trattative. ParkHub usa prezzi fissi e un flusso guidato per mettere in contatto chi esce e chi arriva."
      >
        <DownloadAppButton />
        <CreateAccountButton light />
      </PageHero>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading title="Segnala → Prenota → Completa" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <StepCard step={1} title="Segnala" body="Pubblichi il posto mentre esci. Compari sulla mappa con il livello di prezzo disponibile." />
            <StepCard step={2} title="Prenota" body="Chi cerca vede distanza e prezzo, conferma col credito. Tu ricevi notifica." />
            <StepCard step={3} title="Completa" body="Navigazione fino al punto. A chiusura chi vende riceve credito; chi arriva parcheggia." />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Percorso venditore</h2>
            <ol className="mt-8 space-y-3 text-[15px] leading-relaxed text-muted">
              {[
                'Apri Vendi',
                'Seleziona il veicolo',
                'Scegli il livello disponibile',
                'Pubblica il punto',
                'Attendi la prenotazione',
                'Completa',
                'Ricevi credito',
                'Valuta',
              ].map((s, i) => (
                <li key={s}>
                  <strong className="text-ink">{i + 1}.</strong> {s}
                </li>
              ))}
            </ol>
          </div>
          <AssetSlot label="step-seller.webp" />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-2">
          <AssetSlot label="step-buyer.webp" className="lg:order-2" />
          <div className="lg:order-1">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Percorso acquirente</h2>
            <ol className="mt-8 space-y-3 text-[15px] leading-relaxed text-muted">
              {[
                'Apri Cerca',
                'Guarda pin, distanza e prezzo',
                'Apri il dettaglio',
                'Conferma con il credito',
                'Segui la navigazione',
                'Arriva',
                'Completa',
                'Valuta',
              ].map((s, i) => (
                <li key={s}>
                  <strong className="text-ink">{i + 1}.</strong> {s}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Se devi annullare</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Se sei ancora lontano e manca tempo, puoi annullare senza penalità. Se sei molto vicino al
            posto, lo scambio va completato oppure va aperta una segnalazione. Se annulli all’ultimo
            momento pur essendo ancora lontano, ricevi il rimborso ma il ranking può diminuire.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted">
            <li>· Oltre 250 m e non negli ultimi 3 minuti: rimborso 100%, nessuna penale ranking.</li>
            <li>· Entro 250 m: niente annullo — completa o apri un report.</li>
            <li>· Oltre 250 m ma negli ultimi 3 minuti: rimborso 100%, ranking circa −15.</li>
          </ul>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Quando qualcosa non torna, ParkHub non lascia lo scambio senza contesto.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Il report usa categorie predefinite e richiede foto. I casi vengono valutati e possono
            incidere sul ranking della persona in torto.
          </p>
        </div>
      </section>

      <section className="bg-ink px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-site items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Portale e app</h2>
            <p className="mt-4 text-white/65">
              I pagamenti stanno sul web. Lo scambio sta sulla mappa. Stesso account ovunque.
            </p>
          </div>
          <AppMockup />
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/prezzi', label: 'Prezzi', desc: 'Pacchetti, bundle e livelli di scambio.' },
          { href: '/ranking', label: 'Ranking', desc: 'Come le stelle influenzano la vendita.' },
          { href: '/app', label: 'Scarica app', desc: 'Dove avviene lo scambio.' },
        ]}
      />
      <CTASection title="Pronto a fare il primo passo?" />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
