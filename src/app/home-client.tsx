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
  PaymentIllustration,
  NavigationFeatIllustration,
  NotificationIllustration,
} from './components/illustrations';

const packages = [
  {
    name: 'Prova',
    price: '€4,99',
    credit: '€5,40 di credito',
    hint: 'Per iniziare',
    points: [
      'Circa 4 scambi al prezzo base da €1,20',
      'Acquisto una tantum sul portale web',
      'Ideale per capire se Parker ti serve',
      'Credito pronto nel wallet dopo il pagamento',
    ],
    featured: true,
  },
  {
    name: 'Carnet 8',
    price: '€8,80',
    credit: '€9,60 di credito',
    hint: 'Uso occasionale',
    points: [
      'Più credito del pacchetto Prova',
      'Una tantum, senza rinnovo automatico',
      'Utile se scambi qualche volta al mese',
      'Si compra solo dal portale',
    ],
    featured: false,
  },
  {
    name: 'Mensile 20',
    price: '€22',
    credit: '€24 di credito / mese',
    hint: 'Rinnovo automatico',
    points: [
      'Piano ricorrente: ogni mese il credito si rinnova',
      'Pensato per chi usa Parker con regolarità',
      'Disdici dal portale quando vuoi (fine periodo)',
      'Stesso account in app e sul web',
    ],
    featured: false,
  },
  {
    name: 'Semestrale',
    price: '€120',
    credit: 'equiv. €24 / mese × 6',
    hint: 'Sei mesi',
    points: [
      'Un pagamento per sei mesi di continuità',
      'Stesso ritmo di valore del mensile',
      'Meno scadenze da ricordare',
      'Gestione e storico sul portale',
    ],
    featured: false,
  },
  {
    name: 'Annuale',
    price: '€240',
    credit: 'equiv. €24 / mese × 12',
    hint: 'Tutto l’anno',
    points: [
      'Un pagamento per dodici mesi',
      'Massima continuità sul credito',
      'Per chi vive lo scambio come abitudine',
      'Tutto gestito dal portale web',
    ],
    featured: false,
  },
];

const situations = [
  {
    img: IMAGES.keys,
    title: 'Mattina in uscita',
    body: 'Esci di casa o dall’ufficio: metti in vendita il posto mentre parti. Qualcuno in arrivo nella tua zona lo vede sulla mappa e può prenotarlo subito.',
  },
  {
    img: IMAGES.night,
    title: 'Sera di rientro',
    body: 'Torni tardi, traffico, poche luci libere. Apri Parker, vedi i listing vicini con prezzo e distanza, prenoti e navighi al punto invece di girare a vuoto.',
  },
  {
    img: IMAGES.streetParked,
    title: 'Centro e strade strette',
    body: 'Nei centri storici e nelle zone a densità alta ogni posto conta. Lo scambio tra chi esce e chi arriva riduce i giri negli stessi isolati.',
  },
  {
    img: IMAGES.train,
    title: 'Appuntamento o stazione',
    body: 'Hai un orario: ospedale, treno, riunione. Un posto prenotato a prezzo fisso vale più di dieci minuti di ronda e di stress.',
  },
];

const features = [
  {
    title: 'Mappa con listing reali',
    body: 'Vedi posti in vendita vicino a te: distanza, prezzo fisso, stima di arrivo. Se il posto non è più disponibile, sparisce. La qualità del servizio nella tua zona dipende da quanti utenti pubblicano.',
    icon: <ParkingSpotIllustration width={160} height={110} />,
  },
  {
    title: 'Prezzo fisso sullo scambio',
    body: 'Niente aste e niente chat di negoziazione. Il venditore sceglie tra i livelli di prezzo disponibili; tu acquirente vedi l’importo prima di confermare e paghi col credito Parker.',
    icon: <PaymentIllustration width={160} height={110} />,
  },
  {
    title: 'Navigazione al punto',
    body: 'Dopo la prenotazione parti verso le coordinate del posto. Meno “cerco e spero”, più arrivo mirato. Lo scambio resta tracciato fino al completamento.',
    icon: <NavigationFeatIllustration width={160} height={110} />,
  },
  {
    title: 'Notifiche sullo scambio',
    body: 'Chi vende e chi compra restano allineati: prenotazione, arrivo, chiusura. Serve a ridurre i fraintendimenti al bordo strada.',
    icon: <NotificationIllustration width={160} height={110} />,
  },
  {
    title: 'Segnale “sto uscendo”',
    body: 'Il valore di Parker è il timing. Pubblichi quando liberi; qualcuno prenota mentre sei ancora lì o appena partito. È lo scambio in tempo reale, non un annuncio statico.',
    icon: <SwapSignalIllustration width={160} height={110} />,
  },
  {
    title: 'Credito closed-loop',
    body: 'Compri pacchetti sul portale, spendi in app, ricevi credito quando vendi. Il credito resta nel circuito Parker: lo riusi per gli scambi, non lo prelevi in banca.',
    icon: <SwapExchangeIllustration width={160} height={110} />,
  },
];

