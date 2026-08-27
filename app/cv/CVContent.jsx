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
        title: "Taksinkuljettaja",
        company: "Lahden aluetaksi Oy",
        description:
          "Asiakas- ja tavarakuljetukset, itsenäinen ja nopea päätöksenteko.",
        date: "03/2019–07/2019",
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
        title: "Taxi Driver",
        company: "Lahden aluetaksi Oy",
        description:
          "Passenger and goods transport, independent and quick decision-making.",
        date: "03/2019–07/2019",
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
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
          {t.overline}
        </p>

        <h1 className="text-5xl font-black tracking-tight text-gray-950 dark:text-white">
          {t.heading}
        </h1>

        <DownloadCvButton />
      </section>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-8 md:col-span-2">
          <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-950 dark:text-white">{t.educationHeading}</h2>

            <ol className="relative mt-8 space-y-8 border-l-2 border-blue-200 pl-8 dark:border-blue-900/50">
              {t.education.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-800" />

                  <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    {item.date}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">{item.institution}</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">{item.extra}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-950 dark:text-white">{t.workHeading}</h2>

            <ol className="relative mt-8 space-y-8 border-l-2 border-gray-200 pl-8 dark:border-gray-700">
              {t.work.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-gray-500 ring-4 ring-white dark:bg-gray-400 dark:ring-gray-800" />

                  <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                    {item.date}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">{item.company}</p>
                  <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="space-y-8">
          <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="text-xl font-bold text-gray-950 dark:text-white">{t.languagesHeading}</h2>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-700/50">
                <span className="font-medium text-gray-900 dark:text-gray-100">{t.finnish}</span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{t.nativeLanguage}</span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-700/50">
                <span className="font-medium text-gray-900 dark:text-gray-100">{t.english}</span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{t.goodLevel}</span>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
