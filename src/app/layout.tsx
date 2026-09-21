import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Parker — Smetti di girare. Qualcuno sta uscendo ora.',
  description:
    'Scambio di parcheggi in tempo reale a Ladispoli. Da €1,20. Pacchetto Prova €4,99 sul portale. Le strisce blu non sono incluse.',
  openGraph: {
    title: 'Parker — Ora a Ladispoli',
    description:
      'Smetti di girare. Qualcuno sta uscendo ora. Scambi da €1,20. Credito sul portale web.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'Parker',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
