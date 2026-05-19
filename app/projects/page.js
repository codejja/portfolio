const projects = [
  {
    title: "Portfolio-sivusto",
    status: "Valmis / kehityksessä",
    description:
      "Oma portfolio-sivustoni, jonka tarkoitus on esitellä osaamistani, projektejani ja taustaani työnhakua varten.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/oma-kayttajanimi/portfolio",
    liveUrl: "#",
  },
  {
    title: "Projekti 2",
    status: "Suunnitteilla",
    description:
      "Lyhyt kuvaus projektista. Kerro mitä ongelmaa projekti ratkaisee ja mitä opit sitä rakentaessa.",
    technologies: ["JavaScript", "API", "CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Projekti 3",
    status: "Suunnitteilla",
    description:
      "Lyhyt kuvaus projektista. Voit myöhemmin korvata tämän oikealla projektilla ja sen GitHub-linkillä.",
    technologies: ["React", "State", "Components"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Projekti 4",
    status: "Suunnitteilla",
    description:
      "Lyhyt kuvaus projektista. Esimerkiksi pieni sovellus, jossa harjoittelet lomakkeita tai datan käsittelyä.",
    technologies: ["Next.js", "Forms", "UI"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Projekti 5",
    status: "Suunnitteilla",
    description:
      "Lyhyt kuvaus projektista. Tähän voit lisätä myöhemmin esimerkiksi backend-, automaatio- tai API-projektin.",
    technologies: ["Node.js", "API", "GitHub"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Projects
        </p>

        <h1 className="text-5xl font-black tracking-tight text-gray-950">
          Projektit
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Tänne kokoan projekteja, joissa harjoittelen web-kehitystä,
          Reactia, Next.js:ää, API-rajapintoja ja modernia käyttöliittymien
          rakentamista.
        </p>
      </section>

      <section className="grid gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold text-blue-600">
                  {project.status}
                </p>

                <h2 className="text-2xl font-bold text-gray-950">
                  {project.title}
                </h2>

                <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-600"
                >
                  GitHub
                </a>

                <a
                  href={project.liveUrl}
                  className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Demo
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}