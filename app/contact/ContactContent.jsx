"use client";

import { useLanguage } from "../context/LanguageContext";

const content = {
  fi: {
    overline: "Contact",
    heading: "Yhteystiedot",
    getInTouch: "Ota yhteyttä",
    email: "Sähköposti",
    seekingHeading: "Etsin harjoittelupaikkaa",
    seekingText:
      "Onko sinulla harjoittelupaikka, junior-rooli tai projekti, jossa pääsisin soveltamaan osaamistani käytännössä? Ota yhteyttä, niin jutellaan.",
    interestsHeading: "Kiinnostuksen kohteet",
    interests: [
      "Datan hyödyntäminen ja analytiikka",
      "Web ja digitaaliset ratkaisut",
      "Visuaalinen suunnittelu",
      "Luova teknologian hyödyntäminen",
    ],
  },
  en: {
    overline: "Contact",
    heading: "Contact",
    getInTouch: "Get in touch",
    email: "Email",
    seekingHeading: "Looking for an internship",
    seekingText:
      "If you've got an internship, a junior role, or a project where I could learn hands-on, get in touch, let's talk.",
    interestsHeading: "Areas of interest",
    interests: [
      "Understanding business through data",
      "Web & Digital Solutions",
      "Visual Design",
      "Creative Use of Technology",
    ],
  },
};

export default function ContactContent() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-12">
        <h1 className="font-heading text-7xl font-black tracking-tighter text-accent-600 md:text-8xl dark:text-accent-400">
          {t.heading}
        </h1>
      </section>

      <section className="grid gap-12 border-t border-stone-200 pt-12 dark:border-stone-800 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-stone-950 dark:text-white">{t.getInTouch}</h2>

          <div className="mt-6 divide-y divide-stone-200 dark:divide-stone-800">
            <div className="py-4 first:pt-0">
              <p className="font-mono text-xs text-accent-600 dark:text-accent-400">
                {t.email}
              </p>

              <a
                href="mailto:jannekujala1996@gmail.com"
                className="mt-1 block text-lg font-semibold text-stone-950 transition hover:text-accent-600 dark:text-white dark:hover:text-accent-400"
              >
                jannekujala1996@gmail.com
              </a>
            </div>

            <div className="py-4">
              <p className="font-mono text-xs text-accent-600 dark:text-accent-400">
                GitHub
              </p>

              <a
                href="https://github.com/codejja"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-lg font-semibold text-stone-950 transition hover:text-accent-600 dark:text-white dark:hover:text-accent-400"
              >
                github.com/codejja
              </a>
            </div>

            <div className="py-4 last:pb-0">
              <p className="font-mono text-xs text-accent-600 dark:text-accent-400">
                LinkedIn
              </p>

              <a
                href="https://linkedin.com/in/jannekujala"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-lg font-semibold text-stone-950 transition hover:text-accent-600 dark:text-white dark:hover:text-accent-400"
              >
                linkedin.com/in/jannekujala
              </a>
            </div>
          </div>
        </div>

        <div className="border-l-2 border-accent-600 pl-6 dark:border-accent-400">
          <h2 className="text-2xl font-bold text-stone-950 dark:text-white">{t.seekingHeading}</h2>

          <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-400">
            {t.seekingText}
          </p>

          <p className="mt-6 font-mono text-xs text-accent-600 dark:text-accent-400">
            {t.interestsHeading}
          </p>

          <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
            {t.interests.join("  ·  ")}
          </p>
        </div>
      </section>
    </div>
  );
}
