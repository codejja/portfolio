"use client";

import DownloadCvButton from "../components/DownloadCvButton";
import { useLanguage } from "../context/LanguageContext";

const content = {
  fi: {
    overline: "Curriculum Vitae",
    heading: "CV",
    educationHeading: "Koulutus",
    workHeading: "Työkokemus",
    languagesHeading: "Kielitaito",
    finnish: "Suomi",
    nativeLanguage: "Äidinkieli",
    english: "Englanti",
    goodLevel: "Hyvä",
    education: [
      {
        title: "Tietojenkäsittelyn tradenomi, muuntokoulutus (93 op)",
        institution: "Hämeen ammattikorkeakoulu",
        extra: "Keskiarvo: 4,75 / 5,00 (60/93 op suoritettu)",
        date: "08/2025–",
      },
      {
        title: "Tieto- ja viestintätekniikan täydennyskoulutus (42 op)",
        institution: "Jyväskylän avoin ammattikorkeakoulu",
        extra: "Keskiarvo: 4,60 / 5,00",
        date: "08/2024–05/2025",
      },
      {
        title: "Tradenomi, liiketalous ja johtaminen",
        institution: "LAB-ammattikorkeakoulu",
        extra: "Keskiarvo: 4,15 / 5,00",
        date: "01/2020–04/2024",
      },
      {
        title: "Merkonomi, liiketalouden perustutkinto",
        institution: "Kouvolan seudun ammattiopisto",
        extra: "Keskiarvo: 2,80 / 3,00",
        date: "08/2012–05/2015",
      },
    ],
    work: [
      {
        title: "Ratkaisuasiantuntija",
        company: "Kela",
        description:
          "Asiantuntijatyötä työttömyysturvaetuuksien parissa. Työssä korostuu tiedon analysointi, prosessien hallinta, ongelmanratkaisu sekä erilaisten tietojärjestelmien käyttö asiakastilanteiden ratkaisemiseksi.",
        date: "05/2020–",
      },
      {
        title: "Ravintolatyöntekijä",
        company: "Riimiravintolat Oy",
        description:
          "Ravintolan päivittäinen toiminta, asiakaspalvelu ja markkinointisisällön tuotanto.",
        date: "08/2019–04/2020",
      },
      {
        title: "Elintarviketuotannon ja kahvilatoiminnan tehtävät",
        company: "mm. Brunberg Oy ja Fazer Leipomot Oy",
        description: "Tuotanto, laadunvalvonta ja tuotekehitys.",
        date: "02/2017–06/2019",
      },
      {
        title: "Myynti- ja asiakaspalvelutehtävät",
        company: "mm. The Wembley Store Ltd. (Malta) ja Clas Ohlson Oy",
        description:
          "Monipuolista myynti- ja asiakaspalvelutyötä, sisältäen kansainvälisen työjakson Maltalla.",
        date: "08/2014–12/2015",
      },
    ],
  },
  en: {
    overline: "Curriculum Vitae",
    heading: "CV",
    educationHeading: "Education",
    workHeading: "Work Experience",
    languagesHeading: "Languages",
    finnish: "Finnish",
    nativeLanguage: "Native language",
    english: "English",
    goodLevel: "Good",
    education: [
      {
        title: "BBA, Business Information Technology — Conversion Programme (93 credits)",
        institution: "Häme University of Applied Sciences (HAMK)",
        extra: "GPA: 4.75 / 5.00 (60/93 credits completed)",
        date: "08/2025–",
      },
      {
        title: "Continuing Education in Information and Communications Technology (42 credits)",
        institution: "Jyväskylä Open University of Applied Sciences",
        extra: "GPA: 4.60 / 5.00",
        date: "08/2024–05/2025",
      },
      {
        title: "Bachelor of Business Administration (BBA), Business Management",
        institution: "LAB University of Applied Sciences",
        extra: "GPA: 4.15 / 5.00",
        date: "01/2020–04/2024",
      },
      {
        title: "Vocational Qualification in Business and Administration (Merkonomi)",
        institution: "Kouvola Region Vocational College",
        extra: "GPA: 2.80 / 3.00",
        date: "08/2012–05/2015",
      },
    ],
    work: [
      {
        title: "Solutions Specialist",
        company: "Kela (Social Insurance Institution of Finland)",
        description:
          "Specialist work handling unemployment benefits. The role emphasizes data analysis, process management, problem-solving, and using various information systems to resolve customer cases.",
        date: "05/2020–",
      },
      {
        title: "Restaurant Worker",
        company: "Riimiravintolat Oy",
        description:
          "Daily restaurant operations, customer service, and marketing content production.",
        date: "08/2019–04/2020",
      },
      {
        title: "Food Production and Café Operations",
        company: "incl. Brunberg Oy and Fazer Bakeries Oy",
        description: "Production, quality control, and product development.",
        date: "02/2017–06/2019",
      },
      {
        title: "Sales and Customer Service",
        company: "incl. The Wembley Store Ltd. (Malta) and Clas Ohlson Oy",
        description:
          "Varied sales and customer service work, including an international work period in Malta.",
        date: "08/2014–12/2015",
      },
    ],
  },
};

export default function CVContent() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-12">
        <h1 className="font-heading text-7xl font-black tracking-tighter text-accent-600 md:text-8xl dark:text-accent-400">
          {t.heading}
        </h1>

        <div className="mt-6">
          <DownloadCvButton />
        </div>
      </section>

      <div className="grid gap-12 border-t border-stone-200 pt-12 dark:border-stone-800 md:grid-cols-3">
        <div className="space-y-12 md:col-span-2">
          <section>
            <h2 className="text-2xl font-bold text-stone-950 dark:text-white">{t.educationHeading}</h2>

            <ol className="relative mt-8 space-y-8 border-l-2 border-accent-200 pl-8 dark:border-accent-900/50">
              {t.education.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-accent-600 ring-4 ring-stone-50 dark:ring-stone-950" />

                  <span className="font-mono text-xs text-accent-600 dark:text-accent-400">
                    {item.date}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-stone-600 dark:text-stone-400">{item.institution}</p>
                  <p className="mt-1 text-sm text-stone-500 dark:text-stone-500">{item.extra}</p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-950 dark:text-white">{t.workHeading}</h2>

            <ol className="relative mt-8 space-y-8 border-l-2 border-stone-200 pl-8 dark:border-stone-700">
              {t.work.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-stone-400 ring-4 ring-stone-50 dark:bg-stone-500 dark:ring-stone-950" />

                  <span className="font-mono text-xs text-stone-500 dark:text-stone-400">
                    {item.date}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-stone-600 dark:text-stone-400">{item.company}</p>
                  <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside>
          <section>
            <h2 className="text-xl font-bold text-stone-950 dark:text-white">{t.languagesHeading}</h2>

            <div className="mt-5 divide-y divide-stone-200 dark:divide-stone-800">
              <div className="flex items-center justify-between py-3 first:pt-0">
                <span className="font-medium text-stone-900 dark:text-stone-100">{t.finnish}</span>
                <span className="font-mono text-xs text-accent-600 dark:text-accent-400">{t.nativeLanguage}</span>
              </div>

              <div className="flex items-center justify-between py-3 last:pb-0">
                <span className="font-medium text-stone-900 dark:text-stone-100">{t.english}</span>
                <span className="font-mono text-xs text-accent-600 dark:text-accent-400">{t.goodLevel}</span>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
