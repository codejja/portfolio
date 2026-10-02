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
    interestsHeading: "Kiinnostuksen kohteet",
    interests: [
      "Datan hyödyntäminen ja analytiikka",
      "Web ja digitaaliset ratkaisut",
      "Visuaalinen suunnittelu",
      "Luova teknologian hyödyntäminen",
    ],
    education: [
      {
        title: "Tietojenkäsittelyn tradenomi, muuntokoulutus",
        institution: "Hämeen ammattikorkeakoulu",
        courses: [
          "Ohjelmoinnin perusteet (Java) (4 op)",
          "Käyttöliittymän suunnittelu ja toteutus (4 op)",
          "Analysoinnin perusteet (3 op)",
          "Käyttöjärjestelmät (4 op)",
          "Staattisen verkkosivun rakentaminen (5 op)",
          "Olio-ohjelmointi (3 op)",
          "Tietokannat (3 op)",
          "Ohjelmointikehityksen menetelmät (4 op)",
          "Web ohjelmointi (4 op)",
          "Testausprosessit (4 op)",
          "Pilvipalvelut AWS (4 op)",
          "Sovelluksen suunnittelumenetelmät (3 op)",
          "Ohjelmistorobotiikka (3 op)",
          "Sisällönhallintajärjestelmät (3 op)",
          "Analytiikkaratkaisut (Azure) (4 op)",
          "Liiketoimintajärjestelmät (5 op)",
        ],
        extra: "Keskiarvo: 4,75 / 5,00 (60/93 op suoritettu)",
        date: "08/2025–",
      },
      {
        title: "Tieto- ja viestintätekniikan täydennyskoulutus",
        institution: "Jyväskylän avoin ammattikorkeakoulu",
        courses: [
          "Johdatus data-analytiikkaan ja tekoälyyn (3 op)",
          "Tietokannat (3 op)",
          "Ohjelmoinnin perusteet (Python) (5 op)",
          "Web-kehitys (4 op)",
          "Tietojärjestelmät ja arkkitehtuuri (3 op)",
          "Git-versionhallinta ja GitLab-projektien hallintaympäristö (2 op)",
          "Linuxin käyttö ja hallinta (4 op)",
          "Windowsin käyttö ja hallinta (4 op)",
          "Kyberturvallisuus (5 op)",
          "ICT-valmiudet (3 op)",
          "InnoFlash (2 op)",
          "Tiedonhankinta ja raportointi (1 op)"
        ],
        extra: "Keskiarvo: 4,60 / 5,00 (39 op)",
        date: "08/2024–05/2025",
      },
      {
        title: "Tradenomi, liiketalous ja johtaminen",
        institution: "LAB-ammattikorkeakoulu",
        thesis: {
        label: "Opinnäytetyö",
        title: "Tekoäly tukena yritystoiminnan strategisessa ennakoinnissa",
        url: "https://www.theseus.fi/handle/10024/851741",
        },
        extra: "Keskiarvo: 4,15 / 5,00 (210 op)",
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
        description: [
          "Valmistelen ja teen etuuspäätöksiä, käsittelen maksuunpanoja, perintäasioita, erilaisia toimeksiantoja ja työvoimapoliittisia lausuntoja, soveltaen muuttuvaa sosiaaliturvan lainsäädäntöä",
          "Palvelen myös tuen tarpeessa olevia nuoria moniammatillisessa palvelumallissa, jossa huomioidaan yksilölliset ja erityisen tuen tarpeet",
          "Käytän työssäni useita etuusjärjestelmiä ja Microsoft 365 -ympäristöä",
          "Kommunikoin asiakkaiden, viranomaisten ja muiden sidosryhmien kanssa puhelimitse ja kirjallisesti, neuvon ja ohjaan kollegoita yleistukeen liittyvissä kysymyksissä",
      ],
        date: "05/2020–",
      },
      {
        title: "Ravintolatyöntekijä",
        company: "Riimiravintolat Oy",
        description: [
          "Itsenäinen vastuu toimipisteen päivittäisestä toiminnasta, mukaan lukien avaus- ja sulkemisvuorot sekä kassan avaus, sulkeminen ja tilitys",
          "Uusien työntekijöiden perehdytys",
          "Asiakaspalvelu, myynti ja kassatyöskentely, erityisruokavalioiden ja allergiatietojen huomioiminen sekä asiakaspalautteiden käsittely",
          "Tuotteiden ja ruoan valmistus sekä ravintolan siisteydestä huolehtiminen",
          "Omavalvonta, lämpötilaseurannat ja niiden kirjaaminen",
          "Tuotteiden tilaaminen, tavaratoimitusten vastaanotto ja tarkistus, inventaariot sekä hävikin seuranta ja kirjaaminen",
          "Osallistuminen ravintolan markkinointiin",
      ],
        date: "08/2019–04/2020",
      },
      {
        title: "Leipuri-kondiittori",
        company: "Fazer Leipomot Oy, Brunberg Oy, Ekberg 1852 Oy Ab, Kahvila Asemapäällikkö, Osuuskauppa Hämeenmaa",
        date: "02/2017–06/2019",
        description: [
          "Leipien ja leivonnaisten valmistus teollisessa leipomotuotannossa (Fazer Leipomot)",
          "Makeisten käsityövalmistus ja linjastotyö, vastuuna tuotantoprosessin sujuvuus ja tasainen laatu (Brunberg)",
          "Perinteisten kahvilatuotteiden sekä tilaus- ja vitriinituotteiden valmistus (Ekberg, Kahvila Asemapäällikkö)",
          "Asiakaspalvelu ja kassatyöskentely kahvilaympäristössä (Osuuskauppa Hämeenmaa)",
        ],
      },
      {
        title: "Myyjä",
        company: "Clas Ohlson Oy, The Wembley Stores Ltd, Kino 123 Oy, Kymen Seudun Osuuskauppa",
        date: "08/2014–11/2015",
        description: [
          "Asiakaspalvelu, myynti ja kassatyöskentely, mukaan lukien kampanjoiden ja tarjousten esittely sekä myyntitavoitteiden seuraaminen",
          "Tavaroiden vastaanotto, purku ja esillepano sekä varastonhallinta",
          "Kansainvälinen työjakso Maltalla (The Wembley Stores)",
        ],
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
    interests: [
      "Data utilisation and analytics",
      "Web and digital solutions",
      "Visual design",
      "Creative use of technology",
  ],
    education: [
      {
        title: "Bachelor of Business Administration (BBA), Business Information Technology — Conversion Programme",
        institution: "Häme University of Applied Sciences (HAMK)",
        courses: [
          "Basics of Programming (Java) (4 ECTS)",
          "User Interface Design and Implementation (4 ECTS)",
          "Basics of Analysis (3 ECTS)",
          "Operating Systems (4 ECTS)",
          "Building a Static Website (5 ECTS)",
          "Object-Oriented Programming (3 ECTS)",
          "Databases (3 ECTS)",
          "Software Development Methods (4 ECTS)",
          "Web Programming (4 ECTS)",
          "Testing Processes (4 ECTS)",
          "Cloud Services AWS (4 ECTS)",
          "Application Design Methods (3 ECTS)",
          "Robotic Process Automation (3 ECTS)",
          "Content Management Systems (3 ECTS)",
          "Analytics Solutions (Azure) (4 ECTS)",
          "Business Information Systems (5 ECTS)",
        ],
        extra: "GPA: 4.75 / 5.00 (60/93 credits completed)",
        date: "08/2025–",
      },
      {
        title: "Continuing Education in Information and Communications Technology",
        institution: "Jyväskylä Open University of Applied Sciences",
        courses: [
          "Introduction to Data Analytics and Artificial Intelligence (3 ECTS)",
          "Databases (3 ECTS)",
          "Basics of Programming (5 ECTS)",
          "Basics of Web Development (4 ECTS)",
          "Information Systems and Architecture (3 ECTS)",
          "Git Version Control and GitLab Project Management (2 ECTS)",
          "Linux Basics (4 ECTS)",
          "Windows Basics (4 ECTS)",
          "Cyber Security (5 ECTS)",
          "ICT Skills (3 ECTS)",
          "InnoFlash (2 ECTS)",
          "Information Seeking and Reporting (1 ECTS)",
        ],
        extra: "GPA: 4.60 / 5.00 (39 credits)",
        date: "08/2024–05/2025",
      },
      {
        title: "Bachelor of Business Administration (BBA), Business Management",
        institution: "LAB University of Applied Sciences",
        thesis: {
        label: "Thesis",
        title: "Tekoäly tukena yritystoiminnan strategisessa ennakoinnissa (in Finnish)",
        url: "https://www.theseus.fi/handle/10024/851741",
      },
        extra: "GPA: 4.15 / 5.00 (210 credits)",
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
        description: [
          "Prepare and issue benefit decisions, process payment orders, recovery cases, various assignments and labour policy statements, applying evolving social security legislation",
          "Serve young people in need of support within a multiprofessional service model that accounts for individual and special support needs",
          "Use multiple benefit systems and the Microsoft 365 environment in daily work",
          "Communicate with customers, authorities and other stakeholders by phone and in writing, and advise and guide colleagues on general support matters",
        ],
        date: "05/2020–",
      },
      {
        title: "Restaurant Worker",
        company: "Riimiravintolat Oy",
        description: [
          "Independently responsible for the location's daily operations, including opening and closing shifts and opening, closing and reconciling the cash register",
          "Onboarded new employees",
          "Customer service, sales and cashier duties, accommodating special diets and allergy information, and handling customer feedback",
          "Food and product preparation and maintaining restaurant cleanliness",
          "In-house food safety control, including temperature monitoring and record-keeping",
          "Ordering products, receiving and checking deliveries, conducting inventories, and tracking and recording waste",
          "Contributed to the restaurant's marketing",
        ],
        date: "08/2019–04/2020",
      },
      {
        title: "Baker-Confectioner",
        company: "Fazer Leipomot Oy, Brunberg Oy, Ekberg 1852 Oy Ab, Herkku-Helmi Tmi, Kahvila Asemapäällikkö, Osuuskauppa Hämeenmaa",
        date: "02/2017–06/2019",
        description: [
          "Produced bread and pastries in industrial bakery production (Fazer Bakeries)",
          "Handcrafted confectionery and worked on the production line, responsible for smooth processes and consistent quality (Brunberg)",
          "Prepared traditional café products as well as custom orders and display products (Ekberg, Herkku-Helmi, Kahvila Asemapäällikkö)",
          "Customer service and cashier duties in a café setting (Osuuskauppa Hämeenmaa)",
        ],
      },
      {
        title: "Sales Associate",
        company: "Clas Ohlson Oy, The Wembley Stores Ltd, Kino 123 Oy, Kymen Seudun Osuuskauppa",
        date: "08/2014–11/2015",
        description: [
          "Customer service, sales and cashier duties, including presenting campaigns and offers and meeting sales targets",
          "Receiving, unpacking and displaying goods, and managing stock",
          "International work period in Malta (The Wembley Stores)",
        ],
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

                  {item.courses && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {item.courses.map((course) => {
                        const match = course.match(/^(.*) \(([^()]+)\)$/);
                        const name = match ? match[1] : course;
                        const credits = match ? match[2] : null;

                        return (
                          <li
                            key={course}
                            className="rounded-md border border-stone-200 px-2.5 py-1 text-xs text-stone-600 dark:border-stone-800 dark:text-stone-400"
                          >
                            {name}
                            {credits && (
                              <span className="ml-1.5 font-mono text-stone-400 dark:text-stone-500">
                                {credits}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
{item.thesis && (
  <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
    {item.thesis.label}:{" "}
    <a
      href={item.thesis.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent-600 underline underline-offset-2 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
    >
      {item.thesis.title}
    </a>
  </p>
)}
                  <p className="mt-3 text-sm text-stone-500 dark:text-stone-500">{item.extra}</p>
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
                  {Array.isArray(item.description) ? (
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-stone-600 marker:text-stone-400 dark:text-stone-400 dark:marker:text-stone-600">
                      {item.description.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">
                      {item.description}
                    </p>
                  )}
                  
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

          <section className="mt-12">
    <h2 className="text-xl font-bold text-stone-950 dark:text-white">{t.interestsHeading}</h2>

    <ul className="mt-5 flex flex-wrap gap-2">
      {t.interests.map((interest) => (
        <li
          key={interest}
          className="rounded-md border border-stone-200 px-2.5 py-1 text-xs text-stone-600 dark:border-stone-800 dark:text-stone-400"
        >
          {interest}
          </li>
        ))}
      </ul>
    </section>
  </aside>
      </div>
    </div>
  );
}
