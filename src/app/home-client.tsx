'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IMAGES } from './lib/images';
import { API_BASE_URL, portalPath } from './lib/urls';
import { AppMapPreview } from './components/app-map-preview';
import {
  ParkingSpotIllustration,
  SwapSignalIllustration,
  SwapExchangeIllustration,
  PaymentIllustration,
  NavigationFeatIllustration,
  NotificationIllustration,
} from './components/illustrations';

const nav = [
  ['#problema', 'Il problema'],
  ['#prodotto', 'Prodotto'],
  ['#come-funziona', 'Come funziona'],
  ['#prezzi', 'Prezzi'],
  ['#regole', 'Regole'],
  ['#faq', 'FAQ'],
] as const;

const painPoints = [
  {
    title: 'Giri a vuoto 10–15 minuti',
    body: 'Centro, stazione, ospedale, spiaggia: cerchi un posto e perdi tempo e carburante. Ogni giro costa di più del prezzo di uno scambio Parker.',
  },
  {
    title: 'Qualcuno sta uscendo — ma non lo sai',
    body: 'La persona due isolati più in là sta liberando il posto in quel momento. Senza un segnale reale, vi perdete a vicenda.',
  },
  {
    title: 'App generiche non risolvono il “ora”',
    body: 'Mappe e garage dicono dove c’è spazio in teoria. Parker collega chi esce e chi arriva nello stesso minuto.',
  },
];

const buyerSteps = [
  {
    title: 'Apri la mappa',
    body: 'Vedi i posti in vendita vicino a te, con distanza, prezzo fisso e stima di arrivo.',
  },
  {
    title: 'Prenota col credito',
    body: 'Confermi. Il credito esce dal wallet Parker. Nessuna asta, nessun “offerta” da negoziare.',
  },
  {
    title: 'Naviga e parcheggia',
    body: 'Indicazioni fino al punto. Chi vende riceve l’avviso; tu arrivi quando il posto si libera.',
  },
];

const sellerSteps = [
  {
    title: 'Metti in vendita',
    body: 'Stai uscendo? Pubblichi il posto e scegli un tier tra quelli sbloccati (da €1,20 totale acquirente).',
  },
  {
    title: 'Aspetti la prenotazione',
    body: 'Quando qualcuno prende il listing, ricevi notifica. Sai chi sta arrivando e quanto tempo ha.',
  },
  {
    title: 'Incassi credito',
    body: 'A scambio completato il netto va sul tuo credito Parker. Lo riusi quando sei tu a cercare posto.',
  },
];

const features = [
  {
    title: 'Prezzi a tier fissi',
    body: 'Cinque livelli da €1,20 a €5,00 (totale acquirente). Niente slider, niente aste. Il venditore imposta il netto; la commissione Parker è inclusa nel totale che vedi.',
    icon: <PaymentIllustration width={140} height={100} />,
  },
  {
    title: 'Mappa in tempo reale',
    body: 'Listing attivi con distanza e prezzo. Se il posto non c’è più, sparisce. La densità conta: più utenti nella zona, più opzioni.',
    icon: <ParkingSpotIllustration width={140} height={100} />,
  },
  {
    title: 'Navigazione al punto',
    body: 'Dopo la prenotazione parti verso le coordinate del posto. Meno “cerco e spero”, più arrivo mirato.',
    icon: <NavigationFeatIllustration width={140} height={100} />,
  },
  {
    title: 'Notifiche sullo scambio',
    body: 'Chi vende e chi compra restano allineati: prenotazione, arrivo, completamento. Meno fraintendimenti al bordo strada.',
    icon: <NotificationIllustration width={140} height={100} />,
  },
  {
    title: 'Credito sul portale',
    body: 'Ricarichi con Stripe sul web (pacchetto Prova €4,99 e successivi). In app spendi e guadagni credito — non c’è prelievo in banca.',
    icon: <SwapExchangeIllustration width={140} height={100} />,
  },
  {
    title: 'Segnale “sto uscendo”',
    body: 'Il valore di Parker è il timing: pubblichi quando liberi, qualcuno prenota mentre sei ancora lì o appena partito.',
    icon: <SwapSignalIllustration width={140} height={100} />,
  },
];

