const skillGroups = [
  {
    title: "Frontend",
    description: "Käyttöliittymien ja responsiivisten sivujen rakentaminen.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Työkalut",
    description: "Kehitystyössä käyttämäni työkalut ja versionhallinta.",
    skills: ["Git", "GitHub", "VS Code", "npm"],
  },
  {
    title: "Opettelussa",
    description: "Teknologioita ja aiheita, joita kehitan parhaillaan.",
    skills: ["API:t", "Node.js", "Tietokannat", "Testaus"],
  },
];

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Skills
        </p>

        <h1 className="text-5xl font-black tracking-tight text-gray-950">
          Taidot
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Kooste teknologioista ja työkaluista, joita olen käyttänyt opinnoissa,
          omissa projekteissa ja portfolio-sivuston rakentamisessa.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-950">{group.title}</h2>

            <p className="mt-3 text-gray-600">{group.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-950">
          Mitä haluan kehittää seuraavaksi?
        </h2>

        <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">
          Seuraavaksi haluan vahvistaa osaamistani Reactin tilanhallinnassa,
          API-kutsujen käsittelyssä, Node.js:n perusteissa sekä
          kokonaisvaltaisessa web-sovellusten rakentamisessa.
        </p>
      </section>
    </main>
  );
}