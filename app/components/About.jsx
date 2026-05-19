export default function About() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-start">
      
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 mb-3">
          Tietoa minusta
        </p>

        <h2 className="text-3xl font-bold mb-6">
          Kehitän osaamistani käytännön projektien kautta
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          Opiskelen tieto- ja viestintätekniikkaa HAMK:ssa ja olen kiinnostunut
          erityisesti frontend-kehityksestä, moderneista web-teknologioista
          sekä käyttäjäystävällisten käyttöliittymien rakentamisesta.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Olen harjoitellut Reactia, Next.js:ää, JavaScriptiä ja Tailwind CSS:ää
          rakentamalla omia projekteja ja kehittämällä portfolioani jatkuvasti
          eteenpäin.
        </p>
      </div>

      <div className="grid gap-4">
        
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h3 className="font-semibold mb-2">Frontend-kehitys</h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            React, Next.js, Tailwind CSS, responsiivinen suunnittelu ja modernit käyttöliittymät.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h3 className="font-semibold mb-2">Projektit & oppiminen</h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Kehitän osaamistani aktiivisesti rakentamalla omia projekteja ja opiskelemalla uusia teknologioita käytännössä.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h3 className="font-semibold mb-2">Tavoite</h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Tavoitteenani on päästä työskentelemään oikeiden projektien parissa ja kasvamaan ohjelmistokehittäjänä osana tiimiä.
          </p>
        </div>

      </div>
    </section>
  );
}