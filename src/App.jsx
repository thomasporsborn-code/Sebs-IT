function BrandLogo() {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-white/8 shadow-lg shadow-cyan-500/10 backdrop-blur">
        <svg
          viewBox="0 0 64 64"
          className="h-7 w-7"
          aria-hidden="true"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="8" y="10" width="48" height="34" rx="10" className="fill-slate-950 stroke-cyan-300/80" strokeWidth="3" />
          <path
            d="M22 24h20M22 32h13"
            className="stroke-cyan-300"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M27 52l5-8 5 8"
            className="stroke-violet-300"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <div className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-200/80">Sebs IT</div>
        <div className="text-base font-semibold text-white">Digitalt, enkelt och personligt</div>
      </div>
    </div>
  );
}

function WebsiteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none">
      <rect x="3.5" y="5.5" width="17" height="13" rx="3" className="stroke-cyan-200" strokeWidth="1.8" />
      <path d="M3.5 9.5h17" className="stroke-cyan-200/80" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 15h5" className="stroke-violet-200" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none">
      <path
        d="M12 20s6-4.9 6-10a6 6 0 1 0-12 0c0 5.1 6 10 6 10Z"
        className="stroke-cyan-200"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.3" className="stroke-violet-200" strokeWidth="1.8" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none">
      <path
        d="M5 12v-2.5c0-.6.4-1 1-1h2.3l7-3v12l-7-3H6c-.6 0-1-.4-1-1V12Z"
        className="stroke-cyan-200"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M15 9.5a3.5 3.5 0 0 1 0 5" className="stroke-violet-200" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8.5 14.5 10 18" className="stroke-cyan-200/80" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none">
      <path
        d="M6 12a6 6 0 1 1 12 0"
        className="stroke-cyan-200"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 12.5h-.5A1.5 1.5 0 0 0 5 14v1.5A1.5 1.5 0 0 0 6.5 17H8v-4.5Zm10 0h.5A1.5 1.5 0 0 1 19 14v1.5a1.5 1.5 0 0 1-1.5 1.5H16v-4.5Z"
        className="stroke-violet-200"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 18.5h2.5" className="stroke-cyan-200/80" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function LandingPage() {
  const services = [
    {
      title: 'Enkla hemsidor',
      text: 'Vi bygger snygga, snabba och mobilanpassade hemsidor för små företag som vill synas professionellt online utan att betala byråpriser.',
      icon: WebsiteIcon,
    },
    {
      title: 'Google & lokal synlighet',
      text: 'Vi hjälper er att synas på Google med rätt företagsinformation, bättre lokalt genomslag och en tydlig närvaro där kunderna söker.',
      icon: MapPinIcon,
    },
    {
      title: 'Sociala medier & marknadsföring',
      text: 'Vi hjälper er att komma igång med enkla kampanjer, innehåll och profiler på sociala medier så att fler kunder hittar er.',
      icon: MegaphoneIcon,
    },
    {
      title: 'Löpande support',
      text: 'Behöver ni uppdatera öppettider, lägga upp erbjudanden eller få hjälp snabbt? Vi finns kvar även efter leverans.',
      icon: SupportIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_25%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mb-16 flex items-center justify-between">
            <BrandLogo />
            <a
              href="#om-oss"
              className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 sm:inline-flex"
            >
              Om oss
            </a>
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
                Digital hjälp för småföretag
              </div>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Enkla IT-tjänster som hjälper små företag att synas och växa.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Vi hjälper frisörer, restauranger, pizzerior och andra lokala företag med hemsidor,
                Google-synlighet och enkel marknadsföring. Snabbt, prisvärt och utan krångel.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#tjanster"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 shadow-lg transition hover:scale-[1.02]"
                >
                  Se våra tjänster
                </a>
                <a
                  href="#om-oss"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Läs om oss
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 to-violet-500/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm text-slate-400">Exempel på erbjudande</p>
                      <h3 className="mt-1 text-xl font-semibold">Kom igång online</h3>
                    </div>
                    <div className="rounded-xl bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
                      Från 4 900 kr
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm text-slate-300">
                    <li>• Enkel och modern hemsida</li>
                    <li>• Mobilanpassad design</li>
                    <li>• Google-företagsprofil</li>
                    <li>• Kontaktuppgifter, karta och formulär</li>
                    <li>• Snabb leverans och personlig hjälp</li>
                  </ul>
                  <div className="mt-6 rounded-2xl bg-white/5 p-4 text-sm text-slate-300">
                    Perfekt för små företag som vill få en professionell digital närvaro utan att göra
                    det komplicerat eller dyrt.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tjanster" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Tjänster</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Det här hjälper vi småföretag med</h2>
          <p className="mt-4 text-lg text-slate-300">
            Våra tjänster är anpassade för små verksamheter som vill ha konkreta resultat snabbt.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-7 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white/7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 ring-1 ring-white/10">
                <service.icon />
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="om-oss" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">Om oss</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Unga, drivna och nära våra kunder</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Vi startade det här företaget för att vi såg att många småföretag vill synas bättre online,
              men ofta tycker att det känns dyrt, krångligt eller tidskrävande att anlita en traditionell byrå.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Därför erbjuder vi enkla, moderna och prisvärda lösningar som hjälper lokala företag att få
              en snygg hemsida, bättre synlighet och en starkare digital närvaro. Vi jobbar snabbt,
              personligt och med fokus på det som faktiskt gör nytta för verksamheten.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <div className="text-2xl font-semibold">Snabbt</div>
                <div className="mt-2 text-sm text-slate-400">Färdiga lösningar på kort tid</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <div className="text-2xl font-semibold">Prisvärt</div>
                <div className="mt-2 text-sm text-slate-400">Anpassat för små företags budget</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <div className="text-2xl font-semibold">Personligt</div>
                <div className="mt-2 text-sm text-slate-400">Direkt kontakt och enkel kommunikation</div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold">Presentera er här</h3>
            <p className="mt-4 text-slate-300">
              Lägg in era namn, en kort presentation och gärna en bild på er. Exempel:
            </p>
            <div className="mt-6 space-y-4 rounded-2xl bg-white/5 p-5 text-slate-300">
              <p>
                <span className="font-semibold text-white">Sebastian</span> – Intresserad av webb,
                teknik och digitala lösningar. Ansvarar för hemsidor och design.
              </p>
              <p>
                <span className="font-semibold text-white">Raymond</span> – Brinner för marknadsföring,
                kundkontakt och att hjälpa småföretag att synas bättre online.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm text-cyan-100">
              Tips: byt ut den här rutan mot en riktig presentation av er själva för att göra sidan mer personlig och trovärdig.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/5 to-violet-500/10 p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Nästa steg</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Vill du ha hjälp att synas bättre online?</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Hör av dig för ett kostnadsfritt första samtal så ser vi hur vi kan hjälpa ditt företag
                med hemsida, synlighet och enkel digital marknadsföring.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <div className="text-slate-400">Telefon</div>
                  <div className="mt-1 text-base font-medium text-white">[Telefonnummer]</div>
                </div>
                <div>
                  <div className="text-slate-400">E-post</div>
                  <div className="mt-1 text-base font-medium text-white">[E-postadress]</div>
                </div>
                <div>
                  <div className="text-slate-400">Instagram</div>
                  <div className="mt-1 text-base font-medium text-white">[@ertkonto]</div>
                </div>
              </div>
              <a
                href="mailto:kontakt@foretagsnamn.se"
                className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                Kontakta oss
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
