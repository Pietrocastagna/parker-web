'use client';

import { useState, type ComponentType } from 'react';
import { PhoneFrame } from './device';
import {
  BookedScreen,
  CompleteScreen,
  LevelScreen,
  ListingDetailScreen,
  MapSearchScreen,
  NavigationScreen,
  SellScreen,
  VehicleScreen,
} from './map-canvas';
import { FloatingStatusChip, LiveDot } from './signal';
import { SectionEyebrow } from './ui';

type Step = { title: string; body: string; chip: string; Screen: ComponentType };

function FlowStory({
  eyebrow,
  title,
  steps,
  light = false,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  steps: Step[];
  light?: boolean;
  reverse?: boolean;
}) {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Screen = step.Screen;

  return (
    <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-12 lg:items-center">
      <div className={`lg:col-span-5 ${reverse ? 'lg:order-2' : ''}`}>
        <SectionEyebrow light={light}>{eyebrow}</SectionEyebrow>
        <h2 className={`display-h2 text-balance mt-3 ${light ? 'text-white' : ''}`}>{title}</h2>
        <ol className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {steps.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.title}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={on ? 'step' : undefined}
                  className={`flex w-full items-start gap-4 rounded-2xl px-4 py-3.5 text-left transition-all ${
                    on
                      ? light
                        ? 'bg-white/10 ring-1 ring-brand/40'
                        : 'bg-white shadow-soft ring-1 ring-brand/30'
                      : light
                        ? 'hover:bg-white/5'
                        : 'hover:bg-white/60'
                  }`}
                >
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold ${on ? 'bg-brand text-ink' : light ? 'bg-white/10 text-white/60' : 'bg-ink/5 text-ink/60'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className={`block font-display text-base font-bold ${light ? 'text-white' : 'text-ink'}`}>{s.title}</span>
                    <span className={`block text-sm ${light ? 'text-white/60' : 'text-muted'} ${on ? '' : 'hidden lg:block'}`}>{s.body}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
      <div className={`lg:col-span-7 ${reverse ? 'lg:order-1' : ''}`}>
        <div className={`relative mx-auto flex max-w-[560px] items-center justify-center rounded-stage p-6 sm:p-10 ${light ? 'bg-white/5 ring-1 ring-white/10' : 'bg-gradient-to-br from-brand-mist via-white to-paper ring-1 ring-line'}`}>
          <div className="absolute left-4 top-5 z-20 sm:left-8 sm:top-8">
            <FloatingStatusChip tone={active === steps.length - 1 ? 'light' : 'brand'}>
              {active < steps.length - 1 ? <LiveDot /> : null}
              {step.chip}
            </FloatingStatusChip>
          </div>
          <PhoneFrame className="relative z-10 max-w-[280px] sm:max-w-[300px]" glow={light}>
            <div key={active} className="h-full animate-[fadeIn_.45s_ease]">
              <Screen />
            </div>
          </PhoneFrame>
        </div>
      </div>
    </div>
  );
}

export function SellerFlowStory() {
  return (
    <FlowStory
      eyebrow="Percorso venditore"
      title="Stai uscendo. Sei passaggi, pochi secondi."
      steps={[
        { title: 'Vendi', body: 'Apri Vendi: la posizione è già quella dell’auto.', chip: 'Sto uscendo', Screen: SellScreen },
        { title: 'Veicolo', body: 'Scegli con quale auto stai uscendo: chi arriva sa cosa cercare.', chip: 'Veicolo', Screen: VehicleScreen },
        { title: 'Livello', body: 'Il tuo livello fissa il prezzo. L1 incassa €1,00; chi arriva paga €1,20.', chip: 'Livello 1', Screen: LevelScreen },
        { title: 'Pubblica', body: 'Il posto va sulla mappa. Resta visibile pochi minuti.', chip: 'LIVE · pubblicato', Screen: MapSearchScreen },
        { title: 'Prenotazione', body: 'Qualcuno lo blocca e parte. Vedi distanza e tempo d’arrivo.', chip: 'Prenotato · in arrivo', Screen: BookedScreen },
        { title: 'Chiusura', body: 'Lui entra, tu esci. I proventi finiscono nel wallet e non scadono.', chip: 'Completato', Screen: CompleteScreen },
      ]}
    />
  );
}

export function BuyerFlowStory() {
  return (
    <FlowStory
      light
      reverse
      eyebrow="Percorso acquirente"
      title="Stai arrivando. Prenoti, navighi, parcheggi."
      steps={[
        { title: 'Cerca', body: 'La mappa mostra chi sta uscendo adesso, con prezzo e distanza.', chip: '3 posti live', Screen: MapSearchScreen },
        { title: 'Dettaglio', body: 'Chi è, che auto ha, tra quanto esce. Prezzo fisso, nessuna asta.', chip: '€1,20 · 180 m', Screen: ListingDetailScreen },
        { title: 'Prenota', body: 'Il saldo copre il prezzo. Il venditore sa che arrivi.', chip: 'Prenotato', Screen: BookedScreen },
        { title: 'Naviga', body: 'Indicazioni fino al punto esatto, dentro l’app.', chip: 'In navigazione', Screen: NavigationScreen },
        { title: 'Arriva', body: 'Entro 250 m confermi l’arrivo. Se sei lontano puoi annullare.', chip: 'A 120 m', Screen: NavigationScreen },
        { title: 'Completa', body: 'Scambio chiuso. Valuti l’altro con le stelle.', chip: 'Completato', Screen: CompleteScreen },
      ]}
    />
  );
}
