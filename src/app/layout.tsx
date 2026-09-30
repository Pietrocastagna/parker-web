import type { Metadata } from 'next';
import { Sora, Manrope } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ParkHub — Trova parcheggio da chi sta uscendo ora',
    template: '%s · ParkHub',
  },
  description:
    'ParkHub mette in contatto chi lascia un parcheggio con chi lo sta cercando. Trova posti vicino a te, prenota a prezzo fisso e raggiungili dall’app.',
  applicationName: 'ParkHub',
  openGraph: {
    title: 'ParkHub — Trova parcheggio da chi sta uscendo ora',
    description:
      'Scambia posti tra automobilisti. Prezzo fisso, navigazione in app, credito sul portale.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'ParkHub',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${sora.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
