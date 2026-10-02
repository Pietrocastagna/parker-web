'use client';

import Link from 'next/link';
import { FloatingHeader } from './components/site-header';
import { SiteFooter, CookieBanner } from './components/site-footer';
import { AssetSlot } from './components/site-asset';
import { DownloadParkHub, CreateAccountCTA, SecondaryCTA, PrimaryCTA } from './components/ui-buttons';
import { FloatingStatusChip, LiveDot, SignalLine } from './components/signal';
import { ExchangeScrollStory } from './components/exchange-scroll-story';
import { PhoneFrame, LaptopFrame } from './components/device';
import { MapCanvas, MapSearchScreen, NavigationScreen, PortalDashboardScreen, WalletScreen } from './components/map-canvas';
import {
  EditorialHeading,
  FAQAccordion,
  FinalCinematicCTA,
  IdentityStack,
  LevelLadder,
  MissionProgress,
  NotificationCard,
  ReferralEquation,
  ScoreFeed,
  SectionEyebrow,
  StarMeter,
  WalletBuckets,
} from './components/ui';
import { Reveal } from './components/reveal';
import { StoreButtons } from './components/store-badges';
import { BALANCE_SOURCES, FAQS, LAUNCH_PROMO, MILESTONES, PACKAGES, PRICE_TIERS } from './lib/content';
import { portalPath } from './lib/urls';

