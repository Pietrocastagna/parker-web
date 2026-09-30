'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { portalPath, siteHref } from '../lib/urls';

type BtnProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function PrimaryButton({ href, children, className = '', external }: BtnProps) {
  const cls = `inline-flex items-center justify-center rounded-pill bg-teal px-7 py-3.5 text-sm font-bold text-ink transition hover:bg-teal-dark hover:text-white ${className}`;
  if (external || href.startsWith('http')) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children, className = '', external }: BtnProps) {
  const cls = `inline-flex items-center justify-center rounded-pill border border-ink/15 bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink/5 ${className}`;
  if (external || href.startsWith('http')) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function GhostButton({
  href,
  children,
  light = false,
  className = '',
}: BtnProps & { light?: boolean }) {
  const cls = light
    ? `inline-flex items-center justify-center rounded-pill border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 ${className}`
    : `inline-flex items-center justify-center rounded-pill border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink/5 ${className}`;
  if (href.startsWith('http')) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function DownloadAppButton({ className = '', light = false }: { className?: string; light?: boolean }) {
  if (light) {
    return (
      <GhostButton href={siteHref('/app')} light className={className}>
        Scarica l&apos;app
      </GhostButton>
    );
  }
  return (
    <PrimaryButton href={siteHref('/app')} className={className}>
      Scarica l&apos;app
    </PrimaryButton>
  );
}

export function CreateAccountButton({
  className = '',
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  if (light) {
    return (
      <GhostButton href={portalPath('/signup')} light className={className}>
        Crea account
      </GhostButton>
    );
  }
  return (
    <SecondaryButton href={portalPath('/signup')} external className={className}>
      Crea account
    </SecondaryButton>
  );
}
