import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Parker — Smetti di girare. Qualcuno sta uscendo ora.',
  description:
    'Scambio di parcheggi in tempo reale in tutta Italia. Da €1,20. Pacchetto Prova €4,99 sul portale. Credito protetto Stripe.',
  openGraph: {
    title: 'Parker — Scambia parcheggi in Italia',
    description:
      'Smetti di girare. Qualcuno sta uscendo ora. Da €1,20. Credito sul portale web.',
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
