'use client';

import { useEffect, useRef, useState } from 'react';
import { DeviceFrame, AppMapScreen } from './ui-buttons';
import { LiveDot } from './signal';

const STEPS = [
  {
    n: '01',
    title: 'Pubblica',
    body: 'Stai andando via? Dillo alla mappa. Apri Vendi, scegli il posto e pubblicalo.',
    chip: 'Sto uscendo',
  },
  {
    n: '02',
    title: 'Appari',
    body: 'Il tuo posto diventa visibile a chi è vicino. Distanza, prezzo e tempo stimato sono chiari prima della prenotazione.',
    chip: 'Posto live',
  },
  {
    n: '03',
    title: 'Prenota',
    body: 'Chi arriva lo blocca e parte verso di te. Ricevi lo stato dello scambio e sai che qualcuno è in arrivo.',
    chip: 'Prenotato',
  },
  {
    n: '04',
    title: 'Completa',
    body: 'Uno esce. L’altro entra. Il credito si muove automaticamente.',
    chip: 'Chiusura',
  },
] as const;

export function ExchangeScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / total));
      setActive(Math.min(3, Math.floor(progress * 4)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const step = STEPS[active];

  return (
    <div ref={ref} className="relative min-h-[220vh]">
      <div className="sticky top-24 mx-auto grid max-w-site gap-10 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-16">
        <div className="lg:col-span-4">
          <p className="eyebrow">Dal segnale allo scambio</p>
          <h2 className="display-h2 mt-3 text-[2rem] sm:text-4xl">
            Una partenza. Un arrivo. Un passaggio di pochi minuti.
          </h2>
          <div className="mt-10 space-y-4">
            {STEPS.map((s, i) => (
              <button
                key={s.n}
                type="button"
                onClick={() => setActive(i)}
                className={`w-full rounded-card border p-4 text-left transition ${
                  i === active
                    ? 'border-brand bg-brand-mist shadow-soft'
                    : 'border-line bg-white/60 hover:border-brand/30'
                }`}
              >
                <p className="font-mono text-xs font-bold text-brand-deep">{s.n}</p>
                <p className="mt-1 font-display text-lg font-bold">{s.title}</p>
                <p className="mt-1 text-sm text-muted">{s.body}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center lg:col-span-8">
          <div className="relative w-full max-w-md">
            <DeviceFrame>
              <div className="px-4 pb-2 pt-1">
                <div className="mb-3 inline-flex items-center gap-2 rounded-pill bg-brand/15 px-3 py-1 text-[11px] font-bold text-brand">
                  <LiveDot />
                  {step.chip}
                </div>
              </div>
              <AppMapScreen />
            </DeviceFrame>
          </div>
        </div>
      </div>
    </div>
  );
}
