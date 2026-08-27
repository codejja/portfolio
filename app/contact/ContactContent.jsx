"use client";

import { useLanguage } from "../context/LanguageContext";

const content = {
  fi: {
    overline: "Contact",
    heading: "Yhteystiedot",
    intro:
      "Olen kiinnostunut harjoittelupaikoista, junior-tason mahdollisuuksista ja projekteista, joissa pääsen kehittämään osaamistani käytännössä.",
    getInTouch: "Ota yhteyttä",
    email: "Sähköposti",
    seekingHeading: "Etsin harjoittelupaikkaa",
    seekingText:
      "Tavoitteenani on päästä työskentelemään oikeiden projektien parissa, oppia kokeneemmilta kehittäjiltä ja kasvaa ohjelmistokehittäjänä.",
    interestsHeading: "Kiinnostuksen kohteet",
    interests: [
      "Frontend-kehitys",
      "React ja Next.js",
      "Web-sovellukset",
      "Automaatio ja käytännön IT-ratkaisut",
    ],
  },
  en: {
    overline: "Contact",
    heading: "Contact",
    intro:
      "I'm interested in internships, junior-level opportunities, and projects where I can develop my skills hands-on.",
    getInTouch: "Get in touch",
    email: "Email",
    seekingHeading: "Looking for an internship",
    seekingText:
      "My goal is to work on real projects, learn from more experienced developers, and grow as a software developer.",
    interestsHeading: "Areas of interest",
    interests: [
      "Frontend development",
      "React and Next.js",
      "Web applications",
      "Automation and practical IT solutions",
    ],
  },
};

export default function ContactContent() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
          {t.overline}
        </p>

        <h1 className="text-5xl font-black tracking-tight text-gray-950 dark:text-white">
          {t.heading}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {t.intro}
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white">{t.getInTouch}</h2>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {t.email}
              </p>

              <a
                href="mailto:jannekujala1996@gmail.com"
                className="mt-2 block text-lg font-semibold text-gray-950 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                jannekujala1996@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                GitHub
              </p>

              <a
                href="https://github.com/codejja"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg font-semibold text-gray-950 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                github.com/codejja
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                LinkedIn
              </p>

              <a
                href="https://linkedin.com/in/jannekujala"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg font-semibold text-gray-950 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                linkedin.com/in/jannekujala
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-blue-600 p-8 text-white shadow-lg dark:bg-blue-700">
          <h2 className="text-2xl font-bold">{t.seekingHeading}</h2>

          <p className="mt-4 leading-relaxed text-blue-100">
            {t.seekingText}
          </p>

          <div className="mt-8 rounded-2xl bg-white/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              {t.interestsHeading}
            </p>

            <ul className="mt-4 space-y-2 text-white">
              {t.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
