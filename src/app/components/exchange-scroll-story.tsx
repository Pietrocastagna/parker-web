'use client';

import { useEffect, useRef, useState } from 'react';
import { PhoneFrame } from './device';
import { BookedScreen, CompleteScreen, MapSearchScreen, SellScreen } from './map-canvas';
import { FloatingStatusChip, LiveDot } from './signal';
import { SectionEyebrow } from './ui';

const STEPS = [
  {
    n: '01',
    title: 'Pubblica',
    lead: 'Stai andando via? Dillo alla mappa.',
    body: 'Apri Vendi, scegli il posto e pubblicalo.',
    chip: 'Sto uscendo',
    side: 'Venditore',
  },
  {
    n: '02',
    title: 'Appari',
    lead: 'Il tuo posto diventa visibile a chi è vicino.',
    body: 'Distanza, prezzo e tempo stimato sono chiari prima della prenotazione.',
    chip: 'LIVE · posto pubblicato ora',
    side: 'Acquirente',
  },
  {
    n: '03',
    title: 'Prenota',
    lead: 'Chi arriva lo blocca e parte verso di te.',
    body: 'Ricevi lo stato dello scambio e sai che qualcuno è in arrivo.',
    chip: 'Prenotato · arrivo in corso',
    side: 'Entrambi',
  },
  {
    n: '04',
    title: 'Completa',
    lead: 'Uno esce. L’altro entra.',
    body: 'I P si muovono automaticamente.',
    chip: 'Scambio completato',
    side: 'Entrambi',
  },
] as const;

const SCREENS = [SellScreen, MapSearchScreen, BookedScreen, CompleteScreen];
const AUTO_MS = 4200;

/**
 * Sequenza dei 4 passi. Nessuno scroll-jacking e nessuna sezione sticky:
 * la pagina scorre normalmente, i passi avanzano da soli (pausa su hover,
 * stop definitivo al primo click dell'utente) oppure al click.
 */
export function ExchangeScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [tick, setTick] = useState(0); // riavvia la barra di avanzamento

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || paused || !inView) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setTimeout(() => {
      setActive((a) => (a + 1) % STEPS.length);
      setTick((t) => t + 1);
    }, AUTO_MS);
    return () => window.clearTimeout(id);
  }, [active, auto, paused, inView]);

  const choose = (i: number) => {
    setAuto(false);
    setActive(i);
    setTick((t) => t + 1);
  };

  const step = STEPS[active];
  const running = auto && !paused && inView;

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div>
        <div className="mx-auto grid w-full max-w-site gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:items-center lg:px-12 lg:py-24">
          {/* testo */}
          <div className="lg:col-span-5">
            <SectionEyebrow>Dal segnale allo scambio</SectionEyebrow>
            <h2 className="display-h2 text-balance mt-3">Una partenza. Un arrivo. Un passaggio di pochi minuti.</h2>

            <ol className="mt-10 space-y-2">
              {STEPS.map((s, i) => {
                const on = i === active;
                return (
                  <li key={s.n}>
                    <button
                      type="button"
                      onClick={() => choose(i)}
                      aria-current={on ? 'step' : undefined}
                      className={`group relative flex w-full gap-5 overflow-hidden rounded-2xl px-4 py-4 text-left transition-all duration-300 ${
                        on ? 'bg-white shadow-soft ring-1 ring-brand/30' : 'hover:bg-white/60'
                      }`}
                    >
                      <span className="relative flex flex-col items-center">
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-full font-mono text-xs font-bold transition ${
                            on ? 'bg-brand text-ink' : 'bg-ink/5 text-ink/60 group-hover:bg-ink/10'
                          }`}
                        >
                          {s.n}
                        </span>
                        {i < STEPS.length - 1 ? <span className={`mt-1 w-px flex-1 ${on ? 'bg-brand/50' : 'bg-line'}`} /> : null}
                      </span>
                      <span className="flex-1 pb-1">
                        <span className="flex items-center justify-between gap-3">
                          <span className="font-display text-lg font-bold">{s.title}</span>
                          <span className={`text-[11px] font-bold uppercase tracking-wider ${on ? 'text-brand-deep' : 'text-ink/40'}`}>{s.side}</span>
                        </span>
                        <span className={`mt-1 block text-sm font-semibold ${on ? 'text-ink' : 'text-ink/70'}`}>{s.lead}</span>
                        <span
                          className={`block overflow-hidden text-sm text-muted transition-all duration-500 ${
                            on ? 'mt-1 max-h-16 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          {s.body}
                        </span>
                      </span>
                      {on && running ? (
                        <span
                          key={tick}
                          className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-brand"
                          style={{ animation: `stepProgress ${AUTO_MS}ms linear forwards` }}
                          aria-hidden
                        />
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ol>
            <p className="mt-4 px-4 text-xs text-muted">
              {auto ? 'Avanza da solo · tocca un passo per fermarti' : 'Tocca un passo per cambiare schermata'}
            </p>
          </div>

          {/* stage */}
          <div className="relative lg:col-span-7">
            <div className="relative mx-auto flex max-w-[560px] items-center justify-center rounded-stage bg-gradient-to-br from-brand-mist via-white to-paper p-6 ring-1 ring-line sm:p-10">
              <div className="absolute inset-0 overflow-hidden rounded-stage">
                <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
                <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-amber/10 blur-3xl" />
              </div>
              <div className="absolute left-4 top-5 z-20 sm:left-8 sm:top-8">
                <FloatingStatusChip tone={active === 1 ? 'brand' : active === 3 ? 'light' : 'dark'}>
                  {active < 3 ? <LiveDot /> : null}
                  {step.chip}
                </FloatingStatusChip>
              </div>
              <PhoneFrame className="relative z-10 max-w-[280px] sm:max-w-[300px]" glow={false}>
                <div key={active} className="h-full animate-[fadeIn_.45s_ease]">
                  {(() => {
                    const Screen = SCREENS[active];
                    return <Screen />;
                  })()}
                </div>
              </PhoneFrame>
              <div className="absolute bottom-5 right-4 z-20 hidden rounded-2xl border border-line bg-white/90 px-4 py-3 text-xs shadow-float backdrop-blur sm:block">
                <p className="font-bold">
                  {active === 0 && 'Incassi €1,00'}
                  {active === 1 && 'Prezzo fisso 1 P'}
                  {active === 2 && '2 min · 180 m'}
                  {active === 3 && 'Credito aggiornato'}
                </p>
                <p className="text-muted">
                  {active === 0 && 'livello 1 venditore'}
                  {active === 1 && 'nessuna trattativa'}
                  {active === 2 && 'navigazione in app'}
                  {active === 3 && 'proventi non scadono'}
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2 lg:hidden">
              {STEPS.map((s, i) => (
                <button
                  key={s.n}
                  type="button"
                  aria-label={`Vai allo step ${s.title}`}
                  onClick={() => choose(i)}
                  className={`h-2 rounded-full transition-all ${i === active ? 'w-8 bg-brand' : 'w-2 bg-ink/15'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
