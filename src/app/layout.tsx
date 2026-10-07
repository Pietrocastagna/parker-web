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
    default: 'ParkHub — Smetti di girare. Qualcuno sta uscendo ora.',
    template: '%s · ParkHub',
  },
  description:
    'ParkHub collega chi sta lasciando un parcheggio con chi lo sta cercando. Trova posti pubblicati vicino a te, prenota a prezzo fisso e raggiungili con la navigazione in app.',
  applicationName: 'ParkHub',
  openGraph: {
    title: 'ParkHub — Smetti di girare. Qualcuno sta uscendo ora.',
    description:
      'Il segnale che collega chi esce e chi cerca. Listino in P, navigazione in app, pacchetti digitali sul portale.',
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
