import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteHeader, SiteFooter, CookieBar } from '../components/site-chrome';
import { PageHero, CtaBand, RelatedLinks } from '../components/page-chrome';
import { IMAGES } from '../lib/images';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Invita un amico — Parker',
  description:
    'Come funziona Invita un amico su Parker: codice, link, QR, €2,50 al primo swap, blocco da 3 amici, regole anti-abuso.',
};

const steps = [
  {
    n: '01',
    title: 'Apri Invita amici',
    body: 'Sul portale (e in Account in app) trovi codice copiabile, link da condividere e QR. Scegli WhatsApp, messaggio, email o stampa del QR.',
  },
  {
    n: '02',
    title: 'L’amico apre il tuo invito',
    body: 'Se ha già l’app, il deep link porta alla registrazione con codice già applicato. Se non ce l’ha, arriva a una landing che spiega che sta entrando tramite il tuo invito.',
  },
  {
    n: '03',
    title: 'Si registra con il codice',
    body: 'Il codice si inserisce solo in registrazione. Dopo non si può più agganciare un referral: è una regola anti-abuso, non un optional.',
  },
  {
    n: '04',
    title: 'Completa il primo scambio',
    body: 'Finché non conclude il primo swap, il tuo bonus resta in attesa. Scaricare l’app o creare l’account non basta: serve uno scambio reale.',
  },
  {
    n: '05',
    title: 'Tu ricevi €2,50',
    body: 'Il bonus diventa spendibile subito per gli scambi. Solo chi invita lo riceve: l’invitato non ha un bonus di ingresso da referral.',
  },
  {
    n: '06',
    title: 'Blocco da 3 amici',
    body: 'Ogni tre amici qualificati il blocco vale €10 totali (sul terzo arriva un extra). Ripetibile: 6 amici → €20, 9 → €30, e così via.',
  },
];

export default function InvitaPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F8] text-ink">
      <SiteHeader dark />
      <PageHero
        eyebrow="Invita un amico"
        title="Condividi il codice. Guadagni quando scambia."
        lead="Il referral Parker non premia il solo download. Premia quando l’amico entra con il tuo invito e completa il primo scambio. Così cresce la mappa con persone che usano davvero il prodotto."
        image={IMAGES.friends}
      />

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4 text-[15px] leading-relaxed text-muted">
            <h2 className="font-display text-2xl font-bold text-ink">Perché funziona così</h2>
            <p>
              Una mappa di posti vuota non serve a nessuno. Invitarci amici che poi scambiano
              davvero aumenta la densità nella tua zona: più listing, più probabilità di trovare
              posto senza girare.
            </p>
            <p>
              Per questo il bonus scatta al <strong className="text-ink">primo swap</strong>{" "}
              dell’invitato, non all’installazione. Tu ricevi €2,50 di credito bonus usabile sugli
              scambi. L’invitato non riceve un bonus di ingresso da referral.
            </p>
            <p>
              Ogni tre amici qualificati il blocco vale €10 totali. Il meccanismo è ripetibile: più
              amici completano il primo scambio, più maturi bonus — sempre nel circuito Parker,
              senza prelievo in banca.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.phoneNav}
              alt="Condivisione da smartphone"
              width={1200}
              height={900}
              unoptimized
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Passo dopo passo</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <article key={s.n} className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6">
                <span className="font-display text-3xl font-bold text-teal/30">{s.n}</span>
                <h3 className="mt-2 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Regole anti-abuso</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                t: 'Solo in registrazione',
                d: 'Il codice referral si applica solo quando l’amico crea l’account. Dopo non si può più agganciare.',
              },
              {
                t: 'Pending fino al primo swap',
                d: 'Vedi lo stato “in attesa” finché l’amico non completa il primo scambio. Poi il bonus diventa spendibile.',
              },
              {
                t: 'Solo scambi, no prelievo',
                d: 'Il bonus referral serve per gli swap. Come il resto del credito Parker, non diventa un bonifico sul conto.',
              },
            ].map((x) => (
              <article key={x.t} className="rounded-2xl border border-ink/8 bg-white p-6">
                <h3 className="font-display text-lg font-bold">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.italyStreet}
              alt="Strada in Italia"
              width={1600}
              height={700}
              unoptimized
              className="h-48 w-full object-cover sm:h-64"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-ink/8 bg-white px-5 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold">Dove lo trovi</h2>
          <p className="mt-3 text-sm text-muted">
            Dopo la registrazione: portale → Invita amici (codice, link, QR). In app: Account →
            Invita amici. Stesso codice, stessi progressi.
          </p>
          <a
            href={portalPath('/signup')}
            className="mt-6 inline-flex rounded-full bg-teal px-7 py-3 text-sm font-bold text-ink hover:bg-[#00b896]"
          >
            Registrati e apri Invita amici
          </a>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/missioni', label: 'Missioni', desc: 'Altri modi di guadagnare credito solo-swap.' },
          { href: '/come-funziona', label: 'Come funziona', desc: 'Cosa deve fare l’amico al primo swap.' },
          { href: '/prezzi', label: 'Prezzi', desc: 'Pacchetti se vuoi credito subito.' },
        ]}
      />
      <CtaBand title="Invita e fai crescere la mappa" />
      <SiteFooter />
      <CookieBar />
    </main>
  );
}
