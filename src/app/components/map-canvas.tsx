'use client';

/**
 * Mappa astratta SVG: isolati, strade, verde, route animata e pin.
 * Usata come texture di sezione, come schermo app e come sfondo stage.
 */

type Pin = { x: number; y: number; price?: string; hot?: boolean };

const ROADS_H = [48, 112, 176, 236];
const ROADS_V = [64, 148, 232, 316];

export function MapCanvas({
  theme = 'light',
  pins = [],
  route,
  user,
  className = '',
  dense = false,
}: {
  theme?: 'light' | 'dark';
  pins?: Pin[];
  route?: string;
  user?: { x: number; y: number };
  className?: string;
  dense?: boolean;
}) {
  const dark = theme === 'dark';
  const bg = dark ? '#0F1A25' : '#EEF2EE';
  const block = dark ? '#15222F' : '#F8FAF8';
  const blockAlt = dark ? '#192837' : '#F2F5F1';
  const road = dark ? '#243446' : '#FFFFFF';
  const roadEdge = dark ? '#1C2B3B' : '#DDE4DE';
  const green = dark ? '#123A33' : '#D9EFE4';
  const water = dark ? '#0F2C3A' : '#D6E8F0';

  return (
    <svg
      viewBox="0 0 380 280"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
      focusable="false"
    >
      <rect width="380" height="280" fill={bg} />
      {/* isolati */}
      {ROADS_H.slice(0, -1).map((y, i) =>
        ROADS_V.slice(0, -1).map((x, j) => (
          <rect
            key={`${i}-${j}`}
            x={x + 7}
            y={y + 7}
            width={ROADS_V[j + 1] - x - 14}
            height={ROADS_H[i + 1] - y - 14}
            rx="6"
            fill={(i + j) % 2 ? blockAlt : block}
          />
        )),
      )}
      {/* bordi esterni */}
      <rect x="0" y="0" width="57" height="280" fill={block} />
      <rect x="323" y="0" width="57" height="280" fill={blockAlt} />
      <rect x="0" y="0" width="380" height="41" fill={blockAlt} />
      <rect x="0" y="243" width="380" height="37" fill={block} />
      {/* parco e acqua */}
      <path d="M232 119 h77 a6 6 0 0 1 6 6 v44 a6 6 0 0 1 -6 6 h-77 a6 6 0 0 1 -6 -6 v-44 a6 6 0 0 1 6 -6z" fill={green} />
      <path d="M0 250 C 60 238, 120 262, 190 250 S 320 240, 380 254 V 280 H 0 Z" fill={water} />
      {/* strade */}
      {ROADS_H.map((y) => (
        <g key={`h${y}`}>
          <line x1="0" y1={y} x2="380" y2={y} stroke={roadEdge} strokeWidth="14" />
          <line x1="0" y1={y} x2="380" y2={y} stroke={road} strokeWidth="11" />
        </g>
      ))}
      {ROADS_V.map((x) => (
        <g key={`v${x}`}>
          <line x1={x} y1="0" x2={x} y2="280" stroke={roadEdge} strokeWidth="14" />
          <line x1={x} y1="0" x2={x} y2="280" stroke={road} strokeWidth="11" />
        </g>
      ))}
      {/* viale diagonale */}
      <path d="M-10 230 C 90 190, 160 120, 400 60" stroke={roadEdge} strokeWidth="16" fill="none" />
      <path d="M-10 230 C 90 190, 160 120, 400 60" stroke={road} strokeWidth="13" fill="none" />
      {dense ? (
        <g stroke={roadEdge} strokeWidth="4" opacity="0.6">
          <line x1="106" y1="48" x2="106" y2="112" />
          <line x1="274" y1="176" x2="274" y2="236" />
          <line x1="64" y1="206" x2="148" y2="206" />
          <line x1="232" y1="80" x2="316" y2="80" />
        </g>
      ) : null}
      {/* route */}
      {route ? (
        <>
          <path d={route} stroke={dark ? '#052F2A' : '#B9EFE4'} strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d={route}
            stroke="#00C9A7"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="10 8"
            className="route-flow"
          />
        </>
      ) : null}
      {/* utente */}
      {user ? (
        <g>
          <circle cx={user.x} cy={user.y} r="14" fill="#2563EB" opacity="0.18" className="signal-pulse" style={{ transformOrigin: `${user.x}px ${user.y}px` }} />
          <circle cx={user.x} cy={user.y} r="6" fill="#2563EB" stroke="#fff" strokeWidth="2.5" />
        </g>
      ) : null}
      {/* pin */}
      {pins.map((p, i) => (
        <g key={i}>
          {p.hot ? (
            <circle cx={p.x} cy={p.y} r="18" fill="#00C9A7" opacity="0.22" className="signal-pulse" style={{ transformOrigin: `${p.x}px ${p.y}px` }} />
          ) : null}
          <path
            d={`M${p.x} ${p.y + 2} c -7 -8 -10 -12 -10 -18 a10 10 0 0 1 20 0 c 0 6 -3 10 -10 18z`}
            fill={p.hot ? '#00C9A7' : dark ? '#F4F6F4' : '#07131F'}
            stroke={dark ? '#0F1A25' : '#FFFFFF'}
            strokeWidth="2"
          />
          <circle cx={p.x} cy={p.y - 16} r="3.5" fill={p.hot ? '#052F2A' : dark ? '#07131F' : '#FFFFFF'} />
          {p.price ? (
            <g>
              <rect x={p.x + 10} y={p.y - 30} width="36" height="16" rx="8" fill={dark ? '#F4F6F4' : '#07131F'} />
              <text x={p.x + 28} y={p.y - 18.5} textAnchor="middle" fontSize="9.5" fontWeight="700" fill={dark ? '#07131F' : '#FFFFFF'} fontFamily="ui-monospace, Menlo, monospace">
                {p.price}
              </text>
            </g>
          ) : null}
        </g>
      ))}
    </svg>
  );
}

