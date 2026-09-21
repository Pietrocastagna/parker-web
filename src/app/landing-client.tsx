'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IMAGES } from './lib/images';
import {
  ParkingSpotIllustration,
  SwapSignalIllustration,
  SwapExchangeIllustration,
  NavigationFeatIllustration as NavigationIllustration,
  PaymentIllustration,
  NotificationIllustration,
  GarageIllustration,
  CarwashIllustration,
  WasherIllustration,
} from './components/illustrations';
import { useProductFeatures } from './lib/use-product-features';

/* ── Data ── */

const swapSteps = [
  {
    num: '01',
    title: 'Segnala',
    desc: 'Stai lasciando il parcheggio? Segnala il tuo posto con un tap e guadagna per ogni scambio completato.',
    illustration: <SwapSignalIllustration width={180} height={140} />,
  },
  {
    num: '02',
    title: 'Trova',
    desc: 'Cerca posti disponibili nella tua zona in tempo reale sulla mappa interattiva. Filtra per tipo e distanza.',
    illustration: <ParkingSpotIllustration width={180} height={140} />,
  },
  {
    num: '03',
    title: 'Scambia',
    desc: 'Prenota il posto, paga col credito Parker e segui la navigazione turn-by-turn fino al parcheggio.',
    illustration: <SwapExchangeIllustration width={180} height={140} />,
  },
];

const trustPoints = [
  {
    title: 'Persone vere',
    desc: 'Ogni account è personale. Niente profili anonimi in giro a occupare posti.',
  },
  {
    title: 'Pagamenti protetti Stripe',
    desc: 'Le ricariche del credito avvengono sul portale web con pagamento protetto Stripe. Nessuna carta salvata in app.',
  },
  {
    title: 'Prezzi fissi e trasparenti',
    desc: 'Ogni scambio ha un prezzo fisso e chiaro prima della conferma. Nessuna asta, nessuna sorpresa.',
  },
];

/** Tier prezzi swap — allineati a PARKING_PRICE_TIERS backend */
const priceTiers = [
  { level: 1, buyer: '1,20 €', seller: '1,00 €', unlock: 'Da subito' },
  { level: 2, buyer: '2,00 €', seller: '1,60 €', unlock: '20 vendite' },
  { level: 3, buyer: '3,00 €', seller: '2,60 €', unlock: '50 vendite' },
  { level: 4, buyer: '4,00 €', seller: '3,60 €', unlock: '100 vendite' },
  { level: 5, buyer: '5,00 €', seller: '4,50 €', unlock: '150 vendite' },
];

const faqItems = [
  {
    q: 'Come funziona lo scambio di parcheggi?',
    a: 'Chi sta liberando un posto lo segnala nell\u2019app; chi lo cerca lo prenota e viene guidato fin l\u00ec con la navigazione integrata. Al passaggio di consegne il venditore riceve il credito e l\u2019acquirente parcheggia.',
  },
  {
    q: 'Quanto costa uno scambio?',
    a: 'I prezzi sono fissi e a scaglioni: si parte da 1,20 € per posto. Il venditore sblocca prezzi pi\u00f9 alti man mano che completa vendite. Nessun costo di iscrizione o abbonamento.',
  },
  {
    q: 'Come ricarico il credito?',
    a: 'Dal portale web, con pagamento protetto Stripe e 0% di commissioni Parker. Il limite \u00e8 di 100 € al giorno ed entro 14 giorni puoi chiedere il rimborso di una ricarica non spesa.',
  },
  {
    q: 'I miei soldi sono al sicuro?',
    a: 'S\u00ec. Il credito \u00e8 utilizzabile per scambi e servizi in-app, i pagamenti passano da Stripe e ogni utente \u00e8 verificato. Le ricariche non spese sono rimborsabili entro 14 giorni.',
  },
  {
    q: 'Cosa guadagno invitando un amico?',
    a: 'Ricevi 2,50 € di bonus quando l\u2019amico invitato completa il suo primo scambio, pi\u00f9 un bonus extra ogni 3 amici qualificati, fino a un massimo di 30 €.',
  },
];

