import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader, SiteFooter, CookieBar } from '../components/site-chrome';
import { PageHero, CtaBand, RelatedLinks } from '../components/page-chrome';
import { MISSIONS } from '../lib/content';
import { IMAGES } from '../lib/images';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Missioni — Parker',
  description:
    'Come funzionano le missioni Parker: vendi 3, ogni 10 vendite, 5 scambi a settimana, streak badge. Premi solo-swap, tetto mensile, niente impatto sul ranking.',
};

export default function MissioniPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F8] text-ink">
      <SiteHeader dark />
      <PageHero
        eyebrow="Missioni"
        title="Obiettivi semplici, premi sullo scambio"
        lead="Le missioni ti spingono a usare Parker in modo utile: vendere posti, completare scambi, tornare con costanza. I premi in credito servono solo per gli swap, scadono in pochi giorni e hanno un tetto mensile. Non toccano il ranking."
        image={IMAGES.parkingLot}
      />

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4 text-[15px] leading-relaxed text-muted">
              <h2 className="font-display text-2xl font-bold text-ink">A cosa servono</h2>
              <p>
                Non sono un gioco a sé. Servono a tenere viva la mappa: più posti pubblicati e più
                scambi completati nella zona significano meno giri a vuoto per tutti.
              </p>
              <p>
                Le trovi sul portale (e nel percorso account in app). Quando le condizioni sono
                soddisfatte, il premio viene erogato in automatico. I premi monetari sono credito
                spesso utilizzabile solo sugli scambi, con scadenza breve (tipicamente 5–7 giorni):
                va usato, non accumulato all’infinito.
              </p>
              <p>
                C’è un tetto mensile sui premi ricorrenti: evita abusi e tiene sostenibile il
                sistema. Le missioni <strong className="text-ink">non modificano le stelle</strong>:
                ranking e gamification restano separati di proposito.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={IMAGES.streetParked}
                alt="Auto in sosta in strada"
                width={1200}
                height={900}
                unoptimized
                className="h-72 w-full object-cover sm:h-80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Le missioni principali</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Elenco in sintesi. In app e sul portale vedi avanzamento e stato aggiornato del tuo
            account.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {MISSIONS.map((m) => (
              <article
                key={m.title}
                className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6"
              >
                <p className="text-[11px] font-bold uppercase tracking-wider text-teal">{m.kind}</p>
                <h3 className="mt-2 font-display text-xl font-bold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Traguardi più lunghi</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                t: '100 vendite nel trimestre',
                d: 'Premio dedicato per chi tiene alta l’offerta nel trimestre solare. Dettaglio e stato sul portale quando sei loggato.',
              },
              {
                t: '200 vendite nello stesso trimestre',
                d: 'Traguardo cumulativo nello stesso periodo. I 100 contano verso i 200. Reset a fine trimestre (calendario Roma).',
              },
              {
                t: '500 vendite nell’anno',
                d: 'Traguardo annuale per i venditori più attivi. Fuori dal tetto dei premi ricorrenti mensili. Dettaglio in missioni account.',
              },
            ].map((x) => (
              <article key={x.t} className="rounded-2xl border border-ink/8 bg-white p-6">
                <h3 className="font-display text-lg font-bold">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Non elenchiamo qui importi o meccaniche che possono cambiare in configurazione: quando
            sei loggato vedi regole e avanzamento aggiornati.
          </p>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-white px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold">Cosa le missioni non fanno</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
              <li>· Non alzano né abbassano il ranking a stelle</li>
              <li>· Non premiamo le segnalazioni (report) — genererebbero abusi</li>
              <li>· Non trasformano i premi in prelievo bancario</li>
              <li>· Non sostituiscono i pacchetti di credito sul portale</li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              Per l’affidabilità negli scambi leggi la{' '}
              <Link href="/ranking" className="font-semibold text-teal hover:underline">
                guida al ranking
              </Link>
              .
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.parkingLot}
              alt="Parcheggio"
              width={1200}
              height={800}
              unoptimized
              className="h-64 w-full object-cover sm:h-72"
            />
          </div>
        </div>
      </section>

      <div className="px-5 py-10 text-center">
        <a
          href={portalPath('/signup')}
          className="inline-flex rounded-full bg-ink px-7 py-3 text-sm font-bold text-white hover:bg-ink/90"
        >
          Registrati e vedi le missioni sul portale
        </a>
      </div>

      <RelatedLinks
        items={[
          { href: '/ranking', label: 'Ranking', desc: 'Stelle e affidabilità (sistema separato).' },
          { href: '/invita', label: 'Invita un amico', desc: 'Bonus quando l’amico scambia.' },
          { href: '/prezzi', label: 'Prezzi', desc: 'Pacchetti di credito.' },
        ]}
      />
      <CtaBand />
      <SiteFooter />
      <CookieBar />
    </main>
  );
}
