'use client';

import Link from 'next/link';
import { FloatingHeader } from './components/site-header';
import { SiteFooter, CookieBanner } from './components/site-footer';
import { AssetSlot } from './components/site-asset';
import { DeviceFrame, AppMapScreen, DownloadParkHub, CreateAccountCTA, SecondaryCTA } from './components/ui-buttons';
import { FloatingStatusChip, LiveDot, SignalLine } from './components/signal';
import { ExchangeScrollStory } from './components/exchange-scroll-story';
import {
  EditorialHeading,
  FAQAccordion,
  FinalCinematicCTA,
  LevelLadder,
  ReferralEquation,
  SectionEyebrow,
} from './components/ui';
import { StoreButtons } from './components/store-badges';
import { FAQS, MISSIONS, MILESTONES, PACKAGES, PRICE_TIERS } from './lib/content';
import { portalPath, siteHref } from './lib/urls';

export default function HomePage() {
  const monthly = PACKAGES.find((p) => p.featured)!;
  const others = PACKAGES.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <FloatingHeader />

      {/* 01 HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <AssetSlot label="home-01-hero-city-signal-wide.webp" className="!aspect-auto h-full min-h-full rounded-none" priority />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(7,19,31,0.94)_0%,rgba(7,19,31,0.78)_42%,rgba(7,19,31,0.45)_100%)]" />
        <div className="relative z-10 mx-auto grid max-w-site gap-10 px-5 pb-16 pt-28 lg:grid-cols-12 lg:items-end lg:px-12 lg:pb-20 lg:pt-36">
          <div className="lg:col-span-5">
            <SectionEyebrow light>Parcheggi, in tempo reale. Tra persone.</SectionEyebrow>
            <h1 className="display-h1 mt-4">
              Smetti di girare.
              <span className="mt-1 block text-brand">Qualcuno sta uscendo ora.</span>
            </h1>
            <p className="mt-5 max-w-lg text-[1.15rem] leading-relaxed text-white/75">
              ParkHub ti mostra chi sta lasciando un posto vicino a te. Lo prenoti, lo raggiungi e
              completi lo scambio dall&apos;app.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DownloadParkHub />
              <SecondaryCTA href={siteHref('/come-funziona')} light>
                Guarda come funziona
              </SecondaryCTA>
            </div>
            <StoreButtons className="mt-6" variant="dark" />
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/65">
              <li>Prezzo visibile prima</li>
              <li>· Navigazione al punto</li>
              <li>· Nessuna asta</li>
            </ul>
          </div>
          <div className="relative lg:col-span-7">
            <div className="pointer-events-none absolute -left-2 top-8 z-20 hidden lg:block">
              <FloatingStatusChip>
                <LiveDot /> LIVE · posto pubblicato ora
              </FloatingStatusChip>
            </div>
            <div className="pointer-events-none absolute right-4 top-24 z-20 hidden lg:block">
              <FloatingStatusChip tone="brand">
                <span className="font-mono">1,20 €</span> · 2 min
              </FloatingStatusChip>
            </div>
            <div className="pointer-events-none absolute bottom-28 left-0 z-20 hidden lg:block">
              <FloatingStatusChip tone="light">Prenotato · arrivo in corso</FloatingStatusChip>
            </div>
            <div className="mx-auto max-w-[340px] lg:ml-auto lg:mr-8">
              <DeviceFrame className="max-w-[320px]">
                <AppMapScreen />
              </DeviceFrame>
            </div>
            <SignalLine variant="diagonal" className="pointer-events-none absolute right-8 top-10 hidden h-28 w-40 text-brand lg:block" />
          </div>
        </div>
      </section>

      {/* 02 LIVE SIGNAL BAR */}
      <section className="bg-graphite text-white">
        <div className="mx-auto flex max-w-site flex-col gap-6 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="grid flex-1 gap-4 sm:grid-cols-3">
            {[
              ['Uno sta uscendo', 'pubblica'],
              ['Uno sta arrivando', 'prenota'],
              ['ParkHub li collega', 'navigazione + chiusura'],
            ].map(([a, b]) => (
              <div key={a} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-sm font-semibold">{a}</p>
                <p className="mt-1 text-xs text-white/50">{b}</p>
              </div>
            ))}
          </div>
          <div className="max-w-sm lg:text-right">
            <SignalLine className="mb-3 w-full text-brand" />
            <p className="text-sm text-white/65">
              Un posto si libera. Il segnale dura pochi minuti. ParkHub lo rende visibile.
            </p>
          </div>
        </div>
      </section>

      {/* 03 PROBLEMA */}
      <section className="section-pad bg-warm-paper">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <EditorialHeading
              eyebrow="Il problema non è solo trovare un posto."
              title="Il parcheggio cambia ogni minuto. Oggi tu lo scopri troppo tardi."
              lead="Giri nello stesso isolato, mentre un’auto a cinquanta metri sta già lasciando il suo posto. Quell’occasione esiste per pochi secondi e nessuna mappa tradizionale te la segnala."
            />
            <p className="mt-10 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
              “Non serve creare nuovi posti. Serve vedere quelli che si stanno liberando.”
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-ink/70">
              <span>tempo perso</span>
              <span className="text-brand">·</span>
              <span>finestra breve</span>
              <span className="text-brand">·</span>
              <span>segnale assente</span>
            </div>
          </div>
          <div className="relative lg:col-span-7">
            <AssetSlot label="home-03-problem-search-loop-wide.webp" className="min-h-[280px]" />
            <div className="absolute -bottom-6 -left-4 hidden w-2/5 overflow-hidden rounded-card border-4 border-warm-paper shadow-soft sm:block">
              <AssetSlot label="home-03-problem-search-loop-wide.webp" aspect="square" />
            </div>
          </div>
        </div>
      </section>

      {/* 04 SCROLL STORY */}
      <section className="bg-paper">
        <ExchangeScrollStory />
      </section>

      {/* 05 DUE PERCORSI */}
      <section className="section-pad bg-ink text-white">
        <div className="mx-auto max-w-site">
          <h2 className="display-h2 mx-auto max-w-3xl text-center">
            ParkHub funziona perché serve a entrambi.
          </h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            <article className="overflow-hidden rounded-stage border border-white/10 bg-ink-2 lg:col-span-7">
              <AssetSlot label="home-05-seller-leaving-car-portrait.webp" className="rounded-none" />
              <div className="p-7 sm:p-9">
                <p className="eyebrow-light">Stai uscendo</p>
                <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                  Il tuo posto può diventare utile prima ancora che tu sia partito.
                </h3>
                <p className="mt-4 font-mono text-xs text-brand">
                  Vendi → Pubblica → Attendi → Completa → Ricevi credito
                </p>
                <Link href="/come-funziona" className="mt-6 inline-flex text-sm font-bold text-brand hover:underline">
                  Vedi il percorso venditore →
                </Link>
              </div>
            </article>
            <article className="overflow-hidden rounded-stage border border-white/10 bg-ink-2 lg:col-span-5 lg:mt-16">
              <AssetSlot label="home-05-buyer-arriving-car-portrait.webp" className="rounded-none" />
              <div className="p-7 sm:p-8">
                <p className="eyebrow-light">Stai arrivando</p>
                <h3 className="mt-3 font-display text-2xl font-bold">
                  Smetti di cercare a caso. Vai verso un posto che sai già dove si trova.
                </h3>
                <p className="mt-4 font-mono text-xs text-brand">
                  Cerca → Prenota → Naviga → Arriva → Completa
                </p>
                <Link href="/come-funziona" className="mt-6 inline-flex text-sm font-bold text-brand hover:underline">
                  Vedi il percorso acquirente →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 06 PRODUCT BENTO */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-site">
          <EditorialHeading title="La città cambia. La mappa con te." />
          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            <div className="overflow-hidden rounded-stage border border-line bg-ink text-white lg:col-span-7 lg:row-span-2">
              <div className="p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">Mappa live</p>
                <p className="mt-2 text-sm text-white/65">Posti pubblicati adesso, non annunci statici.</p>
              </div>
              <div className="px-6 pb-8">
                <DeviceFrame className="max-w-[280px]">
                  <AppMapScreen />
                </DeviceFrame>
              </div>
            </div>
            <div className="rounded-card border border-line bg-brand-mist p-6 lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-deep">Prezzo</p>
              <p className="mt-3 font-mono text-5xl font-bold text-ink">€1,20</p>
              <p className="mt-2 text-sm text-muted">Lo vedi prima. Nessuna trattativa.</p>
            </div>
            <div className="rounded-card border border-line bg-warm-paper p-6 lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-deep">ETA</p>
              <p className="mt-3 font-mono text-3xl font-bold">2 min · 180 m</p>
              <p className="mt-2 text-sm text-muted">Sai quanto sei lontano.</p>
            </div>
            <div className="rounded-card border border-line bg-ink p-6 text-white lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-wider text-brand">Navigazione</p>
              <SignalLine variant="route" className="mt-4 h-16 w-full text-brand" />
              <p className="mt-3 text-sm text-white/65">Vai direttamente al punto.</p>
            </div>
            <div className="rounded-card border border-line bg-paper p-6 lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-deep">Notifica</p>
              <div className="mt-4 flex items-start gap-3 rounded-2xl border border-line bg-white p-4 shadow-soft">
                <LiveDot className="mt-1.5" />
                <div>
                  <p className="text-sm font-semibold">Qualcuno sta arrivando</p>
                  <p className="mt-1 text-sm text-muted">Sai quando l’altro è in arrivo — senza chat di trattativa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 APP / PORTALE */}
      <section className="section-pad bg-brand-mist">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <EditorialHeading
              title="In strada usi l’app. Tutto il resto lo gestisci dal portale."
              lead="Un solo account. Stesso saldo. Due strumenti pensati per momenti diversi."
            />
            <p className="mt-6 text-sm font-semibold text-brand-ink">
              La carta si usa sul portale. In app usi il credito già disponibile.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DownloadParkHub />
              <SecondaryCTA href={portalPath('/login')}>Vai al portale</SecondaryCTA>
            </div>
          </div>
          <div className="relative lg:col-span-8">
            <AssetSlot label="home-07-ecosystem-app-portal-stage.webp" className="min-h-[260px]" />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-card border border-line bg-white/90 p-5 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-deep">App</p>
                <p className="mt-2 text-sm text-muted">Cerca · Vendi · Prenota · Naviga · Notifiche · Wallet in lettura</p>
              </div>
              <div className="rounded-card border border-line bg-white/90 p-5 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-deep">Portale</p>
                <p className="mt-2 text-sm text-muted">Account · Pacchetti · Wallet · Ranking · Missioni · Inviti · Supporto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 PREZZI */}
      <section className="section-pad bg-gradient-to-b from-white to-brand-mist/40">
        <div className="mx-auto max-w-site">
          <EditorialHeading
            title="Parti con poco. Usa ParkHub quanto ti serve."
            lead="Il credito si acquista sul portale. Poi lo usi in app quando prenoti un posto."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            <article className="rounded-stage border border-brand bg-ink p-8 text-white shadow-device lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-wider text-brand">{monthly.hint}</p>
              <h3 className="mt-3 font-display text-3xl font-bold">{monthly.name}</h3>
              <p className="mt-4 font-mono text-4xl font-bold">{monthly.price}</p>
              <p className="mt-2 text-sm text-white/60">{monthly.credit}</p>
              <p className="mt-4 text-xs text-white/45">{monthly.note}</p>
            </article>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {others.map((p) => (
                <article
                  key={p.name}
                  className="rounded-card border border-line bg-white p-5 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-soft"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted">{p.hint}</p>
                  <h3 className="mt-1 font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-3 font-mono text-2xl font-bold">{p.price}</p>
                  <p className="mt-1 text-sm text-muted">{p.credit}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <span>Scambio da €1,20</span>
            <span>· Strisce blu separate</span>
            <span>· Saldo visibile in app</span>
          </div>
          <Link href="/prezzi" className="mt-6 inline-flex text-sm font-bold text-brand-deep hover:underline">
            Confronta tutti i piani →
          </Link>
        </div>
      </section>

      {/* 09 LIVELLI */}
      <section className="section-pad-tight bg-white">
        <div className="mx-auto max-w-site">
          <EditorialHeading
            title="Più esperienza. Più livelli disponibili."
            lead="Per sbloccare un livello servono sia le vendite richieste sia un ranking sufficiente. Sotto soglia resti al livello base."
          />
          <div className="mt-12">
            <LevelLadder tiers={PRICE_TIERS} />
          </div>
        </div>
      </section>

      {/* 10 WALLET */}
      <section className="section-pad bg-graphite text-white">
        <div className="mx-auto max-w-site">
          <EditorialHeading
            light
            title="Un saldo. Tre origini diverse. ParkHub decide automaticamente cosa usare prima."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ['1. Bonus', 'Promo, missioni, referral. Scadenza breve. Solo swap.'],
              ['2. Credito pacchetto', 'Piani e pacchetti. Scadenza secondo il prodotto.'],
              ['3. Proventi vendita', 'Dagli scambi venduti. Non scadono. Usati per ultimi.'],
            ].map(([t, d], i) => (
              <div
                key={t}
                className="rounded-card border border-white/10 bg-white/5 p-6"
                style={{ transform: `translateY(${i * 12}px)` }}
              >
                <p className="font-display text-xl font-bold text-brand">{t}</p>
                <p className="mt-3 text-sm text-white/65">{d}</p>
              </div>
            ))}
          </div>
          <Link href="/prezzi" className="mt-12 inline-flex text-sm font-bold text-brand hover:underline">
            Come funziona il credito →
          </Link>
        </div>
      </section>

      {/* 11 FIDUCIA */}
      <section className="section-pad bg-warm-paper">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <EditorialHeading
              title="La fiducia non è un badge. È costruita nello scambio."
              lead="Ranking basso non significa account bloccato: limita il livello di vendita. Sospensione e ban sono misure separate."
            />
            <ol className="mt-8 space-y-3 border-l-2 border-brand pl-5">
              {[
                'Email verificata',
                'Telefono verificato',
                'Veicolo associato',
                'Ranking personale',
                'Segnalazioni documentate',
              ].map((x) => (
                <li key={x} className="text-sm font-semibold">
                  {x}
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-7">
            <AssetSlot label="home-11-trust-user-vehicle-wide.webp" />
          </div>
        </div>
      </section>

      {/* 12 RANKING */}
      <section className="section-pad bg-warm-paper/80">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <EditorialHeading title="Le stelle misurano affidabilità. Non popolarità." />
            <div className="mt-8 flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-white font-display text-xl font-bold text-brand-deep shadow-soft"
                >
                  {n}
                </div>
              ))}
            </div>
            <Link href="/ranking" className="mt-8 inline-flex text-sm font-bold text-brand-deep hover:underline">
              Capisci il ranking →
            </Link>
          </div>
          <div className="space-y-3 lg:col-span-7">
            {[
              'Valutazione dopo lo scambio',
              'Annullo tardivo',
              'Venditore cancella dopo prenotazione',
              'Report approvato / respinto',
            ].map((e) => (
              <div key={e} className="rounded-card border border-line bg-white px-5 py-4 text-sm font-semibold shadow-soft">
                {e}
              </div>
            ))}
            <p className="text-sm text-muted">Niente classifica pubblica. Solo il tuo punteggio.</p>
          </div>
        </div>
      </section>

      {/* 13 MISSIONI */}
      <section className="section-pad bg-brand-mist/50">
        <div className="mx-auto max-w-site">
          <EditorialHeading
            title="La mappa funziona meglio quando più persone la tengono viva."
            lead="Le missioni premiano comportamenti utili allo scambio, senza modificare il ranking."
          />
          <div className="mt-12 space-y-4">
            {MISSIONS.map((m, i) => (
              <div key={m.title} className="rounded-card border border-line bg-white p-5 shadow-soft">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-brand-deep">{m.kind}</p>
                    <h3 className="mt-1 font-display text-lg font-bold">{m.title}</h3>
                  </div>
                  <p className="text-sm text-muted">{m.prize}</p>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-paper">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${25 + i * 18}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {MILESTONES.map((m) => (
              <span key={m.title} className="rounded-pill border border-line bg-white px-4 py-2 text-xs font-semibold">
                {m.title}: {m.prize}
              </span>
            ))}
          </div>
          <Link href="/missioni" className="mt-8 inline-flex text-sm font-bold text-brand-deep hover:underline">
            Vedi tutte le missioni →
          </Link>
        </div>
      </section>

      {/* 14 REFERRAL */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <AssetSlot label="home-14-referral-friends-street-wide.webp" className="!aspect-auto h-full min-h-full rounded-none" />
        </div>
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto max-w-site px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-xl rounded-stage border border-white/10 bg-white/95 p-8 shadow-device backdrop-blur">
            <SectionEyebrow>Più persone, più posti</SectionEyebrow>
            <h2 className="display-h2 mt-3 text-[2rem] sm:text-4xl">
              Più persone usano ParkHub, più la mappa diventa utile.
            </h2>
            <p className="mt-4 text-muted">
              Invita un amico. Il bonus arriva solo quando completa davvero il suo primo scambio.
            </p>
            <div className="mt-8">
              <ReferralEquation />
            </div>
            <ul className="mt-6 space-y-1 text-sm text-muted">
              <li>· codice in registrazione</li>
              <li>· pending fino al primo swap</li>
              <li>· solo swap · non prelevabile</li>
            </ul>
            <Link href="/invita" className="mt-6 inline-flex text-sm font-bold text-brand-deep hover:underline">
              Invita un amico →
            </Link>
          </div>
        </div>
      </section>

      {/* 15 MOMENTI REALI */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-site">
          <EditorialHeading title="Non cerchi parcheggio “in generale”. Lo cerchi quando hai fretta." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              ['home-15-real-life-station.webp', 'Stazione', 'Il treno non aspetta il tuo terzo giro dell’isolato.'],
              ['home-15-real-life-hospital.webp', 'Ospedale', 'Quando devi arrivare, il tempo conta più del parcheggio.'],
              ['home-15-real-life-center.webp', 'Centro', 'Strade strette, pochi posti, occasioni che durano secondi.'],
              ['home-15-real-life-evening.webp', 'Rientro serale', 'Vedi chi sta uscendo prima di passare davanti al posto.'],
            ].map(([img, t, d]) => (
              <article key={t} className="overflow-hidden rounded-card border border-line bg-warm-paper">
                <AssetSlot label={img} />
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold">{t}</h3>
                  <p className="mt-2 text-sm text-muted">{d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 16 FAQ */}
      <section id="faq" className="section-pad bg-ink text-white">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12">
          <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <EditorialHeading light title="Prima di provarlo, è normale voler capire bene." />
            <Link href="/faq" className="mt-6 inline-flex text-sm font-bold text-brand hover:underline">
              Tutte le FAQ →
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* 17 CTA */}
      <FinalCinematicCTA />

      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
