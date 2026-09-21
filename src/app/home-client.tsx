'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from './lib/images';
import { portalPath } from './lib/urls';
import { AppMapPreview } from './components/app-map-preview';
import { SiteHeader, SiteFooter, CookieBar } from './components/site-chrome';
import {
  ParkingSpotIllustration,
  SwapSignalIllustration,
  SwapExchangeIllustration,
} from './components/illustrations';

const packages = [
  {
    name: 'Prova',
    price: '€4,99',
    credit: '€5,40 di credito',
    hint: 'Per iniziare',
    points: [
      'Circa 4 scambi al prezzo base',
      'Una tantum, sul portale web',
      'Ideale per provare Parker',
    ],
    featured: true,
  },
  {
    name: 'Carnet 8',
    price: '€8,80',
    credit: '€9,60 di credito',
    hint: 'Uso occasionale',
    points: ['Più scambi del Prova', 'Acquisto una tantum', 'Credito pronto in wallet'],
    featured: false,
  },
  {
    name: 'Mensile 20',
    price: '€22',
    credit: '€24 / mese',
    hint: 'Rinnovo automatico',
    points: [
      'Piano ricorrente mensile',
      'Credito che si rinnova ogni mese',
      'Si gestisce dal portale',
    ],
    featured: false,
  },
  {
    name: 'Semestrale',
    price: '€120',
    credit: 'equiv. €24 / mese × 6',
    hint: 'Sei mesi',
    points: ['Un pagamento per sei mesi', 'Stesso ritmo del mensile', 'Meno pensieri sul rinnovo'],
    featured: false,
  },
  {
    name: 'Annuale',
    price: '€240',
    credit: 'equiv. €24 / mese × 12',
    hint: 'Tutto l’anno',
    points: ['Un pagamento annuale', 'Massima continuità', 'Gestione dal portale'],
    featured: false,
  },
];

const missions = [
  {
    title: 'Vendi 3 posti',
    body: 'Completa tre vendite: sblocchi un premio una tantum (credito da usare sugli scambi).',
  },
  {
    title: 'Ogni 10 vendite',
    body: 'Missione ripetibile: a ogni blocco di dieci vendite completate ricevi un premio swap.',
  },
  {
    title: '5 scambi in settimana',
    body: 'Raggiungi cinque scambi nella settimana e ottieni un premio (sempre credito solo-swap).',
  },
  {
    title: 'Streak accessi',
    body: 'Entra più giorni di fila: guadagni badge. Non tocca il ranking e non è un premio in credito.',
  },
];

const referralSteps = [
  {
    n: '1',
    title: 'Apri Invita amici',
    body: 'Nel portale (o in Account in app) trovi codice, link e QR. Li puoi copiare o condividere.',
  },
  {
    n: '2',
    title: 'L’amico si registra',
    body: 'Deve inserire il tuo codice in registrazione (o arrivare dal tuo link). Dopo non si può più agganciare.',
  },
  {
    n: '3',
    title: 'Fa il primo scambio',
    body: 'Finché non completa il primo swap, il tuo bonus resta in attesa. Non basta scaricare l’app.',
  },
  {
    n: '4',
    title: 'Tu ricevi il bonus',
    body: '€2,50 di credito bonus sullo swap. Solo tu lo ricevi: l’invitato non ha bonus di ingresso da referral.',
  },
];

