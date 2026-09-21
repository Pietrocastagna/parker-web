import Image from 'next/image';
import Link from 'next/link';
import { portalPath } from '../lib/urls';

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/8 bg-ink px-5 pb-16 pt-28 text-white sm:pb-20 sm:pt-32">
      <Image
        src={image}
        alt=""
        fill
        unoptimized
        priority
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/65" />
      <div className="relative mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 text-base leading-relaxed text-white/72 sm:text-lg">{lead}</p>
      </div>
    </section>
  );
}

export function CtaBand({
  title = 'Inizia dallo scambio',
  body = 'Registrati, scegli un pacchetto sul portale, usa la mappa in app.',
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-teal px-5 py-14 text-center text-ink sm:py-16">
      <h2 className="font-display text-2xl font-bold sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-sm text-ink/75">{body}</p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href={portalPath('/signup')}
          className="rounded-full bg-ink px-7 py-3 text-sm font-bold text-white hover:bg-ink/90"
        >
          Registrati
        </a>
        <a
          href={portalPath('/login')}
          className="rounded-full border border-ink/20 bg-white/40 px-7 py-3 text-sm font-semibold hover:bg-white/60"
        >
          Accedi
        </a>
      </div>
    </section>
  );
}

export function RelatedLinks({
  items,
}: {
  items: { href: string; label: string; desc: string }[];
}) {
  return (
    <section className="border-t border-ink/8 bg-white px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-xl font-bold">Approfondisci</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-5 transition hover:border-teal/40"
            >
              <p className="font-display font-bold text-ink">{item.label}</p>
              <p className="mt-1 text-sm text-muted">{item.desc}</p>
              <p className="mt-3 text-sm font-bold text-teal">Apri →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
