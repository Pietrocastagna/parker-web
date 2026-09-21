/** Prefisso GitHub Pages (es. /parker-web). Serve perché next/image unoptimized non lo aggiunge. */
const BASE = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');

function img(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${p}`;
}

/** Foto locali in /public/images */
export const IMAGES = {
  hero: img('/images/hero.jpg'),
  street: img('/images/driving.jpg'),
  city: img('/images/city-night.jpg'),
  night: img('/images/night-car.jpg'),
  traffic: img('/images/parking-signs.jpg'),
  parkingLot: img('/images/parking-lot.jpg'),
  rainStreet: img('/images/rain-city.jpg'),
  evening: img('/images/night-car.jpg'),
  phoneNav: img('/images/phone.jpg'),
  friends: img('/images/friends.jpg'),
  laptop: img('/images/laptop.jpg'),
  keys: img('/images/keys.jpg'),
  mapHands: img('/images/map.jpg'),
  morning: img('/images/keys.jpg'),
  italyStreet: img('/images/europe-street.jpg'),
  carsRow: img('/images/cars-row.jpg'),
  crosswalk: img('/images/train.jpg'),
  skyline: img('/images/city-night.jpg'),
  streetParked: img('/images/street-parked.jpg'),
  carStreet: img('/images/car-street.jpg'),
  blueCar: img('/images/blue-car.jpg'),
  train: img('/images/train.jpg'),
} as const;
