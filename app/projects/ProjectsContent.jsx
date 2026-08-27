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
        githubUrl: "https://github.com/codejja/portfolio26",
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
        githubUrl: "https://github.com/codejja/portfolio26",
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
        <h1 className="font-heading text-7xl font-black tracking-tighter text-accent-600 md:text-8xl dark:text-accent-400">
          {t.heading}
        </h1>
      </section>

      <section className="divide-y divide-stone-200 border-t border-stone-200 dark:divide-stone-800 dark:border-stone-800">
        {t.projects.map((project, index) => (
          <article key={project.title} className="py-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-4">
                <span className="font-heading shrink-0 text-2xl font-bold leading-none text-accent-200 dark:text-accent-900/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <h2 className="text-xl font-bold text-stone-950 dark:text-white">
                      {project.title}
                    </h2>
                    <span className="text-xs font-semibold text-accent-600 dark:text-accent-400">
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-1.5 max-w-2xl text-[15px] leading-normal text-stone-600 dark:text-stone-400">
                    {project.description}
                  </p>

                  <p className="mt-2 font-mono text-xs text-stone-500 dark:text-stone-500">
                    {project.technologies.join("  ·  ")}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 gap-4 pl-[44px] md:pl-0">
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-stone-700 underline decoration-stone-300 underline-offset-4 transition hover:text-accent-600 hover:decoration-accent-600 dark:text-stone-300 dark:decoration-stone-600 dark:hover:text-accent-400 dark:hover:decoration-accent-400"
                  >
                    {t.github}
                  </a>
                )}

                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    className="text-sm font-semibold text-accent-600 underline decoration-accent-300 underline-offset-4 transition hover:decoration-accent-600 dark:text-accent-400 dark:decoration-accent-800 dark:hover:decoration-accent-400"
                  >
                    {t.demo}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
