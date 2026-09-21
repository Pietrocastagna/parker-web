import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader, SiteFooter, CookieBar } from '../components/site-chrome';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Ranking — Parker',
  description:
    'Come funziona il ranking Parker: stelle, affidabilità, effetti sulla vendita, cosa lo fa salire o scendere.',
};

const events = [
  {
    title: 'Scambio completato bene',
    effect: 'Valutazione positiva',
    detail: 'Dopo lo swap puoi lasciare una valutazione. Un feedback buono sostiene il punteggio.',
  },
  {
    title: 'Valutazione negativa',
    effect: 'Punteggio in calo',
    detail: 'Un feedback basso dopo lo scambio riduce lo score. Conta il comportamento reale, non le missioni.',
  },
  {
    title: 'Annullamento dell’acquirente in ritardo',
    effect: 'Penale ranking',
    detail:
      'Se annulli quando sei ancora lontano ma negli ultimi minuti di attesa del venditore, puoi prendere una penale (es. −15 sul punteggio). Fuori da quella finestra, annullo lontano = rimborso senza penale ranking.',
  },
  {
    title: 'Venditore che cancella un posto già riservato',
    effect: 'Penale ranking',
    detail: 'Pubblicare e poi togliere un listing già preso danneggia chi stava arrivando: il ranking lo registra.',
  },
  {
    title: 'Segnalazione (report) approvata',
    effect: 'Impatto su chi è in torto',
    detail:
      'Le segnalazioni passano da triage. Se approvate, possono colpire il ranking (e in casi gravi altre misure). Segnalare a caso non conviene: un report respinto può colpire chi ha segnalato male.',
  },
];

export default function RankingPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F8] text-ink">
      <SiteHeader dark />

      <section className="border-b border-ink/8 bg-ink px-5 pb-16 pt-28 text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">Ranking</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Affidabilità a stelle — solo la tua
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Il ranking misura quanto sei affidabile negli scambi. Non è una classifica pubblica:
            vedi il tuo punteggio, le stelle e le motivazioni. Serve a proteggere chi compra e chi
            vende.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-[15px] leading-relaxed text-muted">
          <h2 className="font-display text-2xl font-bold text-ink">Cos’è in pratica</h2>
          <p>
            Dietro le stelle c’è uno score interno. Circa cento punti corrispondono a una stella.
            Restano tra 1 e 5 stelle. Lo vedi in Home (riepilogo) e in Account → Reputazione
            (dettaglio con legenda).
          </p>
          <p>
            Non c’è una classifica degli altri utenti. Non puoi “comprare” stelle con le missioni:
            gamification e ranking sono sistemi separati.
          </p>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Cosa cambia se le stelle scendono</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6">
              <h3 className="font-display text-lg font-bold">Venditore</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Puoi sempre pubblicare un posto. Se sei sotto soglia (di default sotto 4★), puoi
                vendere solo al <strong className="text-ink">livello di prezzo più basso</strong>.
                Non sei bloccato: hai meno scelta sul prezzo.
              </p>
            </article>
            <article className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6">
              <h3 className="font-display text-lg font-bold">Acquirente</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Nessun blocco dal ranking. Continui a cercare e prenotare. Eccezione solo in caso
                di sospensione o ban dell’account.
              </p>
            </article>
            <article className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6 sm:col-span-2">
              <h3 className="font-display text-lg font-bold">Inviti e missioni</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Puoi sempre invitare amici. Completare missioni non alza le stelle. Il ranking
                resta il sistema di fiducia sugli scambi.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Cosa lo fa muovere</h2>
          <p className="mt-3 text-sm text-muted">
            Esempi tipici (gli importi esatti possono essere aggiornati in configurazione; in app
            vedi sempre la motivazione accanto alla variazione).
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

      <section className="border-t border-ink/8 bg-white px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Come tenerlo alto</h2>
          <ul className="mt-6 space-y-3 text-sm text-muted">
            <li className="flex gap-3">
              <span className="text-teal">·</span>
              Completa gli scambi che accetti; non cancellare listing già prenotati senza motivo.
            </li>
            <li className="flex gap-3">
              <span className="text-teal">·</span>
              Se sei acquirente, annulla per tempo se non riesci ad arrivare — evita la finestra
              “ultimi minuti / ancora lontano”.
            </li>
            <li className="flex gap-3">
              <span className="text-teal">·</span>
              Segnala solo problemi reali: il triage esiste proprio per evitare abusi.
            </li>
            <li className="flex gap-3">
              <span className="text-teal">·</span>
              Lascia valutazioni oneste: aiutano chi viene dopo di te.
            </li>
          </ul>

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

      <SiteFooter />
      <CookieBar />
    </main>
  );
}
