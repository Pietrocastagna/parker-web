# ParkHub — sito pubblico

Vetrina ufficiale **ParkHub**. Naming: ParkHub. Spec: monorepo `docs/PARKHUB-SITE-MASTER-SPEC.md`.

## URL

https://pietrocastagna.github.io/parker-web/

## Posizionamento

- Tutta Italia
- Solo scambio tra automobilisti
- Swap da €1,20 · Prova €4,99 sul portale
- Strisce blu non incluse · niente prelievo in banca
- Carta solo sul portale

## Dev

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Env

- `NEXT_PUBLIC_PORTAL_URL` — portale login/signup
- `NEXT_PUBLIC_APP_STORE_URL` / `NEXT_PUBLIC_PLAY_STORE_URL` — store (opzionali)
- `NEXT_PUBLIC_BASE_PATH` — impostato in CI a `/parker-web` per GitHub Pages
- `GITHUB_PAGES=1` — attiva basePath in build

## Asset

Mettere i WebP in `public/assets/parkhub/` (vedi README nella cartella).  
Logo ufficiale in `public/brand/`.

## Referral landing

`/referral/?code=CODICE` (opzionale `&name=Nome`)
