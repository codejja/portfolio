"use client";

import { useLanguage } from "../context/LanguageContext";

const text = {
  fi: {
    label: "Tietoa minusta",
    heading: "Kehitän osaamistani käytännön projektien kautta",
    paragraph1:
      "Opiskelen tieto- ja viestintätekniikkaa HAMK:ssa ja olen kiinnostunut erityisesti frontend-kehityksestä, moderneista web-teknologioista sekä käyttäjäystävällisten käyttöliittymien rakentamisesta.",
    paragraph2:
      "Olen harjoitellut Reactia, Next.js:ää, JavaScriptiä ja Tailwind CSS:ää rakentamalla omia projekteja ja kehittämällä portfolioani jatkuvasti eteenpäin.",
    card1Title: "Frontend-kehitys",
    card1Text:
      "React, Next.js, Tailwind CSS, responsiivinen suunnittelu ja modernit käyttöliittymät.",
    card2Title: "Projektit & oppiminen",
    card2Text:
      "Kehitän osaamistani aktiivisesti rakentamalla omia projekteja ja opiskelemalla uusia teknologioita käytännössä.",
    card3Title: "Tavoite",
    card3Text:
      "Tavoitteenani on päästä työskentelemään oikeiden projektien parissa ja kasvamaan ohjelmistokehittäjänä osana tiimiä.",
  },
  en: {
    label: "About me",
    heading: "I develop my skills through hands-on projects",
    paragraph1:
      "I'm studying information and communications technology at HAMK, and I'm especially interested in frontend development, modern web technologies, and building user-friendly interfaces.",
    paragraph2:
      "I've practiced React, Next.js, JavaScript, and Tailwind CSS by building my own projects and continuously developing my portfolio.",
    card1Title: "Frontend development",
    card1Text:
      "React, Next.js, Tailwind CSS, responsive design, and modern user interfaces.",
    card2Title: "Projects & learning",
    card2Text:
      "I actively build my skills by working on my own projects and learning new technologies hands-on.",
    card3Title: "Goal",
    card3Text:
      "My goal is to work on real projects and grow as a software developer as part of a team.",
  },
};

export default function About() {
  const { lang } = useLanguage();
  const t = text[lang];

  return (
    <section className="grid md:grid-cols-2 gap-10 items-start">

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 mb-3 dark:text-blue-400">
          {t.label}
        </p>

        <h2 className="text-3xl font-bold mb-6 dark:text-white">
          {t.heading}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4 dark:text-gray-400">
          {t.paragraph1}
        </p>

        <p className="text-gray-600 leading-relaxed dark:text-gray-400">
          {t.paragraph2}
        </p>
      </div>

      <div className="grid gap-4">

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="font-semibold mb-2 dark:text-white">{t.card1Title}</h3>

          <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-400">
            {t.card1Text}
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="font-semibold mb-2 dark:text-white">{t.card2Title}</h3>

          <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-400">
            {t.card2Text}
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h3 className="font-semibold mb-2 dark:text-white">{t.card3Title}</h3>

          <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-400">
            {t.card3Text}
          </p>
        </div>

      </div>
    </section>
  );
}
