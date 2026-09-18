"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "./projectsData";

const ui = {
  fi: {
    heading: "Projektit",
    github: "GitHub",
    demo: "Demo",
    readMore: "Lue lisää →",
  },
  en: {
    heading: "Projects",
    github: "GitHub",
    demo: "Demo",
    readMore: "Read more →",
  },
};

// Kategorioiden näyttöjärjestys ja otsikot. Kategoria määritellään
// jokaiselle projektille projectsData.js:ssä (project.category).
const CATEGORY_ORDER = ["data-cloud", "web", "ui-ux", "testing"];

const CATEGORY_LABELS = {
  "data-cloud": { fi: "Data & pilviautomaatio", en: "Data & cloud automation" },
  web: { fi: "Web-kehitys", en: "Web development" },
  "ui-ux": { fi: "Käyttöliittymäsuunnittelu", en: "UI/UX design" },
  testing: { fi: "Testaus & laadunvarmistus", en: "Testing & QA" },
};

export default function ProjectsContent() {
  const { lang } = useLanguage();
  const t = ui[lang];

  const groups = CATEGORY_ORDER.map((category) => ({
    category,
    items: projects.filter((project) => project.category === category),
  })).filter((group) => group.items.length > 0);

  let runningIndex = 0;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-12">
        <h1 className="font-heading text-7xl font-black tracking-tighter text-accent-600 md:text-8xl dark:text-accent-400">
          {t.heading}
        </h1>
      </section>

      {groups.map((group) => (
        <section key={group.category} className="mb-14">
          <h2 className="font-heading mb-4 text-sm font-bold uppercase tracking-wide text-stone-500 dark:text-stone-500">
            {CATEGORY_LABELS[group.category][lang]}
          </h2>

          <div className="divide-y divide-stone-200 border-t border-stone-200 dark:divide-stone-800 dark:border-stone-800">
            {group.items.map((project) => {
              runningIndex += 1;
              const displayIndex = runningIndex;

              return (
                <article key={project.slug} className="py-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-4">
                      <span className="font-heading shrink-0 text-2xl font-bold leading-none text-accent-200 dark:text-accent-900/70">
                        {String(displayIndex).padStart(2, "0")}
                      </span>

                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                          <h3 className="text-xl font-bold text-stone-950 dark:text-white">
                            {project.hasDetail ? (
                              <Link
                                href={`/projects/${project.slug}`}
                                className="transition hover:text-accent-600 dark:hover:text-accent-400"
                              >
                                {project.title[lang]}
                              </Link>
                            ) : (
                              project.title[lang]
                            )}
                          </h3>
                          <span className="text-xs font-semibold text-accent-600 dark:text-accent-400">
                            {project.status[lang]}
                          </span>
                        </div>

                        <p className="mt-1.5 max-w-2xl text-[15px] leading-normal text-stone-600 dark:text-stone-400">
                          {project.summary[lang]}
                        </p>

                        <p className="mt-2 font-mono text-xs text-stone-500 dark:text-stone-500">
                          {project.technologies.join("  ·  ")}
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 flex-wrap gap-4 pl-[44px] md:pl-0">
                      {project.hasDetail && (
                        <Link
                          href={`/projects/${project.slug}`}
                          className="text-sm font-semibold text-accent-600 underline decoration-accent-300 underline-offset-4 transition hover:decoration-accent-600 dark:text-accent-400 dark:decoration-accent-800 dark:hover:decoration-accent-400"
                        >
                          {t.readMore}
                        </Link>
                      )}

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
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-accent-600 underline decoration-accent-300 underline-offset-4 transition hover:decoration-accent-600 dark:text-accent-400 dark:decoration-accent-800 dark:hover:decoration-accent-400"
                        >
                          {t.demo}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
