'use client';

import { useEffect } from 'react';

/** SoT web = parker-portal (Vercel). Questa vetrina GitHub Pages reindirizza lì. */
const PORTAL =
  process.env.NEXT_PUBLIC_PORTAL_URL?.replace(/\/$/, '') ||
  'https://parker-portal.vercel.app';

export default function RedirectToPortal({
  path = '/',
}: {
  path?: string;
}) {
  const dest = `${PORTAL}${path.startsWith('/') ? path : `/${path}`}`;

  useEffect(() => {
    window.location.replace(dest);
  }, [dest]);

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'system-ui, sans-serif',
        background: '#0B1220',
        color: '#F8FAFC',
        padding: 24,
        textAlign: 'center',
      }}
    >
      <div>
        <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>ParkHub</p>
        <p style={{ opacity: 0.75, marginBottom: 20 }}>
          Reindirizzamento al sito e ai portali aggiornati…
        </p>
        <a href={dest} style={{ color: '#2DD4BF', fontWeight: 600 }}>
          Continua su {PORTAL.replace(/^https?:\/\//, '')}
        </a>
      </div>
    </main>
  );
}