const missions = [
  {
    title: 'Vendi 3 posti',
    body: 'Completa tre vendite: sblocchi un premio una tantum. Il premio è credito da usare solo sugli scambi, con scadenza breve (pochi giorni).',
  },
  {
    title: 'Ogni 10 vendite',
    body: 'Missione ripetibile e sostenibile: a ogni blocco di dieci vendite completate ricevi un premio swap. Serve a chi tiene viva l’offerta sulla mappa.',
  },
  {
    title: '5 scambi in settimana',
    body: 'Raggiungi cinque scambi nella settimana (come acquirente o nel mix previsto dalla missione) e ottieni un premio in credito solo-swap.',
  },
  {
    title: 'Streak accessi',
    body: 'Entra più giorni di fila: guadagni badge. Non è un premio in credito e non tocca le stelle del ranking. È un riconoscimento di presenza.',
  },
];

const referralSteps = [
  {
    n: '1',
    title: 'Apri Invita amici',
    body: 'Nel portale trovi codice copiabile, link da condividere e QR. In app, la sezione è in Account. Scegli il canale che preferisci: WhatsApp, messaggio, stampa del QR.',
  },
  {
    n: '2',
    title: 'L’amico apre il link',
    body: 'Se ha già l’app, il deep link porta alla registrazione con il codice già applicato. Se non ce l’ha, arriva a una landing che spiega che sta entrando tramite il tuo invito.',
  },
  {
    n: '3',
    title: 'Si registra con il codice',
    body: 'Il codice si inserisce solo in registrazione. Dopo non si può più agganciare un referral: è una regola anti-abuso, non un optional.',
  },
  {
    n: '4',
    title: 'Completa il primo scambio',
    body: 'Finché non conclude il primo swap, il tuo bonus resta in attesa. Scaricare l’app o creare l’account non basta: serve uno scambio reale.',
  },
  {
    n: '5',
    title: 'Tu ricevi €2,50',
    body: 'Il bonus diventa spendibile subito per gli scambi. Solo chi invita lo riceve: l’invitato non ha un bonus di ingresso da referral.',
  },
  {
    n: '6',
    title: 'Blocco da 3 amici',
    body: 'Ogni tre amici qualificati il blocco vale €10 totali (sul terzo arriva un extra). Ripetibile: 6 amici → €20, 9 → €30, e così via.',
  },
];

const faqs = [
  {
    q: 'Cosa fa Parker oggi, in concreto?',
    a: 'Collega chi sta liberando un posto auto e chi lo sta cercando. Tu compri credito sul portale web con un pacchetto, usi la mappa in app per cercare o vendere, scambi a prezzo fisso. In questa fase non ci sono altri servizi oltre allo scambio tra automobilisti.',
  },
  {
    q: 'Quanto costa uno scambio?',
    a: 'Il prezzo lo vedi sul listing prima di confermare. Parte da €1,20. I pacchetti (Prova, Carnet, Mensile, Semestrale, Annuale) caricano il credito che usi per prenotare. Le strisce blu, se presenti, non sono incluse.',
  },
  {
    q: 'Perché il credito si compra sul portale e non in app?',
    a: 'Per tenere i pagamenti chiari e centralizzati sul web (carta via Stripe) e rispettare le regole degli store. In app usi il wallet: non compri credito mentre sei in strada.',
  },
  {
    q: 'Posso prelevare i soldi sul conto corrente?',
    a: 'No. Il credito Parker resta nel circuito: lo usi per gli scambi. Chi vende riceve credito da riusare, non un bonifico bancario.',
  },
  {
    q: 'Cosa sono le missioni?',
    a: 'Obiettivi (vendite, scambi settimanali, streak accessi) con premi in credito solo-swap o badge. I premi in credito scadono in pochi giorni e hanno un tetto mensile. Non modificano il ranking a stelle.',
  },
  {
    q: 'Come funziona Invita un amico?',
    a: 'Condividi codice, link o QR. L’amico lo usa in registrazione. Quando completa il primo scambio, tu ricevi €2,50. Ogni tre amici qualificati il blocco vale €10 totali. Dettaglio nella sezione Invita.',
  },
  {
    q: 'Cos’è il ranking?',
    a: 'Un sistema di stelle sulla tua affidabilità negli scambi. Vedi solo il tuo punteggio e le motivazioni. Se le stelle sono basse puoi comunque vendere, ma solo al livello di prezzo più basso. C’è una pagina dedicata.',
  },
  {
    q: 'Parker sostituisce il parcometro?',
    a: 'No. Parker gestisce lo scambio tra persone. Se il posto è a strisce blu, il ticket resta a carico tuo come sempre.',
  },
];

