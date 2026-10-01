# Asset ParkHub V2

Naming: `[page]-[section]-[name]-[role]-[orientation].webp`

## HOME
- home-01-hero-city-signal-wide.webp
- home-03-problem-search-loop-wide.webp
- home-04-flow-publish-context.webp
- home-04-flow-booking-context.webp
- home-04-flow-handoff-context.webp
- home-05-seller-leaving-car-portrait.webp
- home-05-buyer-arriving-car-portrait.webp
- home-07-ecosystem-app-portal-stage.webp
- home-11-trust-user-vehicle-wide.webp
- home-14-referral-friends-street-wide.webp
- home-15-real-life-station.webp
- home-15-real-life-hospital.webp
- home-15-real-life-center.webp
- home-15-real-life-evening.webp
- home-17-final-cta-blue-hour-wide.webp

## Altre pagine
- how-01-hero-two-drivers-signal-wide.webp
- how-02-seller-publish-context.webp
- how-03-buyer-navigation-context.webp
- how-04-handoff-two-cars-wide.webp
- how-05-report-evidence-context.webp
- pricing-01-hero-wallet-device-stage.webp
- pricing-04-wallet-buckets-dark-bg.webp
- app-01-hero-city-map-device-stage.webp
- app-04-download-city-evening-wide.webp
- ranking-01-hero-user-city-wide.webp
- ranking-03-trust-event-feed-context.webp
- missions-01-hero-active-city-user-wide.webp
- missions-03-progress-lifestyle-wide.webp
- invite-01-hero-friends-smartphone-wide.webp
- invite-03-referral-qr-context.webp
- about-01-hero-city-handoff-wide.webp
- about-03-human-city-parking-wide.webp

## Come funziona il fallback

`scripts/gen-asset-manifest.mjs` (eseguito automaticamente in `npm run dev` e `npm run build`,
oppure a mano con `npm run assets:manifest`) elenca i file presenti in questa cartella in
`src/app/lib/asset-manifest.json`. `AssetSlot` legge il manifest: se il file c'è lo carica,
altrimenti disegna subito una scena "mappa" coerente col brand, senza richieste 404 né flash.

Basta copiare qui i WebP con il nome esatto e riavviare `npm run dev`.