export default function HomePage() {
  const monthly = PACKAGES.find((p) => p.featured)!;
  const others = PACKAGES.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <FloatingHeader />

      {/* ───────── 01 HERO ───────── */}
      <section className="relative z-10 bg-warm-paper">
        <div className="absolute inset-0 overflow-hidden">
          <AssetSlot label="home-01-hero-city-signal-wide.webp" fill tone="warm" priority />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,244,238,0.98)_0%,rgba(247,244,238,0.92)_38%,rgba(247,244,238,0.55)_62%,rgba(247,244,238,0.15)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-warm-paper to-transparent" />
          <div className="pointer-events-none absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-brand/15 blur-[120px]" aria-hidden />
        </div>

        <div className="relative mx-auto grid min-h-[min(92svh,960px)] max-w-site items-center gap-12 px-5 pb-28 pt-32 sm:px-8 lg:grid-cols-12 lg:px-12 lg:pb-36 lg:pt-40">
          <div className="lg:col-span-6">
            <Reveal>
              {LAUNCH_PROMO.enabled ? (
                <a
                  href="#lancio"
                  className="group mb-6 inline-flex max-w-full items-center gap-2.5 rounded-pill border border-brand/40 bg-white/85 py-1.5 pl-1.5 pr-4 text-[13px] font-semibold text-ink shadow-soft backdrop-blur transition hover:border-brand hover:bg-white"
                >
                  <span className="rounded-pill bg-brand px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">Lancio</span>
                  <span className="truncate">
                    {LAUNCH_PROMO.parkings} parcheggi gratis ai primi {LAUNCH_PROMO.seatsLabel} iscritti
                  </span>
                  <span className="text-brand-deep transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              ) : null}
              <SectionEyebrow>Parcheggi, in tempo reale. Tra persone.</SectionEyebrow>
              <h1 className="display-h1 text-balance mt-5">
                Smetti di girare.
                <span className="mt-1 block bg-gradient-to-r from-brand-deep to-brand bg-clip-text text-transparent">
                  Qualcuno sta uscendo ora.
                </span>
              </h1>
              <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-ink/70 sm:text-xl">
                ParkHub ti mostra chi sta lasciando un posto vicino a te. Lo prenoti, lo raggiungi e completi lo
                scambio dall&apos;app.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <DownloadParkHub tone="ink" />
                <SecondaryCTA href={'/come-funziona'}>Guarda come funziona</SecondaryCTA>
              </div>
              <StoreButtons className="mt-6" />
              <ul className="mt-10 grid max-w-md grid-cols-3 gap-4 text-[13px] font-semibold text-ink/75">
                {[
                  ['Prezzo visibile prima', <TagIcon key="t" />],
                  ['Navigazione al punto', <RouteIcon key="r" />],
                  ['Nessuna asta', <ShieldIcon key="s" />],
                ].map(([t, icon]) => (
                  <li key={t as string} className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-deep shadow-soft">{icon}</span>
                    <span className="leading-tight">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative mx-auto h-[640px] w-full max-w-[560px] overflow-visible lg:h-[720px]">
              {/* arco segnale: dall'auto che esce al pin */}
              <SignalLine variant="arc" className="pointer-events-none absolute left-[2%] top-[6%] z-0 w-[70%] text-brand-deep" />

              {/* auto che esce */}
              <Reveal delay={200} className="absolute left-0 top-[9%] z-20 hidden sm:block float-slow">
                <div className="flex items-center gap-3 rounded-2xl border border-line bg-white/95 p-3 pr-5 shadow-float backdrop-blur">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-brand">
                    <CarIcon />
                  </span>
                  <div>
                    <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-brand-deep">
                      <LiveDot /> Sto uscendo
                    </p>
                    <p className="text-sm font-semibold">Via dei Tigli 12 · tra 1 min</p>
                  </div>
                </div>
              </Reveal>

              {/* telefono */}
              <Reveal delay={80} className="absolute left-1/2 top-[13%] z-10 w-[300px] -translate-x-1/2 sm:w-[330px] lg:left-[50%]">
                <PhoneFrame tilt={-3}>
                  <MapSearchScreen />
                </PhoneFrame>
              </Reveal>

              {/* prezzo */}
              <Reveal delay={320} className="absolute right-0 top-[3%] z-20 hidden sm:block float-slower lg:-right-4">
                <FloatingStatusChip tone="brand" className="!px-4 !py-2.5 !text-sm">
                  <span className="font-mono text-base font-bold">€1,20</span> · 2 min · 180 m
                </FloatingStatusChip>
              </Reveal>

              {/* prenotato */}
              <Reveal delay={420} className="absolute bottom-[8%] left-[2%] z-20 hidden sm:block">
                <div className="flex items-center gap-3 rounded-2xl bg-ink p-3 pr-5 text-white shadow-device">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-mist font-display text-sm font-bold text-brand-deep">M</span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-brand">Prenotato</p>
                    <p className="text-sm font-semibold">Marco è in arrivo · 2 min</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* strip 4 passi, sovrapposta al bordo */}
        <div className="relative z-20 mx-auto -mb-14 max-w-site px-5 sm:px-8 lg:px-12">
          <Reveal className="grid overflow-hidden rounded-card border border-line bg-white shadow-float sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Scarica l’app', 'iOS e Android', <PhoneIcon key="1" />],
              ['Crea account', 'Uno per app e portale', <UserIcon key="2" />],
              ['Ricarica sul portale', 'Scegli il pacchetto', <WalletIcon key="3" />],
              ['Scambia in app', 'Trova o segnala un posto', <SwapIcon key="4" />],
            ].map(([t, d, icon], i) => (
              <div key={t as string} className="relative flex items-center gap-4 px-6 py-5 sm:border-l sm:border-line sm:first:border-l-0">
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-mist text-brand-deep">
                  {icon}
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-ink font-mono text-[10px] font-bold text-brand">{i + 1}</span>
                </span>
                <div>
                  <p className="text-[15px] font-bold">{t}</p>
                  <p className="text-[13px] text-muted">{d}</p>
                </div>
                {i < 3 ? <span className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 text-ink/20 lg:block">›</span> : null}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ───────── 02 LIVE SIGNAL BAR ───────── */}
      <section className="relative overflow-hidden bg-ink pb-16 pt-28 text-white">
        <div className="absolute inset-0 opacity-[0.18]">
          <MapCanvas theme="dark" dense className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-ink" />
        <div className="relative mx-auto max-w-site px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="relative grid gap-6 sm:grid-cols-3">
                <svg className="pointer-events-none absolute inset-x-[16%] top-5 hidden h-px w-[68%] sm:block" aria-hidden>
                  <line x1="0" y1="0.5" x2="100%" y2="0.5" stroke="#00C9A7" strokeWidth="1.5" strokeDasharray="4 8" className="route-flow" opacity="0.7" />
                </svg>
                {[
                  ['Uno sta uscendo', 'pubblica il posto', true],
                  ['ParkHub li collega', 'navigazione + chiusura', false],
                  ['Uno sta arrivando', 'prenota a prezzo fisso', true],
                ].map(([a, b, dot], i) => (
                  <Reveal key={a as string} delay={i * 120} className="relative">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand/40 bg-ink">
                      <span className={`h-3 w-3 rounded-full ${i === 1 ? 'bg-white' : 'bg-brand'}`} />
                      {dot ? <span className="absolute inset-0 rounded-full border border-brand/40 signal-pulse" /> : null}
                    </span>
                    <p className="mt-4 font-display text-xl font-bold">{a}</p>
                    <p className="mt-1 text-sm text-white/55">{b}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={300} className="lg:col-span-4">
              <p className="font-display text-2xl font-bold leading-snug text-white/90">
                Un posto si libera. Il segnale dura pochi minuti. <span className="text-brand">ParkHub lo rende visibile.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── 03 PROBLEMA ───────── */}
      <section className="section-pad relative overflow-hidden bg-warm-paper">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <EditorialHeading
              eyebrow="Il problema non è solo trovare un posto"
              title="Il parcheggio cambia ogni minuto. Oggi tu lo scopri troppo tardi."
              lead="Giri nello stesso isolato, mentre un’auto a cinquanta metri sta già lasciando il suo posto. Quell’occasione esiste per pochi secondi e nessuna mappa tradizionale te la segnala."
            />
            <Reveal delay={120}>
              <blockquote className="mt-10 border-l-[3px] border-brand pl-6">
                <p className="font-display text-2xl font-bold leading-snug text-ink sm:text-[1.75rem]">
                  “Non serve creare nuovi posti. Serve vedere quelli che si stanno liberando.”
                </p>
              </blockquote>
              <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                {[
                  ['Tempo perso', <ClockIcon key="c" />],
                  ['Finestra breve', <TimerIcon key="t" />],
                  ['Segnale assente', <SignalOffIcon key="s" />],
                ].map(([t, icon]) => (
                  <li key={t as string} className="flex items-center gap-2 text-sm font-bold text-ink/80">
                    <span className="text-brand-deep">{icon}</span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="relative lg:col-span-7">
            <Reveal>
              <div className="relative">
                <AssetSlot label="home-03-problem-search-loop-wide.webp" aspect="video" tone="dark" className="!rounded-stage shadow-soft" />
                <div className="absolute left-5 top-5 hidden sm:block">
                  <FloatingStatusChip tone="light">
                    <span className="h-2 w-2 rounded-full bg-danger" /> Terzo giro dell’isolato
                  </FloatingStatusChip>
                </div>
                <div className="absolute -bottom-8 -right-3 hidden w-[42%] overflow-hidden rounded-card border-[6px] border-warm-paper shadow-device sm:block lg:-right-8">
                  <AssetSlot label="home-03-problem-search-loop-wide.webp" aspect="square" tone="mint" className="!rounded-none" />
                  <div className="absolute inset-x-4 bottom-4">
                    <FloatingStatusChip tone="brand">
                      <LiveDot /> 50 m · si libera ora
                    </FloatingStatusChip>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── 04 I QUATTRO PASSI ───────── */}
      <section className="relative bg-paper">
        <ExchangeScrollStory />
      </section>

      {/* ───────── 05 DUE PERCORSI ───────── */}
      <section className="section-pad relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-brand/10 blur-[140px]" aria-hidden />
        <div className="relative mx-auto max-w-site">
          <EditorialHeading light align="center" eyebrow="Due persone, due percorsi" title="ParkHub funziona perché serve a entrambi." />
          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            <Reveal as="article" className="relative overflow-hidden rounded-stage lg:col-span-7">
              <div className="relative min-h-[560px]">
                <AssetSlot label="home-05-seller-leaving-car-portrait.webp" fill tone="dark" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
                <div className="absolute left-6 top-6">
                  <FloatingStatusChip tone="brand">
                    <LiveDot /> Stai uscendo
                  </FloatingStatusChip>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                  <h3 className="display-h3 text-balance max-w-md">Il tuo posto può diventare utile prima ancora che tu sia partito.</h3>
                  <FlowPills items={['Vendi', 'Pubblica', 'Attendi', 'Completa', 'Ricevi credito']} />
                  <Link href="/come-funziona" className="link-arrow mt-7 text-brand">
                    Vedi il percorso venditore
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal as="article" delay={120} className="relative overflow-hidden rounded-stage lg:col-span-5 lg:mt-20">
              <div className="relative min-h-[480px]">
                <AssetSlot label="home-05-buyer-arriving-car-portrait.webp" fill tone="dark" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
                <div className="absolute left-6 top-6">
                  <FloatingStatusChip tone="light">
                    <span className="h-2 w-2 rounded-full bg-[#2563EB]" /> Stai arrivando
                  </FloatingStatusChip>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <h3 className="display-h3 text-balance">Smetti di cercare a caso. Vai verso un posto che sai già dove si trova.</h3>
                  <FlowPills items={['Cerca', 'Prenota', 'Naviga', 'Arriva', 'Completa']} />
                  <Link href="/come-funziona" className="link-arrow mt-7 text-brand">
                    Vedi il percorso acquirente
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── 06 PRODUCT BENTO ───────── */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-site">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <EditorialHeading eyebrow="Il prodotto" title="La città cambia. La mappa con te." />
            <Reveal delay={100}>
              <p className="max-w-sm text-muted lg:text-right">Niente annunci statici: solo posti che qualcuno sta lasciando adesso, con prezzo e distanza prima di prenotare.</p>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
            {/* A mappa live */}
            <Reveal className="relative overflow-hidden rounded-stage bg-ink text-white lg:col-span-7 lg:row-span-2">
              <div className="absolute inset-0 opacity-40">
                <MapCanvas theme="dark" dense className="h-full w-full" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/70 to-ink/30" />
              <div className="relative flex h-full flex-col justify-between gap-8 p-7 sm:p-9">
                <div className="max-w-xs">
                  <p className="eyebrow-light flex items-center gap-2">
                    <LiveDot /> Mappa live
                  </p>
                  <h3 className="display-h3 mt-3">Posti pubblicati adesso, non annunci statici.</h3>
                </div>
                <div className="relative -mb-28 mt-4 self-end sm:-mb-32 sm:mt-0">
                  <PhoneFrame className="w-[260px] sm:w-[290px]" glow={false} tilt={-6}>
                    <MapSearchScreen />
                  </PhoneFrame>
                </div>
              </div>
            </Reveal>
            {/* B prezzo */}
            <Reveal delay={80} className="relative overflow-hidden rounded-card border border-line bg-brand-mist p-7 lg:col-span-5">
              <p className="eyebrow">Prezzo</p>
              <p className="mt-3 font-mono text-6xl font-bold tracking-tight text-ink">
                <span className="text-3xl text-brand-deep">€</span>1,20
              </p>
              <p className="mt-2 text-muted">Lo vedi prima. Nessuna trattativa, nessuna asta.</p>
              <span className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/25 blur-2xl" aria-hidden />
            </Reveal>
            {/* C ETA */}
            <Reveal delay={140} className="rounded-card border border-line bg-warm-paper p-7 lg:col-span-5">
              <p className="eyebrow">Tempo stimato</p>
              <div className="mt-3 flex items-baseline gap-3">
                <p className="font-mono text-4xl font-bold">2 min</p>
                <p className="font-mono text-xl text-muted">· 180 m</p>
              </div>
              <p className="mt-2 text-muted">Sai quanto sei lontano prima di partire.</p>
            </Reveal>
            {/* D navigazione */}
            <Reveal delay={200} className="relative overflow-hidden rounded-card bg-ink p-7 text-white lg:col-span-4">
              <div className="absolute inset-0 opacity-70">
                <MapCanvas theme="dark" className="h-full w-full" route="M64 236 L148 236 L148 112 L316 112" pins={[{ x: 316, y: 110, hot: true }]} user={{ x: 64, y: 236 }} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="relative flex h-full min-h-[180px] flex-col justify-end">
                <p className="eyebrow-light">Navigazione</p>
                <p className="mt-2 font-display text-xl font-bold">Vai direttamente al punto.</p>
              </div>
            </Reveal>
            {/* E notifica */}
            <Reveal delay={260} className="relative overflow-hidden rounded-card border border-line bg-paper p-7 lg:col-span-8">
              <div className="grid items-center gap-6 sm:grid-cols-2">
                <div>
                  <p className="eyebrow">Notifiche</p>
                  <p className="mt-2 font-display text-xl font-bold">Sai quando l’altro sta arrivando.</p>
                  <p className="mt-2 text-sm text-muted">Stato dello scambio in tempo reale. Niente chat di trattativa.</p>
                </div>
                <div className="float-slow">
                  <NotificationCard />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── 07 APP + PORTALE ───────── */}
      <section className="section-pad relative overflow-hidden bg-brand-mist">
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-brand/20 blur-[120px]" aria-hidden />
        <div className="relative mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <EditorialHeading eyebrow="Un ecosistema" title="In strada usi l’app. Tutto il resto lo gestisci dal portale." />
            <Reveal delay={100}>
              <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="font-display text-base font-bold">App</p>
                  <ul className="mt-2 space-y-1.5 text-muted">
                    {['Cerca', 'Vendi', 'Prenota', 'Naviga', 'Notifiche', 'Wallet in lettura'].map((x) => (
                      <li key={x} className="flex items-center gap-2">
                        <Check /> {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-display text-base font-bold">Portale</p>
                  <ul className="mt-2 space-y-1.5 text-muted">
                    {['Account', 'Pacchetti', 'Wallet e movimenti', 'Ranking', 'Missioni', 'Inviti', 'Supporto'].map((x) => (
                      <li key={x} className="flex items-center gap-2">
                        <Check /> {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-brand/30 bg-white/70 p-4 text-sm backdrop-blur">
                <p className="font-bold text-ink">Un solo account. Stesso saldo.</p>
                <p className="mt-1 text-muted">La carta si usa sul portale. In app usi il credito già disponibile.</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <DownloadParkHub tone="ink" />
                <SecondaryCTA href={portalPath('/login')}>Vai al portale</SecondaryCTA>
              </div>
            </Reveal>
          </div>
          <div className="relative lg:col-span-8">
            <Reveal>
              <div className="relative pb-16 pr-6 sm:pr-24">
                <LaptopFrame>
                  <PortalDashboardScreen />
                </LaptopFrame>
                <div className="absolute -bottom-2 right-0 w-[150px] sm:w-[200px]">
                  <PhoneFrame glow={false} tilt={4}>
                    <WalletScreen />
                  </PhoneFrame>
                </div>
                <SignalLine variant="diagonal" className="pointer-events-none absolute bottom-24 right-32 hidden w-40 text-brand-deep sm:block" />
                <div className="absolute left-6 top-6 hidden sm:block">
                  <FloatingStatusChip tone="light">Stesso saldo · €18,40</FloatingStatusChip>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── 08 PREZZI ───────── */}
      <section className="section-pad bg-gradient-to-b from-white via-white to-brand-mist/50">
        <div className="mx-auto max-w-site">
          <EditorialHeading
            eyebrow="Prezzi"
            title="Parti con poco. Usa ParkHub quanto ti serve."
            lead="Il credito si acquista sul portale. Poi lo usi in app quando prenoti un posto."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            <Reveal as="article" className="relative overflow-hidden rounded-stage bg-ink p-8 text-white shadow-device lg:col-span-5 lg:p-10">
              <div className="absolute inset-0 opacity-20">
                <MapCanvas theme="dark" className="h-full w-full" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/85 to-brand-ink/60" />
              <div className="relative flex h-full flex-col">
                <span className="inline-flex w-fit items-center gap-2 rounded-pill bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">{monthly.hint}</span>
                <h3 className="mt-6 font-display text-3xl font-bold">{monthly.name}</h3>
                <p className="mt-4 font-mono text-5xl font-bold tracking-tight">
                  €23,90<span className="text-xl text-white/55"> / mese</span>
                </p>
                <p className="mt-2 text-white/70">{monthly.credit}</p>
                <ul className="mt-8 space-y-2.5 text-sm text-white/75">
                  {['Rinnovo automatico, disdici quando vuoi', 'Credito pronto ogni mese in app', 'Scambi da €1,20 a prezzo fisso'].map((x) => (
                    <li key={x} className="flex items-center gap-2.5">
                      <Check light /> {x}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <PrimaryCTA href={portalPath('/signup')}>Attiva sul portale</PrimaryCTA>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {others.map((p, i) => (
                <Reveal
                  as="article"
                  key={p.name}
                  delay={i * 80}
                  className="group rounded-card border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-soft"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted">{p.hint}</p>
                  <h3 className="mt-1 font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-4 font-mono text-3xl font-bold tracking-tight">{p.price}</p>
                  <p className="mt-1 text-sm text-muted">{p.credit}</p>
                  {p.note ? <p className="mt-3 text-xs text-muted">{p.note}</p> : null}
                  <p className="link-arrow mt-5 text-brand-deep opacity-0 transition group-hover:opacity-100">Scegli</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="mt-8 flex flex-col gap-4 rounded-card border border-line bg-white/70 px-6 py-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-semibold text-ink/75">
              <li className="flex items-center gap-2"><Check /> Scambio da €1,20</li>
              <li className="flex items-center gap-2"><Check /> Strisce blu separate</li>
              <li className="flex items-center gap-2"><Check /> Saldo visibile in app</li>
            </ul>
            <Link href="/prezzi" className="link-arrow text-brand-deep">
              Confronta tutti i piani
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────── 08b OFFERTA DI LANCIO (temporanea: LAUNCH_PROMO.enabled) ───────── */}
      {LAUNCH_PROMO.enabled ? (
        <section id="lancio" className="relative scroll-mt-24 overflow-hidden bg-brand text-ink">
          <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
            <MapCanvas theme="light" dense className="h-full w-full" />
          </div>
          <div className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-white/40 blur-[110px]" aria-hidden />
          <div className="pointer-events-none absolute -bottom-32 right-0 h-[460px] w-[460px] rounded-full bg-brand-deep/30 blur-[120px]" aria-hidden />
          <span
            className="pointer-events-none absolute -right-6 bottom-[-0.18em] select-none font-mono text-[18rem] font-bold leading-none text-ink/10 sm:text-[26rem] lg:text-[32rem]"
            aria-hidden
          >
            {LAUNCH_PROMO.parkings}
          </span>

          <div className="relative mx-auto grid max-w-site gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:items-center lg:px-12 lg:py-28">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-pill bg-ink px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand">
                  <LiveDot /> Offerta di lancio · per un periodo limitato
                </p>
                <h2 className="display-h2 text-balance mt-5">
                  I primi {LAUNCH_PROMO.seatsLabel} iscritti partono con {LAUNCH_PROMO.parkings} parcheggi.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
                  Crea l’account, verifica il telefono e trovi {LAUNCH_PROMO.parkings} parcheggi già pronti in app. {LAUNCH_PROMO.rule}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2.5 text-[13px] font-semibold">
                  {[
                    'Dopo la verifica del telefono',
                    '1 parcheggio per scambio',
                    `Validità ${LAUNCH_PROMO.validityDays} giorni`,
                    'Solo per prenotare posti',
                  ].map((t) => (
                    <li key={t} className="rounded-pill border border-ink/15 bg-white/60 px-3.5 py-1.5 backdrop-blur">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <PrimaryCTA href={portalPath('/signup')} tone="ink" className="whitespace-nowrap">
                    Prendi i tuoi {LAUNCH_PROMO.parkings} parcheggi
                  </PrimaryCTA>
                  <p className="text-sm text-ink/70">
                    Posti limitati: a {LAUNCH_PROMO.seatsLabel} iscritti l’offerta si chiude da sola.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={120}>
                <div className="rounded-stage bg-ink p-6 text-white shadow-device sm:p-8">
                  <p className="eyebrow-light">Da dove arriva il saldo che spendi in app</p>
                  <ul className="mt-5 divide-y divide-white/10">
                    {BALANCE_SOURCES.map((s, i) => (
                      <li key={s.title} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 font-mono text-xs font-bold text-brand">
                          0{i + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="font-display text-lg font-bold">{s.title}</p>
                            <span className="rounded-pill border border-white/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white/60">{s.tag}</span>
                          </div>
                          <p className="mt-1 text-sm text-white/65">{s.body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl border border-brand/40 bg-brand/10 p-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
                        <LockIcon />
                      </span>
                      <div>
                        <p className="font-display text-base font-bold">Bonus amici: solo parcheggi.</p>
                        <p className="mt-1 text-sm text-white/70">
                          Il credito che ricevi invitando un amico si spende esclusivamente per prenotare posti. Non si trasforma in buoni, non si scarica come voucher, non si preleva.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ) : null}

      {/* ───────── 09 LIVELLI ───────── */}
      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <EditorialHeading
              eyebrow="I cinque livelli"
              title="Più esperienza. Più livelli disponibili."
              lead="Per sbloccare un livello servono sia le vendite richieste sia un ranking sufficiente. Sotto soglia resti al livello base."
            />
          </div>
          <div className="lg:col-span-8">
            <LevelLadder tiers={PRICE_TIERS} />
          </div>
        </div>
      </section>

      {/* ───────── 10 WALLET ───────── */}
      <section className="section-pad relative overflow-hidden bg-graphite text-white">
        <div className="pointer-events-none absolute -left-20 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand/10 blur-[140px]" aria-hidden />
        <div className="relative mx-auto max-w-site">
          <EditorialHeading
            light
            eyebrow="Il wallet"
            title="Un saldo. Tre origini diverse. ParkHub decide automaticamente cosa usare prima."
          />
          <div className="mt-14">
            <WalletBuckets />
          </div>
          <Reveal className="mt-12">
            <Link href="/prezzi#wallet" className="link-arrow text-brand">
              Come funziona il credito
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────── 11 FIDUCIA ───────── */}
      <section className="section-pad bg-warm-paper">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <EditorialHeading
              eyebrow="Fiducia, come sistema"
              title="La fiducia non è un badge. È costruita nello scambio."
              lead="Ogni account porta con sé un’identità verificata, un veicolo e una storia di scambi. Non serve fidarsi sulla parola."
            />
            <Reveal delay={120} className="mt-8">
              <AssetSlot label="home-11-trust-user-vehicle-wide.webp" aspect="video" tone="warm" />
              <p className="mt-5 rounded-2xl border border-line bg-white px-5 py-4 text-sm text-muted">
                <strong className="text-ink">Ranking basso non significa account bloccato:</strong> limita il livello di vendita. Sospensione e ban sono misure separate.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <IdentityStack />
          </div>
        </div>
      </section>

      {/* ───────── 12 RANKING ───────── */}
      <section className="section-pad relative overflow-hidden bg-white">
        <span className="pointer-events-none absolute -right-10 -top-10 select-none font-display text-[22rem] font-extrabold leading-none text-brand-mist" aria-hidden>
          ★
        </span>
        <div className="relative mx-auto grid max-w-site gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <EditorialHeading
              eyebrow="Ranking"
              title="Le stelle misurano affidabilità. Non popolarità."
              lead="Nessuna classifica pubblica. Solo il tuo punteggio, che si muove con quello che fai davvero negli scambi."
            />
            <Reveal delay={120} className="mt-10">
              <StarMeter value={4.6} />
            </Reveal>
            <Reveal delay={200} className="mt-8">
              <Link href="/ranking" className="link-arrow text-brand-deep">
                Capisci il ranking
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow mb-4">Cosa muove il punteggio</p>
            <ScoreFeed />
          </div>
        </div>
      </section>

      {/* ───────── 13 MISSIONI ───────── */}
      <section className="section-pad bg-brand-mist/60">
        <div className="mx-auto max-w-site">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <EditorialHeading
                eyebrow="Missioni, ma non da videogame"
                title="La mappa funziona meglio quando più persone la tengono viva."
                lead="Le missioni premiano comportamenti utili allo scambio, senza modificare il ranking."
              />
            </div>
            <Reveal delay={100} className="lg:col-span-5">
              <div className="rounded-card border border-line bg-white/80 p-5 text-sm backdrop-blur">
                <p className="font-bold">Premi piccoli, regole chiare</p>
                <p className="mt-1 text-muted">Tetto €3/mese sui premi piccoli. Scadenza 5–7 giorni. Spendibili solo negli scambi.</p>
              </div>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Reveal><MissionProgress kind="Una volta" title="Vendi 3 posti" prize="1 parcheggio gratis" value={2} max={3} expires="Scade tra 5 giorni" /></Reveal>
            <Reveal delay={80}><MissionProgress kind="Ripetibile" title="Ogni 10 vendite" prize="1 parcheggio gratis" value={7} max={10} /></Reveal>
            <Reveal delay={160}><MissionProgress kind="Settimanale" title="5 scambi in settimana" prize="1 parcheggio gratis" value={3} max={5} expires="Si azzera lunedì" /></Reveal>
            <Reveal delay={240}><MissionProgress kind="Streak" title="Accedi 7 giorni di fila" prize="Badge" value={5} max={7} /></Reveal>
          </div>
          <Reveal className="mt-8 overflow-hidden rounded-card bg-ink text-white">
            <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {MILESTONES.map((m) => (
                <div key={m.title} className="px-6 py-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand">Traguardo</p>
                  <p className="mt-1 font-display font-bold">{m.title}</p>
                  <p className="text-sm text-white/60">{m.prize}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-8">
            <Link href="/missioni" className="link-arrow text-brand-deep">
              Vedi tutte le missioni
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────── 14 REFERRAL ───────── */}
      <section className="relative overflow-hidden bg-ink">
        <AssetSlot label="home-14-referral-friends-street-wide.webp" fill tone="dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-ink/10" />
        <div className="relative mx-auto grid max-w-site gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-28">
          <Reveal className="rounded-stage bg-white/95 p-8 shadow-device backdrop-blur sm:p-10 lg:col-span-7">
            <SectionEyebrow>Invita</SectionEyebrow>
            <h2 className="display-h2 text-balance mt-3 text-[2rem] sm:text-[2.6rem]">Più persone usano ParkHub, più la mappa diventa utile.</h2>
            <p className="mt-4 text-muted">Invita un amico. Il bonus arriva solo quando completa davvero il suo primo scambio.</p>
            <div className="mt-8">
              <ReferralEquation />
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <li>Codice in registrazione</li>
              <li>· Pending fino al primo swap</li>
              <li>· Solo swap, non prelevabile</li>
            </ul>
            <div className="mt-8">
              <PrimaryCTA href={'/invita'} tone="ink">Invita un amico</PrimaryCTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── 15 MOMENTI REALI ───────── */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-site">
          <EditorialHeading eyebrow="Momenti reali" title="Non cerchi parcheggio “in generale”. Lo cerchi quando hai fretta." />
          <div className="mt-12 grid gap-4 md:grid-cols-12">
            {[
              ['home-15-real-life-station.webp', 'Stazione', 'Il treno non aspetta il tuo terzo giro dell’isolato.', 'md:col-span-7', 'dark'],
              ['home-15-real-life-hospital.webp', 'Ospedale', 'Quando devi arrivare, il tempo conta più del parcheggio.', 'md:col-span-5', 'mint'],
              ['home-15-real-life-center.webp', 'Centro', 'Strade strette, pochi posti, occasioni che durano secondi.', 'md:col-span-5', 'warm'],
              ['home-15-real-life-evening.webp', 'Rientro serale', 'Vedi chi sta uscendo prima di passare davanti al posto.', 'md:col-span-7', 'dark'],
            ].map(([img, t, d, span, tone], i) => (
              <Reveal as="article" key={t} delay={i * 80} className={`group relative min-h-[300px] overflow-hidden rounded-stage ${span}`}>
                <AssetSlot label={img} fill tone={tone as 'dark' | 'mint' | 'warm'} className="transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <p className="eyebrow-light">{t}</p>
                  <p className="mt-2 max-w-sm font-display text-xl font-bold leading-snug sm:text-2xl">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 16 FAQ ───────── */}
      <section id="faq" className="section-pad bg-ink text-white">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-12">
          <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <EditorialHeading light eyebrow="Domande frequenti" title="Prima di provarlo, è normale voler capire bene." />
            <Reveal delay={100} className="mt-8">
              <Link href="/faq" className="link-arrow text-brand">
                Tutte le FAQ
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* ───────── 17 CTA ───────── */}
      <FinalCinematicCTA />

      <SiteFooter />
      <CookieBanner />
    </main>
  );
}

/* ---------- piccoli helper locali ---------- */

function FlowPills({ items }: { items: string[] }) {
  return (
    <ol className="mt-5 flex flex-wrap items-center gap-y-2 text-[13px] font-semibold">
      {items.map((x, i) => (
        <li key={x} className="flex items-center">
          <span className="rounded-pill border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">{x}</span>
          {i < items.length - 1 ? <span className="mx-1.5 text-brand">→</span> : null}
        </li>
      ))}
    </ol>
  );
}

function Check({ light = false }: { light?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={light ? '#00C9A7' : '#007F6D'} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

const ic = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };

function TagIcon() {
  return (
    <svg {...ic}>
      <path d="M20 12l-8 8-9-9V4h7l10 10z" />
      <circle cx="7.5" cy="7.5" r="1.3" />
    </svg>
  );
}
function RouteIcon() {
  return (
    <svg {...ic}>
      <circle cx="6" cy="19" r="2.5" />
      <circle cx="18" cy="5" r="2.5" />
      <path d="M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg {...ic}>
      <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function CarIcon() {
  return (
    <svg {...ic} width={22} height={22}>
      <path d="M5 16l1.5-5h11L19 16" />
      <rect x="3" y="11" width="18" height="6" rx="2" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg {...ic}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg {...ic}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}
function WalletIcon() {
  return (
    <svg {...ic}>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <path d="M3 10h18M16 14.5h2" />
    </svg>
  );
}
function SwapIcon() {
  return (
    <svg {...ic}>
      <path d="M4 8h13l-3-3M20 16H7l3 3" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg {...ic}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}
function TimerIcon() {
  return (
    <svg {...ic}>
      <path d="M10 2.5h4M12 6a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zM12 9.5v4" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg {...ic} width={16} height={16} strokeWidth={2.4}>
      <rect x="5" y="11" width="14" height="10" rx="2.5" />
      <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
    </svg>
  );
}
function SignalOffIcon() {
  return (
    <svg {...ic}>
      <path d="M4 4l16 16M8.5 15.5a5 5 0 0 1 7-7M5 12a10 10 0 0 1 2.5-5.5M19 12a10 10 0 0 0-1-4.5" />
    </svg>
  );
}

export { CreateAccountCTA };
