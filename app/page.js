import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
      <Hero />
      <About />

      <section className="grid md:grid-cols-2 gap-6">
        <a
          href="/projects"
          className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Tutustu
          </p>
          <h2 className="text-2xl font-semibold mb-2">Projektit</h2>
          <p className="text-gray-600">
            Katso projekteja, joissa olen harjoitellut web-kehitystä,
            Reactia, Next.js:ää ja JavaScriptiä.
          </p>
          <span className="mt-4 inline-block font-semibold text-blue-600">
            Lue lisää →
          </span>
        </a>

        <a
          href="/skills"
          className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Tutustu
          </p>
          <h2 className="text-2xl font-semibold mb-2">Taidot</h2>
          <p className="text-gray-600">
            Tutustu teknologioihin ja työkaluihin, joita olen käyttänyt
            opinnoissa ja omissa projekteissa.
          </p>
          <span className="mt-4 inline-block font-semibold text-blue-600">
          Lue lisää →
          </span>
        </a>
      </section>

      <section className="rounded-3xl bg-blue-600 px-6 py-12 text-center text-white shadow-lg">
  <h2 className="text-3xl font-bold">
    Etsin harjoittelupaikkaa IT-alalta
  </h2>

  <p className="mx-auto mt-4 max-w-2xl text-blue-100">
    Olen motivoitunut oppimaan lisää käytännön projekteissa ja kehittämään osaamistani frontend-kehityksen, automaation ja ohjelmistokehityksen parissa.
  </p>

  <a
    href="/contact"
    className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition"
  >
    Katso yhteystietoni
  </a>
</section>
    </main>
  );
}