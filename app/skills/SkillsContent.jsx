"use client";

import { useLanguage } from "../context/LanguageContext";

const content = {
  fi: {
  heading: "Taidot",
  groups: [
    {
      title: "Liiketoimintaosaaminen",
      skills: ["Asiakkuudet ja markkinointi", "Prosessien kehittäminen (LEAN)", "Projektinhallinta", "Strateginen ennakointi", "Kannattavuuslaskenta", "Sidosryhmäviestintä"],
    },
    {
      title: "Automaatio & Microsoft 365",
      skills: ["Microsoft 365", "Excel", "SharePoint", "Power Platform (Power Automate, Power Apps, Power BI)", "Vaatimusmäärittely", "Tekninen dokumentointi"],
    },
    {
      title: "Pilvi & data-analytiikka",
      skills: ["Azure (Data Factory, Logic Apps, Azure SQL)", "SQL", "Data-analyysi ja visualisointi"],
    },
    {
      title: "Web-kehitys",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Figma", "Webflow"],
    },
    {
      title: "Backend & tietokannat",
      skills: ["PHP", "MySQL", "Python (perusteet)", "Rajapinnat (API)"],
    },
    {
      title: "Työkalut & menetelmät",
      skills: ["Git", "GitHub", "VS Code", "Jira", "Confluence", "Scrum", "AI-työkalut (Claude, Copilot, ChatGPT)"],
    },
  ],
},
en: {
  heading: "Skills",
  groups: [
    {
      title: "Business Skills",
      skills: ["Customer Relationships & Marketing", "Process Improvement (Lean)", "Project Management", "Strategic Foresight", "Profitability Analysis", "Stakeholder Communication"],
    },
    {
      title: "Automation & Microsoft 365",
      skills: ["Microsoft 365", "Excel", "SharePoint", "Power Platform (Power Automate, Power Apps, Power BI)", "Requirements Specification", "Technical Documentation"],
    },
    {
      title: "Cloud & Data Analytics",
      skills: ["Azure (Data Factory, Logic Apps, Azure SQL)", "SQL", "Data Analysis and Visualisation"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Figma", "Webflow"],
    },
    {
      title: "Backend & Databases",
      skills: ["PHP", "MySQL", "Python (basics)", "APIs"],
    },
    {
      title: "Tools & Methods",
      skills: ["Git", "GitHub", "VS Code", "Jira", "Confluence", "Scrum", "AI Tools (Claude, Copilot, ChatGPT)"],
    },
  ],
},
};

export default function SkillsContent() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
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
    </div>
  );
}