const tiers = [
  { level: '1', unlock: 'Da subito', buyer: '€1,20', seller: '€1,00', fee: '€0,20' },
  { level: '2', unlock: 'Dopo 20 vendite', buyer: '€2,00', seller: '€1,60', fee: '€0,40' },
  { level: '3', unlock: 'Dopo 50 vendite', buyer: '€3,00', seller: '€2,60', fee: '€0,40' },
  { level: '4', unlock: 'Dopo 100 vendite', buyer: '€4,00', seller: '€3,60', fee: '€0,40' },
  { level: '5', unlock: 'Dopo 150 vendite', buyer: '€5,00', seller: '€4,50', fee: '€0,50' },
];

const rules = [
  {
    title: 'Strisce blu separate',
    body: 'Il prezzo dello scambio non include il ticket del parcometro. Se il posto è a pagamento sul suolo pubblico, lo gestisci tu come sempre.',
  },
  {
    title: 'Credito ≠ contanti',
    body: 'Chi vende accumula credito Parker da riusare (e, quando disponibile, convertire in buoni). Non è un bonifico sul conto corrente.',
  },
  {
    title: 'Pagamenti con Stripe',
    body: 'Le ricariche passano dal portale web con carta. Parker non chiede bonifici “amici” né pagamenti in app per il credito.',
  },
  {
    title: 'Solo scambio tra persone',
    body: 'In questa fase non ci sono garage, lavaggi o marketplace terzi. Un prodotto: posto che si libera ↔ posto che cerchi.',
  },
];

const onboarding = [
  {
    n: '01',
    title: 'Crea l’account',
    body: 'Registrati sul portale con email. Verifica e completa il profilo base. È lo stesso account che userai in app.',
    cta: 'Vai a Registrati',
    href: portalPath('/signup'),
  },
  {
    n: '02',
    title: 'Ricarica il credito',
    body: 'Compra il pacchetto Prova a €4,99 (o un pacchetto successivo). Il pagamento è Stripe, sul web — non in app.',
    cta: 'Apri il portale',
    href: portalPath('/login'),
  },
  {
    n: '03',
    title: 'Entra in mappa',
    body: 'Con l’app (store in arrivo) cerchi posti vicini o pubblichi il tuo quando esci. Credito già pronto.',
    cta: 'Avvisami sugli store',
    href: '#app',
  },
  {
    n: '04',
    title: 'Primo scambio',
    body: 'Prenoti o vendi. Prezzo fisso, navigazione, credito che si muove. Da lì in poi ripeti nella tua zona.',
    cta: 'Come funziona',
    href: '#come-funziona',
  },
];

