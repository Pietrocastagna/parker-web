'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { ParkHubLogo } from './parkhub-logo';
import { portalPath } from '../lib/urls';

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 py-14 text-sm text-white/55 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-site gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <ParkHubLogo variant="light" height={24} />
          <p className="mt-4 max-w-xs leading-relaxed">
            Scambio di parcheggi tra automobilisti. Credito sul portale, mappa in app.
          </p>
        </div>
        <FooterCol title="Prodotto">
          <Link href="/app" className="hover:text-white">
            Scarica app
          </Link>
          <Link href="/come-funziona" className="hover:text-white">
            Come funziona
          </Link>
          <Link href="/prezzi" className="hover:text-white">
            Prezzi
          </Link>
        </FooterCol>
        <FooterCol title="Community">
          <Link href="/missioni" className="hover:text-white">
            Missioni
          </Link>
          <Link href="/ranking" className="hover:text-white">
            Ranking
          </Link>
          <Link href="/invita" className="hover:text-white">
            Invita
          </Link>
        </FooterCol>
        <FooterCol title="Supporto">
          <Link href="/faq" className="hover:text-white">
            FAQ
          </Link>
          <a href={portalPath('/portal/support')} className="hover:text-white">
            Supporto
          </a>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
        </FooterCol>
        <FooterCol title="Account">
          <a href={portalPath('/login')} className="hover:text-white">
            Accedi
          </a>
          <a href={portalPath('/signup')} className="hover:text-white">
            Registrati
          </a>
          <a href={portalPath('/legal/privacy')} className="hover:text-white">
            Privacy
          </a>
          <a href={portalPath('/legal/terms')} className="hover:text-white">
            Termini
          </a>
        </FooterCol>
      </div>
      <div className="mx-auto mt-12 max-w-site border-t border-white/10 pt-6 text-xs text-white/35">
        © {new Date().getFullYear()} ParkHub — Parcheggi, tra persone.
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/35">{title}</p>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

export function CookieBanner() {
  const [ok, setOk] = useState(true);
  useEffect(() => {
    try {
      setOk(localStorage.getItem('parkhub_web_cookies') === '1');
    } catch {
      setOk(false);
    }
  }, []);
  if (ok) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white p-4 shadow-[0_-8px_30px_rgba(11,18,32,0.12)]">
      <div className="mx-auto flex max-w-site flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Solo cookie tecnici necessari al sito. Niente pubblicità tracciante.
        </p>
        <button
          type="button"
          onClick={() => {
            try {
              localStorage.setItem('parkhub_web_cookies', '1');
            } catch {
              /* ignore */
            }
            setOk(true);
          }}
          className="shrink-0 rounded-pill bg-teal px-5 py-2.5 text-sm font-bold text-ink"
        >
          Ho capito
        </button>
      </div>
    </div>
  );
}