const services = [
  {
    badge: 'Navigazione',
    badgeColor: 'mint',
    title: 'Navigazione integrata fino al posto',
    desc: 'Turn-by-turn direttamente nell\u2019app. Non serve uscire: dalla ricerca del posto alla destinazione, ti guidiamo noi passo dopo passo.',
    bullets: ['Indicazioni vocali in tempo reale', 'Percorso pi\u00f9 veloce verso il parcheggio', 'Integrata nello scambio dall\u2019inizio alla fine'],
    illustration: <NavigationIllustration width={260} height={190} />,
    align: 'left' as const,
    phaseR: true,
  },
  {
    badge: 'Wallet',
    badgeColor: 'mint',
    title: 'Credito prepagato, zero pensieri',
    desc: 'Ricarichi dal portale web con Stripe e spendi il credito negli scambi. Chi vende accumula credito da riusare o convertire in buoni regalo.',
    bullets: ['Ricariche con 0% di commissioni Parker', 'Rimborso ricariche non spese entro 14 giorni', 'Bonus referral spendibili negli swap'],
    illustration: <PaymentIllustration width={200} height={190} />,
    align: 'right' as const,
    phaseR: true,
  },
  {
    badge: 'Referral',
    badgeColor: 'info',
    title: 'Invita gli amici, guadagnate entrambi',
    desc: 'Condividi il tuo codice: quando un amico si registra e completa il primo scambio ricevi un bonus. Pi\u00f9 amici attivi, pi\u00f9 bonus.',
    bullets: ['2,50 \u20ac per ogni amico al primo swap', 'Bonus extra ogni 3 amici qualificati', 'Fino a 30 \u20ac di bonus totali'],
    illustration: <NotificationIllustration width={200} height={190} />,
    align: 'left' as const,
    phaseR: true,
  },
  {
    badge: 'Garage',
    badgeColor: 'mint',
    title: 'Prenota un garage e paga in un tap',
    desc: 'Cerca garage convenzionati, confronta tariffe e disponibilit\u00e0. Prenota il tuo posto e paga direttamente col wallet: innovativo e veloce.',
    bullets: ['Disponibilit\u00e0 in tempo reale', 'Pagamento istantaneo col wallet', 'Storico prenotazioni nell\u2019app'],
    illustration: <GarageIllustration width={260} height={190} />,
    align: 'right' as const,
    phaseR: false,
  },
  {
    badge: 'Autolavaggio',
    badgeColor: 'info',
    title: 'Prenota il tuo autolavaggio',
    desc: 'Scegli l\u2019autolavaggio pi\u00f9 vicino, seleziona data e orario, aggiungi servizi ed extra. Paga dall\u2019app e presentati senza attesa.',
    bullets: ['Catalogo servizi ed extra', 'Prenotazione con calendario', 'Pagamento contactless dal wallet'],
    illustration: <CarwashIllustration width={260} height={190} />,
    align: 'left' as const,
    phaseR: false,
  },
  {
    badge: 'Washer',
    badgeColor: 'warning',
    title: 'Il tuo Uber per il lavaggio auto',
    desc: 'Un washer professionista viene direttamente da te, ovunque tu sia. Prenota, scegli il servizio e monitora l\u2019arrivo in tempo reale.',
    bullets: ['Lavaggio a domicilio on-demand', 'Tracking in tempo reale del washer', 'Pagamento sicuro al completamento'],
    illustration: <WasherIllustration width={260} height={190} />,
    align: 'right' as const,
    phaseR: false,
  },
];

/* ── Badge color helpers ── */
function badgeCls(color: string) {
  switch (color) {
    case 'info':
      return 'bg-info/10 border-info/30 text-info';
    case 'warning':
      return 'bg-warning/10 border-warning/30 text-warning';
    default:
      return 'bg-mint/10 border-mint/30 text-mint';
  }
}

/* ── Component ── */

