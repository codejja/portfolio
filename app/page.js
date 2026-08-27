"use client";

import Link from "next/link";
import Hero from "./components/Hero";
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
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">
      <Hero />

      <section className="rounded bg-accent-600 px-6 py-8 text-center text-white dark:bg-accent-700">
        <h2 className="text-2xl font-bold">
          {t.ctaTitle}
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm text-accent-100">
          {t.ctaText}
        </p>

        <Link
          href="/contact"
          className="mt-5 inline-block rounded border border-white px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-accent-700"
        >
          {t.ctaButton}
        </Link>
      </section>
    </main>
  );
}
