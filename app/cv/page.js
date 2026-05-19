export default function CVPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Curriculum Vitae
        </p>

        <h1 className="text-5xl font-black tracking-tight text-gray-950">
          CV
        </h1>
      </section>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-8 md:col-span-2">
          <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-950">Koulutus</h2>

            <div className="mt-6 space-y-6">
              <div className="flex flex-col gap-3 border-b border-gray-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    HAMK — Tietojenkäsittely (AMK)
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Muuntokoulutus, IT-tradenomi
                  </p>
                </div>

                <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  2025–2026
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">LAB — Liiketalous (AMK)</h3>
                  <p className="mt-1 text-gray-600">Tradenomi</p>
                </div>

                <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  2020–2024
                </span>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-950">Työkokemus</h2>

            <div className="mt-6 space-y-6">
              <div className="flex flex-col gap-3 border-b border-gray-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    Ratkaisuasiantuntija
                  </h3>
                  <p className="mt-1 text-gray-600">Kela</p>
                  <p className="mt-3 leading-relaxed text-gray-600">
                    Asiantuntijatyötä työttömyysturvaetuuksien parissa. Työssä korostuu tiedon analysointi, prosessien hallinta, ongelmanratkaisu sekä erilaisten tietojärjestelmien käyttö asiakastilanteiden ratkaisemiseksi.
                  </p>
                </div>

                <span className="w-fit rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                  05/2020–
                </span>
              </div>
              </div>
          </section>
        </div>


  <aside className="space-y-8">
  <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
    <h2 className="text-xl font-bold text-gray-950">Kielitaito</h2>

    <div className="mt-5 space-y-4">
      <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
        <span className="font-medium text-gray-900">Suomi</span>
        <span className="text-sm font-semibold text-blue-600">Äidinkieli</span>
      </div>

      <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
        <span className="font-medium text-gray-900">Englanti</span>
        <span className="text-sm font-semibold text-blue-600">Hyvä</span>
      </div>
    </div>
  </section>
</aside>
      </div>
    </main>
  );
}