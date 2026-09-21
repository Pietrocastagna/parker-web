import { IMAGES } from './images';
import { portalPath } from './urls';

export const PACKAGES = [
  {
    name: 'Prova',
    price: '€4,99',
    credit: '€5,40 di credito',
    hint: 'Per iniziare',
    audience: 'Chi vuole provare Parker senza impegno lungo.',
    points: [
      'Circa 4 scambi al prezzo base da €1,20',
      'Acquisto una tantum sul portale web',
      'Ideale per capire se lo scambio ti serve',
      'Credito pronto nel wallet dopo il pagamento',
      'Stesso account poi usato in app',
    ],
    featured: true,
  },
  {
    name: 'Carnet 8',
    price: '€8,80',
    credit: '€9,60 di credito',
    hint: 'Uso occasionale',
    audience: 'Chi scambia qualche volta al mese.',
    points: [
      'Più credito del pacchetto Prova',
      'Una tantum, senza rinnovo automatico',
      'Utile per un uso non quotidiano',
      'Si compra solo dal portale',
      'Niente abbonamento: paghi quando ti serve',
    ],
    featured: false,
  },
  {
    name: 'Mensile 20',
    price: '€22',
    credit: '€24 di credito / mese',
    hint: 'Rinnovo automatico',
    audience: 'Chi usa Parker con regolarità.',
    points: [
      'Piano ricorrente: ogni mese il credito si rinnova',
      'Pensato per chi scambia spesso nella settimana',
      'Disdici dal portale a fine periodo quando vuoi',
      'Storico e gestione sempre sul web',
      'Stesso login in app',
    ],
    featured: false,
  },
  {
    name: 'Semestrale',
    price: '€120',
    credit: 'equiv. €24 / mese × 6',
    hint: 'Sei mesi',
    audience: 'Chi vuole continuità per mezz’anno.',
    points: [
      'Un pagamento per sei mesi',
      'Stesso ritmo di valore del mensile',
      'Meno scadenze da ricordare',
      'Gestione e storico sul portale',
      'Credito da usare sugli scambi in app',
    ],
    featured: false,
  },
  {
    name: 'Annuale',
    price: '€240',
    credit: 'equiv. €24 / mese × 12',
    hint: 'Tutto l’anno',
    audience: 'Chi rende lo scambio un’abitudine.',
    points: [
      'Un pagamento per dodici mesi',
      'Massima continuità sul credito',
      'Per chi vive Parker nella routine urbana',
      'Tutto gestito dal portale web',
      'Niente ricariche “a caso” mese per mese',
    ],
    featured: false,
  },
] as const;

export const MISSIONS = [
  {
    title: 'Vendi 3 posti',
    kind: 'Una tantum',
    body: 'Completa tre vendite. Sblocchi un premio in credito da usare solo sugli scambi. Il premio scade in pochi giorni: va usato, non “parcheggio” per mesi.',
  },
  {
    title: 'Ogni 10 vendite',
    kind: 'Ripetibile',
    body: 'A ogni blocco di dieci vendite completate ricevi un premio swap. È la missione pensata per chi tiene viva l’offerta sulla mappa.',
  },
  {
    title: '5 scambi in settimana',
    kind: 'Settimanale',
    body: 'Raggiungi cinque scambi nella settimana e ottieni un premio in credito solo-swap. Incentiva l’uso reale, non solo l’account creato.',
  },
  {
    title: 'Streak accessi',
    kind: 'Badge',
    body: 'Entra più giorni di fila: guadagni badge. Non è un premio in credito e non tocca le stelle del ranking. È un riconoscimento di presenza.',
  },
] as const;

export { IMAGES, portalPath };
