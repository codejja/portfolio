export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Contact
        </p>

        <h1 className="text-5xl font-black tracking-tight text-gray-950">
          Yhteystiedot
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Olen kiinnostunut harjoittelupaikoista, junior-tason mahdollisuuksista
          ja projekteista, joissa pääsen kehittämään osaamistani käytännössä.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-950">Ota yhteyttä</h2>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Sähköposti
              </p>

              <a
                href="mailto:oma.sahkoposti@example.com"
                className="mt-2 block text-lg font-semibold text-gray-950 transition hover:text-blue-600"
              >
                jannekujala1996@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                GitHub
              </p>

              <a
                href="https://github.com/codejja"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg font-semibold text-gray-950 transition hover:text-blue-600"
              >
                github.com/codejja
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                LinkedIn
              </p>

              <a
                href="https://linkedin.com/in/jannekujala"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg font-semibold text-gray-950 transition hover:text-blue-600"
              >
                linkedin.com/in/jannekujala
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
          <h2 className="text-2xl font-bold">Etsin harjoittelupaikkaa</h2>

          <p className="mt-4 leading-relaxed text-blue-100">
            Tavoitteenani on päästä työskentelemään oikeiden projektien parissa,
            oppia kokeneemmilta kehittäjiltä ja kasvaa ohjelmistokehittäjänä.
          </p>

          <div className="mt-8 rounded-2xl bg-white/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Kiinnostuksen kohteet
            </p>

            <ul className="mt-4 space-y-2 text-white">
              <li>Frontend-kehitys</li>
              <li>React ja Next.js</li>
              <li>Web-sovellukset</li>
              <li>Automaatio ja käytännön IT-ratkaisut</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}