export default function LandingClient() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const features = useProductFeatures();

  const visibleServices = services.filter((s) => {
    if (s.phaseR) return true;
    if (s.badge === 'Garage') return features.garage;
    if (s.badge === 'Autolavaggio' || s.badge === 'Washer') return features.wash;
    return false;
  });

  const navLinks: Array<[string, string]> = [
    ['#come-funziona', 'Come funziona'],
    ['#servizi', 'Servizi'],
    ['#prezzi', 'Prezzi'],
    ...(features.garage || features.wash ? ([['#business', 'Per il tuo business']] as Array<[string, string]>) : []),
    ...(features.ambassador ? ([['#lavora-con-noi', 'Lavora con noi']] as Array<[string, string]>) : []),
    ['#faq', 'FAQ'],
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* ══════════════════════ Nav ══════════════════════ */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--bg-1)]/90 backdrop-blur-md border-b border-[color:var(--stroke)] shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <span className="text-lg font-bold tracking-tight">
          <span className="text-mint">P</span>
          <span className={scrolled ? 'text-[color:var(--text)]' : 'text-white'}>arker</span>
        </span>

        <div className={`hidden sm:flex items-center gap-6 text-sm transition-colors duration-300 ${
          scrolled ? 'text-[color:var(--muted)]' : 'text-white/70'
        }`}>
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={`transition-colors ${
                scrolled ? 'hover:text-[color:var(--text)]' : 'hover:text-white'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/signup"
            className={`hidden sm:inline-block rounded-xl border px-4 py-2 text-sm font-medium transition-colors ${
              scrolled
                ? 'border-[color:var(--stroke)] text-[color:var(--text)] hover:bg-[var(--card-hover)]'
                : 'border-white/25 bg-white/5 text-white/90 hover:bg-white/10 backdrop-blur-sm'
            }`}
          >
            Registrati
          </a>
          <a
            href="/login"
            className="rounded-xl bg-mint px-4 py-2 text-sm font-semibold text-ink hover:bg-mint/90 transition-colors"
          >
            Accedi
          </a>
        </div>
      </nav>

      {/* ══════════════════════ Hero ══════════════════════ */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 sm:pt-40 sm:pb-28 min-h-[85vh] overflow-hidden bg-ink">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/55 to-black/35" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="mb-4 inline-block rounded-full border border-mint/40 bg-mint/15 px-4 py-1.5 text-xs font-semibold text-mint tracking-wide backdrop-blur-sm">
            Parker &mdash; Scambio parcheggi in tempo reale
          </span>
          <h1 className="max-w-3xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Il tuo parcheggio vale.{' '}
            <span className="text-mint">Scambialo.</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-white/80">
            {features.garage || features.wash
              ? 'Scambia posti in tempo reale, prenota garage e autolavaggi, chiama un washer a domicilio. Tutto con navigazione integrata.'
              : 'Chi lascia il posto guadagna, chi arriva parcheggia subito. Prezzi fissi e navigazione fino al posto.'}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#scarica"
              className="rounded-xl bg-mint px-6 py-3 text-sm font-semibold text-ink hover:bg-mint/90 transition-colors"
            >
              Scarica l&apos;app
            </a>
            <a
              href="#come-funziona"
              className="rounded-xl border border-white/25 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors"
            >
              Scopri come funziona
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════ Come funziona lo Swap ══════════════════════ */}
      <section id="come-funziona" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl sm:text-4xl font-bold">Come funziona lo Swap</h2>
          <p className="mt-3 text-center text-[color:var(--muted)] text-sm sm:text-base max-w-lg mx-auto">
            Il primo sistema di scambio parcheggi in tempo reale. Tre passaggi e il posto &egrave; tuo.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {swapSteps.map((s) => (
              <div key={s.num} className="glass rounded-2xl p-6 text-center group hover:scale-[1.02] transition-transform duration-200">
                <div className="mx-auto mb-5 flex items-center justify-center">
                  {s.illustration}
                </div>
                <span className="text-xs font-bold text-mint/70 tracking-wider">{s.num}</span>
                <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust row */}
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {trustPoints.map((t) => (
              <div key={t.title} className="rounded-2xl border border-[color:var(--stroke)] p-5">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mint flex-shrink-0">
                    <path d="M10 2l6 3v4c0 4.5-3 7.5-6 9-3-1.5-6-4.5-6-9V5l6-3z" />
                    <path d="M7.5 10l2 2 3.5-3.5" />
                  </svg>
                  <h3 className="text-sm font-semibold">{t.title}</h3>
                </div>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ I nostri servizi ══════════════════════ */}
      <section id="servizi" className="px-6 py-20 sm:py-28 border-t border-[color:var(--stroke)]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl sm:text-4xl font-bold">Cosa trovi nell&apos;app</h2>
          <p className="mt-3 text-center text-[color:var(--muted)] text-sm sm:text-base max-w-lg mx-auto">
            Tutto quello che ti serve per lo scambio: dalla ricerca del posto al pagamento.
          </p>

          <div className="mt-16 flex flex-col gap-20">
            {visibleServices.map((svc) => (
              <div
                key={svc.title}
                className="grid gap-10 items-center md:grid-cols-2"
              >
                <div className={`flex justify-center ${svc.align === 'right' ? 'md:order-2' : ''}`}>
                  <div className="glass rounded-2xl p-6 inline-flex items-center justify-center">
                    {svc.illustration}
                  </div>
                </div>

                <div className={svc.align === 'right' ? 'md:order-1' : ''}>
                  <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${badgeCls(svc.badgeColor)}`}>
                    {svc.badge}
                  </span>
                  <h3 className="mt-3 text-2xl sm:text-3xl font-bold">{svc.title}</h3>
                  <p className="mt-3 text-[color:var(--muted)] text-sm sm:text-base leading-relaxed">{svc.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[color:var(--muted)]">
                        <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-mint flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ Quanto costa ══════════════════════ */}
      <section id="prezzi" className="px-6 py-20 sm:py-28 border-t border-[color:var(--stroke)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl sm:text-4xl font-bold">Quanto costa</h2>
          <p className="mt-3 text-center text-[color:var(--muted)] text-sm sm:text-base max-w-xl mx-auto">
            Nessun abbonamento, nessun costo fisso. Paghi solo lo scambio, a prezzo fisso.
            Chi vende sblocca prezzi pi&ugrave; alti man mano che completa vendite.
          </p>

          <div className="mt-12 glass rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[color:var(--stroke)] text-left text-xs uppercase tracking-wider text-[color:var(--muted)]">
                  <th className="px-5 py-4 font-medium">Livello</th>
                  <th className="px-5 py-4 font-medium">Chi compra paga</th>
                  <th className="px-5 py-4 font-medium">Chi vende riceve</th>
                  <th className="px-5 py-4 font-medium hidden sm:table-cell">Si sblocca con</th>
                </tr>
              </thead>
              <tbody>
                {priceTiers.map((t) => (
                  <tr key={t.level} className="border-b border-[color:var(--stroke)] last:border-b-0">
                    <td className="px-5 py-3.5 font-semibold">Tier {t.level}</td>
                    <td className="px-5 py-3.5 tabular-nums">{t.buyer}</td>
                    <td className="px-5 py-3.5 tabular-nums text-mint font-medium">{t.seller}</td>
                    <td className="px-5 py-3.5 text-[color:var(--muted)] hidden sm:table-cell">{t.unlock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 text-sm">
            <div className="rounded-2xl border border-[color:var(--stroke)] p-4">
              <p className="font-semibold">Ricariche 0% fee</p>
              <p className="mt-1 text-[color:var(--muted)]">Ricarichi dal portale web con Stripe, senza commissioni Parker.</p>
            </div>
            <div className="rounded-2xl border border-[color:var(--stroke)] p-4">
              <p className="font-semibold">Limite 100 &euro;/giorno</p>
              <p className="mt-1 text-[color:var(--muted)]">Per la tua sicurezza il credito ricaricabile &egrave; limitato a 100 &euro; al giorno.</p>
            </div>
            <div className="rounded-2xl border border-[color:var(--stroke)] p-4">
              <p className="font-semibold">Rimborso 14 giorni</p>
              <p className="mt-1 text-[color:var(--muted)]">Le ricariche non spese sono rimborsabili entro 14 giorni dal portale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ Per il tuo business (Fase P) ══════════════════════ */}
      {(features.garage || features.wash) && (
      <section id="business" className="px-6 py-20 sm:py-28 border-t border-[color:var(--stroke)]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl sm:text-4xl font-bold">Per il tuo business</h2>
          <p className="mt-3 text-center text-[color:var(--muted)] text-sm sm:text-base max-w-xl mx-auto">
            Entra nel network Parker e fai crescere la tua attivit&agrave; con prenotazioni digitali, gestione staff e analitiche avanzate.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {/* Garage */}
            <div className="glass rounded-2xl overflow-hidden flex flex-col group hover:scale-[1.02] transition-transform duration-200">
              <div className="relative h-44 overflow-hidden bg-mint/5">
                <Image
                  src={IMAGES.garage}
                  alt="Parking garage"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="inline-block rounded-full bg-mint/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-mint">Garage</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">Sei un Garage?</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)] flex-1">
                  Digitalizza la gestione dei tuoi posti auto. Ricevi prenotazioni online, monitora l&apos;occupancy in tempo reale e gestisci il tuo staff da un unico pannello.
                </p>
                <a
                  href="/register/garage"
                  className="mt-5 inline-block rounded-xl bg-mint px-5 py-2.5 text-sm font-semibold text-ink hover:bg-mint/90 transition-colors text-center"
                >
                  Diventa partner
                </a>
              </div>
            </div>

            {/* Autolavaggio */}
            <div className="glass rounded-2xl overflow-hidden flex flex-col group hover:scale-[1.02] transition-transform duration-200">
              <div className="relative h-44 overflow-hidden bg-info/5">
                <Image
                  src={IMAGES.carwash}
                  alt="Car wash"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="inline-block rounded-full bg-info/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-info">Autolavaggio</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">Hai un Autolavaggio?</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)] flex-1">
                  Gestisci prenotazioni, servizi ed extra dal tuo pannello dedicato. I clienti prenotano direttamente dall&apos;app e tu ottimizzi il flusso di lavoro.
                </p>
                <a
                  href="/register/carwash"
                  className="mt-5 inline-block rounded-xl bg-info px-5 py-2.5 text-sm font-semibold text-white hover:bg-info/90 transition-colors text-center"
                >
                  Entra nel network
                </a>
              </div>
            </div>

            {/* Washer */}
            <div className="glass rounded-2xl overflow-hidden flex flex-col group hover:scale-[1.02] transition-transform duration-200">
              <div className="flex items-center justify-center h-44 bg-warning/5">
                <WasherIllustration width={200} height={130} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">Sei un Washer?</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)] flex-1">
                  Lavora come washer autonomo o registra la tua azienda specializzata nel lavaggio a domicilio. Gestisci lavaggi, guadagni e profilo tutto da un unico posto.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href="/register/washer"
                    className="inline-block rounded-xl bg-warning px-5 py-2.5 text-sm font-semibold text-ink hover:bg-warning/90 transition-colors text-center"
                  >
                    Iscriviti come autonomo
                  </a>
                  <a
                    href="/register/washer-company"
                    className="inline-block rounded-xl border border-[color:var(--stroke)] px-5 py-2.5 text-sm font-medium text-[color:var(--muted)] hover:bg-[var(--card-hover)] transition-colors text-center"
                  >
                    Registra la tua azienda
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ══════════════════════ Lavora con noi (Fase P) ══════════════════════ */}
      {features.ambassador && (
      <section id="lavora-con-noi" className="px-6 py-20 sm:py-28 border-t border-[color:var(--stroke)]">
        <div className="mx-auto max-w-5xl">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src={IMAGES.ambassador}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
            <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 max-w-xl">
              <span className="inline-block rounded-full border border-mint/40 bg-mint/15 px-4 py-1.5 text-xs font-semibold text-mint tracking-wide backdrop-blur-sm">
                Ambassador
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Lavora con noi</h2>
              <p className="mt-4 text-white/75 text-sm sm:text-base">
                Diventa Ambassador Parker e guadagna promuovendo l&apos;app. Ottieni commissioni su ogni utente che si registra con il tuo codice referral.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/signup"
                  className="rounded-xl bg-mint px-6 py-3 text-sm font-semibold text-ink hover:bg-mint/90 transition-colors text-center"
                >
                  Registrati ora
                </a>
                <a
                  href="/login"
                  className="rounded-xl border border-white/25 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors text-center"
                >
                  Hai gi&agrave; un account? Accedi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ══════════════════════ FAQ ══════════════════════ */}
      <section id="faq" className="px-6 py-20 sm:py-28 border-t border-[color:var(--stroke)]">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl sm:text-4xl font-bold">Domande frequenti</h2>
          <div className="mt-12 space-y-3">
            {faqItems.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q} className="glass rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-sm font-semibold">{item.q}</span>
                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      className={`flex-shrink-0 text-[color:var(--muted)] transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
                    >
                      <path d="M8 3v10M3 8h10" />
                    </svg>
                  </button>
                  {open && (
                    <p className="px-5 pb-5 text-sm text-[color:var(--muted)] leading-relaxed">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════ Scarica l'app ══════════════════════ */}
      <section id="scarica" className="px-6 py-20 sm:py-28 border-t border-[color:var(--stroke)]">
        <div className="mx-auto max-w-4xl">
          <div className="glass rounded-3xl px-8 py-14 sm:px-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Pronto a non girare pi&ugrave; a vuoto?
            </h2>
            <p className="mt-4 text-[color:var(--muted)] text-sm sm:text-base max-w-lg mx-auto">
              Scarica Parker, verifica la tua identit&agrave; e inizia a scambiare parcheggi nella tua citt&agrave;.
              Il credito lo gestisci in sicurezza dal portale web.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--stroke)] px-5 py-3 text-sm font-medium text-[color:var(--muted)]">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path d="M13.5 2c.1 1-.3 2-1 2.8-.7.8-1.7 1.4-2.7 1.3-.1-1 .4-2 1-2.7.7-.8 1.8-1.3 2.7-1.4zM16.4 15c-.5 1.1-.7 1.5-1.4 2.5-.9 1.3-2.2 3-3.7 3-1.4 0-1.8-.9-3.6-.9s-2.3.9-3.6.9c-1.6 0-2.8-1.5-3.7-2.9C-1.6 14 .2 8.5 3 7.2c1.3-.6 2.6-.3 3.6.4.8.5 1.5.5 2.3 0 1.1-.7 2.6-1 3.9-.3.9.5 1.7 1.3 2.2 2.3-2 1.2-1.7 4.1 1.4 5.4z" transform="scale(0.9)"/></svg>
                App Store &middot; presto disponibile
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--stroke)] px-5 py-3 text-sm font-medium text-[color:var(--muted)]">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path d="M3 2.5v15c0 .3.3.5.6.4l8.7-7.2c.2-.2.2-.5 0-.7L3.6 2.1c-.3-.1-.6.1-.6.4zM13.6 8.3l2.6 1.4c.4.2.4.7 0 .9l-2.6 1.4-2-1.8 2-1.9z"/></svg>
                Google Play &middot; presto disponibile
              </span>
            </div>
            <p className="mt-6 text-xs text-[color:var(--muted)]">
              Hai gi&agrave; un account?{' '}
              <a href="/login" className="text-mint hover:underline">Accedi al portale web</a>{' '}
              per gestire credito e profilo.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════ Footer ══════════════════════ */}
      <footer className="border-t border-[color:var(--stroke)] px-6 pt-14 pb-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 sm:grid-cols-4">
            <div className="sm:col-span-1">
              <span className="text-lg font-bold tracking-tight">
                <span className="text-mint">P</span>arker
              </span>
              <p className="mt-3 text-xs text-[color:var(--muted)] leading-relaxed">
                Il primo sistema di scambio parcheggi in tempo reale.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]">Prodotto</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#come-funziona" className="text-[color:var(--muted)] hover:text-[color:var(--text)] transition-colors">Come funziona</a></li>
                <li><a href="#prezzi" className="text-[color:var(--muted)] hover:text-[color:var(--text)] transition-colors">Prezzi</a></li>
                <li><a href="#faq" className="text-[color:var(--muted)] hover:text-[color:var(--text)] transition-colors">FAQ</a></li>
                <li><a href="/login" className="text-[color:var(--muted)] hover:text-[color:var(--text)] transition-colors">Portale web</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]">Legale</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="/legal/terms" className="text-[color:var(--muted)] hover:text-[color:var(--text)] transition-colors">Termini di servizio</a></li>
                <li><a href="/legal/privacy" className="text-[color:var(--muted)] hover:text-[color:var(--text)] transition-colors">Privacy policy</a></li>
                <li><a href="/legal/cookie" className="text-[color:var(--muted)] hover:text-[color:var(--text)] transition-colors">Cookie policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]">Contatti</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="mailto:support@parker.app" className="text-[color:var(--muted)] hover:text-[color:var(--text)] transition-colors">
                    support@parker.app
                  </a>
                </li>
                <li><a href="/signup" className="text-[color:var(--muted)] hover:text-[color:var(--text)] transition-colors">Crea un account</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[color:var(--stroke)] pt-6">
            <span className="text-xs text-[color:var(--muted)]">&copy; {new Date().getFullYear()} Parker. Tutti i diritti riservati.</span>
            <span className="text-xs text-[color:var(--muted)]">Pagamenti gestiti da Stripe &middot; Utenti verificati</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
