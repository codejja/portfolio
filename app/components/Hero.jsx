"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const text = {
  fi: {
    label: "Portfolio",
    role: "Yhdistän datan, teknologian ja visuaalisen toteutuksen",
    description: [
      "Taustani on liiketaloudessa ja asiakaslähtöisessä asiantuntijatyössä, ja olen täydentänyt osaamistani IT-alan opinnoilla. Minua kiinnostaa erityisesti datan hyödyntäminen liiketoiminnan kehittämisessä, prosessien automatisointi ja teknologian käyttäminen työn sujuvoittamiseen.",
      "Olen kartuttanut osaamistani muun muassa Power Platformin, SQL:n ja web-kehityksen parissa sekä rakentanut tekoälyratkaisuja osana projektejani. Teknisen puolen lisäksi minua kiinnostavat visuaalinen suunnittelu, digitaalinen markkinointi ja asiakaslähtöisten digitaalisten palveluiden toteuttaminen.",
      "Tavoitteeni on yhdistää liiketoiminnan ymmärrys ja teknologia sekä hyödyntää dataa, analytiikkaa ja automaatiota liiketoiminnan kehittämisessä.",
      "Vapaa-ajalla mm. maantiepyöräilen, kuvaan dronella, käyn kuntosalilla ja pelaan sulkapalloa tai padelia.",
    ],
    viewProjects: "Katso projektit",
    viewCv: "Katso CV",
  },
  en: {
    label: "Portfolio",
    role: "I bring data, technology and visual execution together.",
    description: [
      "My background is in business and customer-focused specialist work, and I have complemented my experience with studies in IT. I’m particularly interested in using data to support business development, automating processes, and using technology to make work more efficient.",
      "I have built my skills in areas such as Power Platform, SQL, and web development, and have built AI solutions as part of my projects. Alongside the technical side, I’m interested in visual design, digital marketing, and creating customer-centric digital services.",
      "My goal is to combine business understanding with technology and use data, analytics, and automation to support business development.",
      "Outside of work and studies, I enjoy road cycling, drone photography, going to the gym, and playing badminton or padel.",
    ],
    viewProjects: "View projects",
    viewCv: "View CV",
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = text[lang];

  const skills = ["Business Understanding", "Data Analytics", "Automation", "Systems & Integrations", "Web & Visual Design", "Customer Experience", "Applied AI"];

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
