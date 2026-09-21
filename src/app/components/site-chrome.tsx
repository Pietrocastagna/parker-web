'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { portalPath, siteHref } from '../lib/urls';

const nav = [
  { href: '/app', label: 'Scarica app' },
  { href: '/about', label: 'About' },
  { href: '/come-funziona', label: 'Come funziona' },
  { href: '/prezzi', label: 'Prezzi' },
  { href: '/missioni', label: 'Missioni' },
  { href: '/ranking', label: 'Ranking' },
  { href: '/invita', label: 'Invita' },
] as const;

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || dark;
  const linkCls = solid
    ? 'text-muted transition hover:text-ink'
    : 'text-white/70 transition hover:text-white';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-ink/8 bg-white/95 shadow-[0_1px_0_rgba(11,18,32,0.06)] backdrop-blur-md'
          : 'bg-gradient-to-b from-ink/75 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="shrink-0 font-display text-[1.2rem] font-bold tracking-tight">
          <span className="text-teal">P</span>
          <span className={solid ? 'text-ink' : 'text-white'}>arker</span>
        </Link>
        <nav className="hidden items-center gap-4 text-[12.5px] font-medium lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={linkCls}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={portalPath('/login')}
            className={`rounded-full px-3.5 py-2 text-[13px] font-semibold ${
              solid ? 'text-ink hover:bg-ink/5' : 'text-white hover:bg-white/10'
            }`}
          >
            Accedi
          </a>
          <a
            href={portalPath('/signup')}
            className="rounded-full bg-teal px-4 py-2 text-[13px] font-bold text-ink hover:bg-[#00b896]"
          >
            Registrati
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 py-14 text-sm text-white/55">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold text-white">
            <span className="text-teal">P</span>arker
          </p>
          <p className="mt-3 max-w-xs leading-relaxed">
            Scambio di parcheggi tra automobilisti. Credito sul portale, mappa in app. Solo ciò che
            è attivo oggi.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/35">Prodotto</p>
          <div className="flex flex-col gap-2">
            <Link href="/app" className="hover:text-white">
              Scarica app
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/come-funziona" className="hover:text-white">
              Come funziona
            </Link>
            <Link href="/prezzi" className="hover:text-white">
              Prezzi
            </Link>
            <Link href="/missioni" className="hover:text-white">
              Missioni
            </Link>
            <Link href="/ranking" className="hover:text-white">
              Ranking
            </Link>
            <Link href="/invita" className="hover:text-white">
              Invita un amico
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/35">Account</p>
          <div className="flex flex-col gap-2">
            <a href={portalPath('/signup')} className="hover:text-white">
              Registrati
            </a>
            <a href={portalPath('/login')} className="hover:text-white">
              Accedi
            </a>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/35">Legale</p>
          <div className="flex flex-col gap-2">
            <a href={portalPath('/legal/privacy')} className="hover:text-white">
              Privacy
            </a>
            <a href={portalPath('/legal/terms')} className="hover:text-white">
              Termini
            </a>
            <a href={siteHref('/#faq')} className="hover:text-white">
              FAQ
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-xs text-white/35">
        © {new Date().getFullYear()} Parker · Scambio P2P di posti auto
      </div>
    </footer>
  );
}

export function CookieBar() {
  const [ok, setOk] = useState(true);
  useEffect(() => {
    try {
      setOk(localStorage.getItem('parker_web_cookies') === '1');
    } catch {
      setOk(false);
    }
  }, []);
  if (ok) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white p-4 shadow-[0_-8px_30px_rgba(11,18,32,0.12)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Solo cookie tecnici necessari al sito. Niente pubblicità tracciante.
        </p>
        <button
          type="button"
          onClick={() => {
            try {
              localStorage.setItem('parker_web_cookies', '1');
            } catch {
              /* ignore */
            }
            setOk(true);
          }}
          className="shrink-0 rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-ink"
        >
          Ho capito
        </button>
      </div>
    </div>
  );
}
