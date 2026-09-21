import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader, SiteFooter, CookieBar } from '../components/site-chrome';
import { CtaBand, RelatedLinks } from '../components/page-chrome';
import { portalPath } from '../lib/urls';
import { IMAGES } from '../lib/images';

export const metadata: Metadata = {
  title: 'Ranking — Parker',
  description:
    'Guida al ranking Parker: stelle, affidabilità, cosa lo fa salire o scendere, effetti sulla vendita, differenza con le missioni.',
};

const events = [
  {
    title: 'Scambio completato con valutazione positiva',
    effect: 'Sostiene il punteggio',
    detail:
      'Dopo lo swap puoi lasciare una valutazione. Un feedback buono conferma che lo scambio è andato come previsto e sostiene lo score.',
  },
  {
    title: 'Valutazione negativa',
    effect: 'Punteggio in calo',
    detail:
      'Un feedback basso dopo lo scambio riduce lo score. Conta il comportamento reale sull’incontro, non le missioni o gli inviti.',
  },
  {
    title: 'Annullamento acquirente in ritardo',
    effect: 'Penale ranking',
    detail:
      'Se annulli quando sei ancora lontano (oltre la soglia di distanza) ma negli ultimi minuti di attesa del venditore, puoi prendere una penale sul punteggio. Fuori da quella finestra, annullo lontano = rimborso senza penale ranking.',
  },
  {
    title: 'Venditore che cancella un posto già riservato',
    effect: 'Penale ranking',
    detail:
      'Pubblicare e poi togliere un listing già preso danneggia chi stava arrivando. Il ranking registra questo comportamento.',
  },
  {
    title: 'Segnalazione (report) approvata',
    effect: 'Impatto su chi è in torto',
    detail:
      'Le segnalazioni passano da triage. Se approvate, possono colpire il ranking di chi ha sbagliato. Segnalare a caso non conviene: un report respinto può colpire chi ha segnalato male.',
  },
];

const faq = [
  {
    q: 'Vedo la classifica degli altri?',
    a: 'No. Vedi solo il tuo punteggio, le stelle e le motivazioni. Non c’è una leaderboard pubblica.',
  },
  {
    q: 'Le missioni alzano le stelle?',
    a: 'No. Missioni e ranking sono sistemi separati. Completare missioni non manipola l’affidabilità.',
  },
  {
    q: 'Se ho poche stelle posso ancora vendere?',
    a: 'Sì. Non sei bloccato. Sotto soglia (di default sotto 4★) puoi vendere solo al livello di prezzo più basso.',
  },
  {
    q: 'Posso ancora invitare amici con ranking basso?',
    a: 'Sì. Gli inviti restano sempre disponibili.',
  },
];

export default function RankingPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F8] text-ink">
      <SiteHeader dark />

      <section className="relative overflow-hidden border-b border-ink/8 bg-ink px-5 pb-16 pt-28 text-white">
        <Image
          src={IMAGES.evening}
          alt=""
          fill
          unoptimized
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Ranking</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Affidabilità a stelle — solo la tua
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Il ranking misura quanto sei affidabile negli scambi. Non è una classifica pubblica e
            non si compra con le missioni. Serve a proteggere chi compra e chi vende quando il
            posto si libera in strada.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-5 text-[15px] leading-relaxed text-muted">
            <h2 className="font-display text-2xl font-bold text-ink">Cos’è in pratica</h2>
            <p>
              Dietro le stelle c’è uno score interno. Circa cento punti corrispondono a una stella.
              Il risultato resta tra 1 e 5 stelle. Lo vedi in Home (riepilogo) e in Account →
              Reputazione (dettaglio con legenda e motivazioni).
            </p>
            <p>
              Ogni variazione ha una ragione leggibile: non è un numero astratto. Se scendi, sai
              perché. Se sali, sai cosa ha contato. L’obiettivo è rendere prevedibile lo scambio
              tra sconosciuti al bordo strada.
            </p>
            <p>
              Non c’è una classifica degli altri utenti. Non puoi “comprare” stelle con gamification
              o inviti. Ranking e missioni sono intenzionalmente separati.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.keys}
              alt="Chiavi auto"
              width={1200}
              height={900}
              unoptimized
              className="h-72 w-full object-cover sm:h-80"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Cosa cambia se le stelle scendono
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Il ranking non è un muro. È un freno progressivo sul prezzo di vendita quando
            l’affidabilità cala.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6">
              <h3 className="font-display text-lg font-bold">Venditore</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Puoi sempre pubblicare un posto. Se sei sotto soglia (di default sotto 4★), puoi
                vendere solo al <strong className="text-ink">livello di prezzo più basso</strong>.
                Non sei bloccato: hai meno scelta sul prezzo fino a recuperare stelle.
              </p>
            </article>
            <article className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6">
              <h3 className="font-display text-lg font-bold">Acquirente</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Nessun blocco dal ranking sul cercare e prenotare. Continui a usare la mappa.
                Eccezione solo in caso di sospensione o ban dell’account.
              </p>
            </article>
            <article className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6">
              <h3 className="font-display text-lg font-bold">Inviti e missioni</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Puoi sempre invitare amici. Completare missioni non alza le stelle. Il ranking resta
                il sistema di fiducia sugli scambi.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Cosa lo fa muovere</h2>
          <p className="mt-3 text-sm text-muted">
            Esempi tipici. Gli importi esatti possono essere aggiornati in configurazione; in app
            vedi sempre la motivazione accanto alla variazione.
          </p>
          <div className="mt-8 space-y-4">
            {events.map((e) => (
              <article
                key={e.title}
                className="rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_16px_rgba(11,18,32,0.03)]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-bold">{e.title}</h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal">
                    {e.effect}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{e.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-white px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.phoneNav}
              alt="Smartphone in auto"
              width={1200}
              height={900}
              unoptimized
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Come tenerlo alto</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
              <li className="flex gap-3">
                <span className="text-teal">·</span>
                Completa gli scambi che accetti; non cancellare listing già prenotati senza motivo
                serio.
              </li>
              <li className="flex gap-3">
                <span className="text-teal">·</span>
                Se sei acquirente e non riesci ad arrivare, annulla per tempo — evita la finestra
                “ultimi minuti / ancora lontano”.
              </li>
              <li className="flex gap-3">
                <span className="text-teal">·</span>
                Segnala solo problemi reali: il triage esiste per evitare abusi su entrambi i lati.
              </li>
              <li className="flex gap-3">
                <span className="text-teal">·</span>
                Lascia valutazioni oneste: aiutano chi viene dopo di te e rendono il sistema più
                leggibile.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Domande sul ranking</h2>
          <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {faq.map((item) => (
              <div key={item.q} className="py-5">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={portalPath('/signup')}
              className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-bold text-ink hover:bg-[#00b896]"
            >
              Registrati
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold hover:bg-ink/5"
            >
              Torna alla home
            </Link>
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/missioni', label: 'Missioni', desc: 'Premi solo-swap, separati dal ranking.' },
          { href: '/come-funziona', label: 'Come funziona', desc: 'Come gli scambi influenzano le stelle.' },
          { href: '/invita', label: 'Invita un amico', desc: 'Gli inviti non dipendono dal ranking.' },
        ]}
      />

      <CtaBand />
      <SiteFooter />
      <CookieBar />
    </main>
  );
}