const faqs = [
  {
    q: 'Parker funziona in tutta Italia?',
    a: 'Sì: il prodotto è pensato per l’Italia intera. La qualità del servizio nella tua città dipende da quanti utenti pubblicano posti vicino a te. Più densità locale, più listing sulla mappa.',
  },
  {
    q: 'Quanto pago per un posto?',
    a: 'Il totale acquirente parte da €1,20 (tier 1) e sale fino a €5,00 nei tier sbloccati dal venditore. Vedi sempre il prezzo prima di confermare. Le strisce blu non sono incluse.',
  },
  {
    q: 'Cosa guadagna chi vende?',
    a: 'Il netto del tier (es. €1,00 sul tier 1). Va in credito Parker. Lo riusi quando sei tu a cercare posto. Non puoi prelevarlo in banca.',
  },
  {
    q: 'Perché ricarico sul portale e non in app?',
    a: 'Per tenere i pagamenti chiari e centralizzati: Stripe sul web, wallet in app. Eviti acquisti accidentali in strada e tieni storico e fatture sul portale.',
  },
  {
    q: 'Cosa succede se arrivo e il posto non c’è?',
    a: 'Lo scambio ha regole di completamento e gestione anomalie (notifiche, stato sessione). In caso di problemi usi il flusso in-app / supporto — non il pagamento “alla cieca” senza traccia.',
  },
  {
    q: 'Serve un abbonamento?',
    a: 'No. Compri credito quando ti serve. L’offerta di ingresso è Prova €4,99; poi ricarichi in base a quanto usi.',
  },
  {
    q: 'Garage e lavaggio auto?',
    a: 'Non in questa fase. Parker oggi è solo lo scambio P2P di posti tra automobilisti.',
  },
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [cookieOk, setCookieOk] = useState(true);
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [waitStatus, setWaitStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');
  const [waitMsg, setWaitMsg] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    try {
      setCookieOk(localStorage.getItem('parker_web_cookies') === '1');
    } catch {
      setCookieOk(false);
    }
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  async function submitInterest(e: React.FormEvent) {
    e.preventDefault();
    setWaitStatus('loading');
    setWaitMsg('');
    try {
      const res = await fetch(`${API_BASE_URL}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          city: (city.trim() || 'Italia').slice(0, 80),
          role: 'both',
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string };
      if (!res.ok) {
        setWaitStatus('err');
        setWaitMsg(data.message || 'Non riuscito. Riprova tra poco.');
        return;
      }
      setWaitStatus('ok');
      setWaitMsg('Iscrizione ricevuta. Ti avvisiamo quando l’app è sugli store.');
      setEmail('');
      setCity('');
    } catch {
      setWaitStatus('err');
      setWaitMsg('Connessione assente. Controlla la rete e riprova.');
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F6F8] text-ink">
      {/* —— Nav —— */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-ink/8 bg-white/95 shadow-[0_1px_0_rgba(11,18,32,0.06)] backdrop-blur-md'
            : 'bg-gradient-to-b from-ink/70 to-transparent'
        }`}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5">
          <a href="#" className="shrink-0 font-display text-[1.2rem] font-bold tracking-tight">
            <span className="text-teal">P</span>
            <span className={scrolled ? 'text-ink' : 'text-white'}>arker</span>
          </a>
          <nav className="hidden items-center gap-5 text-[12.5px] font-medium lg:flex">
            {nav.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className={
                  scrolled ? 'text-muted transition hover:text-ink' : 'text-white/70 transition hover:text-white'
                }
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={portalPath('/login')}
              className={`rounded-full px-3.5 py-2 text-[13px] font-semibold ${
                scrolled ? 'text-ink hover:bg-ink/5' : 'text-white hover:bg-white/10'
              }`}
            >
              Accedi
            </a>
            <a
              href={portalPath('/signup')}
              className="rounded-full bg-teal px-4 py-2 text-[13px] font-bold text-ink shadow-sm hover:bg-[#00b896]"
            >
              Registrati
            </a>
          </div>
        </div>
      </header>

      {/* —— Hero —— */}
      <section className="relative min-h-[100svh] overflow-hidden bg-ink">
        <Image
          src={IMAGES.hero}
          alt="Strada cittadina con auto in sosta"
          fill
          priority
          unoptimized
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(11,18,32,0.92)_0%,rgba(11,18,32,0.78)_42%,rgba(11,18,32,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.35)_0%,transparent_30%,rgba(11,18,32,0.85)_100%)]" />

        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pb-20 lg:pt-36">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-teal backdrop-blur-sm">
              Scambio parcheggi · tutta Italia
            </div>
            <h1 className="font-display text-[2.65rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
              Smetti di girare.
              <span className="mt-1 block text-teal">Qualcuno sta uscendo ora.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-white/72">
              Parker collega chi sta lasciando un posto e chi lo sta cercando — nello stesso
              momento. Prezzo fisso da <strong className="font-semibold text-white">€1,20</strong>,
              credito sul portale, navigazione fino al punto. Non è un garage e non è un
              parcometro: è uno scambio tra persone.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={portalPath('/signup')}
                className="inline-flex items-center justify-center rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-ink shadow-lg shadow-teal/25 hover:bg-[#00b896]"
              >
                Registrati e inizia
              </a>
              <a
                href="#prodotto"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
              >
                Vedi come appare in app
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:max-w-lg">
              {[
                ['da €1,20', 'a scambio'],
                ['€4,99', 'pacchetto Prova'],
                ['5 tier', 'prezzi fissi'],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-lg font-bold text-white sm:text-xl">{v}</dt>
                  <dd className="mt-0.5 text-[11px] text-white/50">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hidden justify-self-end lg:block">
            <AppMapPreview />
          </div>
        </div>
      </section>

      {/* —— Trust strip —— */}
      <section className="border-b border-ink/8 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5 text-[12px] text-muted">
          <p>
            <span className="font-semibold text-ink">Pagamenti Stripe</span> sul portale web
          </p>
          <span className="hidden h-3 w-px bg-ink/10 sm:block" />
          <p>
            <span className="font-semibold text-ink">Niente aste</span> — solo tier fissi
          </p>
          <span className="hidden h-3 w-px bg-ink/10 sm:block" />
          <p>
            <span className="font-semibold text-ink">Credito protetto</span> — no prelievo in banca
          </p>
          <span className="hidden h-3 w-px bg-ink/10 sm:block" />
          <p>
            <span className="font-semibold text-ink">Strisce blu</span> non incluse nel prezzo
          </p>
        </div>
      </section>

      {/* —— Problema —— */}
      <section id="problema" className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Il problema</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Il posto esiste già. Manca solo il segnale.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted">
              In Italia il parcheggio urbano è un costo nascosto: tempo, stress, carburante,
              ritardi. Parker non inventa posti nuovi: rende visibile chi sta liberando il tuo
              stesso isolato, adesso.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {painPoints.map((p, i) => (
              <article
                key={p.title}
                className="relative overflow-hidden rounded-2xl border border-ink/8 bg-white p-7 shadow-[0_8px_30px_rgba(11,18,32,0.04)]"
              >
                <span className="font-display text-4xl font-bold text-teal/25">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </article>
            ))}
          </div>

          <div className="relative mt-10 overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.street}
              alt="Traffico urbano in cerca di parcheggio"
              width={1400}
              height={520}
              unoptimized
              className="h-56 w-full object-cover sm:h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-md font-display text-xl font-bold text-white sm:text-2xl">
              Un giro a vuoto costa più di uno scambio. Sempre.
            </p>
          </div>
        </div>
      </section>

      {/* —— Prodotto + preview —— */}
      <section id="prodotto" className="bg-ink px-5 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <AppMapPreview />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Prodotto</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Cosa vedi quando apri Parker
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Una mappa con listing reali: strada, distanza, prezzo fisso, stima di arrivo. Tocchi
              un posto, confermi con il credito, parti. Chi vende vede la prenotazione e sa che
              stai arrivando.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Listing con prezzo totale già chiaro (fee inclusa per te acquirente)',
                'Niente chat di negoziazione sul prezzo',
                'Stato dello scambio tracciato fino al completamento',
                'Wallet unico: ricarica web, uso in app',
              ].map((line) => (
                <li key={line} className="flex gap-3 text-sm text-white/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={portalPath('/signup')}
                className="rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-ink hover:bg-[#00b896]"
              >
                Crea account
              </a>
              <a
                href="#prezzi"
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5"
              >
                Vedi i prezzi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* —— Due percorsi —— */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Due ruoli, un account</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Cerchi un posto o ne stai liberando uno?
            </h2>
            <p className="mt-4 text-muted">
              Con lo stesso profilo fai entrambe le cose. Mattina vendi uscendo da casa; sera
              compri arrivando in centro.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-ink/8 bg-white p-8 shadow-[0_8px_30px_rgba(11,18,32,0.04)]">
              <p className="text-xs font-bold uppercase tracking-wider text-teal">Se cerchi</p>
              <h3 className="mt-2 font-display text-2xl font-bold">Acquirente</h3>
              <ol className="mt-6 space-y-5">
                {buyerSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="mt-1 text-sm text-muted">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
            <article className="rounded-2xl border border-ink/8 bg-white p-8 shadow-[0_8px_30px_rgba(11,18,32,0.04)]">
              <p className="text-xs font-bold uppercase tracking-wider text-teal">Se esci</p>
              <h3 className="mt-2 font-display text-2xl font-bold">Venditore</h3>
              <ol className="mt-6 space-y-5">
                {sellerSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-bold text-ink">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="mt-1 text-sm text-muted">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </section>

      {/* —— Come funziona —— */}
      <section id="come-funziona" className="border-y border-ink/8 bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Come funziona</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Tre mosse. Zero aste.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Il ciclo tipico dura pochi minuti: pubblicazione → prenotazione → arrivo. Il credito
              si muove solo a conferma.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Segnali',
                body: 'Pubblichi il posto mentre esci. Compari sulla mappa con il tier che hai scelto.',
                ill: <SwapSignalIllustration width={200} height={140} />,
              },
              {
                title: 'Qualcuno prende',
                body: 'L’acquirente vede distanza e prezzo, conferma col wallet. Tu ricevi notifica.',
                ill: <ParkingSpotIllustration width={200} height={140} />,
              },
              {
                title: 'Arrivo e chiusura',
                body: 'Navigazione al punto, scambio completato, credito al venditore. Fine.',
                ill: <SwapExchangeIllustration width={200} height={140} />,
              },
            ].map((s, i) => (
              <article key={s.title} className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6">
                <div className="mb-4 flex justify-center">{s.ill}</div>
                <p className="text-xs font-bold text-teal">Passo {i + 1}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* —— Features —— */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Dettaglio prodotto</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Cosa c’è dentro Parker (e cosa no)
            </h2>
            <p className="mt-4 text-muted">
              Funzioni pensate per lo scambio in strada — non un portale immobiliare, non un’app
              di garage.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="flex flex-col rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_20px_rgba(11,18,32,0.03)]"
              >
                <div className="mb-2 flex justify-center opacity-90">{f.icon}</div>
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* —— Prezzi —— */}
      <section id="prezzi" className="bg-ink px-5 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Prezzi</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Listino chiaro. Prima di confermare.
            </h2>
            <p className="mt-4 text-white/65">
              Il venditore sceglie solo tra tier sblocati. Tu acquirente vedi e paghi il{' '}
              <strong className="text-white">totale</strong> (netto + commissione Parker inclusa).
              Niente sorprese in cassa.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-white/5 text-[11px] uppercase tracking-wider text-white/50">
                <tr>
                  <th className="px-5 py-3 font-semibold">Tier</th>
                  <th className="px-5 py-3 font-semibold">Sblocco venditore</th>
                  <th className="px-5 py-3 font-semibold">Tu paghi</th>
                  <th className="px-5 py-3 font-semibold">Netto venditore</th>
                  <th className="px-5 py-3 font-semibold">Fee Parker</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((t) => (
                  <tr key={t.level} className="border-t border-white/8">
                    <td className="px-5 py-3.5 font-display font-bold text-teal">{t.level}</td>
                    <td className="px-5 py-3.5 text-white/70">{t.unlock}</td>
                    <td className="px-5 py-3.5 font-semibold">{t.buyer}</td>
                    <td className="px-5 py-3.5 text-white/70">{t.seller}</td>
                    <td className="px-5 py-3.5 text-white/50">{t.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-white/40">
            I tier alti richiedono volume di vendite e reputazione minima. Con poche vendite resta
            disponibile il tier 1.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/45">Ingresso</p>
              <h3 className="mt-2 font-display text-2xl font-bold">Prova</h3>
              <p className="mt-3 font-display text-4xl font-bold text-teal">€4,99</p>
              <p className="mt-3 text-sm text-white/60">
                Pacchetto di ingresso sul portale. Credito spendibile sugli scambi in app.
              </p>
              <a
                href={portalPath('/signup')}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-teal py-3 text-sm font-bold text-ink hover:bg-[#00b896]"
              >
                Registrati e ricarica
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/45">Uso</p>
              <h3 className="mt-2 font-display text-2xl font-bold">Scambio</h3>
              <p className="mt-3 font-display text-4xl font-bold">da €1,20</p>
              <p className="mt-3 text-sm text-white/60">
                Addebito sul wallet al momento della prenotazione. Prezzo del listing scelto dal
                venditore tra i tier aperti.
              </p>
              <a
                href={portalPath('/login')}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/20 py-3 text-sm font-bold text-white hover:bg-white/5"
              >
                Accedi al portale
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/45">Vendita</p>
              <h3 className="mt-2 font-display text-2xl font-bold">Credito</h3>
              <p className="mt-3 font-display text-4xl font-bold">netto</p>
              <p className="mt-3 text-sm text-white/60">
                Incassi il netto del tier. Lo riusi. Non è un prelievo bancario — è combustibile per
                i prossimi swap.
              </p>
              <a
                href="#regole"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/20 py-3 text-sm font-bold text-white hover:bg-white/5"
              >
                Leggi le regole
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* —— Regole —— */}
      <section id="regole" className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Regole chiare</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Così non sembra un sito “promessa”
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Preferiamo dire subito i limiti. Parker funziona bene se tutti sanno cosa è incluso
                e cosa no.
              </p>
              <div className="relative mt-8 overflow-hidden rounded-2xl">
                <Image
                  src={IMAGES.city}
                  alt="Skyline urbano di sera"
                  width={800}
                  height={500}
                  unoptimized
                  className="h-48 w-full object-cover"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {rules.map((r) => (
                <article
                  key={r.title}
                  className="rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_20px_rgba(11,18,32,0.03)]"
                >
                  <h3 className="font-display text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* —— Onboarding —— */}
      <section id="inizia" className="border-y border-ink/8 bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Come iniziare</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Quattro passi, senza indovinare
            </h2>
            <p className="mt-4 text-muted">
              Ogni passo ha un’azione concreta. Oggi il portale è vivo; l’app arriva sugli store —
              stesso account.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {onboarding.map((o) => (
              <article
                key={o.n}
                className="flex flex-col rounded-2xl border border-ink/8 bg-[#F5F6F8] p-7 sm:flex-row sm:gap-6"
              >
                <span className="font-display text-3xl font-bold text-teal/40">{o.n}</span>
                <div className="mt-3 flex flex-1 flex-col sm:mt-0">
                  <h3 className="font-display text-xl font-bold">{o.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{o.body}</p>
                  <a
                    href={o.href}
                    className="mt-4 inline-flex text-sm font-bold text-teal hover:underline"
                  >
                    {o.cta} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* —— App / waitlist —— */}
      <section id="app" className="relative overflow-hidden px-5 py-20 sm:py-24">
        <Image
          src={IMAGES.night}
          alt=""
          fill
          unoptimized
          className="object-cover opacity-[0.12]"
          sizes="100vw"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">App & portale</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Portale operativo oggi. App sugli store in arrivo.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Registrazione, profilo e ricarica credito avvengono sul portale web con Stripe. Quando
              l’app sarà su App Store e Google Play, entri con lo stesso account e usi la mappa.
              Se vuoi l’avviso il giorno della pubblicazione, lascia email e città.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li>· Nome pubblico: <strong className="text-ink">Parker</strong></li>
              <li>· Solo scambio P2P in questa fase</li>
              <li>· Nessun abbonamento obbligatorio</li>
            </ul>
          </div>
          <form
            onSubmit={submitInterest}
            className="rounded-2xl border border-ink/10 bg-white p-7 shadow-[0_12px_40px_rgba(11,18,32,0.08)] sm:p-8"
          >
            <h3 className="font-display text-xl font-bold">Avvisami sugli store</h3>
            <p className="mt-1 text-sm text-muted">
              Ti scriviamo solo per il rilascio app. Niente newsletter spam.
            </p>
            <label className="mt-6 block text-xs font-bold uppercase tracking-wide text-muted">
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-ink/12 bg-[#F5F6F8] px-4 py-3 text-sm outline-none ring-teal/30 focus:border-teal focus:ring-2"
                placeholder="tu@email.it"
              />
            </label>
            <label className="mt-4 block text-xs font-bold uppercase tracking-wide text-muted">
              Città (opzionale)
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-ink/12 bg-[#F5F6F8] px-4 py-3 text-sm outline-none ring-teal/30 focus:border-teal focus:ring-2"
                placeholder="Es. Milano, Roma, Napoli…"
              />
            </label>
            <button
              type="submit"
              disabled={waitStatus === 'loading'}
              className="mt-5 w-full rounded-full bg-ink py-3.5 text-sm font-bold text-white hover:bg-ink/90 disabled:opacity-60"
            >
              {waitStatus === 'loading' ? 'Invio in corso…' : 'Iscrivimi all’avviso'}
            </button>
            {waitMsg ? (
              <p className={`mt-3 text-sm ${waitStatus === 'ok' ? 'text-teal' : 'text-red-600'}`}>
                {waitMsg}
              </p>
            ) : null}
            <p className="mt-4 text-center text-xs text-muted">
              Preferisci partire subito?{' '}
              <a href={portalPath('/signup')} className="font-semibold text-ink underline">
                Registrati sul portale
              </a>
            </p>
          </form>
        </div>
      </section>

      {/* —— FAQ —— */}
      <section id="faq" className="border-t border-ink/8 bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-bold">Domande frequenti</h2>
          <p className="mt-3 text-sm text-muted">
            Risposte dirette. Se manca qualcosa, scrivi dal portale dopo la registrazione.
          </p>
          <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <button
                  key={item.q}
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="w-full py-5 text-left transition hover:bg-[#F5F6F8]/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="pr-2 font-semibold leading-snug">{item.q}</span>
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-sm font-bold text-teal">
                      {open ? '−' : '+'}
                    </span>
                  </div>
                  {open ? (
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.a}</p>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* —— CTA —— */}
      <section className="relative overflow-hidden bg-teal px-5 py-16 text-ink sm:py-20">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-ink/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Pronto a smettere di girare?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink/75">
            Crea l’account, ricarica Prova €4,99 sul portale, poi usa la mappa quando l’app è
            attiva. Stesso login ovunque.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={portalPath('/signup')}
              className="rounded-full bg-ink px-8 py-3.5 text-sm font-bold text-white hover:bg-ink/90"
            >
              Registrati gratis
            </a>
            <a
              href={portalPath('/login')}
              className="rounded-full border border-ink/20 bg-white/40 px-8 py-3.5 text-sm font-semibold backdrop-blur hover:bg-white/60"
            >
              Accedi
            </a>
          </div>
        </div>
      </section>

      {/* —— Footer —— */}
      <footer className="bg-ink px-5 py-14 text-sm text-white/55">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-lg font-bold text-white">
              <span className="text-teal">P</span>arker
            </p>
            <p className="mt-3 max-w-xs leading-relaxed">
              Scambio di parcheggi in tempo reale. Tutta Italia. Credito sul portale, prezzi a tier
              fissi, strisce blu non incluse.
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/35">Prodotto</p>
            <div className="flex flex-col gap-2">
              <a href="#prodotto" className="hover:text-white">
                Cosa vedi in app
              </a>
              <a href="#come-funziona" className="hover:text-white">
                Come funziona
              </a>
              <a href="#prezzi" className="hover:text-white">
                Prezzi e tier
              </a>
              <a href="#regole" className="hover:text-white">
                Regole
              </a>
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/35">Account</p>
            <div className="flex flex-col gap-2">
              <a href={portalPath('/signup')} className="hover:text-white">
                Registrati
              </a>
              <a href={portalPath('/login')} className="hover:text-white">
                Accedi
              </a>
              <a href="#app" className="hover:text-white">
                Avviso store
              </a>
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/35">Legale</p>
            <div className="flex flex-col gap-2">
              <a href={portalPath('/legal/privacy')} className="hover:text-white">
                Privacy
              </a>
              <a href={portalPath('/legal/terms')} className="hover:text-white">
                Termini
              </a>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-xs text-white/35">
          © {new Date().getFullYear()} Parker · Scambio P2P di posti auto · Pagamenti gestiti con
          Stripe sul portale
        </div>
      </footer>

      {!cookieOk ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white p-4 shadow-[0_-8px_30px_rgba(11,18,32,0.12)]">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              Usiamo solo cookie tecnici necessari al funzionamento del sito. Niente pubblicità
              tracciante.
            </p>
            <button
              type="button"
              onClick={() => {
                try {
                  localStorage.setItem('parker_web_cookies', '1');
                } catch {
                  /* ignore */
                }
                setCookieOk(true);
              }}
              className="shrink-0 rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-ink"
            >
              Ho capito
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
