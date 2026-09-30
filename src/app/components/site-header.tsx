'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { ParkHubLogo } from './parkhub-logo';
import { NAV } from '../lib/content';
import { portalPath, siteHref } from '../lib/urls';

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || dark || open;
  const linkCls = solid
    ? 'text-muted transition hover:text-ink'
    : 'text-white/75 transition hover:text-white';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? 'border-b border-border bg-white/95 shadow-[0_1px_0_rgba(11,18,32,0.04)] backdrop-blur-md'
            : 'bg-gradient-to-b from-ink/70 to-transparent'
        }`}
      >
        <div className="mx-auto flex h-18 max-w-site items-center justify-between gap-4 px-5 sm:px-8 lg:px-12" style={{ height: '4.75rem' }}>
          <Link href="/" className="shrink-0" aria-label="ParkHub home" onClick={() => setOpen(false)}>
            <ParkHubLogo variant={solid ? 'dark' : 'light'} height={26} priority />
          </Link>

          <nav className="hidden items-center gap-5 text-[13px] font-medium lg:flex" aria-label="Principale">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={linkCls}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={siteHref('/app')}
              className={`hidden rounded-pill px-3.5 py-2 text-[13px] font-bold sm:inline-flex ${
                solid ? 'bg-teal-soft text-teal-dark' : 'bg-white/10 text-white'
              }`}
            >
              Scarica
            </a>
            <a
              href={portalPath('/login')}
              className={`hidden rounded-pill px-3.5 py-2 text-[13px] font-semibold sm:inline-flex ${
                solid ? 'text-ink hover:bg-ink/5' : 'text-white hover:bg-white/10'
              }`}
            >
              Accedi
            </a>
            <a
              href={portalPath('/signup')}
              className="hidden rounded-pill bg-teal px-4 py-2 text-[13px] font-bold text-ink hover:bg-teal-dark hover:text-white sm:inline-flex"
            >
              Registrati
            </a>
            <button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
                solid ? 'bg-ink/5 text-ink' : 'bg-white/10 text-white'
              }`}
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? 'Chiudi menu' : 'Apri menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          id={menuId}
          className="fixed inset-0 z-40 bg-white pt-24 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <nav className="mx-auto flex max-w-site flex-col gap-1 px-5">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3.5 text-lg font-semibold text-ink hover:bg-paper"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/app"
              className="rounded-2xl px-4 py-3.5 text-lg font-semibold text-ink hover:bg-paper"
              onClick={() => setOpen(false)}
            >
              Scarica l&apos;app
            </Link>
            <Link
              href="/faq"
              className="rounded-2xl px-4 py-3.5 text-lg font-semibold text-ink hover:bg-paper"
              onClick={() => setOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/about"
              className="rounded-2xl px-4 py-3.5 text-lg font-semibold text-ink hover:bg-paper"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
              <a
                href={portalPath('/login')}
                className="rounded-pill border border-border px-5 py-3 text-center text-sm font-semibold"
              >
                Accedi
              </a>
              <a
                href={portalPath('/signup')}
                className="rounded-pill bg-teal px-5 py-3 text-center text-sm font-bold text-ink"
              >
                Registrati
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M3 5h14M3 10h14M3 15h14" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
    </svg>
  );
}
