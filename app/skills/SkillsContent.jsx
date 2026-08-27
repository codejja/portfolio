"use client";

import { useLanguage } from "../context/LanguageContext";

const content = {
  fi: {
    overline: "Skills",
    heading: "Taidot",
    intro:
      "Kooste teknologioista ja työkaluista, joita olen käyttänyt opinnoissa ja omissa projekteissa.",
    nextHeading: "Mitä haluan kehittää seuraavaksi?",
    nextText:
      "Seuraavaksi haluan vahvistaa osaamistani Reactin tilanhallinnassa, API-kutsujen käsittelyssä, Node.js:n perusteissa sekä kokonaisvaltaisessa web-sovellusten rakentamisessa.",
    groups: [
      {
        title: "Web Development",
        description: "Modernien verkkosivujen ja käyttöliittymien rakentaminen.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "WordPress", "Figma", "Responsive Design"],
      },
      {
        title: "Backend & Databases",
        description: "Backend-teknologiat, tietokannat ja rajapintojen perusteet.",
        skills: ["PHP", "MySQL", "APIs"],
      },
      {
        title: "Cloud & Analytics",
        description: "Pilvipalvelut, dataintegraatiot ja analytiikkaratkaisut.",
        skills: ["Azure Cloud", "Azure SQL", "Azure Data Factory", "ETL Pipelines", "Logic Apps", "Power BI", "Data Analytics", "Exploratory Data Analysis", "AWS"],
      },
      {
        title: "Business & Automation",
        description: "Microsoft-ekosysteemi, automaatio ja liiketoimintaprosessit.",
        skills: ["Microsoft 365", "SharePoint", "Power Automate", "Power Apps", "UiPath", "Requirement Specification", "Software Design"],
      },
      {
        title: "Development Tools & Workflow",
        description: "Ohjelmistokehityksen työkalut, projektinhallinta ja kehitysprosessit.",
        skills: ["Git", "GitHub", "VS Code", "Docker", "Linux", "Jira", "Confluence", "Scrum", "Agile"],
      },
      {
        title: "Currently Learning",
        description: "Teknologioita ja aiheita, joita kehitän parhaillaan.",
        skills: ["Node.js", "Software Testing", "Backend Development", "Full Stack Development"],
      },
    ],
  },
  en: {
    overline: "Skills",
    heading: "Skills",
    intro:
      "A collection of technologies and tools I've used in my studies and my own projects.",
    nextHeading: "What do I want to learn next?",
    nextText:
      "Next, I want to strengthen my skills in React state management, working with APIs, Node.js fundamentals, and building full web applications end to end.",
    groups: [
      {
        title: "Web Development",
        description: "Building modern websites and user interfaces.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "WordPress", "Figma", "Responsive Design"],
      },
      {
        title: "Backend & Databases",
        description: "Backend technologies, databases, and API fundamentals.",
        skills: ["PHP", "MySQL", "APIs"],
      },
      {
        title: "Cloud & Analytics",
        description: "Cloud services, data integrations, and analytics solutions.",
        skills: ["Azure Cloud", "Azure SQL", "Azure Data Factory", "ETL Pipelines", "Logic Apps", "Power BI", "Data Analytics", "Exploratory Data Analysis", "AWS"],
      },
      {
        title: "Business & Automation",
        description: "Microsoft ecosystem, automation, and business processes.",
        skills: ["Microsoft 365", "SharePoint", "Power Automate", "Power Apps", "UiPath", "Requirement Specification", "Software Design"],
      },
      {
        title: "Development Tools & Workflow",
        description: "Software development tools, project management, and development processes.",
        skills: ["Git", "GitHub", "VS Code", "Docker", "Linux", "Jira", "Confluence", "Scrum", "Agile"],
      },
      {
        title: "Currently Learning",
        description: "Technologies and topics I'm currently developing.",
        skills: ["Node.js", "Software Testing", "Backend Development", "Full Stack Development"],
      },
    ],
  },
};

export default function SkillsContent() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-12">
        <h1 className="font-heading text-7xl font-black tracking-tighter text-accent-600 md:text-8xl dark:text-accent-400">
          {t.heading}
        </h1>
      </section>

      <section className="grid gap-x-12 gap-y-8 border-t border-stone-200 pt-10 dark:border-stone-800 md:grid-cols-2">
        {t.groups.map((group) => (
          <article key={group.title}>
            <h2 className="text-lg font-bold text-stone-950 dark:text-white">{group.title}</h2>

            <p className="mt-2 font-mono text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              {group.skills.join("  ·  ")}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
