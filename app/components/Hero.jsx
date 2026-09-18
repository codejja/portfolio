"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const text = {
  fi: {
    label: "Portfolio",
    role: "IT-tradenomiopiskelija · Liiketoiminta, data & automaatio",
    description: [
      "Taustani on liiketaloudessa, ja yli kuuden vuoden kokemus etuuskäsittelystä Kelassa on opettanut, miten iso organisaatio oikeasti toimii käytännössä. Täydennän tätä nyt IT-osaamisella: ymmärrän mitä liiketoiminta yrittää saavuttaa, käytän dataa sen selvittämiseen ja rakennan automaatioita ja raportointia, jotka tekevät työstä sujuvampaa.",
      "Olen opetellut Power Automatea, Power BI:tä, Azure-palveluita, SQL:ää ja rajapintojen toimintaa tekemällä: hyväksyntätyönkulkuja, data-arkkitehtuureja ja raportointiratkaisuja opinnoissa ja omissa projekteissa. Käytän tekoälyä työkaluna osana tätä kokonaisuutta, esimerkiksi datan tulkinnan apuna.",
      "Tavoitteenani ei ole profiloitua puhtaaksi ohjelmistokehittäjäksi, vaan olla henkilö, joka ymmärtää sekä liiketoimintaa että sitä tukevaa teknologiaa: dataa, automaatiota, järjestelmiä ja tekoälyä työkaluna.",
      "Vapaa-ajalla minut löytää yleensä maantiepyöräilemästä, kuntosalilta, tai pelaamasta sulkapalloa tai padelia.",
    ],
    viewProjects: "Katso projektit",
    viewCv: "Katso CV",
  },
  en: {
    label: "Portfolio",
    role: "IT Student · Business, Data & Automation",
    description: [
      "My background is in business, and over six years handling benefit processing at Kela taught me how a large organization actually works in practice. I'm now building IT skills on top of that: understanding what a business is trying to achieve, using data to find out, and building the automation and reporting that make the work run smoother.",
      "I've learned Power Automate, Power BI, Azure services, SQL, and how APIs work by doing: building approval workflows, data architectures, and reporting solutions in my studies and my own projects. I use AI as a tool as part of that, for example to help interpret data.",
      "My goal isn't to be a pure software developer, but to be someone who understands both the business side and the technology that supports it: data, automation, systems, and AI as a tool.",
      "In my spare time, you can usually find me road cycling, at the gym, or playing badminton or padel.",
    ],
    viewProjects: "View projects",
    viewCv: "View CV",
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = text[lang];

  const skills = ["Business Understanding", "Data Analytics", "Automation & Reporting", "Systems & APIs", "Applied AI"];

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
