import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteHeader, SiteFooter, CookieBar } from '../components/site-chrome';
import { PageHero, CtaBand, RelatedLinks } from '../components/page-chrome';
import { AppMapPreview } from '../components/app-map-preview';
import {
  ParkingSpotIllustration,
  SwapSignalIllustration,
  SwapExchangeIllustration,
} from '../components/illustrations';
import { IMAGES } from '../lib/images';

export const metadata: Metadata = {
  title: 'Come funziona — Parker',
  description:
    'Come funziona Parker passo dopo passo: vendere, comprare, credito sul portale, mappa in app, navigazione e chiusura scambio.',
};

export default function ComeFunzionaPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F8] text-ink">
      <SiteHeader dark />
      <PageHero
        eyebrow="Come funziona"
        title="Dal credito allo scambio, senza aste"
        lead="Ti registri, carichi un pacchetto sul portale, apri la mappa. Se esci pubblichi il posto; se cerchi lo prenoti e navighi. A chiusura il credito si muove. Prezzo fisso, sempre visibile prima di confermare."
        image={IMAGES.mapHands}
      />

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Il ciclo in tre mosse</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Il ciclo tipico dura pochi minuti. Non c’è negoziazione sul prezzo: scegli o accetti un
            livello chiaro e procedi.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                t: 'Segnali',
                d: 'Pubblichi il posto mentre esci. Compari sulla mappa con il livello di prezzo disponibile sul tuo profilo.',
                ill: <SwapSignalIllustration width={200} height={130} />,
              },
              {
                t: 'Prenota',
                d: 'Chi cerca vede distanza e prezzo, conferma col credito Parker. Tu ricevi notifica: qualcuno sta arrivando.',
                ill: <ParkingSpotIllustration width={200} height={130} />,
              },
              {
                t: 'Chiudi',
                d: 'Navigazione fino al punto. A scambio completato chi ha venduto riceve credito da riusare; chi arriva parcheggia.',
                ill: <SwapExchangeIllustration width={200} height={130} />,
              },
            ].map((s, i) => (
              <article key={s.t} className="rounded-2xl border border-ink/8 bg-white p-6">
                <div className="mb-3 flex justify-center">{s.ill}</div>
                <p className="text-xs font-bold text-teal">Passo {i + 1}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Se stai uscendo — venditore</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
            <ol className="space-y-5 text-[15px] leading-relaxed text-muted">
              <li>
                <strong className="text-ink">1. Apri Vendi.</strong> Confermi veicolo e punto.
                Scegli il livello di prezzo tra quelli sbloccati sul tuo profilo (il ranking può
                limitarti al livello più basso se le stelle sono basse).
              </li>
              <li>
                <strong className="text-ink">2. Pubblichi.</strong> Il listing appare sulla mappa
                per chi cerca nella zona. Restano attive le notifiche.
              </li>
              <li>
                <strong className="text-ink">3. Aspetti la prenotazione.</strong> Quando qualcuno
                prende il posto, sai che sta arrivando e in che stato è lo scambio.
              </li>
              <li>
                <strong className="text-ink">4. Chiudi e incassi credito.</strong> A completamento
                ricevi credito Parker da riusare al prossimo swap. Non è un prelievo in banca.
              </li>
              <li>
                <strong className="text-ink">5. Valutazione.</strong> Il feedback post-scambio
                alimenta il ranking — sistema di fiducia, non gamification.
              </li>
            </ol>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={IMAGES.keys}
                alt="Partenza dall’auto"
                width={1200}
                height={900}
                unoptimized
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Se cerchi un posto — acquirente</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="overflow-hidden rounded-2xl lg:order-2">
              <Image
                src={IMAGES.phoneNav}
                alt="Navigazione sul telefono"
                width={1200}
                height={900}
                unoptimized
                className="h-80 w-full object-cover"
              />
            </div>
            <ol className="space-y-5 text-[15px] leading-relaxed text-muted lg:order-1">
              <li>
                <strong className="text-ink">1. Apri Cerca.</strong> Sulla mappa vedi i listing
                vicini: distanza, prezzo, stima di arrivo.
              </li>
              <li>
                <strong className="text-ink">2. Controlli e confermi.</strong> Il prezzo è fisso e
                visibile prima. Il pagamento esce dal credito già caricato sul portale.
              </li>
              <li>
                <strong className="text-ink">3. Navighi al punto.</strong> Parti verso le
                coordinate. Meno giri a vuoto, più arrivo mirato.
              </li>
              <li>
                <strong className="text-ink">4. Completi lo scambio.</strong> Quando arrivi e il
                posto si libera, chiudi. Eventuale valutazione.
              </li>
              <li>
                <strong className="text-ink">5. Se non ce la fai.</strong> Annulla secondo le
                regole di distanza e tempo: evita penali ranking nella finestra “ultimi minuti /
                ancora lontano”.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Portale e app</h2>
            <p className="mt-4 text-white/65 leading-relaxed">
              I pagamenti stanno sul web. Lo scambio sta sulla mappa. Stesso account ovunque.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="font-display font-bold">Portale</h3>
                <p className="mt-2 text-sm text-white/60">
                  Registrazione, pacchetti, wallet, missioni, invita, ranking, profilo, supporto.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="font-display font-bold">App</h3>
                <p className="mt-2 text-sm text-white/60">
                  Mappa, vendi, navigazione, notifiche, sessione in corso, wallet in lettura.
                </p>
              </div>
            </div>
          </div>
          <AppMapPreview />
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted">
          <h2 className="font-display text-2xl font-bold text-ink">Cosa tenere a mente</h2>
          <p>
            Le strisce blu non sono incluse nel prezzo dello scambio. Il credito non si preleva in
            banca. Il ranking misura affidabilità; le missioni danno premi solo-swap e non toccano
            le stelle. Invita un amico premia solo dopo il primo scambio dell’invitato.
          </p>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/prezzi', label: 'Prezzi e pacchetti', desc: 'Prova, Carnet, Mensile, Semestrale, Annuale.' },
          { href: '/missioni', label: 'Missioni', desc: 'Obiettivi e premi sullo scambio.' },
          { href: '/invita', label: 'Invita un amico', desc: 'Codice, link, QR e bonus.' },
        ]}
      />
      <CtaBand title="Pronto a fare il primo passo?" />
      <SiteFooter />
      <CookieBar />
    </main>
  );
}
