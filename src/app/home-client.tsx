'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IMAGES } from './lib/images';
import { API_BASE_URL, portalPath } from './lib/urls';

const nav = [
  ['#about', 'About'],
  ['#come-funziona', 'Come funziona'],
  ['#prezzi', 'Prezzi'],
  ['#faq', 'FAQ'],
] as const;

const steps = [
  {
    n: '1',
    title: 'Segnali il posto',
    body: 'Stai uscendo? Metti in vendita il tuo parcheggio con un tap. Chi cerca lo vede subito sulla mappa.',
  },
  {
    n: '2',
    title: 'Qualcuno lo prende',
    body: 'L’acquirente prenota e paga col credito Parker. Il prezzo è fisso: lo vedi prima di confermare.',
  },
  {
    n: '3',
    title: 'Arrivi e parcheggi',
    body: 'Navigazione fino al posto. Chi libera riceve credito; chi arriva smette di girare.',
  },
];

const aboutPoints = [
  {
    title: 'Scambio tra persone',
    body: 'Non è un parcometro e non è un garage. È chi sta lasciando un posto e chi lo sta cercando, nello stesso momento.',
  },
  {
    title: 'Credito sul portale',
    body: 'Ricarichi sul web con Stripe. In app usi il credito per gli scambi. Non si preleva sul conto corrente.',
  },
  {
    title: 'Prezzi chiari',
    body: 'Da €1,20 a scambio. Niente aste. Le strisce blu restano a carico tuo: Parker non le include.',
  },
];

const packages = [
  {
    name: 'Uno scambio',
    price: 'da €1,20',
    hint: 'Quando trovi un posto',
    points: ['Prezzo fisso prima di confermare', 'Navigazione fino al posto', 'Strisce blu non incluse'],
    cta: 'Apri il portale',
    href: portalPath('/login'),
    featured: false,
  },
  {
    name: 'Prova',
    price: '€4,99',
    hint: 'Per iniziare',
    points: ['Pacchetto di ingresso', 'Si compra sul portale web', 'Credito spendibile negli scambi'],
    cta: 'Registrati e ricarica',
    href: portalPath('/signup'),
    featured: true,
  },
  {
    name: 'Chi vende',
    price: 'Credito',
    hint: 'Quando liberi un posto',
    points: ['Incassi credito Parker', 'Lo riusi al prossimo scambio', 'Niente prelievo in banca'],
    cta: 'Crea account',
    href: portalPath('/signup'),
    featured: false,
  },
];

const process = [
  { t: 'Registrati', d: 'Account sul portale in un minuto.' },
  { t: 'Ricarica', d: 'Prova €4,99 con carta (Stripe).' },
  { t: 'Apri l’app', d: 'Cerca o vendi un posto sulla mappa.' },
  { t: 'Scambia', d: 'Confermi, navighi, parcheggi.' },
];

