import type { Metadata } from 'next';
import { FloatingHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  EditorialHeading,
  FinalCinematicCTA,
  MissionProgress,
  PageHero,
  PrimaryCTA,
  RelatedLinks,
  Reveal,
} from '../components/ui';
import { AssetSlot } from '../components/site-asset';
import { MILESTONES } from '../lib/content';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Missioni ParkHub — Premi per chi tiene viva la mappa',
  description:
    'Missioni solo-swap: vendi 3 posti, ogni 10 vendite, 5 scambi a settimana. Traguardi 100/200/500. Separate dal ranking.',
};

function MissionsStage() {
  return (
    <div className="mx-auto w-full max-w-[520px] space-y-3">
      <MissionProgress kind="Una volta" title="Vendi 3 posti" prize="+1 P" value={2} max={3} expires="Scade tra 5 giorni" />
      <MissionProgress kind="Settimanale" title="5 scambi in settimana" prize="+1 P" value={3} max={5} expires="Si azzera lunedì" />
      <div className="flex items-center justify-between rounded-card bg-brand p-5 text-ink">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider">Bonus disponibile</p>
          <p className="font-display text-xl font-bold">+1 P da spendere</p>
        </div>
        <p className="font-mono text-2xl font-bold">1 P</p>
      </div>
    </div>
  );
}

export default function MissioniPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <FloatingHeader />
      <PageHero
        eyebrow="Missioni"
        title="Più offerta sulla mappa. Più valore per tutti."
        lead="Le missioni premiano i comportamenti che rendono ParkHub utile: pubblicare, completare, tornare. Senza toccare il ranking."
        asset="missions-01-hero-active-city-user-wide.webp"
        visual={<MissionsStage />}
      >
        <PrimaryCTA href={portalPath('/signup')}>Apri le missioni sul portale</PrimaryCTA>
      </PageHero>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-site">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <EditorialHeading eyebrow="Missioni attive" title="Piccole, concrete, ripetibili." lead="Progress bar, stato, scadenza e premio: tutto visibile sul portale, il credito arriva nel wallet." />
            </div>
            <Reveal delay={100} className="lg:col-span-5">
              <div className="rounded-card border border-line bg-warm-paper p-5 text-sm">
                <p className="font-bold">Regole dei premi piccoli</p>
                <ul className="mt-2 space-y-1 text-muted">
                  <li>· Tetto €3 al mese</li>
                  <li>· Scadenza 5–7 giorni</li>
                  <li>· Spendibili solo negli scambi</li>
                </ul>
              </div>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Reveal><MissionProgress kind="Una volta" title="Vendi 3 posti" prize="1 parcheggio gratis" value={2} max={3} expires="Scade tra 5 giorni" /></Reveal>
            <Reveal delay={80}><MissionProgress kind="Ripetibile" title="Ogni 10 vendite" prize="1 parcheggio gratis" value={7} max={10} /></Reveal>
            <Reveal delay={160}><MissionProgress kind="Settimanale" title="5 scambi in settimana" prize="1 parcheggio gratis" value={3} max={5} expires="Si azzera lunedì" /></Reveal>
            <Reveal delay={240}><MissionProgress kind="Streak" title="Accedi 7 giorni di fila" prize="Badge" value={5} max={7} expires="Nessun credito, solo badge" /></Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <EditorialHeading light eyebrow="Traguardi" title="Per chi tiene viva la mappa tutto l’anno." lead="Premi reali per volumi reali. Si contano le vendite completate nel trimestre o nell’anno." />
          </div>
          <div className="lg:col-span-7">
            <ol className="relative space-y-4 border-l border-white/15 pl-8">
              {MILESTONES.map((m, i) => (
                <Reveal as="li" key={m.title} delay={i * 90} className="relative">
                  <span className="absolute -left-[41px] top-5 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-ink">{i + 1}</span>
                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-card border border-white/10 bg-white/5 px-6 py-5">
                    <div>
                      <p className="font-display text-lg font-bold">{m.title}</p>
                      <p className="text-sm text-white/55">vendite completate</p>
                    </div>
                    <span className="rounded-pill bg-brand/15 px-4 py-1.5 text-sm font-bold text-brand">{m.prize}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-paper">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <AssetSlot label="missions-03-progress-lifestyle-wide.webp" tone="warm" className="!rounded-stage" />
          </Reveal>
          <div className="lg:col-span-5">
            <EditorialHeading eyebrow="Separate dal ranking" title="Le missioni premiano. Le stelle misurano." lead="Completare una missione non alza il ranking; perdere stelle non cancella i premi. Due sistemi, due scopi." />
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/ranking', label: 'Ranking', desc: 'Sistema separato.' },
          { href: '/prezzi', label: 'Prezzi', desc: 'Credito e livelli.' },
          { href: '/invita', label: 'Invita', desc: 'Bonus al primo scambio.' },
        ]}
      />
      <FinalCinematicCTA title="Pubblica il prossimo posto. La mappa ringrazia." />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
