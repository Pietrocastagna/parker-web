import type { Metadata } from 'next';
import LandingClient from './landing-client';

export const metadata: Metadata = {
  title: 'Parker — Scambia parcheggi in tempo reale',
  description:
    'Chi lascia il posto guadagna, chi arriva parcheggia subito. Scambi di parcheggio tra utenti verificati, prezzi fissi da 1,20 € e navigazione integrata fino al posto.',
  openGraph: {
    title: 'Parker — Scambia parcheggi in tempo reale',
    description:
      'Il primo sistema di scambio parcheggi in tempo reale tra utenti verificati. Prezzi fissi, pagamenti Stripe, navigazione integrata.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'Parker',
  },
};

export default function LandingPage() {
  return <LandingClient />;
}
