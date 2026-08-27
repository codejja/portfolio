"use client";

import Link from "next/link";
import Hero from "./components/Hero";
import About from "./components/About";
import { useLanguage } from "./context/LanguageContext";

const text = {
  fi: {
    explore: "Tutustu",
    projectsTitle: "Projektit",
    projectsText:
      "Katso projekteja, joissa olen harjoitellut web-kehitystä, Reactia, Next.js:ää ja JavaScriptiä.",
    skillsTitle: "Taidot",
    skillsText:
      "Tutustu teknologioihin ja työkaluihin, joita olen käyttänyt opinnoissa ja omissa projekteissa.",
    readMore: "Lue lisää →",
    ctaTitle: "Etsin harjoittelupaikkaa IT-alalta",
    ctaText:
      "Olen motivoitunut oppimaan lisää käytännön projekteissa ja kehittämään osaamistani frontend-kehityksen, automaation ja ohjelmistokehityksen parissa.",
    ctaButton: "Katso yhteystietoni",
  },
  en: {
    explore: "Explore",
    projectsTitle: "Projects",
    projectsText:
      "See projects where I've practiced web development, React, Next.js, and JavaScript.",
    skillsTitle: "Skills",
    skillsText:
      "Explore the technologies and tools I've used in my studies and my own projects.",
    readMore: "Read more →",
    ctaTitle: "Looking for an internship in IT",
    ctaText:
      "I'm motivated to keep learning through hands-on projects and to develop my skills in frontend development, automation, and software development.",
    ctaButton: "See my contact info",
  },
};

export default function Home() {
  const { lang } = useLanguage();
  const t = text[lang];

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
      <Hero />
      <About />

      <section className="grid md:grid-cols-2 gap-6">
        <Link
          href="/projects"
          className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
          {t.explore}
          </p>
          <h2 className="text-2xl font-semibold mb-2 dark:text-white">{t.projectsTitle}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t.projectsText}
          </p>
          <span className="mt-4 inline-block font-semibold text-blue-600 dark:text-blue-400">
            {t.readMore}
          </span>
        </Link>

        <Link
          href="/skills"
          className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
          {t.explore}
          </p>
          <h2 className="text-2xl font-semibold mb-2 dark:text-white">{t.skillsTitle}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t.skillsText}
          </p>
          <span className="mt-4 inline-block font-semibold text-blue-600 dark:text-blue-400">
          {t.readMore}
          </span>
        </Link>
      </section>

      <section className="rounded-2xl bg-blue-600 px-6 py-12 text-center text-white shadow-lg dark:bg-blue-700">
  <h2 className="text-3xl font-bold">
    {t.ctaTitle}
  </h2>

  <p className="mx-auto mt-4 max-w-2xl text-blue-100">
    {t.ctaText}
  </p>

  <Link
    href="/contact"
    className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition"
  >
    {t.ctaButton}
  </Link>
</section>
    </main>
  );
}
