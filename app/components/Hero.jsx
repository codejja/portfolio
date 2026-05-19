import Image from "next/image";

export default function Hero() {

   const skills = [
    "Frontend",
    "Cloud",
    "Analytics",
    "Automation",
    "UI/UX Design",
  ];

  return (

  <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50 px-6 py-14 shadow-sm">

    <div className="grid items-center gap-14 md:grid-cols-2">
      
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Portfolio
        </p>

        <h1 className="max-w-4xl text-5xl font-black tracking-tight text-gray-950 md:text-7xl">
          Janne Kujala
        </h1>

        <p className="mt-6 max-w-2xl text-xl font-medium text-gray-800 md:text-2xl">
          IT-alan opiskelija, joka yhdistää web-kehityksen, analytiikan ja pilvipalvelut käytännön ongelmanratkaisuun.
        </p>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
          Kehitän osaamistani frontendin, data-analytiikan ja modernien web-teknologioiden parissa sekä etsin harjoittelupaikkaa IT-alalta.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/projects"
            className="rounded-full bg-blue-600 px-7 py-3 text-center font-semibold text-white shadow-sm hover:bg-blue-700 transition"
          >
            Katso projektit
          </a>

          <a
            href="/cv"
            className="rounded-full border border-gray-300 bg-white px-7 py-3 text-center font-semibold text-gray-800 hover:border-blue-600 hover:text-blue-600 transition"
          >
            Katso CV
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative h-[320px] w-[320px] overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
          
          <Image
            src="/images/janne.png"
            alt="Janne Kujala"
            fill
            className="object-cover"
            priority
          />

        </div>
      </div>

    </div>
  </section>
);
}