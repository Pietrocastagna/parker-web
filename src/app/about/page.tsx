import type { Metadata } from 'next';
import { SiteImage as Image } from '../components/site-image';
import { SiteHeader, SiteFooter, CookieBar } from '../components/site-chrome';
import { PageHero, CtaBand, RelatedLinks } from '../components/page-chrome';
import { IMAGES } from '../lib/images';

export const metadata: Metadata = {
  title: 'About — Parker',
  description:
    'Cos’è Parker, perché esiste, quale problema risolve. Scambio di parcheggi tra automobilisti in Italia.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F8] text-ink">
      <SiteHeader dark />
      <PageHero
        eyebrow="About"
        title="Cos’è Parker e perché esiste"
        lead="Parker collega chi sta liberando un posto auto e chi lo sta cercando — nello stesso momento. Non è un garage e non è un parcometro: è uno scambio tra persone, con credito sul portale e mappa in app."
        image={IMAGES.streetParked}
      />

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-[15px] leading-relaxed text-muted">
            <h2 className="font-display text-2xl font-bold text-ink">In una frase</h2>
            <p>
              Qualcuno sta uscendo. Qualcuno sta cercando. Parker fa sì che si trovino, con un
              prezzo fisso sullo scambio e navigazione fino al punto.
            </p>
            <p>
              L’idea non è inventare posti nuovi: è rendere visibile un’opportunità che già esiste
              per pochi minuti e poi sparisce. Senza segnale condiviso, chi esce e chi arriva si
              perdono anche se sono nello stesso isolato.
            </p>
            <p>
              In questa fase il prodotto è solo lo scambio tra automobilisti. Credito, ranking,
              missioni e invita un amico esistono per far funzionare meglio quello scambio — non
              come servizi separati “promessi”.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.traffic}
              alt="Traffico urbano"
              width={1400}
              height={1000}
              unoptimized
              className="h-full min-h-[280px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Il problema che risolviamo</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                Chi guida in città italiane conosce la scena: stazione, ospedale, ufficio, centro
                storico, zona mare nel weekend. Arrivi e inizi a girare. Passi due volte nello
                stesso isolato. Qualcuno esce dal posto a cinquanta metri, ma tu sei dall’altra
                parte e non lo sai.
              </p>
              <p>
                Dieci o quindici minuti dopo hai bruciato carburante, umore e spesso anche l’orario
                dell’appuntamento. Non è solo sfortuna: è un problema di informazione. Il posto
                esiste nel momento in cui qualcuno lo libera. Senza canale in tempo reale,
                l’opportunità dura poco e poi sparisce.
              </p>
              <p>
                Parcometro, garage e mappe generiche risolvono pezzi diversi. Nessuno collega uscita
                e arrivo nello stesso minuto. Parker fa esattamente quello.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                ['Tempo perso', 'Giri a vuoto, ritardi, stress ripetuto nello stesso quartiere.'],
                ['Segnale assente', 'Chi esce e chi arriva non si vedono: la finestra è strettissima.'],
                ['Strumenti incompleti', 'Parcometro e garage non fanno lo scambio “ora” tra persone.'],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-5">
                  <h3 className="font-display font-bold">{t}</h3>
                  <p className="mt-2 text-sm text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Cosa Parker è (e cosa non è)</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-teal/30 bg-white p-7">
              <h3 className="font-display text-xl font-bold text-teal">È</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                <li>· Uno scambio P2P di posti auto tra automobilisti</li>
                <li>· Una mappa con listing in tempo reale</li>
                <li>· Credito chiuso nel circuito (pacchetti sul portale)</li>
                <li>· Ranking di affidabilità, missioni, invita un amico</li>
                <li>· Disponibile come idea di prodotto per tutta Italia</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-ink/8 bg-white p-7">
              <h3 className="font-display text-xl font-bold">Non è</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                <li>· Un sostituto del parcometro / strisce blu</li>
                <li>· Un garage o un servizio di box</li>
                <li>· Un lavaggio auto o un marketplace generico</li>
                <li>· Un modo per prelevare contanti in banca</li>
                <li>· Un’asta o una chat di negoziazione sul prezzo</li>
              </ul>
            </article>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[IMAGES.rainStreet, IMAGES.night, IMAGES.carsRow].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt=""
                  width={800}
                  height={600}
                  unoptimized
                  className="h-40 w-full object-cover sm:h-48"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/8 bg-white px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-5 text-[15px] leading-relaxed text-muted">
          <h2 className="font-display text-2xl font-bold text-ink">Come ci arrivi tu</h2>
          <p>
            Ti registri, scegli un pacchetto di credito sul portale, apri l’app e usi la mappa.
            Se esci: pubblichi. Se cerchi: prenoti e navighi. Ranking e missioni ti accompagnano
            mentre usi il prodotto; invita un amico fa crescere la densità nella tua zona.
          </p>
          <p>
            La qualità del servizio nella tua città dipende da quanti utenti pubblicano posti
            vicino a te. Più densità locale, più listing sulla mappa — e meno giri a vuoto.
          </p>
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            href: '/come-funziona',
            label: 'Come funziona',
            desc: 'Passi da venditore e acquirente, portale e app.',
          },
          { href: '/prezzi', label: 'Prezzi', desc: 'Pacchetti Prova, Carnet, Mensile, Semestrale, Annuale.' },
          { href: '/ranking', label: 'Ranking', desc: 'Stelle, affidabilità, cosa sale e scende.' },
        ]}
      />
      <CtaBand />
      <SiteFooter />
      <CookieBar />
    </main>
  );
}
