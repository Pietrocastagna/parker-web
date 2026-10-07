'use client';

import { useLayoutEffect, useRef, type ReactNode, type CSSProperties } from 'react';

/**
 * Fade + translate all'ingresso in viewport.
 * Parte visibile (SSR/first paint), nasconde solo le sezioni sotto il fold
 * dopo hydration — così lo scroll non sembra un ricaricamento lento.
 * Rispetta prefers-reduced-motion via CSS.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === 'undefined' ||
      (navigator as Navigator & { webdriver?: boolean }).webdriver ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      el.classList.add('is-visible');
      return;
    }

    const show = () => {
      el.classList.add('is-visible');
      el.classList.remove('reveal-pending');
    };

    const preload = Math.min(280, Math.round(window.innerHeight * 0.35));
    const rect = el.getBoundingClientRect();
    const nearViewport = rect.top < window.innerHeight + preload && rect.bottom > -preload;

    if (nearViewport) {
      show();
      return;
    }

    // Sotto il fold: nascondi e rivela in anticipo rispetto allo scroll.
    el.classList.remove('is-visible');
    el.classList.add('reveal-pending');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show();
            io.unobserve(el);
          }
        });
      },
      { rootMargin: `0px 0px ${preload}px 0px`, threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = Tag as any;
  return (
    <Comp ref={ref} className={`reveal is-visible ${className}`} style={style}>
      {children}
    </Comp>
  );
}
