'use client';

import Link from 'next/link';
import { SiteHeader } from './components/site-header';
import { SiteFooter, CookieBanner } from './components/site-footer';
import { AppMockup } from './components/app-mockup';
import { StoreButtons } from './components/store-badges';
import {
  AssetSlot,
  CTASection,
  CreateAccountButton,
  DownloadAppButton,
  FAQAccordion,
  FeatureCard,
  MissionCard,
  PricingCard,
  ReferralReward,
  SectionHeading,
  StepCard,
  TrustRow,
} from './components/ui';
import { FAQS, MISSIONS, PACKAGES } from './lib/content';
import { portalPath, siteHref } from './lib/urls';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      {/* 5.1 HERO */}
      <section className="relative min-h-[94svh] overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(0,201,167,0.22),transparent_55%),linear-gradient(105deg,rgba(11,18,32,0.96)_0%,rgba(11,18,32,0.82)_45%,rgba(11,18,32,0.55)_100%)]" />
        <div className="relative z-10 mx-auto grid max-w-site gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:px-12 lg:pb-20 lg:pt-36">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-teal">
              Parcheggi, tra persone.
            </p>
            <h1 className="font-display text-[2.55rem] font-bold leading-[1.02] text-white sm:text-5xl lg:text-[4.2rem]">
              Smetti di girare.
              <span className="mt-1 block text-teal">Qualcuno sta uscendo ora.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[1.08rem] leading-relaxed text-white/75">
              ParkHub mette in contatto chi sta lasciando un parcheggio con chi lo sta cercando,
              nello stesso momento. Trovi un posto vicino, lo prenoti e ci arrivi guidato
              dall&apos;app.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <DownloadAppButton />
              <CreateAccountButton light />
            </div>
            <StoreButtons className="mt-6" variant="dark" />
            <TrustRow
              light
              items={[
                'Posti reali, tra automobilisti',
                'Prezzo visibile prima di prenotare',
                'Nessuna asta, nessuna trattativa',
                'Un solo account su app e portale',
              ]}
            />
          </div>
          <div className="relative justify-self-end">
            <div className="hidden lg:block">
              <AppMockup />
            </div>
            <div className="pointer-events-none absolute -left-6 top-8 hidden rounded-xl border border-white/15 bg-ink/80 px-3 py-2 text-xs font-semibold text-white shadow-soft backdrop-blur lg:block">
              Posto prenotato
            </div>
            <div className="pointer-events-none absolute -right-2 bottom-24 hidden rounded-xl border border-teal/40 bg-teal px-3 py-2 text-xs font-bold text-ink shadow-soft lg:block">
              €1,20
            </div>
          </div>
        </div>
      </section>

      {/* 5.2 STRIP */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-site gap-0 sm:grid-cols-4">
          {[
            ['Scarica l’app', 'Cerca e pubblica posti dal telefono.'],
            ['Crea il tuo account', 'Stesso accesso su app e portale.'],
            ['Carica credito', 'Scegli un pacchetto dal portale.'],
            ['Scambia in app', 'Prenota, raggiungi il posto, completa.'],
          ].map(([t, d], i) => (
            <div
              key={t}
              className={`px-5 py-7 sm:px-6 ${i < 3 ? 'sm:border-r sm:border-border' : ''}`}
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-teal-dark">
                Passo {i + 1}
              </p>
              <p className="mt-1.5 font-display text-base font-bold">{t}</p>
              <p className="mt-1 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5.3 PROBLEMA */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading
            eyebrow="Il parcheggio spesso c’è. Il problema è sapere dove."
            title="Mentre tu giri, qualcuno a cinquanta metri sta già andando via."
            lead="In città perdiamo minuti preziosi facendo gli stessi isolati più volte. Non perché ogni posto sia occupato, ma perché non esiste un segnale tra chi sta per uscire e chi sta arrivando. ParkHub crea quel segnale."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <AssetSlot label="problem-city-loop.webp" className="min-h-[280px]" />
            <div className="grid gap-4">
              <FeatureCard
                title="Tempo perso"
                body="Giri, traffico, carburante e stress per trovare un posto che magari si è liberato pochi secondi prima."
              />
              <FeatureCard
                title="Finestra brevissima"
                body="Un posto libero può durare meno di un minuto. Se non sai che esiste, l’occasione è già finita."
              />
              <FeatureCard
                title="Strumenti incompleti"
                body="Mappe e parcometri ti dicono dove andare o come pagare. Non ti dicono chi sta lasciando un posto adesso."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5.4 COME FUNZIONA */}
      <section className="border-y border-border bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading
            eyebrow="Semplice come un passaggio di consegne."
            title="Uno esce. Uno arriva. ParkHub li mette in contatto."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div>
              <AssetSlot label="step-seller.webp" aspect="square" className="mb-4 !aspect-[4/3]" />
              <StepCard
                step={1}
                title="Segnala che stai uscendo"
                body="Apri ParkHub, scegli il tuo veicolo e pubblica il posto che stai lasciando."
              />
            </div>
            <div>
              <AssetSlot label="step-buyer.webp" aspect="square" className="mb-4 !aspect-[4/3]" />
              <StepCard
                step={2}
                title="Qualcuno lo prenota"
                body="Chi è vicino vede distanza, prezzo e tempo stimato e può prenotare."
              />
            </div>
            <div>
              <AssetSlot label="step-complete.webp" aspect="square" className="mb-4 !aspect-[4/3]" />
              <StepCard
                step={3}
                title="Vi incontrate sul posto"
                body="L’acquirente arriva con la navigazione. Lo scambio si chiude e il credito passa automaticamente."
              />
            </div>
          </div>
          <div className="mt-10">
            <Link href="/come-funziona" className="text-sm font-bold text-teal-dark hover:underline">
              Vedi il processo completo →
            </Link>
          </div>
        </div>
      </section>

      {/* 5.5 DUE PERCORSI */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading title="ParkHub funziona in entrambe le direzioni." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-hero border border-border bg-white p-8 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-dark">
                Stai uscendo?
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold">
                Il tuo posto può servire a qualcuno adesso.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Pubblica il parcheggio che stai lasciando, aspetta che qualcuno lo prenoti e ricevi
                credito quando lo scambio viene completato.
              </p>
              <ol className="mt-6 space-y-2 text-sm text-muted">
                {[
                  'Apri “Vendi parcheggio”',
                  'Scegli il livello disponibile',
                  'Pubblica il punto',
                  'Attendi la prenotazione',
                  'Completa e ricevi credito',
                ].map((s) => (
                  <li key={s}>· {s}</li>
                ))}
              </ol>
              <Link
                href="/come-funziona"
                className="mt-6 inline-flex text-sm font-bold text-teal-dark hover:underline"
              >
                Come funziona per chi vende →
              </Link>
            </article>
            <article className="rounded-hero border border-border bg-white p-8 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-dark">
                Stai cercando?
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold">
                Trova un posto prima di arrivarci davanti.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Apri la mappa, scegli un posto vicino, prenotalo col credito e segui le indicazioni
                fino all&apos;auto che sta uscendo.
              </p>
              <ol className="mt-6 space-y-2 text-sm text-muted">
                {[
                  'Apri “Cerca parcheggio”',
                  'Guarda distanza e prezzo',
                  'Prenota col credito',
                  'Segui il navigatore',
                  'Completa lo scambio',
                ].map((s) => (
                  <li key={s}>· {s}</li>
                ))}
              </ol>
              <Link
                href="/come-funziona"
                className="mt-6 inline-flex text-sm font-bold text-teal-dark hover:underline"
              >
                Come funziona per chi cerca →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 5.6 DEMO APP */}
      <section className="border-y border-border bg-ink px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-site items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              light
              eyebrow="Tutto su una mappa."
              title="Vedi solo ciò che ti serve, quando ti serve."
              lead="La mappa mostra i posti pubblicati vicino a te con distanza, prezzo totale e stima di arrivo. Se un posto non è più disponibile, sparisce."
            />
            <ul className="mt-8 space-y-2 text-sm text-white/70">
              {[
                'Prezzo fisso, visibile prima',
                'Posizione reale sulla mappa',
                'Navigazione fino al punto',
                'Notifiche durante lo scambio',
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="text-teal">·</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <AppMockup />
        </div>
      </section>

      {/* 5.7 APP VS PORTALE */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading
            title="Un solo account. Due strumenti diversi."
            lead="L’app serve quando sei in strada. Il portale serve per gestire account, credito e attività."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-hero border border-teal/30 bg-teal-soft/40 p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-dark">App ParkHub</p>
              <h3 className="mt-2 font-display text-2xl font-bold">Quando sei in strada</h3>
              <ul className="mt-5 space-y-2 text-sm text-muted">
                {[
                  'Cerca posti sulla mappa',
                  'Pubblica il posto che stai lasciando',
                  'Prenota',
                  'Naviga',
                  'Ricevi notifiche',
                  'Consulta il wallet',
                  'Gestisci veicoli e reputazione',
                ].map((x) => (
                  <li key={x}>· {x}</li>
                ))}
              </ul>
              <div className="mt-8">
                <DownloadAppButton />
              </div>
            </article>
            <article className="rounded-hero border border-border bg-white p-8 shadow-card">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">Portale ParkHub</p>
              <h3 className="mt-2 font-display text-2xl font-bold">Gestisci credito e account</h3>
              <ul className="mt-5 space-y-2 text-sm text-muted">
                {[
                  'Registrazione e login',
                  'Acquisto pacchetti',
                  'Wallet e movimenti',
                  'Missioni',
                  'Invita amici',
                  'Ranking dettagliato',
                  'Profilo e supporto',
                ].map((x) => (
                  <li key={x}>· {x}</li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href={portalPath('/login')}
                  className="inline-flex rounded-pill border border-ink/15 bg-white px-7 py-3.5 text-sm font-semibold hover:bg-ink/5"
                >
                  Vai al portale
                </a>
              </div>
            </article>
          </div>
          <p className="mt-8 text-sm text-muted">
            Il pagamento con carta avviene sul portale. Nell&apos;app usi il credito già disponibile.
          </p>
        </div>
      </section>

      {/* 5.8 PREZZI */}
      <section className="border-y border-border bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading
            eyebrow="Credito ParkHub"
            title="Scegli quanto spesso vuoi usarlo."
            lead="Non ricarichi un importo libero: scegli un pacchetto sul portale e usi il credito quando prenoti un posto."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {PACKAGES.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
          <ul className="mt-8 space-y-2 text-sm text-muted">
            <li>· Uno scambio parte da €1,20.</li>
            <li>· Il prezzo esatto è sempre visibile prima di prenotare.</li>
            <li>· La sosta sulle strisce blu resta separata.</li>
            <li>· Il credito non è convertibile in denaro.</li>
          </ul>
          <div className="mt-8">
            <Link href="/prezzi" className="text-sm font-bold text-teal-dark hover:underline">
              Vedi tutti i prezzi →
            </Link>
          </div>
        </div>
      </section>

      {/* 5.10 PERCHÉ CONVIENE */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading title="Meno giri. Più informazioni. Una scelta prima di arrivare." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard title="Risparmi tempo" body="Sai già dove dirigerti invece di girare alla cieca." />
            <FeatureCard title="Sai quanto spendi" body="Il prezzo è fisso e visibile prima di prenotare." />
            <FeatureCard
              title="Aiuti chi arriva dopo di te"
              body="Un posto che stai lasciando diventa utile a un altro automobilista."
            />
            <FeatureCard
              title="Guadagni credito quando pubblichi"
              body="Gli scambi completati alimentano il tuo wallet ParkHub."
            />
          </div>
        </div>
      </section>

      {/* 5.11 SICUREZZA */}
      <section className="border-y border-border bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Una community funziona solo se ci si può fidare."
              title="Ogni scambio lascia una traccia."
              lead="ParkHub collega persone reali, veicoli reali e scambi reali. Per questo ogni account, ogni prenotazione e ogni comportamento contribuiscono all’affidabilità della piattaforma."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Email e telefono verificati',
                'Veicolo associato all’account',
                'Ranking personale',
                'Segnalazioni con verifica',
              ].map((x) => (
                <div key={x} className="rounded-card border border-border bg-paper px-4 py-3 text-sm font-semibold">
                  {x}
                </div>
              ))}
            </div>
            <Link href="/ranking" className="mt-8 inline-flex text-sm font-bold text-teal-dark hover:underline">
              Scopri come funziona il ranking →
            </Link>
          </div>
          <AssetSlot label="security-user-car.webp" />
        </div>
      </section>

      {/* 5.12 RANKING */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading
            eyebrow="Affidabilità, non popolarità."
            title="Le stelle dicono quanto sei affidabile negli scambi."
            lead="Il ranking è personale e non crea una classifica pubblica. Premia chi completa gli scambi correttamente e penalizza comportamenti che fanno perdere tempo agli altri."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <FeatureCard
              title="Solo tuo"
              body="Vedi il tuo punteggio e le ragioni delle variazioni."
            />
            <FeatureCard
              title="Influenza ciò che puoi vendere"
              body="Sotto la soglia di affidabilità puoi continuare a pubblicare, ma al livello di prezzo base."
            />
            <FeatureCard
              title="Non blocca chi cerca"
              body="Le stelle non impediscono di prenotare, salvo sospensioni o ban."
            />
          </div>
          <Link href="/ranking" className="mt-8 inline-flex text-sm font-bold text-teal-dark hover:underline">
            Come funziona il ranking →
          </Link>
        </div>
      </section>

      {/* 5.13 MISSIONI */}
      <section className="border-y border-border bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-site">
          <SectionHeading
            eyebrow="Più offerta, più ParkHub funziona."
            title="Completa obiettivi. Ricevi piccoli premi da usare negli scambi."
            lead="Le missioni servono a tenere viva la mappa. Alcune premiano chi pubblica, altre chi usa ParkHub con continuità."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {MISSIONS.map((m) => (
              <MissionCard key={m.title} {...m} />
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">I premi delle missioni sono separati dal ranking.</p>
          <Link href="/missioni" className="mt-4 inline-flex text-sm font-bold text-teal-dark hover:underline">
            Vedi tutte le missioni →
          </Link>
        </div>
      </section>

      {/* 5.15 INVITA */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-site">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Più persone, più posti visibili."
                title="Invita un amico. Guadagni quando inizia davvero a usare ParkHub."
                lead="Il bonus non scatta quando scarica l’app e nemmeno quando si registra. Si sblocca quando completa il suo primo scambio."
              />
              <ul className="mt-6 space-y-2 text-sm text-muted">
                <li>· codice valido solo in registrazione;</li>
                <li>· bonus in attesa fino al primo scambio;</li>
                <li>· spendibile solo sugli swap;</li>
                <li>· non prelevabile.</li>
              </ul>
              <Link href="/invita" className="mt-8 inline-flex text-sm font-bold text-teal-dark hover:underline">
                Invita un amico →
              </Link>
            </div>
            <ReferralReward />
          </div>
        </div>
      </section>

      {/* 5.16 FAQ */}
      <section id="faq" className="border-t border-border bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="center"
            title="Le domande che vengono prima di provare ParkHub."
          />
          <div className="mt-10">
            <FAQAccordion items={FAQS} />
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Tutte le FAQ nella{' '}
            <Link href="/faq" className="font-semibold text-teal-dark hover:underline">
              pagina dedicata
            </Link>
            .
          </p>
        </div>
      </section>

      <CTASection />
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
