import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Parker — Smetti di girare. Qualcuno sta uscendo ora.',
  description:
    'Scambio di parcheggi in Italia. Pacchetti Prova, Carnet, Mensile, Semestrale, Annuale. Ranking, missioni, invita un amico. Credito sul portale.',
  openGraph: {
    title: 'Parker — Scambia parcheggi in Italia',
    description:
      'Smetti di girare. Pacchetti di credito, ranking, missioni, invita un amico. Solo scambio tra automobilisti.',
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
