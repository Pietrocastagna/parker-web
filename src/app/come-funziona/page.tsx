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
  Reveal,
} from '../components/ui';
import { AssetSlot } from '../components/site-asset';
import { PhoneStage } from '../components/hero-visuals';
import { BuyerFlowStory, SellerFlowStory } from '../components/flow-stories';

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
        lead="ParkHub usa prezzi fissi e un flusso guidato per mettere in contatto chi esce e chi arriva. Due persone, un segnale, pochi minuti."
        asset="how-01-hero-two-drivers-signal-wide.webp"
        visual={<PhoneStage screen="booked" chip="Prenotato · arrivo in 2 min" secondary={{ screen: 'sell', tilt: 7 }} />}
      >
        <DownloadParkHub />
        <CreateAccountCTA light />
      </PageHero>

      {/* 3 momenti */}
      <section className="section-pad-tight bg-white">
        <div className="mx-auto max-w-site">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['Segnala', 'Chi esce pubblica il posto in pochi tap. Il segnale dura pochi minuti.', 'Venditore'],
              ['Prenota', 'Chi arriva lo blocca a prezzo fisso e parte con la navigazione.', 'Acquirente'],
              ['Completa', 'Uno esce, l’altro entra. Il credito si sposta da solo.', 'Entrambi'],
            ].map(([t, d, who], i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="relative overflow-hidden rounded-card border border-line bg-warm-paper p-7">
                  <span className="absolute right-5 top-4 font-display text-6xl font-extrabold text-ink/5">0{i + 1}</span>
                  <p className="eyebrow">{who}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold">{t}</h3>
                  <p className="mt-2 text-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <SellerFlowStory />
      </section>

      <section className="section-pad bg-ink text-white">
        <BuyerFlowStory />
      </section>

      {/* quando qualcosa cambia */}
      <section className="section-pad bg-warm-paper">
        <div className="mx-auto max-w-site">
          <EditorialHeading
            eyebrow="Quando qualcosa cambia"
            title="Annulli, distanze, ultimi minuti: regole chiare prima, non dopo."
            lead="Il sistema guarda due cose: quanto sei lontano e quanto tempo manca. I valori tecnici sono 250 m e gli ultimi 3 minuti."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {[
              ['Lontano + tempo disponibile', 'Annulli e vieni rimborsato al 100%. Nessuna penale sul ranking.', 'bg-success/10 text-success', 'Rimborso', '> 250 m'],
              ['Vicino al posto', 'Completi lo scambio oppure, se qualcosa non torna, apri un report con foto.', 'bg-brand/15 text-brand-deep', 'Completa o report', '≤ 250 m'],
              ['Lontano, ultimi 3 minuti', 'Rimborso al 100%, ma possibile penale sul ranking: il venditore ti stava aspettando.', 'bg-amber/15 text-[#9A6400]', 'Rimborso + ranking', '> 250 m · < 3 min'],
            ].map(([t, d, badge, b, meta], i) => (
              <Reveal key={t} delay={i * 90}>
                <article className="flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className={`rounded-pill px-3 py-1 text-xs font-bold ${badge}`}>{b}</span>
                    <span className="font-mono text-xs text-muted">{meta}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* report */}
      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <EditorialHeading
              eyebrow="Report"
              title="Se qualcosa non torna, lo documenti. Non lo discuti in chat."
              lead="Foto obbligatorie, categorie predefinite, revisione umana. Il report può incidere sul ranking di chi è in torto — e di chi segnala senza motivo."
            />
            <Reveal delay={100}>
              <ul className="mt-8 space-y-3 text-sm">
                {[
                  ['Report approvato contro il venditore', '−50 al venditore'],
                  ['Report respinto', '−30 a chi ha segnalato'],
                  ['Revisione', 'Admin, con foto e posizione'],
                ].map(([a, b]) => (
                  <li key={a} className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper px-4 py-3">
                    <span className="font-semibold">{a}</span>
                    <span className="font-mono text-xs text-muted">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7">
            <AssetSlot label="how-05-report-evidence-context.webp" tone="dark" className="!rounded-stage" />
          </Reveal>
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
