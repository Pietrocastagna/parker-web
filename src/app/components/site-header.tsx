'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { ParkHubLogo } from './parkhub-logo';
import { NAV } from '../lib/content';
import { portalPath, siteHref } from '../lib/urls';

export function FloatingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
        <header
          className={`pointer-events-auto mx-auto flex h-16 max-w-site items-center justify-between gap-3 rounded-float border px-3 transition-all duration-300 sm:h-[4.15rem] sm:px-4 ${
            scrolled || open
              ? 'border-line bg-white/90 shadow-float backdrop-blur-[18px]'
              : 'border-white/15 bg-white/70 shadow-soft backdrop-blur-[18px]'
          }`}
        >
          <Link href="/" className="shrink-0 pl-1" aria-label="ParkHub home" onClick={() => setOpen(false)}>
            <ParkHubLogo variant="dark" height={24} priority />
          </Link>

          <nav className="hidden items-center gap-5 text-[13px] font-semibold text-ink/70 lg:flex" aria-label="Principale">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={siteHref('/app')}
              className="inline-flex rounded-pill bg-brand px-3.5 py-2 text-[13px] font-bold text-ink hover:bg-brand-deep hover:text-white sm:hidden"
            >
              Scarica
            </a>
            <a
              href={portalPath('/login')}
              className="hidden rounded-pill px-3.5 py-2 text-[13px] font-semibold text-ink/80 hover:bg-ink/5 sm:inline-flex"
            >
              Accedi
            </a>
            <a
              href={siteHref('/app')}
              className="hidden rounded-pill bg-brand px-4 py-2 text-[13px] font-bold text-ink hover:bg-brand-deep hover:text-white sm:inline-flex"
            >
              Scarica l&apos;app
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? 'Chiudi menu' : 'Apri menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </header>
      </div>

      {open ? (
        <div
          id={menuId}
          className="fixed inset-0 z-40 flex flex-col bg-warm-paper pt-24 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <nav className="mx-auto flex w-full max-w-site flex-1 flex-col gap-1 px-5">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3.5 text-xl font-semibold text-ink hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/app" className="rounded-2xl px-4 py-3.5 text-xl font-semibold" onClick={() => setOpen(false)}>
              Scarica l&apos;app
            </Link>
            <Link href="/faq" className="rounded-2xl px-4 py-3.5 text-xl font-semibold" onClick={() => setOpen(false)}>
              FAQ
            </Link>
            <Link href="/about" className="rounded-2xl px-4 py-3.5 text-xl font-semibold" onClick={() => setOpen(false)}>
              About
            </Link>
          </nav>
          <div className="mx-auto flex w-full max-w-site flex-col gap-3 border-t border-line px-5 py-6">
            <a href={portalPath('/login')} className="rounded-pill border border-line bg-white px-5 py-3.5 text-center text-sm font-semibold">
              Accedi
            </a>
            <a href={portalPath('/signup')} className="rounded-pill bg-brand px-5 py-3.5 text-center text-sm font-bold text-ink">
              Crea account
            </a>
          </div>
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
