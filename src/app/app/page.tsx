import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader, SiteFooter, CookieBar } from '../components/site-chrome';
import { PageHero, CtaBand, RelatedLinks } from '../components/page-chrome';
import { StoreBadges } from '../components/store-badges';
import { AppMapPreview } from '../components/app-map-preview';
import { IMAGES } from '../lib/images';
import { SiteImage as Image } from '../components/site-image';
import { portalPath } from '../lib/urls';
import { APP_STORE_URL, PLAY_STORE_URL, ANDROID_PACKAGE } from '../lib/stores';

export const metadata: Metadata = {
  title: 'Scarica l’app Parker',
  description:
    'L’app Parker è il cuore dello scambio: mappa, vendi, prenota, naviga. Stesso account del portale. App Store e Google Play.',
};

export default function AppPage() {
  const playHint = PLAY_STORE_URL || `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;
  return (
    <main className="min-h-screen bg-[#F5F6F8] text-ink">
      <SiteHeader dark />
      <PageHero
        eyebrow="App mobile"
        title="Qui avviene lo scambio"
        lead="L’app è il cuore di Parker: mappa in tempo reale, vendita del posto, prenotazione, navigazione e notifiche. Il portale web serve per account, pacchetti di credito e gestione. Stesso login ovunque."
        image={IMAGES.phoneNav}
      />

      <section id="scarica" className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Scarica Parker</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Su iPhone e Android. Nome store: <strong className="text-ink">Parker</strong>.
              Package Android: <code className="rounded bg-ink/5 px-1.5 py-0.5 text-ink">{ANDROID_PACKAGE}</code>.
              {!APP_STORE_URL && !PLAY_STORE_URL ? (
                <>
                  {' '}
                  I pulsanti sotto sono pronti: appena le schede sono pubbliche li colleghiamo ai
                  link ufficiali (oggi portano a questa pagina).
                </>
              ) : null}
            </p>
            <StoreBadges className="mt-8" />
            <p className="mt-4 text-xs text-muted">
              Scheda Play prevista:{' '}
              <span className="break-all text-ink/70">{playHint}</span>
            </p>
          </div>
          <div className="flex justify-center">
            <AppMapPreview />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">App e portale: chi fa cosa</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-teal/30 bg-[#F5F6F8] p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-teal">App (cuore)</p>
              <h3 className="mt-2 font-display text-xl font-bold">Dove scambi</h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
                <li>· Mappa con posti in vendita vicino a te</li>
                <li>· Pubblicare il posto quando esci</li>
                <li>· Prenotare e navigare fino al punto</li>
                <li>· Notifiche e stato dello scambio</li>
                <li>· Wallet in lettura + link al portale per ricaricare</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-ink/8 bg-[#F5F6F8] p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">Portale web</p>
              <h3 className="mt-2 font-display text-xl font-bold">Dove gestisci il credito</h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
                <li>· Registrazione / login (stesso account dell’app)</li>
                <li>· Acquisto pacchetti (Prova, Carnet, piani)</li>
                <li>· Missioni, invita amici, ranking dettagliato</li>
                <li>· Profilo, veicoli, supporto</li>
                <li>· Nessuno scambio sulla mappa: quello è in app</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="ios" className="px-5 py-14">
        <div className="mx-auto max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted">
          <h2 className="font-display text-2xl font-bold text-ink">Un solo account</h2>
          <p>
            Ti registri una volta (da app o da portale). Le stesse email e password aprono sia
            l’app sia il sito. Completi il profilo, ricarichi il credito sul portale, poi usi la
            mappa in app per cercare o vendere.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={portalPath('/signup')}
              className="rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-ink"
            >
              Crea account sul portale
            </a>
            <Link href="/come-funziona" className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold">
              Come funziona lo scambio
            </Link>
          </div>
        </div>
      </section>

      <section id="android" className="border-t border-ink/8 bg-white px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.streetParked}
              alt="Auto in sosta"
              width={1200}
              height={800}
              className="h-56 w-full object-cover sm:h-64"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Dopo il download</h2>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>
                <strong className="text-ink">1.</strong> Apri Parker e accedi (o registrati).
              </li>
              <li>
                <strong className="text-ink">2.</strong> Completa profilo e veicolo se richiesto.
              </li>
              <li>
                <strong className="text-ink">3.</strong> Dal wallet apri il portale e scegli un
                pacchetto (es. Prova €4,99).
              </li>
              <li>
                <strong className="text-ink">4.</strong> Torna in app: cerca o vendi sulla mappa.
              </li>
            </ol>
            <StoreBadges className="mt-8" />
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: '/come-funziona', label: 'Come funziona', desc: 'Venditore e acquirente, passo dopo passo.' },
          { href: '/prezzi', label: 'Prezzi', desc: 'Pacchetti di credito sul portale.' },
          { href: '/about', label: 'About', desc: 'Perché esiste Parker.' },
        ]}
      />
      <CtaBand title="Scarica l’app e inizia a scambiare" body="Poi ricarica sul portale con lo stesso account." />
      <SiteFooter />
      <CookieBar />
    </main>
  );
}
