import { SITE_BASE } from './urls';

const BASE = SITE_BASE;

function asset(name: string): string {
  return `${BASE}/assets/parkhub/${name}`;
}

/** Slot asset — collegare i WebP reali quando disponibili. */
export const IMAGES = {
  hero: asset('hero-city-parkhub.webp'),
  problem: asset('problem-city-loop.webp'),
  stepSeller: asset('step-seller.webp'),
  stepBuyer: asset('step-buyer.webp'),
  stepComplete: asset('step-complete.webp'),
  appBg: asset('app-city-background.webp'),
  security: asset('security-user-car.webp'),
  ranking: asset('ranking-city-user.webp'),
  missions: asset('missions-city-user.webp'),
  invite: asset('invite-friends-city.webp'),
  cta: asset('cta-city-evening.webp'),
  mockMap: asset('mockup-app-map.webp'),
  mockSeller: asset('mockup-app-seller.webp'),
  mockBooking: asset('mockup-app-booking.webp'),
  mockWallet: asset('mockup-portal-wallet.webp'),
  mockRanking: asset('mockup-ranking.webp'),
  mockReferral: asset('mockup-referral.webp'),
} as const;

export const PACKAGES = [
  {
    name: 'Prova',
    price: '€4,99',
    credit: 'Ricevi €5,40 di credito',
    hint: 'Per iniziare',
    note: null as string | null,
    featured: false,
  },
  {
    name: 'Carnet 8',
    price: '€8,99',
    credit: 'Ricevi €9,60 di credito',
    hint: 'Uso occasionale',
    note: null,
    featured: false,
  },
  {
    name: 'Mensile',
    price: '€23,90 / mese',
    credit: 'Ricevi €24 / mese',
    hint: 'Più scelto',
    note: 'Rinnovo automatico',
    featured: true,
  },
  {
    name: 'Semestrale',
    price: '€138,90',
    credit: '€24/mese per 6 mesi',
    hint: 'Continuità',
    note: 'Rinnovo a scadenza attivo di default',
    featured: false,
  },
  {
    name: 'Annuale',
    price: '€274,90',
    credit: '€24/mese per 12 mesi',
    hint: 'Massimo valore',
    note: 'Rinnovo a scadenza attivo di default',
    featured: false,
  },
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
  {
    title: 'Vendi 3 posti',
    kind: 'Una volta',
    prize: 'Un parcheggio gratis',
  },
  {
    title: 'Ogni 10 vendite',
    kind: 'Ripetibile',
    prize: 'Un parcheggio gratis',
  },
  {
    title: '5 scambi in una settimana',
    kind: 'Settimanale',
    prize: 'Un parcheggio gratis',
  },
  {
    title: 'Streak di accessi',
    kind: 'Badge',
    prize: 'Badge, nessun credito',
  },
] as const;

export const MILESTONES = [
  {
    title: '100 vendite nel trimestre',
    prize: '10 parcheggi gratis',
  },
  {
    title: '200 vendite nello stesso trimestre',
    prize: '1 mese del piano mensile',
  },
  {
    title: '500 vendite nell’anno',
    prize: 'Gift card €100',
  },
] as const;

export const FAQS = [
  {
    q: 'Che cosa fa ParkHub esattamente?',
    a: 'ParkHub mette in contatto chi sta lasciando un parcheggio con chi lo sta cercando, nello stesso momento. Trovi un posto vicino sulla mappa, lo prenoti a prezzo fisso e ci arrivi guidato dall’app. Il credito si compra sul portale.',
  },
  {
    q: 'Dove funziona ParkHub?',
    a: 'In tutta Italia. Quanti posti vedi dipende da quanti utenti pubblicano nella tua zona e nella fascia oraria in cui cerchi.',
  },
  {
    q: 'Quanto costa prenotare un posto?',
    a: 'Il prezzo è fisso e visibile prima di confermare. Parte da €1,20 e arriva fino a €5,00 a seconda del livello scelto dal venditore.',
  },
  {
    q: 'Devo pagare anche le strisce blu?',
    a: 'Sì, se il posto è a pagamento sul suolo pubblico. Il prezzo dello scambio ParkHub non include il ticket del parcometro.',
  },
  {
    q: 'Posso usare la carta direttamente nell’app?',
    a: 'No. Il pagamento con carta avviene sul portale web. Nell’app usi il credito già disponibile nel wallet.',
  },
  {
    q: 'Posso prelevare il credito?',
    a: 'No. Il credito ParkHub resta nel circuito: lo usi per gli scambi. Chi vende riceve credito da riusare, non un bonifico bancario.',
  },
  {
    q: 'Come funziona il ranking?',
    a: 'Le stelle misurano l’affidabilità negli scambi. Vedi solo il tuo punteggio. Con ranking sotto soglia puoi comunque pubblicare, ma al livello di prezzo base. Non è una classifica pubblica e non coincide con le missioni.',
  },
  {
    q: 'Cosa succede se devo annullare?',
    a: 'Se sei ancora lontano e non sei negli ultimi minuti di attesa, puoi annullare con rimborso senza penale ranking. Se sei molto vicino al posto, lo scambio va completato oppure apri una segnalazione. Se annulli all’ultimo momento pur essendo lontano, ricevi il rimborso ma il ranking può diminuire.',
  },
  {
    q: 'Come funziona Invita un amico?',
    a: 'Condividi codice, link o QR. L’amico lo usa solo in registrazione. Quando completa il primo scambio, tu ricevi €2,50. Ogni tre amici qualificati il blocco vale €10 (€2,50 + €2,50 + €5). Il bonus è spendibile solo sugli swap.',
  },
  {
    q: 'Posso usare lo stesso account su app e portale?',
    a: 'Sì. Un solo account: stesse email e password. Lo scambio è in app; i pacchetti di credito si comprano sul portale.',
  },
] as const;

export const NAV = [
  { href: '/come-funziona', label: 'Come funziona' },
  { href: '/prezzi', label: 'Prezzi' },
  { href: '/missioni', label: 'Missioni' },
  { href: '/ranking', label: 'Ranking' },
  { href: '/invita', label: 'Invita' },
] as const;
