import { SITE_BASE } from './urls';

function asset(name: string): string {
  return `${SITE_BASE}/assets/parkhub/${name}`;
}

/** Naming convention V2: page-section-name-role-orientation.webp */
export const IMAGES = {
  home01: asset('home-01-hero-city-signal-wide.webp'),
  home03: asset('home-03-problem-search-loop-wide.webp'),
  home04a: asset('home-04-flow-publish-context.webp'),
  home04b: asset('home-04-flow-booking-context.webp'),
  home04c: asset('home-04-flow-handoff-context.webp'),
  home05seller: asset('home-05-seller-leaving-car-portrait.webp'),
  home05buyer: asset('home-05-buyer-arriving-car-portrait.webp'),
  home07: asset('home-07-ecosystem-app-portal-stage.webp'),
  home11: asset('home-11-trust-user-vehicle-wide.webp'),
  home14: asset('home-14-referral-friends-street-wide.webp'),
  home15a: asset('home-15-real-life-station.webp'),
  home15b: asset('home-15-real-life-hospital.webp'),
  home15c: asset('home-15-real-life-center.webp'),
  home15d: asset('home-15-real-life-evening.webp'),
  home17: asset('home-17-final-cta-blue-hour-wide.webp'),
  how01: asset('how-01-hero-two-drivers-signal-wide.webp'),
  pricing01: asset('pricing-01-hero-wallet-device-stage.webp'),
  app01: asset('app-01-hero-city-map-device-stage.webp'),
  ranking01: asset('ranking-01-hero-user-city-wide.webp'),
  missions01: asset('missions-01-hero-active-city-user-wide.webp'),
  invite01: asset('invite-01-hero-friends-smartphone-wide.webp'),
  about01: asset('about-01-hero-city-handoff-wide.webp'),
} as const;

export const PACKAGES = [
  { name: 'Prova', price: '€4,99', credit: '€5,40 credito', hint: 'Per iniziare', note: null as string | null, featured: false },
  { name: 'Carnet 8', price: '€8,99', credit: '€9,60 credito', hint: 'Occasionale', note: null, featured: false },
  { name: 'Mensile', price: '€23,90 / mese', credit: '€24 credito/mese', hint: 'Più scelto', note: 'Rinnovo automatico', featured: true },
  { name: 'Semestrale', price: '€138,90', credit: '€24/mese × 6', hint: 'Continuità', note: 'Rinnovo a scadenza default on', featured: false },
  { name: 'Annuale', price: '€274,90', credit: '€24/mese × 12', hint: 'Massimo valore', note: 'Rinnovo a scadenza default on', featured: false },
] as const;

export const BUNDLES = [
  { name: 'Bundle 8', price: '€9,99' },
  { name: 'Bundle 20', price: '€24,99' },
  { name: 'Bundle 50', price: '€59,99' },
] as const;

export const PRICE_TIERS = [
  { level: 1, sales: '0–19', buyer: '€1,20', seller: '€1,00', fee: '€0,20' },
  { level: 2, sales: '20–49', buyer: '€2,00', seller: '€1,60', fee: '€0,40' },
  { level: 3, sales: '50–99', buyer: '€3,00', seller: '€2,60', fee: '€0,40' },
  { level: 4, sales: '100–149', buyer: '€4,00', seller: '€3,60', fee: '€0,40' },
  { level: 5, sales: '150+', buyer: '€5,00', seller: '€4,50', fee: '€0,50' },
] as const;

export const MISSIONS = [
  { title: 'Vendi 3 posti', kind: 'Una volta', prize: 'Un parcheggio gratis' },
  { title: 'Ogni 10 vendite', kind: 'Ripetibile', prize: 'Un parcheggio gratis' },
  { title: '5 scambi in settimana', kind: 'Settimanale', prize: 'Un parcheggio gratis' },
  { title: 'Streak di accessi', kind: 'Badge', prize: 'Badge, nessun credito' },
] as const;

export const MILESTONES = [
  { title: '100 vendite nel trimestre', prize: '10 parcheggi gratis' },
  { title: '200 nello stesso trimestre', prize: '1 mese piano mensile' },
  { title: '500 vendite nell’anno', prize: 'Gift card €100' },
] as const;

/**
 * Offerta di lancio (temporanea). Per toglierla dal sito basta mettere
 * `enabled: false`: spariscono sezione home, pill hero e FAQ dedicata.
 */
