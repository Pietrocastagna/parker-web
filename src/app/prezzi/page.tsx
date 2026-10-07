import type { Metadata } from 'next';
import { FloatingHeader } from '../components/site-header';
import { SiteFooter, CookieBanner } from '../components/site-footer';
import {
  DownloadParkHub,
  EditorialHeading,
  FinalCinematicCTA,
  LevelLadder,
  PageHero,
  PrimaryCTA,
  RelatedLinks,
  Reveal,
  WalletBuckets,
} from '../components/ui';
import { PhoneStage } from '../components/hero-visuals';
import { BUNDLES, PACKAGES, PRICE_TIERS } from '../lib/content';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Prezzi ParkHub — Pacchetti digitali in P',
  description:
    'Compri un pacchetto digitale di P sul portale. Prova +4 P, Carnet +8 P, Mensile +20 P. Listino swap da 1 P a 5 P.',
};

export default function PrezziPage() {
  const monthly = PACKAGES.find((p) => p.featured)!;
  const others = PACKAGES.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <FloatingHeader />
      <PageHero
        eyebrow="Pacchetti digitali"
        title="Compri P sul portale. Li spendi in app sullo scambio."
        lead="Paghi in euro, ricevi un pacchetto di P. Il listino degli scambi è in P (1–5) e lo vedi prima di prenotare. Limiti e piani: dettaglio al checkout sul portale."
        asset="pricing-01-hero-wallet-device-stage.webp"
        visual={<PhoneStage screen="wallet" chip="Saldo 18 P · pronto in app" />}
      >
        <PrimaryCTA href={portalPath('/signup')}>Vai al portale</PrimaryCTA>
        <DownloadParkHub light />
      </PageHero>

      <section className="section-pad bg-gradient-to-b from-white to-brand-mist/30">
        <div className="mx-auto max-w-site">
          <EditorialHeading eyebrow="Piani" title="Un piano per come usi la città." lead="Il Mensile è il più scelto: +20 P pronti ogni mese, disdici quando vuoi." />
          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            <Reveal as="article" className="relative overflow-hidden rounded-stage bg-ink p-8 text-white shadow-device lg:col-span-5 lg:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/25 blur-3xl" aria-hidden />
              <div className="relative flex h-full flex-col">
                <span className="inline-flex w-fit rounded-pill bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">{monthly.hint}</span>
                <h2 className="mt-6 font-display text-3xl font-bold">{monthly.name}</h2>
                <p className="mt-4 font-mono text-5xl font-bold tracking-tight">
                  €23,90<span className="text-xl text-white/55"> / mese</span>
                </p>
                <p className="mt-2 text-white/70">{monthly.credit}</p>
                <ul className="mt-8 space-y-2.5 text-sm text-white/75">
                  <li>· Rinnovo automatico, disdici quando vuoi</li>
                  <li>· Sblocca il catalogo bundle</li>
                  <li>· P con scadenza secondo il piano</li>
                </ul>
                <div className="mt-auto pt-10">
                  <PrimaryCTA href={portalPath('/signup')}>Attiva sul portale</PrimaryCTA>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {others.map((p, i) => (
                <Reveal as="article" key={p.name} delay={i * 80} className="rounded-card border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-soft">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted">{p.hint}</p>
                  <h3 className="mt-1 font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-4 font-mono text-3xl font-bold tracking-tight">{p.price}</p>
                  <p className="mt-1 text-sm text-muted">{p.credit}</p>
                  {p.note ? <p className="mt-3 text-xs text-muted">{p.note}</p> : null}
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="mt-6 rounded-card border border-line bg-white/70 px-6 py-4 text-sm text-muted backdrop-blur">
            Rimborso entro 14 giorni solo se il lotto di P è intatto. Le strisce blu restano a carico tuo. Con N P paghi solo listini ≤ N P.
          </Reveal>
        </div>
      </section>

      <section className="section-pad-tight bg-white">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <EditorialHeading
              eyebrow="Bundle extra"
              title="Ti servono più P? Aggiungi un bundle."
              lead="Validità 30 giorni, niente rollover. Catalogo completo sbloccato con un piano attivo."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {BUNDLES.map((b, i) => (
              <Reveal key={b.name} delay={i * 80}>
                <div className="rounded-card border border-line bg-warm-paper p-6 text-center">
                  <p className="font-display text-sm font-bold text-muted">{b.name}</p>
                  <p className="mt-2 font-mono text-3xl font-bold">{b.price}</p>
                  <p className="mt-1 text-sm font-semibold text-brand-deep">{b.credit}</p>
                  <p className="mt-1 text-xs text-muted">30 giorni</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-warm-paper">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <EditorialHeading eyebrow="Listino in P" title="Cinque listini. Sempre chiaro." lead="Il livello del venditore sblocca il listino in P (1–5). Chi arriva paga in P; chi vende incassa euro." />
          </div>
          <div className="lg:col-span-8">
            <LevelLadder tiers={PRICE_TIERS} />
          </div>
        </div>
      </section>

      <section id="wallet" className="section-pad bg-graphite text-white">
        <div className="mx-auto max-w-site">
          <EditorialHeading light eyebrow="Il wallet" title="P per gli scambi. Guadagni a parte." lead="I P del pacchetto prenotano i posti. Quando vendi accumuli guadagni in euro: servono a ricaricare o ai buoni, non diventano P da soli. Dettaglio e vincoli sul portale." />
          <div className="mt-14">
            <WalletBuckets />
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/come-funziona', label: 'Come funziona', desc: 'Dal pacchetto P allo scambio.' },
          { href: '/app', label: 'Scarica app', desc: 'Spendi i P sulla mappa.' },
          { href: '/missioni', label: 'Missioni', desc: 'Premi in P solo-swap.' },
        ]}
      />
      <FinalCinematicCTA title="Scegli un pacchetto e guarda chi sta uscendo." />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
