import type { Metadata } from 'next';
import { FloatingHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import { EditorialHeading, FinalCinematicCTA, PageHero, RelatedLinks, Reveal } from '../components/ui';
import { AssetSlot } from '../components/site-asset';
import { PhoneStage } from '../components/hero-visuals';

export const metadata: Metadata = {
  title: 'Cos’è ParkHub — Scambio di parcheggi tra automobilisti',
  description: 'Un parcheggio si libera. Qualcuno lo sta cercando. ParkHub esiste per farli incontrare.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <FloatingHeader />
      <PageHero
        eyebrow="Perché esiste ParkHub"
        title="Un parcheggio si libera. Qualcuno lo sta cercando. ParkHub esiste per farli incontrare."
        lead="Non è un garage e non è un parcometro: è il segnale tra chi esce e chi arriva."
        asset="about-01-hero-city-handoff-wide.webp"
        visual={<PhoneStage screen="complete" chip="Uno esce. Uno arriva." />}
      />

      <section className="section-pad bg-warm-paper">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <EditorialHeading eyebrow="01 · Il problema" title="I posti non mancano sempre. Manca il momento giusto." lead="Nelle città italiane il parcheggio su strada cambia ogni minuto. Chi cerca non vede chi sta uscendo; chi esce non sa che qualcuno lo aspetta." />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <EditorialHeading eyebrow="02 · Il segnale" title="Il posto esiste quando qualcuno lo libera." lead="Senza un canale in tempo reale, l’opportunità dura pochi secondi e sparisce. ParkHub la rende visibile a chi è vicino, per il tempo che serve." />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-site">
          <EditorialHeading eyebrow="03 · Cosa è, cosa non è" title="Un circuito tra persone. Niente di più, niente di meno." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-stage border border-brand/30 bg-brand-mist/60 p-8">
                <p className="eyebrow">È</p>
                <ul className="mt-4 space-y-3 font-semibold">
                  <li>Scambio tra automobilisti in tempo reale</li>
                  <li>Prezzo fisso e navigazione al punto</li>
                  <li>Credito interno e ranking personale</li>
                  <li>Un solo account per app e portale</li>
                </ul>
              </article>
            </Reveal>
            <Reveal delay={100}>
              <article className="h-full rounded-stage border border-line bg-ink p-8 text-white">
                <p className="eyebrow-light">Non è</p>
                <ul className="mt-4 space-y-3 font-semibold text-white/85">
                  <li>Un parcometro, un garage, un’asta</li>
                  <li>Una chat di trattativa</li>
                  <li>Un modo per prelevare soldi</li>
                  <li>Una promessa di posti garantiti</li>
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <AssetSlot label="about-03-human-city-parking-wide.webp" tone="dark" className="!rounded-stage" />
          </Reveal>
          <div className="lg:col-span-5">
            <EditorialHeading eyebrow="04 · Il circuito" title="Il credito gira. Il valore resta tra chi usa la città." lead="Chi vende incassa credito, chi compra lo spende, i bonus premiano chi tiene viva la mappa. Nulla esce dal circuito, tutto torna in scambi." />
            <div className="mt-8">
              <EditorialHeading eyebrow="05 · La densità" title="Funziona dove la gente pubblica." lead="Quanti posti vedi dipende da quante persone nella tua zona usano ParkHub. Per questo invitare conta più di qualsiasi pubblicità." />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/come-funziona', label: 'Come funziona', desc: 'Dal segnale allo scambio.' },
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
