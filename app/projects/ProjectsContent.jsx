"use client";

import { useLanguage } from "../context/LanguageContext";

const content = {
  fi: {
    overline: "Projects",
    heading: "Projektit",
    intro:
      "Tänne kokoan projekteja, joissa harjoittelen web-kehitystä, Reactia, Next.js:ää, API-rajapintoja ja modernia käyttöliittymien rakentamista.",
    github: "GitHub",
    demo: "Demo",
    projects: [
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
        title: "Data-arkkitehtuuri Azure Data Factorylla",
        status: "Kurssiprojekti",
        description:
          "Rakensin kurssiprojektina yksinkertaisen data-arkkitehtuurin alusta loppuun Azure Data Factorylla: tapahtumaohjattuja, API-pohjaisia työnkulkuja Logic Appsilla, sekä data-analyysia ja visualisointia, mm. some-datan analytiikkaa.",
        technologies: ["Azure Data Factory", "Logic Apps", "Data Analytics"],
        githubUrl: "#",
        liveUrl: "#",
      },
      {
        title: "Puutarha-alan yrityksen verkkosivut",
        status: "Asiakasprojekti",
        description:
          "Suunnittelin ja toteutin verkkosivuston turkulaiselle viherrakennusyritykselle. Sivusto sisältää dynaamisia palvelusivuja CMS:n avulla, ennen/jälkeen-kuvavertailijan, asiakasarvosteluja ja täysin responsiivisen toteutuksen.",
        technologies: ["Webflow", "CMS", "Responsive Design"],
        githubUrl: "#",
        liveUrl: "#",
      },
      {
        title: "Hyväksyntätyönkulku Power Automatella",
        status: "Kurssiprojekti",
        description:
          "Toteutin Power Automatella SharePoint-listaan liitetyn hyväksyntätyönkulun: esimiehen sähköpostihyväksyntä/-hylkäys, automaattiset tilapäivitykset ja ilmoitukset. Kirjoitin prosessista myös kuvitetun step-by-step-teknisen ohjeistuksen.",
        technologies: ["Power Automate", "SharePoint", "Prosessiautomaatio"],
        githubUrl: "#",
        liveUrl: "#",
      },
      {
        title: "Datankeruujärjestelmä ja Power BI -raportointi",
        status: "Itsenäinen lopputyö",
        description:
          "Rakensin itsenäisenä lopputyönä datankeruujärjestelmän, yhdistin Power BI:n Azure SQL -tietokantaan, tein eksploratiivista data-analyysia ja loin Power BI -raportteja ja visualisointeja.",
        technologies: ["Power BI", "Azure SQL", "Data Analysis"],
        githubUrl: "#",
        liveUrl: "#",
      },
    ],
  },
  en: {
    overline: "Projects",
    heading: "Projects",
    intro:
      "Here I collect projects where I practice web development, React, Next.js, API integrations, and building modern user interfaces.",
    github: "GitHub",
    demo: "Demo",
    projects: [
      {
        title: "Portfolio website",
        status: "Complete / in progress",
        description:
          "My own portfolio website, built to showcase my skills, projects, and background for my job search.",
        technologies: ["Next.js", "React", "Tailwind CSS"],
        githubUrl: "https://github.com/oma-kayttajanimi/portfolio",
        liveUrl: "#",
      },
      {
        title: "Data architecture with Azure Data Factory",
        status: "Course project",
        description:
          "Built a simple data architecture from start to finish as a course project using Azure Data Factory: event-driven, API-based workflows with Logic Apps, plus data analysis and visualization, including social media analytics.",
        technologies: ["Azure Data Factory", "Logic Apps", "Data Analytics"],
        githubUrl: "#",
        liveUrl: "#",
      },
      {
        title: "Landscaping company website",
        status: "Client project",
        description:
          "Designed and built a website for a landscaping company based in Turku, Finland. The site includes dynamic service pages powered by a CMS, a before/after image comparison slider, customer reviews, and a fully responsive layout.",
        technologies: ["Webflow", "CMS", "Responsive Design"],
        githubUrl: "#",
        liveUrl: "#",
      },
      {
        title: "Approval workflow with Power Automate",
        status: "Course project",
        description:
          "Built an approval workflow in Power Automate connected to a SharePoint list: manager email approval/rejection, automatic status updates, and notifications. Also wrote an illustrated step-by-step technical guide for the process.",
        technologies: ["Power Automate", "SharePoint", "Process Automation"],
        githubUrl: "#",
        liveUrl: "#",
      },
      {
        title: "Data collection system and Power BI reporting",
        status: "Independent final project",
        description:
          "Built a data collection system as an independent final project, connected Power BI to an Azure SQL database, performed exploratory data analysis, and created Power BI reports and visualizations.",
        technologies: ["Power BI", "Azure SQL", "Data Analysis"],
        githubUrl: "#",
        liveUrl: "#",
      },
    ],
  },
};

export default function ProjectsContent() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
          {t.overline}
        </p>

        <h1 className="text-5xl font-black tracking-tight text-gray-950 dark:text-white">
          {t.heading}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {t.intro}
        </p>
      </section>

      <section className="grid gap-6">
        {t.projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {project.status}
                </p>

                <h2 className="text-2xl font-bold text-gray-950 dark:text-white">
                  {project.title}
                </h2>

                <p className="mt-3 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-3">
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-600 dark:border-gray-600 dark:text-gray-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
                  >
                    {t.github}
                  </a>
                )}

                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    {t.demo}
                  </a>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-700/50 dark:text-gray-300"
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
