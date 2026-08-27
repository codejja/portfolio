"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const text = {
  fi: {
    label: "Portfolio",
    role: "IT Student · Web Development & AI Curious",
    description: [
      "Opiskelen tietojenkäsittelyä HAMK:ssa ja tykkään rakentaa asioita, jotka oikeasti ratkaisevat jonkun ongelman, verkkosivuista data-analytiikkaan ja pilvipalveluihin. Eniten minua kiinnostaa frontend-kehitys: se hetki, kun rakenne ja koodi muuttuvat joksikin, mitä oikea ihminen voi käyttää.",
      "Olen opetellut Reactia, Next.js:ää, JavaScriptiä, Tailwind CSS:ää ja responsiivista suunnittelua tekemällä: toteuttamalla omia projekteja, opiskelemalla uusia teknologioita käytännössä ja hiomalla tätä portfoliota koko ajan vähän pidemmälle.",
      "Tavoitteenani on päästä työskentelemään oikeiden projektien parissa, oppia kokeneemmilta ja kasvaa ohjelmistokehittäjänä osana tiimiä.",
      "Vapaa-ajalla minut löytää yleensä maantiepyöräilemästä, kuntosalilta tai pelaamasta sulkapalloa tai padelia.",
    ],
    viewProjects: "Katso projektit",
    viewCv: "Katso CV",
  },
  en: {
    label: "Portfolio",
    role: "IT Student · Web Development & AI Curious",
    description: [
      "I'm studying Business Information Technology at HAMK, and I like building things that actually solve someone's problem, from websites to data analytics and cloud services. What interests me most is frontend development: that moment when structure and code turn into something a real person can actually use.",
      "I've learned React, Next.js, JavaScript, Tailwind CSS, and responsive design by doing: developing my own projects, learning new technologies hands-on, and continuously pushing this portfolio a little further.",
      "My goal is to work on real projects, learn from people more experienced than me, and grow as a software developer as part of a team.",
      "In my spare time, you can usually find me road cycling, at the gym, or playing badminton or padel.",
    ],
    viewProjects: "View projects",
    viewCv: "View CV",
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = text[lang];

  const skills = ["Frontend", "Cloud", "Analytics", "Automation", "UI/UX Design"];

  return (
    <section className="py-6">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <p className="mb-4 font-mono text-sm text-accent-600 dark:text-accent-400">
            // {t.label}
          </p>

          <h1 className="font-heading max-w-4xl text-4xl font-black tracking-tight text-stone-950 md:text-6xl dark:text-white">
            Janne Kujala
          </h1>

          <p className="font-heading mt-2 text-lg font-bold text-accent-600 md:text-xl dark:text-accent-400">
            {t.role}
          </p>

          <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-stone-600 md:text-lg dark:text-stone-400">
            {t.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-6 font-mono text-sm text-stone-500 dark:text-stone-500">
            {skills.join("  ·  ")}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="rounded bg-accent-600 px-7 py-3 text-center font-semibold text-white transition hover:bg-accent-700"
            >
              {t.viewProjects}
            </Link>

            <Link
              href="/cv"
              className="rounded border border-stone-300 px-7 py-3 text-center font-semibold text-stone-800 transition hover:border-accent-600 hover:text-accent-600 dark:border-stone-700 dark:text-stone-200 dark:hover:border-accent-400 dark:hover:text-accent-400"
            >
              {t.viewCv}
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative h-[320px] w-[320px] overflow-hidden">
            <Image
              src="/images/Profiilikuva.jpg"
              alt="Janne Kujala"
              fill
              sizes="320px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
