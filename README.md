# parker-web

Sito pubblico Parker (vetrina). Da qui si entra nel portale (utente o admin).

## Messaggio

- Solo scambio tra automobilisti, **ora a Ladispoli**
- Swap da €1,20 · Prova €4,99 sul portale
- Strisce blu non incluse · niente prelievo in banca · niente garage/lavaggio
- Fuori zona → lista d’attesa

## Env

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_PORTAL_URL` → https://parker-portal.vercel.app
- `NEXT_PUBLIC_API_BASE_URL` → https://parker-api-jhmz.onrender.com/api

## Dev

```bash
npm install
npm run dev
```

Apri http://localhost:3002
