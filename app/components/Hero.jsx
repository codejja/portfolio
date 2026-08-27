"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const text = {
  fi: {
    label: "Portfolio",
    tagline:
      "IT-alan opiskelija, joka yhdistää web-kehityksen, analytiikan ja pilvipalvelut käytännön ongelmanratkaisuun.",
    description:
      "Kehitän osaamistani frontendin, data-analytiikan ja modernien web-teknologioiden parissa sekä etsin harjoittelupaikkaa IT-alalta.",
    viewProjects: "Katso projektit",
    viewCv: "Katso CV",
  },
  en: {
    label: "Portfolio",
    tagline:
      "IT student combining web development, analytics, and cloud services to solve real-world problems.",
    description:
      "I'm developing my skills in frontend development, data analytics, and modern web technologies, and I'm looking for an internship in the IT industry.",
    viewProjects: "View projects",
    viewCv: "View CV",
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = text[lang];

  const skills = [
    "Frontend",
    "Cloud",
    "Analytics",
    "Automation",
    "UI/UX Design",
  ];

  return (

  <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50 px-6 py-14 shadow-sm dark:border-blue-900/40 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">

    <div className="grid items-center gap-14 md:grid-cols-2">

      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
          {t.label}
        </p>

        <h1 className="max-w-4xl text-5xl font-black tracking-tight text-gray-950 md:text-7xl dark:text-white">
          Janne Kujala
        </h1>

        <p className="mt-6 max-w-2xl text-xl font-medium text-gray-800 md:text-2xl dark:text-gray-200">
          {t.tagline}
        </p>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {t.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="rounded-full bg-blue-600 px-7 py-3 text-center font-semibold text-white shadow-sm hover:bg-blue-700 transition"
          >
            {t.viewProjects}
          </Link>

          <Link
            href="/cv"
            className="rounded-full border border-gray-300 bg-white px-7 py-3 text-center font-semibold text-gray-800 hover:border-blue-600 hover:text-blue-600 transition dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
          >
            {t.viewCv}
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative h-[320px] w-[320px] overflow-hidden rounded-3xl border border-gray-200 shadow-xl dark:border-gray-700">

          <Image
            src="/images/janne.png"
            alt="Janne Kujala"
            fill
            className="object-cover"
            priority
          />

        </div>
      </div>

    </div>
  </section>
);
}
