/** Mock UI: listing sulla mappa — rende il prodotto concreto, non “landing vuota”. */
export function AppMapPreview() {
  const spots = [
    { street: 'Via Roma 12', dist: '180 m', price: '€1,20', eta: '2 min', hot: true },
    { street: 'Piazza Garibaldi', dist: '320 m', price: '€2,00', eta: '4 min', hot: false },
    { street: 'Corso Italia 8', dist: '450 m', price: '€1,20', eta: '6 min', hot: false },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="absolute -inset-4 rounded-[2rem] bg-teal/15 blur-2xl" aria-hidden />
      <div className="relative overflow-hidden rounded-[2rem] border border-ink/15 bg-ink shadow-2xl shadow-ink/30">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[10px] font-semibold text-white/50">
          <span>9:41</span>
          <span className="h-1.5 w-16 rounded-full bg-white/20" />
          <span>5G</span>
        </div>

        {/* Map area */}
        <div className="relative mx-3 h-44 overflow-hidden rounded-2xl bg-[#1a2438]">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(#2a3548 1px, transparent 1px), linear-gradient(90deg, #2a3548 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="absolute left-[18%] top-[30%] h-8 w-8 rounded-full bg-teal/25 ring-2 ring-teal">
            <span className="absolute inset-1.5 rounded-full bg-teal" />
          </div>
          <div className="absolute right-[22%] top-[48%] rounded-lg bg-white px-2 py-1 text-[10px] font-bold text-ink shadow">
            €1,20
          </div>
          <div className="absolute bottom-[18%] left-[40%] rounded-lg bg-white/90 px-2 py-1 text-[10px] font-bold text-ink">
            €2,00
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex gap-2">
            <span className="rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur">
              Vicini a te
            </span>
            <span className="rounded-full bg-teal px-2.5 py-1 text-[10px] font-bold text-ink">
              3 disponibili
            </span>
          </div>
        </div>

        {/* Listings */}
        <div className="space-y-2 px-3 py-3">
          {spots.map((s) => (
            <div
              key={s.street}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${
                s.hot ? 'bg-teal/15 ring-1 ring-teal/40' : 'bg-white/5'
              }`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/20 font-display text-xs font-bold text-teal">
                P
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-white">{s.street}</p>
                <p className="text-[10px] text-white/45">
                  {s.dist} · arrivo ~{s.eta}
                </p>
              </div>
              <div className="text-right">
                <p className="font-display text-sm font-bold text-white">{s.price}</p>
                <p className="text-[9px] text-white/40">fisso</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 px-4 py-3">
          <div className="rounded-full bg-teal py-2.5 text-center text-xs font-bold text-ink">
            Prenota questo posto
          </div>
        </div>
      </div>
    </div>
  );
}
