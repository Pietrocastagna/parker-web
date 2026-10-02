import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ParkHub — Scambio parcheggi in tempo reale',
  description:
    'Scambi di parcheggio tra utenti verificati. Sito e portali su parker-portal.vercel.app.',
  openGraph: {
    title: 'ParkHub',
    description: 'Scambio parcheggi in tempo reale. Credito e account sul portale web.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'ParkHub',
    url: 'https://parker-portal.vercel.app',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