/* ----- Schermate app (HTML/CSS reale, non immagini) ----- */

function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex items-center justify-between px-6 pb-1 pt-3 text-[11px] font-semibold ${dark ? 'text-white/80' : 'text-ink'}`}>
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="inline-block h-2 w-3 rounded-[2px] bg-current opacity-80" />
        <span className="inline-block h-2 w-5 rounded-[3px] border border-current opacity-80" />
      </span>
    </div>
  );
}

export function MapSearchScreen() {
  return (
    <div className="flex h-full flex-col bg-white text-ink">
      <StatusBar />
      <div className="relative flex-1">
        <MapCanvas
          className="absolute inset-0 h-full w-full"
          pins={[
            { x: 150, y: 120, price: '1 P', hot: true },
            { x: 240, y: 70, price: '2 P' },
            { x: 100, y: 210, price: '1 P' },
          ]}
          user={{ x: 190, y: 190 }}
        />
        <div className="absolute inset-x-3 top-2 flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2.5 shadow-float">
          <SearchIcon />
          <span className="text-[12px] text-ink/55">Cerca in questa zona</span>
          <span className="ml-auto rounded-pill bg-brand px-2 py-0.5 text-[10px] font-bold text-ink">3 live</span>
        </div>
      </div>
      <div className="rounded-t-[22px] bg-white px-4 pb-4 pt-3 shadow-[0_-10px_30px_rgba(7,19,31,0.08)]">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-ink/10" />
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-bold">Vicini a te</p>
          <p className="text-[11px] font-semibold text-brand-deep">3 disponibili</p>
        </div>
        <div className="mt-2.5 space-y-2">
          {[
            ['Via dei Tigli 12', '180 m · 2 min', '1 P', true],
            ['Piazza Europa', '320 m · 4 min', '2 P', false],
          ].map(([s, d, p, hot]) => (
            <div
              key={s as string}
              className={`flex items-center gap-3 rounded-xl px-3 py-2 ${hot ? 'bg-brand-mist ring-1 ring-brand/40' : 'bg-paper'}`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-[11px] font-bold text-brand">P</span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-semibold">{s as string}</p>
                <p className="text-[10px] text-ink/50">{d as string}</p>
              </div>
              <p className="font-mono text-[13px] font-bold">{p as string}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-pill bg-brand py-2.5 text-center text-[12px] font-bold text-ink">Prenota questo posto</div>
      </div>
    </div>
  );
}

export function SellScreen() {
  return (
    <div className="flex h-full flex-col bg-paper text-ink">
      <StatusBar />
      <div className="px-4 pt-1">
        <p className="text-[11px] font-semibold text-ink/50">Vendi</p>
        <h4 className="font-display text-[20px] font-bold leading-tight">Sto uscendo</h4>
      </div>
      <div className="mx-4 mt-3 overflow-hidden rounded-2xl">
        <MapCanvas className="h-28 w-full" pins={[{ x: 190, y: 140, hot: true }]} />
      </div>
      <div className="mx-4 mt-3 space-y-2">
        <Row label="Posizione" value="Via dei Tigli 12" />
        <Row label="Veicolo" value="Fiat 500 · FX 412 KL" />
        <Row label="Esco tra" value="5 min" />
        <div className="flex items-center justify-between rounded-xl bg-ink px-3 py-2.5 text-white">
          <div>
            <p className="text-[10px] text-white/55">Livello 1 · incassi</p>
            <p className="font-mono text-[15px] font-bold text-brand">€1,00</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-white/55">chi arriva paga</p>
            <p className="font-mono text-[13px] font-bold">1 P</p>
          </div>
        </div>
      </div>
      <div className="mt-auto px-4 pb-4">
        <div className="rounded-pill bg-brand py-2.5 text-center text-[12px] font-bold text-ink">Pubblica il posto</div>
      </div>
    </div>
  );
}

export function BookedScreen() {
  return (
    <div className="flex h-full flex-col bg-white text-ink">
      <StatusBar />
      <div className="relative flex-1">
        <MapCanvas
          className="absolute inset-0 h-full w-full"
          pins={[{ x: 150, y: 120, hot: true }]}
          user={{ x: 232, y: 236 }}
          route="M232 236 L232 176 L150 176 L150 128"
        />
        <div className="absolute inset-x-3 top-2 flex items-center gap-2 rounded-2xl bg-ink px-3 py-2.5 text-white shadow-float">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-brand signal-pulse" />
            <span className="relative h-2 w-2 rounded-full bg-brand" />
          </span>
          <span className="text-[12px] font-semibold">Prenotato · arrivo in corso</span>
        </div>
      </div>
      <div className="rounded-t-[22px] bg-white px-4 pb-4 pt-3 shadow-[0_-10px_30px_rgba(7,19,31,0.08)]">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-ink/10" />
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-mist font-display text-[13px] font-bold text-brand-deep">M</span>
          <div className="flex-1">
            <p className="text-[13px] font-bold">Marco sta arrivando</p>
            <p className="text-[11px] text-ink/55">Via dei Tigli 12 · 180 m</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[15px] font-bold">2 min</p>
            <p className="font-mono text-[10px] text-ink/50">1 P</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-pill border border-line py-2.5 text-center text-[12px] font-semibold">Annulla</div>
          <div className="rounded-pill bg-ink py-2.5 text-center text-[12px] font-bold text-brand">Naviga</div>
        </div>
      </div>
    </div>
  );
}

export function NavigationScreen() {
  return (
    <div className="flex h-full flex-col bg-white text-ink">
      <StatusBar dark />
      <div className="relative flex-1 bg-ink">
        <MapCanvas
          theme="dark"
          className="absolute inset-0 h-full w-full"
          pins={[{ x: 240, y: 70, hot: true }]}
          user={{ x: 106, y: 236 }}
          route="M106 236 L106 112 L240 112 L240 78"
        />
        <div className="absolute inset-x-3 top-2 rounded-2xl bg-ink/90 px-3 py-2.5 text-white shadow-float backdrop-blur">
          <p className="text-[10px] font-semibold text-white/55">Tra 120 m</p>
          <p className="text-[13px] font-bold">Svolta a destra · Via dei Tigli</p>
        </div>
      </div>
      <div className="flex items-center justify-between bg-white px-4 py-3.5">
        <div>
          <p className="font-mono text-[16px] font-bold">2 min</p>
          <p className="text-[10px] text-ink/50">180 m · arrivo 9:43</p>
        </div>
        <span className="rounded-pill bg-brand px-3 py-1.5 text-[11px] font-bold text-ink">Sono arrivato</span>
      </div>
    </div>
  );
}

export function CompleteScreen() {
  return (
    <div className="flex h-full flex-col bg-brand-mist text-ink">
      <StatusBar />
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-ink shadow-float">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h4 className="mt-4 font-display text-[20px] font-bold leading-tight">Scambio completato</h4>
        <p className="mt-1 text-[12px] text-ink/60">Uno esce. L’altro entra.</p>
        <div className="mt-5 w-full rounded-2xl bg-white p-3.5 shadow-soft">
          <div className="flex items-center justify-between text-[12px]">
            <span className="text-ink/60">Proventi vendita</span>
            <span className="font-mono font-bold text-success">+ €1,00</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[12px]">
            <span className="text-ink/60">P disponibili</span>
            <span className="font-mono font-bold">16 P</span>
          </div>
        </div>
        <div className="mt-4 flex gap-1.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <svg key={n} width="22" height="22" viewBox="0 0 24 24" fill={n <= 5 ? '#F6B64A' : 'none'} stroke="#F6B64A" strokeWidth="1.5" aria-hidden>
              <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />
            </svg>
          ))}
        </div>
        <p className="mt-1.5 text-[10px] text-ink/50">Valuta lo scambio</p>
      </div>
    </div>
  );
}

export function WalletScreen() {
  return (
    <div className="flex h-full flex-col bg-paper text-ink">
      <StatusBar />
      <div className="px-4 pt-1">
        <p className="text-[11px] font-semibold text-ink/50">Wallet</p>
        <p className="font-mono text-[30px] font-bold leading-none">18 P</p>
      </div>
      <div className="mx-4 mt-4 space-y-2">
        {[
          ['Bonus', '2 P', 'scade tra 12 g', 'bg-amber/15 text-amber'],
          ['Pacchetto P', '15 P', 'Mensile · rinnovo 12/11', 'bg-brand/15 text-brand-deep'],
          ['Proventi vendita', '€1,00', 'non scadono', 'bg-ink/10 text-ink'],
        ].map(([t, v, d, c]) => (
          <div key={t} className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 shadow-soft">
            <span className={`h-8 w-1.5 rounded-full ${c.split(' ')[0]}`} />
            <div className="flex-1">
              <p className="text-[12px] font-semibold">{t}</p>
              <p className="text-[10px] text-ink/50">{d}</p>
            </div>
            <p className="font-mono text-[13px] font-bold">{v}</p>
          </div>
        ))}
      </div>
      <p className="mx-4 mt-3 text-[10px] text-ink/50">La carta si usa sul portale. In app usi i P già disponibili.</p>
    </div>
  );
}

export function VehicleScreen() {
  return (
    <div className="flex h-full flex-col bg-paper text-ink">
      <StatusBar />
      <div className="px-4 pt-1">
        <p className="text-[11px] font-semibold text-ink/50">Vendi · 2 di 4</p>
        <h4 className="font-display text-[20px] font-bold leading-tight">Con quale veicolo?</h4>
      </div>
      <div className="mx-4 mt-4 space-y-2">
        {[
          ['Fiat 500', 'FX 412 KL', true],
          ['Toyota Yaris', 'GB 882 MN', false],
        ].map(([m, p, on]) => (
          <div key={m as string} className={`flex items-center gap-3 rounded-xl bg-white px-3 py-3 shadow-soft ${on ? 'ring-1 ring-brand' : ''}`}>
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-brand">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 16l1.5-5h11L19 16" />
                <rect x="3" y="11" width="18" height="6" rx="2" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-[12px] font-semibold">{m as string}</p>
              <p className="font-mono text-[10px] text-ink/50">{p as string}</p>
            </div>
            <span className={`h-4 w-4 rounded-full border-2 ${on ? 'border-brand bg-brand' : 'border-ink/20'}`} />
          </div>
        ))}
        <div className="rounded-xl border border-dashed border-ink/20 px-3 py-3 text-center text-[11px] font-semibold text-ink/50">+ Aggiungi veicolo</div>
      </div>
      <div className="mt-auto px-4 pb-4">
        <div className="rounded-pill bg-ink py-2.5 text-center text-[12px] font-bold text-brand">Continua</div>
      </div>
    </div>
  );
}

export function LevelScreen() {
  return (
    <div className="flex h-full flex-col bg-paper text-ink">
      <StatusBar />
      <div className="px-4 pt-1">
        <p className="text-[11px] font-semibold text-ink/50">Vendi · 3 di 4</p>
        <h4 className="font-display text-[20px] font-bold leading-tight">Il tuo livello</h4>
      </div>
      <div className="mx-4 mt-4 rounded-2xl bg-ink p-4 text-white">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] text-white/55">Livello attuale</p>
            <p className="font-display text-[26px] font-bold leading-none">1&nbsp;P</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-white/55">tu incassi</p>
            <p className="font-mono text-[18px] font-bold text-brand">€1,00</p>
          </div>
        </div>
        <div className="mt-3 flex items-end gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <span key={n} className={`flex-1 rounded-t ${n === 1 ? 'bg-brand' : 'bg-white/15'}`} style={{ height: 10 + n * 6 }} />
          ))}
        </div>
        <p className="mt-2 text-[10px] text-white/55">12 vendite · ranking 4,6 ★ · prossimo listino 2 P a 20</p>
      </div>
      <div className="mx-4 mt-3 rounded-xl bg-white px-3 py-2.5 text-[11px] text-ink/60 shadow-soft">
        Chi arriva paga <span className="font-mono font-bold text-ink">1 P</span>. Listino fisso, nessuna trattativa.
      </div>
      <div className="mt-auto px-4 pb-4">
        <div className="rounded-pill bg-ink py-2.5 text-center text-[12px] font-bold text-brand">Continua</div>
      </div>
    </div>
  );
}

export function ListingDetailScreen() {
  return (
    <div className="flex h-full flex-col bg-white text-ink">
      <StatusBar />
      <div className="relative mx-3 h-32 overflow-hidden rounded-2xl">
        <MapCanvas className="h-full w-full" pins={[{ x: 190, y: 140, price: '1 P', hot: true }]} user={{ x: 300, y: 230 }} />
      </div>
      <div className="px-4 pt-3">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-display text-[18px] font-bold leading-tight">Via dei Tigli 12</h4>
            <p className="text-[11px] text-ink/55">180 m · 2 min a piedi dall’auto</p>
          </div>
          <p className="font-mono text-[20px] font-bold">1 P</p>
        </div>
        <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-paper px-3 py-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-mist font-display text-[12px] font-bold text-brand-deep">G</span>
          <div className="flex-1">
            <p className="text-[12px] font-semibold">Giulia · Fiat 500 grigia</p>
            <p className="text-[10px] text-ink/50">esce tra 3 min · 4,8 ★</p>
          </div>
        </div>
        <ul className="mt-3 space-y-1 text-[11px] text-ink/60">
          <li>· Posto su strada, strisce bianche</li>
          <li>· Prezzo fisso, prelevato dal saldo</li>
          <li>· Annullo gratuito se sei lontano</li>
        </ul>
      </div>
      <div className="mt-auto px-4 pb-4">
        <div className="rounded-pill bg-brand py-2.5 text-center text-[12px] font-bold text-ink">Prenota · 1 P</div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5 shadow-soft">
      <span className="text-[11px] text-ink/55">{label}</span>
      <span className="text-[12px] font-semibold">{value}</span>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-ink/60" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

/* ----- Portale (laptop) ----- */
export function PortalDashboardScreen() {
  return (
    <div className="flex h-full bg-paper text-ink">
      <aside className="hidden w-[26%] flex-col gap-1.5 border-r border-line bg-white px-3 py-4 sm:flex">
        <div className="mb-3 h-5 w-20 rounded bg-ink/90" />
        {['Account', 'Pacchetti', 'Wallet', 'Ranking', 'Missioni', 'Inviti', 'Supporto'].map((x, i) => (
          <div key={x} className={`rounded-lg px-2.5 py-1.5 text-[10px] font-semibold ${i === 2 ? 'bg-brand-mist text-brand-deep' : 'text-ink/60'}`}>
            {x}
          </div>
        ))}
      </aside>
      <div className="flex-1 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold text-ink/50">P disponibili</p>
            <p className="font-mono text-[26px] font-bold leading-none">18 P</p>
          </div>
          <span className="rounded-pill bg-brand px-3 py-1.5 text-[10px] font-bold text-ink">Ricarica</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ['Bonus', '2 P'],
            ['Pacchetto', '15 P'],
            ['Proventi', '€1,00'],
          ].map(([t, v]) => (
            <div key={t} className="rounded-xl bg-white p-2.5 shadow-soft">
              <p className="text-[9px] text-ink/50">{t}</p>
              <p className="font-mono text-[13px] font-bold">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl bg-white p-3 shadow-soft">
          <p className="text-[10px] font-bold">Pacchetti digitali</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {[
              ['Prova', '+4 P'],
              ['Mensile', '+20 P'],
              ['Carnet 8', '+8 P'],
            ].map(([t, v], i) => (
              <div key={t} className={`rounded-lg border p-2 ${i === 1 ? 'border-brand bg-brand-mist' : 'border-line'}`}>
                <p className="text-[9px] text-ink/60">{t}</p>
                <p className="font-mono text-[12px] font-bold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
