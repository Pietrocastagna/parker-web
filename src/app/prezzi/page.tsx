import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteHeader, SiteFooter, CookieBar } from '../components/site-chrome';
import { PageHero, CtaBand, RelatedLinks } from '../components/page-chrome';
import { PACKAGES } from '../lib/content';
import { IMAGES } from '../lib/images';
import { portalPath } from '../lib/urls';

export const metadata: Metadata = {
  title: 'Prezzi e pacchetti — Parker',
  description:
    'Pacchetti Parker: Prova €4,99, Carnet 8, Mensile 20, Semestrale, Annuale. Credito sul portale, scambi da €1,20.',
};

export default function PrezziPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F8] text-ink">
      <SiteHeader dark />
      <PageHero
        eyebrow="Prezzi"
        title="Pacchetti di credito sul portale"
        lead="Non c’è ricarica libera a importo a piacere. Scegli un pacchetto o un piano, paghi con carta sul portale, usi il credito in app. Uno scambio parte da €1,20: il prezzo esatto lo vedi sul listing prima di confermare."
        image={IMAGES.laptop}
      />

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted">
            <h2 className="font-display text-2xl font-bold text-ink">Come funziona il listino</h2>
            <p>
              Il credito si compra solo sul portale web. In app non c’è checkout: usi quello che hai
              già nel wallet. Così i pagamenti restano chiari e centralizzati, e in strada ti
              concentri sullo scambio.
            </p>
            <p>
              I pacchetti una tantum (Prova, Carnet) servono a entrare o a ricaricare quando ti
              serve. I piani (Mensile, Semestrale, Annuale) danno continuità. Il Mensile si rinnova
              in automatico finché non lo disdici dal portale.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {PACKAGES.map((pkg) => (
              <article
                key={pkg.name}
                className={`flex flex-col rounded-2xl border p-5 ${
                  pkg.featured
                    ? 'border-teal bg-ink text-white shadow-lg sm:col-span-2 lg:col-span-1'
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
                <p className={`mt-1 text-xs ${pkg.featured ? 'text-white/55' : 'text-muted'}`}>
                  {pkg.credit}
                </p>
                <p className={`mt-3 text-sm ${pkg.featured ? 'text-white/70' : 'text-muted'}`}>
                  {pkg.audience}
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm">
                  {pkg.points.map((pt) => (
                    <li key={pt} className={pkg.featured ? 'text-white/70' : 'text-muted'}>
                      · {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={portalPath('/signup')}
              className="inline-flex rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-ink hover:bg-[#00b896]"
            >
              Registrati e scegli un pacchetto
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Regole da sapere prima di comprare</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                t: 'Strisce blu separate',
                d: 'Il prezzo dello scambio non include il ticket del parcometro. Se il posto è a pagamento sul suolo pubblico, lo gestisci come sempre.',
              },
              {
                t: 'Credito closed-loop',
                d: 'Il credito resta nel circuito Parker: lo usi per gli scambi. Chi vende riceve credito da riusare, non un bonifico bancario.',
              },
              {
                t: 'Mensile = autorinnovo',
                d: 'Il piano Mensile 20 si rinnova finché non lo disdici dal portale. Semestrale e Annuale coprono il periodo indicato con un pagamento.',
              },
              {
                t: 'Limiti anti-abuso',
                d: 'Esiste un tetto giornaliero sugli acquisti personali. I pacchetti una tantum non-mensili hanno regole di frequenza: i dettagli li vedi al checkout sul portale.',
              },
              {
                t: 'Scambio da €1,20',
                d: 'Il prezzo dello scambio parte da €1,20 e dipende dal livello scelto dal venditore tra quelli disponibili. Lo vedi sempre prima di confermare.',
              },
              {
                t: 'Bonus e missioni',
                d: 'I premi da missioni o referral sono credito spesso solo-swap e con scadenza breve. Non sostituiscono i pacchetti: li affiancano.',
              },
            ].map((x) => (
              <article key={x.t} className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-6">
                <h3 className="font-display text-lg font-bold">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.parkingLot}
              alt="Parcheggio"
              width={1200}
              height={800}
              unoptimized
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-muted">
            <h2 className="font-display text-2xl font-bold text-ink">Quale pacchetto scegliere?</h2>
            <p>
              <strong className="text-ink">Prova</strong> se è la prima volta. <strong className="text-ink">Carnet</strong> se
              scambi ogni tanto. <strong className="text-ink">Mensile</strong> se Parker entra nella
              settimana. <strong className="text-ink">Semestrale</strong> o{' '}
              <strong className="text-ink">Annuale</strong> se vuoi continuità senza ripensarci ogni
              mese.
            </p>
            <p>
              Puoi sempre tornare sul portale: storico movimenti, stato del piano, disdetta del
              mensile. L’app mostra il saldo e ti rimanda al web per ricaricare.
            </p>
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/come-funziona', label: 'Come funziona', desc: 'Dal pacchetto allo scambio.' },
          { href: '/missioni', label: 'Missioni', desc: 'Premi extra sullo swap.' },
          { href: '/about', label: 'About', desc: 'Perché esiste Parker.' },
        ]}
      />
      <CtaBand title="Scegli un pacchetto e inizia" />
      <SiteFooter />
      <CookieBar />
    </main>
  );
}