function Photo({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1000}
      unoptimized
      priority={priority}
      className={className}
    />
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#F5F6F8] text-ink">
      <SiteHeader />

      {/* —— Hero —— */}
      <section className="relative min-h-[94svh] overflow-hidden bg-ink">
        <Image
          src={IMAGES.hero}
          alt="Auto in sosta lungo una strada cittadina"
          fill
          priority
          unoptimized
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(11,18,32,0.94)_0%,rgba(11,18,32,0.8)_42%,rgba(11,18,32,0.48)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.45)_0%,transparent_30%,rgba(11,18,32,0.9)_100%)]" />

        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pb-20 lg:pt-36">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-teal">
              Scambio posti auto · tutta Italia
            </p>
            <h1 className="font-display text-[2.55rem] font-bold leading-[1.05] text-white sm:text-5xl lg:text-[3.35rem]">
              Smetti di girare.
              <span className="mt-1 block text-teal">Qualcuno sta uscendo ora.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[1.08rem] leading-relaxed text-white/75">
              Parker mette in contatto chi sta lasciando un parcheggio e chi lo sta cercando —
              nello stesso momento. Prezzo fisso sullo scambio, pacchetti di credito sul portale,
              navigazione fino al punto. Una cosa sola, fatta bene.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={portalPath('/signup')}
                className="inline-flex items-center justify-center rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-ink hover:bg-[#00b896]"
              >
                Registrati gratis
              </a>
              <a
                href="#problema"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Perché esiste Parker
              </a>
            </div>
            <p className="mt-8 max-w-lg text-xs leading-relaxed text-white/45">
              Oggi: scambio tra automobilisti, wallet, ranking, missioni, invita un amico. Niente
              altro inventato “in arrivo” su questa pagina.
            </p>
          </div>
          <div className="hidden justify-self-end lg:block">
            <AppMapPreview />
          </div>
        </div>
      </section>

      {/* Strip passi */}
      <section className="border-b border-ink/8 bg-white">
        <div className="mx-auto grid max-w-6xl gap-0 sm:grid-cols-4">
          {[
            ['Registrati', 'Crea l’account sul portale'],
            ['Scegli un pacchetto', 'Prova, Carnet o piano'],
            ['Apri la mappa', 'Cerca o vendi un posto'],
            ['Scambia', 'Prezzo fisso, arrivi, chiudi'],
          ].map(([t, d], i) => (
            <div
              key={t}
              className={`px-5 py-7 ${i < 3 ? 'sm:border-r sm:border-ink/8' : ''}`}
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-teal">
                Passo {i + 1}
              </p>
              <p className="mt-1.5 font-display text-base font-bold">{t}</p>
              <p className="mt-1 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* —— Problema lungo —— */}
      <section id="problema" className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Il problema</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">
            In Italia il posto spesso c’è già. Quello che manca è il segnale tra chi esce e chi
            arriva.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-5 text-[15px] leading-relaxed text-muted">
              <p>
                Chi guida in città conosce la scena: stazione, ospedale, ufficio, centro storico,
                zona mare nel weekend. Arrivi e inizi a girare. Passi due volte nello stesso
                isolato. Qualcuno esce dal posto a cinquanta metri, ma tu sei dall’altra parte e
                non lo sai. Dieci, quindici minuti dopo hai bruciato carburante, umore e spesso
                anche l’orario dell’appuntamento.
              </p>
              <p>
                Non è solo “sfortuna”. È un problema di informazione. Il posto esiste nel momento
                in cui qualcuno lo libera. Senza un canale che colleghi uscita e arrivo in tempo
                reale, l’opportunità dura pochi minuti e poi sparisce. Tu continui a cercare;
                l’altro è già partito.
              </p>
              <p>
                Gli strumenti che abbiamo oggi risolvono pezzi diversi del puzzle. Il parcometro
                regola le strisce blu. Il garage vende un box o una sosta strutturata. Le mappe
                generiche indicano densità o parcheggi noti. Nessuno di questi fa la cosa semplice
                e urgente: <strong className="font-semibold text-ink">“sto uscendo adesso —
                qualcuno vuole questo posto?”</strong>
              </p>
              <p>
                Parker nasce da lì. Non inventa posti nuovi. Non sostituisce le regole della sosta
                pubblica. Rende visibile chi sta liberando e permette a chi cerca di prenotare a
                un prezzo fisso, con navigazione fino al punto. Meno giri a vuoto. Più scambio tra
                persone.
              </p>
              <Link
                href="/about"
                className="inline-flex pt-2 text-sm font-bold text-teal hover:underline"
              >
                Leggi tutta la pagina About →
              </Link>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-2xl">
                <Photo
                  src={IMAGES.traffic}
                  alt="Auto in fila in cerca di parcheggio"
                  className="h-56 w-full object-cover sm:h-64"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Photo
                  src={IMAGES.rainStreet}
                  alt="Strada cittadina sotto la pioggia"
                  className="h-44 w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                t: 'Tempo e carburante',
                d: 'Ogni giro a vuoto costa più di quanto pensi: minuti, litri, stress. Uno scambio a prezzo chiaro spesso conviene già al primo tentativo fallito di trovare posto da soli.',
              },
              {
                t: 'Finestra strettissima',
                d: 'Quando qualcuno esce, il posto è libero per pochi istanti. Senza segnale condiviso, acquirente e venditore si perdono anche se sono nello stesso isolato.',
              },
              {
                t: 'Strumenti incompleti',
                d: 'Parcometro, garage e mappe generiche non collegano uscita e arrivo nello stesso minuto. Parker fa esattamente quello — e solo quello, in questa fase.',
              },
            ].map((x) => (
              <article
                key={x.t}
                className="rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_20px_rgba(11,18,32,0.03)]"
              >
                <h3 className="font-display text-lg font-bold">{x.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{x.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Situazioni con foto */}
      <section className="border-y border-ink/8 bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Nella vita vera</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Quattro momenti in cui lo scambio ha senso
            </h2>
            <p className="mt-4 text-muted">
              Non serve un “caso speciale”. Serve densità di persone che escono e arrivano negli
              stessi orari. Ecco dove Parker diventa concreto.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {situations.map((s) => (
              <article
                key={s.title}
                className="overflow-hidden rounded-2xl border border-ink/8 bg-[#F5F6F8] shadow-[0_4px_20px_rgba(11,18,32,0.03)]"
              >
                <Photo src={s.img} alt={s.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* —— Come funziona —— */}
      <section id="come-funziona" className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Come funziona</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Dal credito sullo scambio, passo dopo passo
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              Il ciclo tipico dura pochi minuti. Ti registri, carichi un pacchetto sul portale,
              apri la mappa in app. Se esci: pubblichi. Se cerchi: prenoti e navighi. A chiusura,
              il credito si muove tra i wallet. Niente aste.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Segnali che esci',
                body: 'Stai lasciando il posto? Lo metti in vendita. Compari sulla mappa con un prezzo scelto tra i livelli disponibili sul tuo account. Chi cerca nella zona lo vede subito.',
                ill: <SwapSignalIllustration width={200} height={130} />,
              },
              {
                title: 'Qualcuno prenota',
                body: 'L’acquirente guarda distanza e prezzo, conferma col credito Parker. Tu ricevi notifica: qualcuno sta arrivando. Lo scambio entra nello stato tracciato.',
                ill: <ParkingSpotIllustration width={200} height={130} />,
              },
              {
                title: 'Arrivo e chiusura',
                body: 'Navigazione fino al punto. A scambio completato chi ha venduto riceve credito da riusare; chi arriva parcheggia. Eventuale valutazione: alimenta il ranking.',
                ill: <SwapExchangeIllustration width={200} height={130} />,
              },
            ].map((s, i) => (
              <article key={s.title} className="rounded-2xl border border-ink/8 bg-white p-6">
                <div className="mb-3 flex justify-center">{s.ill}</div>
                <p className="text-xs font-bold text-teal">Passo {i + 1}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-ink/8 bg-white">
              <Photo
                src={IMAGES.keys}
                alt="Chiavi auto e partenza"
                className="h-44 w-full object-cover"
              />
              <div className="p-7">
                <h3 className="font-display text-xl font-bold">Se stai uscendo (venditore)</h3>
                <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                  <li>
                    <strong className="text-ink">1.</strong> Apri Vendi, conferma il veicolo e il
                    punto. Scegli il livello di prezzo tra quelli sbloccati sul tuo profilo.
                  </li>
                  <li>
                    <strong className="text-ink">2.</strong> Pubblichi: il listing appare sulla
                    mappa. Aspetti la prenotazione restando raggiungibile dalle notifiche.
                  </li>
                  <li>
                    <strong className="text-ink">3.</strong> Quando qualcuno prende il posto, sai
                    che sta arrivando. A chiusura ricevi credito Parker da riusare.
                  </li>
                  <li>
                    <strong className="text-ink">4.</strong> Se le stelle del ranking sono basse,
                    puoi comunque vendere: resta disponibile il livello di prezzo più basso.
                  </li>
                </ol>
              </div>
            </article>
            <article className="overflow-hidden rounded-2xl border border-ink/8 bg-white">
              <Photo
                src={IMAGES.phoneNav}
                alt="Navigazione su smartphone"
                className="h-44 w-full object-cover"
              />
              <div className="p-7">
                <h3 className="font-display text-xl font-bold">Se cerchi un posto (acquirente)</h3>
                <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                  <li>
                    <strong className="text-ink">1.</strong> Apri Cerca sulla mappa. Vedi i listing
                    vicini con distanza e prezzo.
                  </li>
                  <li>
                    <strong className="text-ink">2.</strong> Controlli il totale prima di
                    confermare. Il pagamento esce dal credito già caricato sul portale.
                  </li>
                  <li>
                    <strong className="text-ink">3.</strong> Parti con la navigazione verso il
                    punto. Completi lo scambio quando arrivi e il posto si libera.
                  </li>
                  <li>
                    <strong className="text-ink">4.</strong> Se non riesci ad arrivare, annulla
                    secondo le regole di distanza e tempo: evita penali ranking inutili.
                  </li>
                </ol>
              </div>
            </article>
          </div>
          <div className="mt-10">
            <Link href="/come-funziona" className="text-sm font-bold text-teal hover:underline">
              Apri la guida completa Come funziona →
            </Link>
          </div>
        </div>
      </section>

      {/* Portale + app */}
      <section className="bg-ink px-5 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Portale e app</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Due superfici, un solo account
            </h2>
            <p className="mt-4 text-white/65 leading-relaxed">
              Non è un dettaglio tecnico: è il modo in cui Parker tiene i pagamenti sul web e lo
              scambio sulla mappa. Stesse credenziali ovunque.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <Photo
                src={IMAGES.laptop}
                alt="Portale web su laptop"
                className="h-48 w-full object-cover opacity-90"
              />
              <div className="p-7">
                <h3 className="font-display text-xl font-bold">Sul portale web</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                  <li>· Registrazione / login</li>
                  <li>· Acquisto pacchetti (Prova, Carnet, Mensile, Semestrale, Annuale)</li>
                  <li>· Wallet, movimenti, missioni</li>
                  <li>· Invita amici (codice, link, QR)</li>
                  <li>· Ranking / reputazione in dettaglio</li>
                  <li>· Profilo, veicoli, supporto</li>
                </ul>
              </div>
            </article>
            <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <div className="flex justify-center bg-[#152033] py-8">
                <AppMapPreview />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold">In app</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                  <li>· Mappa: cerca e prenota posti</li>
                  <li>· Vendi: pubblica il posto quando esci</li>
                  <li>· Navigazione fino al punto dello scambio</li>
                  <li>· Notifiche e stato sessione in corso</li>
                  <li>· Wallet in sola lettura + link al portale</li>
                  <li>· Account, veicoli, invita amici, reputazione</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Dettaglio prodotto</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Cosa c’è dentro Parker oggi
            </h2>
            <p className="mt-4 text-muted">
              Funzioni dello scambio P2P. Niente elenco di servizi futuri: solo ciò che usi per
              cercare, vendere e chiudere un posto.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="flex flex-col rounded-2xl border border-ink/8 bg-white p-6"
              >
                <div className="mb-2 flex justify-center">{f.icon}</div>
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{f.body}</p>
              </article>
            ))}
          </div>

          <div className="relative mt-12 overflow-hidden rounded-2xl">
            <Photo
              src={IMAGES.carsRow}
              alt="Fila di auto parcheggiate in città"
              className="h-56 w-full object-cover sm:h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-xl p-8">
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                Più gente pubblica posti nella tua zona, più la mappa ha senso.
              </p>
              <p className="mt-3 text-sm text-white/70">
                Parker funziona in tutta Italia: la densità locale decide quanti listing vedi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* —— Prezzi —— */}
      <section id="prezzi" className="border-y border-ink/8 bg-white px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Prezzi</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Pacchetti di credito sul portale
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Non c’è una ricarica libera a importo a piacere. Scegli un pacchetto o un piano,
                paghi con carta sul portale, usi il credito in app. Uno scambio parte da €1,20: il
                prezzo esatto dello scambio lo vedi sempre sul listing prima di confermare.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Photo
                src={IMAGES.mapHands}
                alt="Persona che consulta una mappa"
                className="h-48 w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col rounded-2xl border p-5 ${
                  pkg.featured
                    ? 'border-teal bg-ink text-white shadow-lg sm:col-span-2 lg:col-span-1'
                    : 'border-ink/10 bg-[#F5F6F8]'
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
                <p className={`mt-1 text-xs ${pkg.featured ? 'text-white/55' : 'text-muted'}`}>
                  {pkg.credit}
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm">
                  {pkg.points.map((pt) => (
                    <li key={pt} className={pkg.featured ? 'text-white/70' : 'text-muted'}>
                      · {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                t: 'Strisce blu separate',
                d: 'Il prezzo dello scambio non include il ticket del parcometro. Se il posto è a pagamento sul suolo pubblico, lo gestisci come sempre.',
              },
              {
                t: 'Mensile = autorinnovo',
                d: 'Il piano Mensile 20 si rinnova finché non lo disdici dal portale. Semestrale e Annuale sono pagamenti per il periodo indicato.',
              },
              {
                t: 'Limiti anti-abuso',
                d: 'Esiste un tetto giornaliero sugli acquisti personali. I pacchetti una tantum non-mensili hanno regole di frequenza: i dettagli restano sul portale al checkout.',
              },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-5">
                <h3 className="font-display font-bold">{x.t}</h3>
                <p className="mt-2 text-sm text-muted">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/prezzi"
              className="mr-4 text-sm font-bold text-teal hover:underline"
            >
              Pagina Prezzi completa →
            </Link>
            <a
              href={portalPath('/signup')}
              className="inline-flex rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-ink hover:bg-[#00b896]"
            >
              Registrati e scegli un pacchetto
            </a>
          </div>
        </div>
      </section>

      {/* Missioni */}
      <section id="missioni" className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Missioni</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Obiettivi chiari, premi sullo scambio
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Le missioni ti spingono a usare Parker in modo utile: vendere posti, completare
                scambi, tornare con costanza. I premi in credito servono{' '}
                <strong className="text-ink">solo per gli swap</strong>, scadono in pochi giorni e
                hanno un tetto mensile. Non modificano stelle o ranking — sono sistemi separati.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Le trovi sul portale (e nel percorso account in app). Al completamento il premio
                viene erogato in automatico quando le condizioni sono soddisfatte. Per i venditori
                più attivi esistono anche traguardi più lunghi (trimestrali / annuali) con premi
                dedicati: li vedi nel dettaglio missioni quando sei loggato.{' '}
                <Link href="/missioni" className="font-bold text-teal hover:underline">
                  Guida Missioni →
                </Link>
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Photo
                src={IMAGES.parkingLot}
                alt="Parcheggio visto dall’alto"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {missions.map((m) => (
              <article
                key={m.title}
                className="rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_16px_rgba(11,18,32,0.03)]"
              >
                <h3 className="font-display text-lg font-bold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking teaser + foto */}
      <section className="relative overflow-hidden bg-ink px-5 py-20 sm:py-24">
        <Image
          src={IMAGES.skyline}
          alt=""
          fill
          unoptimized
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto max-w-6xl text-white">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Ranking</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Le stelle misurano l’affidabilità — non una classifica pubblica
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Vedi solo il tuo punteggio e perché sale o scende: completamenti, annulli,
            segnalazioni, valutazioni. Se le stelle sono basse puoi comunque vendere, ma solo al
            livello di prezzo più basso. Le missioni non toccano il ranking. Invita amici resta
            sempre disponibile.
          </p>
          <Link
            href="/ranking"
            className="mt-8 inline-flex rounded-full bg-teal px-6 py-3 text-sm font-bold text-ink hover:bg-[#00b896]"
          >
            Leggi la guida completa al ranking
          </Link>
        </div>
      </section>

      {/* Invita */}
      <section id="invita" className="border-t border-ink/8 bg-white px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-2xl">
              <Photo
                src={IMAGES.friends}
                alt="Amici che condividono un momento"
                className="h-80 w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">
                Invita un amico
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Condividi il codice. Guadagni quando scambia.
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Il referral Parker non premia il solo download. Premia quando l’amico entra con il
                tuo invito e completa il <strong className="text-ink">primo scambio</strong>. Così
                cresce la mappa con persone che usano davvero il prodotto — non solo account vuoti.
              </p>
              <p className="mt-3 text-muted leading-relaxed">
                Tu ricevi €2,50 di credito bonus usabile sugli scambi. L’invitato non riceve un
                bonus di ingresso da referral. Ogni tre amici qualificati il blocco vale €10
                totali; il meccanismo è ripetibile.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {referralSteps.map((s) => (
              <article
                key={s.n}
                className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6"
              >
                <span className="font-display text-3xl font-bold text-teal/30">{s.n}</span>
                <h3 className="mt-2 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-ink/8 bg-[#F5F6F8] p-7 sm:p-8">
            <h3 className="font-display text-xl font-bold">In sintesi</h3>
            <div className="mt-4 grid gap-4 text-sm text-muted md:grid-cols-3">
              <p>
                <strong className="text-ink">Codice solo in registrazione.</strong> Dopo non si
                aggancia più. Anti-abuso, non optional.
              </p>
              <p>
                <strong className="text-ink">Bonus in attesa</strong> fino al primo swap
                dell’amico. Poi spendibile subito sugli scambi.
              </p>
              <p>
                <strong className="text-ink">Niente prelievo bancario.</strong> Come tutto il
                credito Parker, resta nel circuito.
              </p>
            </div>
            <a
              href={portalPath('/signup')}
              className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-bold text-white hover:bg-ink/90"
            >
              Registrati e apri Invita amici
            </a>
            <Link
              href="/invita"
              className="mt-4 inline-flex text-sm font-bold text-teal hover:underline sm:mt-6 sm:ml-4"
            >
              Pagina Invita completa →
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery band */}
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-3">
          {[
            [IMAGES.streetParked, 'Auto in sosta'],
            [IMAGES.parkingLot, 'Parcheggio'],
            [IMAGES.street, 'Guida in città'],
          ].map(([src, alt]) => (
            <div key={alt} className="overflow-hidden rounded-2xl">
              <Photo src={src} alt={alt} className="h-44 w-full object-cover sm:h-56" />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-ink/8 bg-white px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-bold">Domande frequenti</h2>
          <p className="mt-3 text-sm text-muted">
            Risposte su ciò che Parker fa oggi. Per il dettaglio ranking c’è la{' '}
            <Link href="/ranking" className="font-semibold text-teal hover:underline">
              pagina dedicata
            </Link>
            .
          </p>
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
                    <span className="pr-2 font-semibold leading-snug">{item.q}</span>
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-sm font-bold text-teal">
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
      <section className="relative overflow-hidden bg-teal px-5 py-16 text-center text-ink sm:py-20">
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Inizia dallo scambio. Una cosa alla volta.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink/75">
            Registrati, scegli un pacchetto sul portale, usa la mappa. Ranking, missioni e invita
            amici ti accompagnano mentre usi il prodotto — non sono promesse separate.
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
        </div>
      </section>

      <SiteFooter />
      <CookieBar />
    </main>
  );
}
