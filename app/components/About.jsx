"use client";

import { useLanguage } from "../context/LanguageContext";

const text = {
  fi: {
    label: "Tietoa minusta",
    heading: "Kehitän osaamistani käytännön projektien kautta",
    paragraph1:
      "Opiskelen tieto- ja viestintätekniikkaa HAMK:ssa, ja eniten minua kiinnostaa frontend-kehitys — se hetki, kun rakenne ja koodi muuttuvat joksikin, mitä oikea ihminen voi käyttää.",
    paragraph2:
      "Olen opetellut Reactia, Next.js:ää, JavaScriptiä, Tailwind CSS:ää ja responsiivista suunnittelua tekemällä — rakentamalla omia projekteja, opiskelemalla uusia teknologioita käytännössä ja hiomalla tätä portfoliota koko ajan vähän pidemmälle.",
    paragraph3:
      "Tavoitteenani on päästä työskentelemään oikeiden projektien parissa, oppia kokeneemmilta ja kasvaa ohjelmistokehittäjänä osana tiimiä.",
  },
  en: {
    label: "About me",
    heading: "I develop my skills through hands-on projects",
    paragraph1:
      "I'm studying information and communications technology at HAMK, and what interests me most is frontend development — that moment when structure and code turn into something a real person can actually use.",
    paragraph2:
      "I've learned React, Next.js, JavaScript, Tailwind CSS, and responsive design by doing — building my own projects, learning new technologies hands-on, and continuously pushing this portfolio a little further.",
    paragraph3:
      "My goal is to work on real projects, learn from people more experienced than me, and grow as a software developer as part of a team.",
  },
};

export default function About() {
  const { lang } = useLanguage();
  const t = text[lang];

  return (
    <section className="border-t border-stone-200 py-16 dark:border-stone-800">
      <p className="mb-3 font-mono text-sm text-accent-600 dark:text-accent-400">
        // {t.label}
      </p>

      <h2 className="font-heading mb-6 text-3xl font-bold dark:text-white">
        {t.heading}
      </h2>

      <div className="max-w-2xl space-y-4 leading-relaxed text-stone-600 dark:text-stone-400">
        <p>{t.paragraph1}</p>
        <p>{t.paragraph2}</p>
        <p>{t.paragraph3}</p>
      </div>
    </section>
  );
}
