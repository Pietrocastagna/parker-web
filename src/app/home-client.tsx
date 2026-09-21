'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IMAGES } from './lib/images';
import { API_BASE_URL, portalPath } from './lib/urls';
import {
  ParkingSpotIllustration,
  SwapSignalIllustration,
  SwapExchangeIllustration,
  PaymentIllustration,
} from './components/illustrations';

const steps = [
  {
    num: '01',
    title: 'Segnala',
    desc: 'Stai lasciando il posto? Mettilo in vendita con un tap. Chi cerca lo vede sulla mappa.',
    illustration: <SwapSignalIllustration width={180} height={140} />,
  },
  {
    num: '02',
    title: 'Prenota',
    desc: 'Trovi un posto vicino, lo prenoti col credito Parker e parti verso di lì.',
    illustration: <ParkingSpotIllustration width={180} height={140} />,
  },
  {
    num: '03',
    title: 'Arriva',
    desc: 'Navigazione fino al posto. Chi esce riceve credito; tu parcheggi senza girare.',
    illustration: <SwapExchangeIllustration width={180} height={140} />,
  },
];

const faqItems = [
  {
    q: 'Dove funziona Parker?',
    a: 'Ora a Ladispoli. Fuori zona puoi entrare in lista d’attesa: ti avvisiamo quando apriamo la tua città.',
  },
  {
    q: 'Quanto costa uno scambio?',
    a: 'Da €1,20. Il prezzo è fisso e chiaro prima di confermare. Il ticket delle strisce blu non è incluso.',
  },
  {
    q: 'Come ricarico il credito?',
    a: 'Sul portale web, non in app. L’offerta di ingresso è il pacchetto Prova a €4,99. Il credito serve per gli scambi: non si preleva in banca.',
  },
  {
    q: 'Cosa guadagna chi vende il posto?',
    a: 'Credito Parker da riusare per i prossimi scambi, oppure (quando disponibile) da convertire in buoni. Non è un prelievo sul conto corrente.',
  },
  {
    q: 'C’è garage o lavaggio?',
    a: 'No, in questa fase solo lo scambio tra automobilisti. Niente garage, autolavaggio o lavaggio a domicilio.',
  },
];