const faqs = [
  {
    q: 'Cosa fa Parker oggi?',
    a: 'Collega chi sta liberando un posto e chi lo sta cercando. Compri credito sul portale, usi la mappa in app, scambi a prezzo fisso. Nient’altro in questa fase.',
  },
  {
    q: 'Quanto costa uno scambio?',
    a: 'Il prezzo lo vedi sul listing prima di confermare. Parte da €1,20. I pacchetti sul portale (Prova, Carnet, Mensile, Semestrale, Annuale) caricano il credito che usi per prenotare.',
  },
  {
    q: 'Le strisce blu sono incluse?',
    a: 'No. Il prezzo dello scambio è tra te e chi libera il posto. Il ticket del parcometro, se c’è, resta a parte come sempre.',
  },
  {
    q: 'Posso prelevare i soldi in banca?',
    a: 'No. Il credito Parker resta nel circuito: lo usi per gli scambi. Chi vende riceve credito da riusare, non un bonifico.',
  },
  {
    q: 'Cosa sono le missioni?',
    a: 'Obiettivi in-app/portale (vendite, scambi settimanali, streak). I premi in credito servono solo per gli swap e scadono in pochi giorni. Hanno un tetto mensile. Non modificano il ranking.',
  },
  {
    q: 'Come funziona Invita un amico?',
    a: 'Condividi codice o link. L’amico lo usa in registrazione. Quando completa il primo scambio, tu ricevi €2,50. Ogni tre amici qualificati il blocco vale €10 totali. Dettaglio nella sezione Invita.',
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#F5F6F8] text-ink">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[92svh] overflow-hidden bg-ink">
        <Image
          src={IMAGES.hero}
          alt="Strada cittadina con auto in sosta"
          fill
          priority
          unoptimized
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(11,18,32,0.93)_0%,rgba(11,18,32,0.78)_45%,rgba(11,18,32,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.4)_0%,transparent_28%,rgba(11,18,32,0.88)_100%)]" />

        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pb-20 lg:pt-36">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-teal">
              Scambio posti · tutta Italia
            </p>
            <h1 className="font-display text-[2.55rem] font-bold leading-[1.05] text-white sm:text-5xl lg:text-[3.25rem]">
              Smetti di girare.
              <span className="mt-1 block text-teal">Qualcuno sta uscendo ora.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-white/72">
              Parker fa una cosa sola: mette in contatto chi lascia un parcheggio e chi lo cerca,
              nello stesso momento. Prezzo fisso sullo scambio, credito sul portale, navigazione
              fino al punto.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={portalPath('/signup')}
                className="inline-flex items-center justify-center rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-ink hover:bg-[#00b896]"
              >
                Registrati
              </a>
              <a
                href="#problema"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Perché esiste
              </a>
            </div>
          </div>
          <div className="hidden justify-self-end lg:block">
            <AppMapPreview />
          </div>
        </div>
      </section>

      {/* Strip */}
      <section className="border-b border-ink/8 bg-white">
        <div className="mx-auto grid max-w-6xl gap-0 sm:grid-cols-4">
          {[
            ['Registrati', 'Account sul portale'],
            ['Scegli un pacchetto', 'Prova, Carnet, piani'],
            ['Apri la mappa', 'Cerca o vendi un posto'],
            ['Scambia', 'Prezzo fisso, arrivi'],
          ].map(([t, d], i) => (
            <div
              key={t}
              className={`px-5 py-6 ${i < 3 ? 'sm:border-r sm:border-ink/8' : ''}`}
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-teal">
                Passo {i + 1}
              </p>
              <p className="mt-1.5 font-display text-base font-bold">{t}</p>
              <p className="mt-0.5 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problema — ricco */}
      <section id="problema" className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Il problema</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">
            Il posto c’è già. Quello che manca è sapere chi lo sta liberando adesso.
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-5 text-[15px] leading-relaxed text-muted">
              <p>
                In città italiane densamente trafficate — centri storici, stazioni, ospedali,
                uffici, zone mare nei weekend — il tempo perso a cercare posto non è un dettaglio:
                è un costo fisso nascosto. Dieci minuti di giro a vuoto significano carburante,
                stress, ritardo a un appuntamento, a volte una multa per sosta di fortuna.
              </p>
              <p>
                Il paradosso è strutturale: mentre tu giri, a due isolati di distanza qualcuno sta
                uscendo dal posto che ti servirebbe. Non c’è un segnale condiviso. Le mappe
                generiche dicono dove “dovrebbe” esserci spazio; i garage vendono un box; il
                parcometro regola le strisce blu. Nessuno di questi strumenti collega{' '}
                <em className="text-ink not-italic font-semibold">uscita</em> e{' '}
                <em className="text-ink not-italic font-semibold">arrivo</em> nello stesso minuto.
              </p>
              <p>
                Parker nasce da lì: non inventa posti nuovi e non sostituisce le regole della
                sosta pubblica. Rende visibile chi sta liberando un posto e permette a chi cerca
                di prenotarlo a un prezzo fisso, con navigazione fino al punto. Meno giri, meno
                “spero che sia libero”, più scambio tra persone.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  t: 'Tempo perso',
                  d: 'Giri ripetuti nello stesso isolato senza informazione in tempo reale.',
                },
                {
                  t: 'Segnale assente',
                  d: 'Chi esce e chi arriva non si vedono: l’opportunità si dissolve in pochi minuti.',
                },
                {
                  t: 'Strumenti sbagliati',
                  d: 'Parcometro e garage risolvono altri problemi. Non risolvono lo scambio “ora”.',
                },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-ink/8 bg-white p-5 shadow-[0_4px_20px_rgba(11,18,32,0.03)]"
                >
                  <h3 className="font-display text-lg font-bold">{x.t}</h3>
                  <p className="mt-2 text-sm text-muted">{x.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.street}
              alt="Traffico urbano in cerca di parcheggio"
              width={1400}
              height={480}
              unoptimized
              className="h-52 w-full object-cover sm:h-64"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-md font-display text-xl font-bold text-white sm:text-2xl">
              Un giro a vuoto costa più di uno scambio. Quasi sempre.
            </p>
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section id="come-funziona" className="border-y border-ink/8 bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Come funziona</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Tre mosse. Prezzo fisso. Credito sul portale.
            </h2>
            <p className="mt-4 text-muted">
              Oggi Parker è solo lo scambio tra automobilisti. Compri credito sul portale web;
              in app pubblichi o prenoti un posto sulla mappa.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Segnali che esci',
                body: 'Metti in vendita il posto con un tap. Compari sulla mappa con un prezzo chiaro scelto tra i livelli disponibili.',
                ill: <SwapSignalIllustration width={200} height={130} />,
              },
              {
                title: 'Qualcuno prenota',
                body: 'Chi cerca vede distanza e prezzo, conferma col credito Parker. Tu ricevi notifica: qualcuno sta arrivando.',
                ill: <ParkingSpotIllustration width={200} height={130} />,
              },
              {
                title: 'Arrivo e chiusura',
                body: 'Navigazione fino al punto. A scambio completato chi ha venduto riceve credito da riusare; chi arriva parcheggia.',
                ill: <SwapExchangeIllustration width={200} height={130} />,
              },
            ].map((s, i) => (
              <article key={s.title} className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6">
                <div className="mb-3 flex justify-center">{s.ill}</div>
                <p className="text-xs font-bold text-teal">Passo {i + 1}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-7">
              <h3 className="font-display text-xl font-bold">Se cerchi un posto</h3>
              <ol className="mt-4 space-y-3 text-sm text-muted">
                <li>1. Apri la mappa e filtra i listing vicini.</li>
                <li>2. Controlli prezzo e distanza, poi prenoti col wallet.</li>
                <li>3. Segui la navigazione e completi lo scambio.</li>
              </ol>
            </article>
            <article className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-7">
              <h3 className="font-display text-xl font-bold">Se stai uscendo</h3>
              <ol className="mt-4 space-y-3 text-sm text-muted">
                <li>1. Pubblichi il posto e scegli il livello di prezzo disponibile.</li>
                <li>2. Aspetti la prenotazione e resti allineato sulle notifiche.</li>
                <li>3. A chiusura ricevi credito Parker da riusare al prossimo swap.</li>
              </ol>
            </article>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={portalPath('/signup')}
              className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-white hover:bg-ink/90"
            >
              Crea account
            </a>
            <Link href="/ranking" className="text-sm font-bold text-teal hover:underline">
              Come funziona il ranking →
            </Link>
          </div>
        </div>
      </section>

      {/* Prodotto preview */}
      <section className="bg-ink px-5 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">In app</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Listing chiari sulla mappa
            </h2>
            <p className="mt-4 text-white/65 leading-relaxed">
              Vedi posti in vendita con distanza e prezzo. Confermi prima di partire. Niente aste,
              niente chat sul prezzo: lo scambio è il prodotto.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/75">
              {[
                'Prezzo visibile prima della conferma',
                'Credito già caricato dal portale',
                'Notifiche su prenotazione e completamento',
                'Stesso account su web e app',
              ].map((l) => (
                <li key={l} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <AppMapPreview />
        </div>
      </section>

      {/* Prezzi — pacchetti */}
      <section id="prezzi" className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Prezzi</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Pacchetti di credito sul portale
            </h2>
            <p className="mt-4 text-muted">
              Non c’è ricarica libera a importo a piacere. Scegli un pacchetto (o un piano), paghi
              con carta sul portale, usi il credito in app per gli scambi. Uno scambio parte da
              €1,20 — il prezzo esatto lo vedi sul listing.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col rounded-2xl border p-5 ${
                  pkg.featured
                    ? 'border-teal bg-ink text-white shadow-lg shadow-ink/15 sm:col-span-2 lg:col-span-1'
                    : 'border-ink/10 bg-white'
                }`}
              >
                <p
                  className={`text-[11px] font-bold uppercase tracking-wider ${
                    pkg.featured ? 'text-teal' : 'text-muted'
                  }`}
                >
                  {pkg.hint}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold">{pkg.name}</h3>
                <p className="mt-3 font-display text-3xl font-bold tracking-tight">{pkg.price}</p>
                <p
                  className={`mt-1 text-xs ${pkg.featured ? 'text-white/55' : 'text-muted'}`}
                >
                  {pkg.credit}
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm">
                  {pkg.points.map((pt) => (
                    <li
                      key={pt}
                      className={pkg.featured ? 'text-white/70' : 'text-muted'}
                    >
                      · {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-ink/8 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              <span className="font-semibold text-ink">Nota:</span> le strisce blu non sono
              incluse. Il Mensile si rinnova in automatico finché non lo disdici dal portale.
              Limiti anti-abuso: tetto giornaliero sugli acquisti personali.
            </p>
            <a
              href={portalPath('/signup')}
              className="shrink-0 rounded-full bg-teal px-6 py-3 text-center text-sm font-bold text-ink hover:bg-[#00b896]"
            >
              Registrati e scegli un pacchetto
            </a>
          </div>
        </div>
      </section>

      {/* Missioni */}
      <section id="missioni" className="border-y border-ink/8 bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Missioni</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Obiettivi semplici, premi sullo swap
            </h2>
            <p className="mt-4 text-muted">
              Le missioni ti spingono a usare Parker in modo utile (vendere, scambiare, tornare).
              I premi in credito servono <strong className="font-semibold text-ink">solo per gli
              scambi</strong>, scadono in pochi giorni e hanno un tetto mensile. Non modificano
              stelle o ranking.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {missions.map((m) => (
              <article
                key={m.title}
                className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6"
              >
                <h3 className="font-display text-lg font-bold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Per i venditori più attivi ci sono anche traguardi più lunghi (trimestrali e annuali)
            con premi dedicati. Li vedi nel dettaglio missioni sul portale quando sei loggato.
          </p>
        </div>
      </section>

      {/* Ranking teaser */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-ink px-7 py-10 text-white sm:px-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Ranking</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                Le stelle misurano l’affidabilità — non una classifica pubblica
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                Vedi solo il tuo punteggio e perché sale o scende (completamenti, annulli,
                segnalazioni, valutazioni). Se le stelle sono basse puoi comunque vendere, ma solo
                al livello di prezzo più basso. Le missioni non toccano il ranking.
              </p>
            </div>
            <div>
              <Link
                href="/ranking"
                className="inline-flex rounded-full bg-teal px-6 py-3 text-sm font-bold text-ink hover:bg-[#00b896]"
              >
                Leggi come funziona il ranking
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Invita */}
      <section id="invita" className="border-t border-ink/8 bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Invita un amico</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Condividi il codice. Guadagni quando scambia.
            </h2>
            <p className="mt-4 text-muted">
              Non basta che l’amico scarichi l’app: deve registrarsi con il tuo invito e completare
              il <strong className="font-semibold text-ink">primo scambio</strong>. Solo allora il
              bonus diventa spendibile — e solo per te.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {referralSteps.map((s) => (
              <article
                key={s.n}
                className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6"
              >
                <span className="font-display text-3xl font-bold text-teal/35">{s.n}</span>
                <h3 className="mt-2 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6">
              <h3 className="font-display text-lg font-bold">€2,50 a invitato</h3>
              <p className="mt-2 text-sm text-muted">
                Per ogni amico che completa il primo swap ricevi €2,50 di credito bonus usabile
                sugli scambi.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6">
              <h3 className="font-display text-lg font-bold">Blocco da 3 amici</h3>
              <p className="mt-2 text-sm text-muted">
                Ogni tre amici qualificati il blocco vale €10 totali (sul terzo arriva un extra).
                Ripetibile: 6 amici → €20, e così via.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6">
              <h3 className="font-display text-lg font-bold">Regole anti-abuso</h3>
              <p className="mt-2 text-sm text-muted">
                Codice solo in registrazione. Bonus in attesa fino al primo swap. Spendibile solo
                sugli scambi, non convertibile in prelievo bancario.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={portalPath('/signup')}
              className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-bold text-white hover:bg-ink/90"
            >
              Registrati e apri Invita amici
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-bold">Domande frequenti</h2>
          <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <button
                  key={item.q}
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="w-full py-5 text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-semibold">{item.q}</span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-sm font-bold text-teal">
                      {open ? '−' : '+'}
                    </span>
                  </div>
                  {open ? (
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal px-5 py-16 text-center text-ink sm:py-20">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Inizia dallo scambio</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink/75">
          Registrati, scegli un pacchetto sul portale, usa la mappa. Una cosa alla volta.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={portalPath('/signup')}
            className="rounded-full bg-ink px-8 py-3.5 text-sm font-bold text-white hover:bg-ink/90"
          >
            Registrati
          </a>
          <a
            href={portalPath('/login')}
            className="rounded-full border border-ink/20 bg-white/40 px-8 py-3.5 text-sm font-semibold hover:bg-white/60"
          >
            Accedi
          </a>
        </div>
      </section>

      <SiteFooter />
      <CookieBar />
    </main>
  );
}