const faqs = [
  {
    q: 'Dove funziona Parker?',
    a: 'In tutta Italia. Più persone usano Parker nella tua zona, più posti trovi sulla mappa.',
  },
  {
    q: 'Quanto costa?',
    a: 'Uno scambio parte da €1,20. Per iniziare puoi comprare il pacchetto Prova a €4,99 sul portale. Il ticket delle strisce blu non è incluso.',
  },
  {
    q: 'Come ricarico?',
    a: 'Solo dal portale web, con pagamento Stripe. In app non si compra credito: si usa quello che hai.',
  },
  {
    q: 'Posso prelevare i soldi?',
    a: 'No. Il credito serve per gli scambi (e, quando disponibile, per i buoni). Non è un prelievo in banca.',
  },
  {
    q: 'C’è garage o lavaggio?',
    a: 'No. Parker in questa fase è solo lo scambio di posti tra automobilisti.',
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
    const onScroll = () => setScrolled(window.scrollY > 48);
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
      const data = (await res.json().catch(() => ({}))) as { message?: string; error?: string };
      if (!res.ok) {
        setWaitStatus('err');
        setWaitMsg(data.message || 'Non riuscito. Riprova.');
        return;
      }
      setWaitStatus('ok');
      setWaitMsg('Grazie. Ti aggiorniamo quando l’app è sugli store.');
      setEmail('');
      setCity('');
    } catch {
      setWaitStatus('err');
      setWaitMsg('Connessione assente. Riprova.');
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-ink">
      {/* Nav */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          scrolled
            ? 'border-b border-ink/8 bg-white/95 shadow-sm backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#" className="font-display text-[1.15rem] font-bold tracking-tight">
            <span className="text-teal">P</span>
            <span className={scrolled ? 'text-ink' : 'text-white'}>arker</span>
          </a>
          <nav className="hidden items-center gap-7 text-[13px] font-medium md:flex">
            {nav.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className={scrolled ? 'text-muted hover:text-ink' : 'text-white/75 hover:text-white'}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={portalPath('/login')}
              className={`rounded-full px-4 py-2 text-[13px] font-semibold ${
                scrolled ? 'text-ink hover:bg-ink/5' : 'text-white hover:bg-white/10'
              }`}
            >
              Accedi
            </a>
            <a
              href={portalPath('/signup')}
              className="rounded-full bg-teal px-4 py-2 text-[13px] font-bold text-ink hover:bg-[#00b896]"
            >
              Registrati
            </a>
          </div>
        </div>
      </header>

      {/* Hero — one composition */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-32">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.45)_0%,rgba(11,18,32,0.72)_55%,rgba(11,18,32,0.92)_100%)]" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5">
          <p className="mb-4 text-sm font-semibold tracking-wide text-teal">Tutta Italia</p>
          <h1 className="max-w-3xl font-display text-[2.5rem] font-bold leading-[1.08] text-white sm:text-6xl">
            Smetti di girare.
            <br />
            Qualcuno sta uscendo ora.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Parker scambia parcheggi tra chi lascia il posto e chi lo cerca. Da €1,20. Il credito
            si ricarica sul portale — in pochi passi.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={portalPath('/signup')}
              className="inline-flex items-center justify-center rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-ink hover:bg-[#00b896]"
            >
              Inizia gratis — registrati
            </a>
            <a
              href="#come-funziona"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Come funziona
            </a>
          </div>
        </div>
      </section>

      {/* Process strip — fruibilità */}
      <section className="border-b border-ink/8 bg-white">
        <div className="mx-auto grid max-w-6xl gap-0 sm:grid-cols-4">
          {process.map((p, i) => (
            <div
              key={p.t}
              className={`px-5 py-7 ${i < process.length - 1 ? 'sm:border-r sm:border-ink/8' : ''}`}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-teal">
                Passo {i + 1}
              </p>
              <p className="mt-2 font-display text-lg font-bold">{p.t}</p>
              <p className="mt-1 text-sm text-muted">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">About</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Il posto che stai cercando sta liberandosi adesso
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Parker non compete col parcometro. Collega chi esce e chi arriva: meno giri a vuoto,
              prezzi fissi, credito protetto.
            </p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {aboutPoints.map((p) => (
              <div key={p.title}>
                <div className="mb-4 h-1 w-10 rounded-full bg-teal" />
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section id="come-funziona" className="bg-ink px-5 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal">Come funziona</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold sm:text-4xl">
            Tre mosse. Zero aste.
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <article key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <span className="font-display text-4xl font-bold text-teal">{s.n}</span>
                <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{s.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={portalPath('/signup')}
              className="rounded-full bg-teal px-6 py-3 text-sm font-bold text-ink hover:bg-[#00b896]"
            >
              Crea account
            </a>
            <p className="text-sm text-white/50">
              Hai già un account?{' '}
              <a href={portalPath('/login')} className="font-semibold text-white underline">
                Accedi al portale
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Prezzi */}
      <section id="prezzi" className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">Prezzi</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Trasparenti prima di confermare
            </h2>
            <p className="mt-4 text-muted">
              Ricarichi sul portale. Spendi in app. Niente abbonamento obbligatorio.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col rounded-2xl border p-7 ${
                  pkg.featured
                    ? 'border-teal bg-ink text-white shadow-xl shadow-ink/10'
                    : 'border-ink/10 bg-white'
                }`}
              >
                <p
                  className={`text-sm font-semibold ${pkg.featured ? 'text-teal' : 'text-muted'}`}
                >
                  {pkg.hint}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold">{pkg.name}</h3>
                <p className="mt-4 font-display text-4xl font-bold tracking-tight">{pkg.price}</p>
                <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                  {pkg.points.map((pt) => (
                    <li
                      key={pt}
                      className={pkg.featured ? 'text-white/70' : 'text-muted'}
                    >
                      · {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href={pkg.href}
                  className={`mt-8 inline-flex items-center justify-center rounded-full py-3 text-sm font-bold ${
                    pkg.featured
                      ? 'bg-teal text-ink hover:bg-[#00b896]'
                      : 'bg-ink text-white hover:bg-ink/90'
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            Le strisce blu (parcometro) non sono incluse nel prezzo dello scambio.
          </p>
        </div>
      </section>

      {/* App / updates */}
      <section id="app" className="border-y border-ink/8 bg-white px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">App</p>
            <h2 className="mt-3 font-display text-3xl font-bold">
              Portale ora. App in arrivo sugli store.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Oggi ti registri e ricarichi sul portale. Quando l’app sarà su App Store e Google
              Play, usi lo stesso account sulla mappa. Lascia la mail se vuoi l’avviso.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={portalPath('/signup')}
                className="rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-ink"
              >
                Registrati sul portale
              </a>
              <a
                href={portalPath('/login')}
                className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold"
              >
                Accedi
              </a>
            </div>
          </div>
          <form
            onSubmit={submitInterest}
            className="rounded-2xl border border-ink/10 bg-[#F7F8FA] p-6 sm:p-8"
          >
            <h3 className="font-display text-xl font-bold">Avvisami sugli store</h3>
            <p className="mt-1 text-sm text-muted">Email e città (opzionale).</p>
            <label className="mt-5 block text-xs font-semibold uppercase tracking-wide text-muted">
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm outline-none focus:border-teal"
                placeholder="tu@email.it"
              />
            </label>
            <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-muted">
              Città
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm outline-none focus:border-teal"
                placeholder="Es. Milano, Roma, Bari…"
              />
            </label>
            <button
              type="submit"
              disabled={waitStatus === 'loading'}
              className="mt-5 w-full rounded-full bg-ink py-3 text-sm font-bold text-white hover:bg-ink/90 disabled:opacity-60"
            >
              {waitStatus === 'loading' ? 'Invio…' : 'Iscrivimi'}
            </button>
            {waitMsg ? (
              <p
                className={`mt-3 text-sm ${waitStatus === 'ok' ? 'text-teal' : 'text-red-600'}`}
              >
                {waitMsg}
              </p>
            ) : null}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal">FAQ</p>
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
                    <span className="text-teal">{open ? '−' : '+'}</span>
                  </div>
                  {open ? (
                    <p className="mt-2 pr-8 text-sm leading-relaxed text-muted">{item.a}</p>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-teal px-5 py-16 text-center text-ink sm:py-20">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Pronto a smettere di girare?</h2>
        <p className="mx-auto mt-3 max-w-md text-sm opacity-80">
          Registrati, ricarica Prova €4,99, poi scambia quando l’app è attiva nella tua zona.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={portalPath('/signup')}
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white hover:bg-ink/90"
          >
            Registrati
          </a>
          <a
            href={portalPath('/login')}
            className="rounded-full border border-ink/25 bg-white/30 px-7 py-3.5 text-sm font-semibold hover:bg-white/50"
          >
            Accedi
          </a>
        </div>
      </section>

      <footer className="bg-ink px-5 py-12 text-sm text-white/55">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold text-white">
              <span className="text-teal">P</span>arker
            </p>
            <p className="mt-2 max-w-xs">
              Scambio di parcheggi in tempo reale. Tutta Italia. Credito sul portale web.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#prezzi" className="hover:text-white">
              Prezzi
            </a>
            <a href={portalPath('/login')} className="hover:text-white">
              Accedi
            </a>
            <a href={portalPath('/signup')} className="hover:text-white">
              Registrati
            </a>
            <a href={portalPath('/legal/privacy')} className="hover:text-white">
              Privacy
            </a>
            <a href={portalPath('/legal/terms')} className="hover:text-white">
              Termini
            </a>
          </div>
        </div>
      </footer>

      {!cookieOk ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white p-4 shadow-lg">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">Solo cookie tecnici necessari. Niente ads.</p>
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
              className="rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-ink"
            >
              Ok
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
