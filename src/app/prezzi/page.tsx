import type { Metadata } from 'next';
import { FloatingHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  DownloadParkHub,
  EditorialHeading,
  FinalCinematicCTA,
  LevelLadder,
  PageHero,
  RelatedLinks,
} from '../components/ui';
import { BUNDLES, PACKAGES, PRICE_TIERS } from '../lib/content';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Prezzi ParkHub — Pacchetti e credito',
  description:
    'Credito quando ti serve. Prova €4,99, Carnet €8,99, Mensile €23,90. Bundle e livelli di scambio da €1,20.',
};

export default function PrezziPage() {
  const monthly = PACKAGES.find((p) => p.featured)!;
  const others = PACKAGES.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <FloatingHeader />
      <PageHero
        eyebrow="Credito ParkHub"
        title="Credito quando ti serve. Prezzo dello scambio sempre visibile."
        lead="Scegli un pacchetto sul portale, tieni il saldo nel wallet e usalo in app."
        asset="pricing-01-hero-wallet-device-stage.webp"
      >
        <a
          href={portalPath('/signup')}
          className="inline-flex min-h-[44px] items-center justify-center rounded-pill bg-brand px-7 py-3.5 text-sm font-bold text-ink"
        >
          Vai al portale
        </a>
        <DownloadParkHub light />
      </PageHero>

      <section className="section-pad bg-gradient-to-b from-white to-brand-mist/30">
        <div className="mx-auto max-w-site">
          <div className="grid gap-5 lg:grid-cols-12">
            <article className="rounded-stage border border-brand bg-ink p-8 text-white lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-wider text-brand">{monthly.hint}</p>
              <h2 className="mt-3 font-display text-3xl font-bold">{monthly.name}</h2>
              <p className="mt-4 font-mono text-4xl font-bold">{monthly.price}</p>
              <p className="mt-2 text-sm text-white/60">{monthly.credit}</p>
              <p className="mt-4 text-xs text-white/45">{monthly.note}</p>
            </article>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {others.map((p) => (
                <article key={p.name} className="rounded-card border border-line bg-white p-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted">{p.hint}</p>
                  <h3 className="mt-1 font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-3 font-mono text-2xl font-bold">{p.price}</p>
                  <p className="mt-1 text-sm text-muted">{p.credit}</p>
                  {p.note ? <p className="mt-2 text-xs text-muted">{p.note}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-tight bg-white">
        <div className="mx-auto max-w-site">
          <EditorialHeading
            title="Ti serve più credito? Aggiungi un bundle."
            lead="Validità 30 giorni, niente rollover. Catalogo completo sbloccato con un piano."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {BUNDLES.map((b) => (
              <div key={b.name} className="rounded-card border border-line bg-warm-paper p-6">
                <h3 className="font-display text-xl font-bold">{b.name}</h3>
                <p className="mt-2 font-mono text-3xl font-bold">{b.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-paper">
        <div className="mx-auto max-w-site">
          <EditorialHeading title="Cinque livelli. Prezzo sempre chiaro." />
          <div className="mt-10">
            <LevelLadder tiers={PRICE_TIERS} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-graphite text-white">
        <div className="mx-auto max-w-site">
          <EditorialHeading
            light
            title="Tre tasche. Ordine automatico."
            lead="Bonus → credito pacchetto → proventi vendita. Rimborso entro 14 giorni se il lotto è intatto."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ['Bonus', 'Promo, missioni, referral. Solo swap. Scadenza breve.'],
              ['Credito', 'Pacchetti e piani. Scadenza secondo prodotto.'],
              ['Proventi', 'Dalle vendite. Non scadono. Usati per ultimi.'],
            ].map(([t, d], i) => (
              <div key={t} className="rounded-card border border-white/10 bg-white/5 p-6" style={{ marginTop: i * 12 }}>
                <p className="font-display text-xl font-bold text-brand">{t}</p>
                <p className="mt-2 text-sm text-white/65">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/come-funziona', label: 'Come funziona', desc: 'Dal credito allo scambio.' },
          { href: '/app', label: 'Scarica app', desc: 'Usa il credito sulla mappa.' },
          { href: '/missioni', label: 'Missioni', desc: 'Premi solo-swap.' },
        ]}
      />
      <FinalCinematicCTA title="Scegli un pacchetto e guarda chi sta uscendo." />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