export const LAUNCH_PROMO = {
  enabled: true,
  seats: 10_000,
  seatsLabel: '10.000',
  parkings: 10,
  validityDays: 90,
  /** Backend: parker-v2 `foundersCampaign.ts` — 10 coupon da €1,20, max 1 per swap. */
  rule: 'Un parcheggio gratis per scambio, fino a 10 scambi, entro 90 giorni dalla verifica del telefono.',
} as const;

export const BALANCE_SOURCES = [
  {
    title: 'Pacchetto acquistato',
    body: 'Prova, Carnet, piani Mensile/Semestrale/Annuale e bundle extra. Si comprano sul portale, si spendono in app.',
    tag: 'Portale',
  },
  {
    title: 'Gruppo',
    body: 'Quote e bundle del gruppo (famiglia, team) condivisi tra i membri secondo le regole dell’admin.',
    tag: 'Condiviso',
  },
  {
    title: 'Bonus missioni',
    body: 'Premi piccoli per comportamenti utili: solo swap, scadenza breve, tetto €3/mese.',
    tag: 'Bonus',
  },
] as const;

const LAUNCH_FAQ = {
  q: 'Cos’è l’offerta di lancio dei 10 parcheggi?',
  a: 'I primi 10.000 utenti che completano la verifica del telefono ricevono 10 parcheggi gratis: un parcheggio per scambio, fino a 10 scambi, entro 90 giorni. Si usano solo per prenotare posti in app; non sono proventi e non diventano buoni. Raggiunti i 10.000 iscritti l’offerta si chiude da sola.',
} as const;

const BASE_FAQS = [
  {
    q: 'Che cosa sto comprando esattamente?',
    a: 'Compri credito ParkHub sul portale. Lo usi in app per prenotare posti pubblicati da altri automobilisti a prezzo fisso. Non stai comprando un box, né ticket strisce blu.',
  },
  {
    q: 'Dove funziona ParkHub?',
    a: 'In tutta Italia. Quanti posti vedi dipende da quanti utenti pubblicano nella tua zona e nella fascia oraria in cui cerchi.',
  },
  {
    q: 'Quanto costa uno scambio?',
    a: 'Il prezzo è fisso e visibile prima di confermare. Parte da €1,20 e arriva fino a €5,00 a seconda del livello del venditore.',
  },
  {
    q: 'Le strisce blu sono comprese?',
    a: 'No. Se il posto è a pagamento sul suolo pubblico, il parcometro resta a carico tuo.',
  },
  {
    q: 'Perché compro credito sul portale?',
    a: 'I pagamenti con carta stanno sul web (Stripe). In app usi il wallet già carico: niente checkout mentre sei in strada.',
  },
  {
    q: 'Posso prelevare il credito?',
    a: 'No. Il credito resta nel circuito ParkHub e si riusa negli scambi. Non diventa un bonifico bancario.',
  },
  {
    q: 'Cosa succede se annullo?',
    a: 'Lontano e con tempo: rimborso senza penale ranking. Molto vicino: completi o apri un report. Lontano ma negli ultimi 3 minuti: rimborso e possibile penale ranking.',
  },
  {
    q: 'Come funziona il ranking?',
    a: 'Stelle personali di affidabilità, non una classifica pubblica. Sotto soglia puoi ancora vendere, ma al livello di prezzo base. Le missioni non modificano le stelle.',
  },
  {
    q: 'Come funzionano i bonus invito?',
    a: 'Condividi codice/link/QR. L’amico lo usa solo in registrazione. Al suo primo scambio tu ricevi €2,50. Ogni tre amici qualificati: €2,50 + €2,50 + €5 = €10. Il bonus si spende solo per prenotare parcheggi: non si riscatta in buoni e non si preleva.',
  },
  {
    q: 'Posso usare lo stesso account su app e portale?',
    a: 'Sì. Un solo account, stesso saldo. App per la strada; portale per credito e gestione.',
  },
] as const;

export const FAQS: readonly { q: string; a: string }[] = LAUNCH_PROMO.enabled
  ? [LAUNCH_FAQ, ...BASE_FAQS]
  : BASE_FAQS;

export const NAV = [
  { href: '/come-funziona', label: 'Come funziona' },
  { href: '/prezzi', label: 'Prezzi' },
  { href: '/ranking', label: 'Ranking' },
  { href: '/missioni', label: 'Missioni' },
  { href: '/invita', label: 'Invita' },
] as const;
