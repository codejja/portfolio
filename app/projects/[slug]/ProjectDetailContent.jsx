"use client";

import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import ImageCarousel from "../../components/ImageCarousel";

const ui = {
  fi: {
    back: "← Kaikki projektit",
    problem: "Ongelma",
    architecture: "Arkkitehtuuri",
    result: "Tulos",
    reflection: "Jatkokehitys",
    watch: "Katso toiminnassa",
    watchFull: "Katso koko läpikäynti ääninauhoituksella",
    caseStudy: "Lataa case study (PDF)",
    github: "GitHub",
    demo: "Demo",
    tech: "Käytetyt teknologiat",
  },
  en: {
    back: "← All projects",
    problem: "The problem",
    architecture: "Architecture",
    result: "Result",
    reflection: "Next steps",
    watch: "Watch it in action",
    watchFull: "Watch the full walkthrough with narration",
    caseStudy: "Download case study (PDF)",
    github: "GitHub",
    demo: "Demo",
    tech: "Technologies used",
  },
};

export default function ProjectDetailContent({ project }) {
  const { lang } = useLanguage();
  const t = ui[lang];
  const d = project.detail;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/projects"
        className="text-sm font-semibold text-stone-500 underline decoration-stone-300 underline-offset-4 transition hover:text-accent-600 hover:decoration-accent-600 dark:text-stone-400 dark:decoration-stone-700 dark:hover:text-accent-400"
      >
        {t.back}
      </Link>

      <section className="mt-6 mb-10">
        <span className="text-xs font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400">
          {project.status[lang]}
        </span>
        <h1 className="font-heading mt-2 text-4xl font-black tracking-tight text-stone-950 md:text-5xl dark:text-white">
          {project.title[lang]}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
          {project.summary[lang]}
        </p>
      </section>

      {d.images && d.images.length > 0 && (
        <section className="mb-10">
          <ImageCarousel images={d.images} />
        </section>
      )}

      {d.video && (
        <section className="mb-12">
          <h2 className="font-heading mb-3 text-lg font-bold text-stone-950 dark:text-white">
            {t.watch}
          </h2>
          <a
            href={d.video}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 underline decoration-accent-300 underline-offset-4 transition hover:decoration-accent-600 dark:text-accent-400 dark:decoration-accent-800 dark:hover:decoration-accent-400"
          >
            {t.watchFull}
            {d.videoDuration ? ` (${d.videoDuration})` : ""} →
          </a>
        </section>
      )}

      <section className="mb-10">
        <h2 className="font-heading mb-3 text-lg font-bold text-stone-950 dark:text-white">
          {t.problem}
        </h2>
        <p className="max-w-2xl text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
          {d.problem[lang]}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-heading mb-3 text-lg font-bold text-stone-950 dark:text-white">
          {t.architecture}
        </h2>
        <p className="max-w-2xl text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
          {d.architectureIntro[lang]}
        </p>
        <ul className="mt-3 max-w-2xl space-y-2">
          {d.architecturePoints.map((point) => (
            <li
              key={point[lang]}
              className="flex gap-2 text-[15px] leading-relaxed text-stone-600 dark:text-stone-400"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              <span>{point[lang]}</span>
            </li>
          ))}
        </ul>
        {d.architectureReasoning && (
          <p className="mt-3 max-w-2xl text-[15px] italic leading-relaxed text-stone-500 dark:text-stone-400">
            {d.architectureReasoning[lang]}
          </p>
        )}
      </section>

      <section className="mb-10">
        <h2 className="font-heading mb-3 text-lg font-bold text-stone-950 dark:text-white">
          {t.result}
        </h2>
        <ul className="max-w-2xl space-y-2">
          {d.resultPoints.map((point) => (
            <li
              key={point[lang]}
              className="flex gap-2 text-[15px] leading-relaxed text-stone-600 dark:text-stone-400"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              <span>{point[lang]}</span>
            </li>
          ))}
        </ul>
      </section>

      {d.reflection && (
        <section className="mb-10">
          <h2 className="font-heading mb-3 text-lg font-bold text-stone-950 dark:text-white">
            {t.reflection}
          </h2>
          <p className="max-w-2xl text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
            {d.reflection[lang]}
          </p>
        </section>
      )}

      <section className="mb-4 border-t border-stone-200 pt-8 dark:border-stone-800">
        <h2 className="font-heading mb-3 text-sm font-bold uppercase tracking-wide text-stone-500 dark:text-stone-500">
          {t.tech}
        </h2>
        <p className="font-mono text-xs text-stone-500 dark:text-stone-500">
          {project.technologies.join("  ·  ")}
        </p>

        <div className="mt-6 flex flex-wrap gap-5">
          {d.pdf && (
            <a
              href={d.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent-600 underline decoration-accent-300 underline-offset-4 transition hover:decoration-accent-600 dark:text-accent-400 dark:decoration-accent-800 dark:hover:decoration-accent-400"
            >
              {t.caseStudy}
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-stone-700 underline decoration-stone-300 underline-offset-4 transition hover:text-accent-600 hover:decoration-accent-600 dark:text-stone-300 dark:decoration-stone-600 dark:hover:text-accent-400"
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
      </section>
    </main>
  );
}