type WaitRole = 'buyer' | 'seller' | 'both';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [cookieOk, setCookieOk] = useState(true);

  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [role, setRole] = useState<WaitRole>('both');
  const [waitStatus, setWaitStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');
  const [waitMsg, setWaitMsg] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    try {
      setCookieOk(localStorage.getItem('parker_web_cookies') === '1');
    } catch {
      setCookieOk(false);
    }
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  async function submitWaitlist(e: React.FormEvent) {
    e.preventDefault();
    setWaitStatus('loading');
    setWaitMsg('');
    try {
      const res = await fetch(`${API_BASE_URL}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          city: city.trim(),
          role,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; message?: string };
      if (!res.ok) {
        setWaitStatus('err');
        setWaitMsg(data.message || data.error || 'Non siamo riusciti a iscriverti. Riprova.');
        return;
      }
      setWaitStatus('ok');
      setWaitMsg('Sei in lista. Ti scriviamo quando Parker arriva nella tua zona.');
      setEmail('');
      setCity('');
    } catch {
      setWaitStatus('err');
      setWaitMsg('Connessione assente. Controlla la rete e riprova.');
    }
  }

  function acceptCookies() {
    try {
      localStorage.setItem('parker_web_cookies', '1');
    } catch {
      /* ignore */
    }
    setCookieOk(true);
  }

  return (
    <main className="min-h-screen bg-paper text-ink">
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 transition-all ${
          scrolled
            ? 'border-b border-ink/10 bg-paper/95 shadow-sm backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <a href="#" className="font-display text-lg font-bold tracking-tight">
          <span className="text-teal">P</span>
          <span className={scrolled ? 'text-ink' : 'text-white'}>arker</span>
        </a>
        <div
          className={`hidden items-center gap-6 text-sm sm:flex ${
            scrolled ? 'text-muted' : 'text-white/75'
          }`}
        >
          <a href="#come-funziona" className="hover:opacity-100">
            Come funziona
          </a>
          <a href="#prezzi" className="hover:opacity-100">
            Prezzi
          </a>
          <a href="#zona" className="hover:opacity-100">
            Zona
          </a>
          <a href="#faq" className="hover:opacity-100">
            FAQ
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={portalPath('/signup')}
            className={`hidden rounded-xl border px-4 py-2 text-sm font-medium sm:inline-block ${
              scrolled
                ? 'border-ink/15 text-ink hover:bg-white'
                : 'border-white/25 bg-white/5 text-white hover:bg-white/10'
            }`}
          >
            Registrati
          </a>
          <a
            href={portalPath('/login')}
            className="rounded-xl bg-teal px-4 py-2 text-sm font-semibold text-ink hover:bg-teal/90"
          >
            Accedi
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden bg-ink px-5 pb-20 pt-32 text-center sm:pt-40">
        <Image src={IMAGES.hero} alt="" fill priority unoptimized className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/35" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-teal/40 bg-teal/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal backdrop-blur-sm">
            Ora a Ladispoli
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Smetti di girare.
            <br />
            <span className="text-teal">Qualcuno sta uscendo ora.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/80 sm:text-lg">
            Parker scambia parcheggi tra chi lascia il posto e chi lo cerca. Da €1,20. Il credito
            si ricarica sul portale web — non in app.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={portalPath('/signup')}
              className="rounded-xl bg-teal px-6 py-3.5 text-sm font-bold text-ink hover:bg-teal/90"
            >
              Inizia sul portale
            </a>
            <a
              href="#come-funziona"
              className="rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10"
            >
              Come funziona
            </a>
          </div>
          <p className="mt-4 text-xs text-white/55">
            App in arrivo sugli store. Intanto registrati e ricarica Prova €4,99 sul portale.
          </p>
        </div>
      </section>

      {/* Come funziona */}
      <section id="come-funziona" className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal">Come funziona</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Tre passi. Niente aste.
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Chi esce segnala il posto. Chi cerca lo prenota. Al passaggio di consegne il credito
            cambia mano.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <article
                key={s.num}
                className="rounded-2xl border border-ink/8 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex justify-center">{s.illustration}</div>
                <p className="text-xs font-bold text-teal">{s.num}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Prezzi */}
      <section id="prezzi" className="bg-ink px-5 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal">Prezzi</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Chiaro prima di confermare
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm text-white/60">Uno scambio</p>
              <p className="mt-2 font-display text-4xl font-bold text-teal">da €1,20</p>
              <p className="mt-3 text-sm text-white/70">
                Prezzo fisso. Le strisce blu (parcometro) non sono incluse — vanno dette sempre.
              </p>
            </div>
            <div className="rounded-2xl border border-teal/40 bg-teal/10 p-8">
              <p className="text-sm text-teal">Pacchetto di ingresso</p>
              <p className="mt-2 font-display text-4xl font-bold">Prova €4,99</p>
              <p className="mt-3 text-sm text-white/70">
                Si compra sul portale web con Stripe. Credito spendibile negli scambi — non si
                preleva in banca.
              </p>
              <a
                href={portalPath('/signup')}
                className="mt-6 inline-block rounded-xl bg-teal px-5 py-2.5 text-sm font-bold text-ink hover:bg-teal/90"
              >
                Registrati e ricarica
              </a>
            </div>
          </div>
          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="shrink-0">
              <PaymentIllustration width={120} height={100} />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">Credito sul portale, non in app</h3>
              <p className="mt-2 text-sm text-white/70">
                Ricarichi dal browser. In app usi il credito per prenotare. Chi vende accumula
                credito da riusare la volta dopo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cosa non è */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-mark/40 bg-mark/10 p-8">
          <h2 className="font-display text-2xl font-bold">Cosa Parker non è (ancora)</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>— Non paga il parcometro / strisce blu</li>
            <li>— Non è un garage convenzionato né un lavaggio</li>
            <li>— Non ti fa prelevare soldi sul conto corrente</li>
            <li>— Non è “tutta Italia”: partiamo da Ladispoli</li>
          </ul>
        </div>
      </section>

      {/* Zona + waitlist */}
      <section id="zona" className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal">Zona</p>
            <h2 className="mt-2 font-display text-3xl font-bold">Prima Ladispoli</h2>
            <p className="mt-4 text-muted leading-relaxed">
              La mappa deve essere viva in fasce orarie fisse (mattina e sera). Se non sei a
              Ladispoli, lascia la mail: ti avvisiamo quando apriamo la tua città.
            </p>
            <p className="mt-4 text-sm text-muted">
              Sei già in zona?{' '}
              <a href={portalPath('/signup')} className="font-semibold text-teal underline">
                Crea l’account sul portale
              </a>
              .
            </p>
          </div>
          <form
            onSubmit={submitWaitlist}
            className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm"
          >
            <h3 className="font-display text-xl font-bold">Lista d’attesa</h3>
            <p className="mt-1 text-sm text-muted">Email, città e se cerchi o liberi posti.</p>
            <label className="mt-5 block text-xs font-semibold uppercase tracking-wide text-muted">
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-teal"
                placeholder="tu@email.it"
              />
            </label>
            <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-muted">
              Città
              <input
                required
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-teal"
                placeholder="Roma, Civitavecchia…"
              />
            </label>
            <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-muted">
              Ti interessa
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as WaitRole)}
                className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-teal"
              >
                <option value="buyer">Trovare posti (acquirente)</option>
                <option value="seller">Liberare posti (venditore)</option>
                <option value="both">Entrambi</option>
              </select>
            </label>
            <button
              type="submit"
              disabled={waitStatus === 'loading'}
              className="mt-6 w-full rounded-xl bg-ink py-3 text-sm font-bold text-white hover:bg-ink/90 disabled:opacity-60"
            >
              {waitStatus === 'loading' ? 'Invio…' : 'Entra in lista'}
            </button>
            {waitMsg ? (
              <p
                className={`mt-3 text-sm ${
                  waitStatus === 'ok' ? 'text-teal' : 'text-red-600'
                }`}
              >
                {waitMsg}
              </p>
            ) : null}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold">Domande frequenti</h2>
          <div className="mt-8 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
            {faqItems.map((item, i) => {
              const open = openFaq === i;
              return (
                <button
                  key={item.q}
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="w-full px-5 py-4 text-left"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold">{item.q}</span>
                    <span className="text-teal">{open ? '−' : '+'}</span>
                  </div>
                  {open ? <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p> : null}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-teal px-5 py-16 text-center text-ink">
        <h2 className="font-display text-3xl font-bold">Pronto a Ladispoli?</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm opacity-80">
          Registrati sul portale, ricarica Prova €4,99, poi usa l’app quando sarà sullo store.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={portalPath('/signup')}
            className="rounded-xl bg-ink px-6 py-3 text-sm font-bold text-white hover:bg-ink/90"
          >
            Registrati
          </a>
          <a
            href={portalPath('/login')}
            className="rounded-xl border border-ink/20 bg-white/40 px-6 py-3 text-sm font-semibold hover:bg-white/70"
          >
            Accedi
          </a>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-paper px-5 py-10 text-sm text-muted">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-bold text-ink">
              <span className="text-teal">P</span>arker
            </span>{' '}
            — scambio parcheggi. Ora a Ladispoli.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={portalPath('/login')} className="hover:text-ink">
              Accedi
            </a>
            <a href={portalPath('/signup')} className="hover:text-ink">
              Registrati
            </a>
            <a href={portalPath('/legal/privacy')} className="hover:text-ink">
              Privacy
            </a>
            <a href={portalPath('/legal/terms')} className="hover:text-ink">
              Termini
            </a>
          </div>
        </div>
      </footer>

      {!cookieOk ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white p-4 shadow-lg">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              Usiamo solo cookie tecnici necessari al sito. Nessuna pubblicità.
            </p>
            <button
              type="button"
              onClick={acceptCookies}
              className="rounded-xl bg-teal px-5 py-2.5 text-sm font-bold text-ink"
            >
              Ok
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
