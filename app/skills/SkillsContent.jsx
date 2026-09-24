"use client";

import { useLanguage } from "../context/LanguageContext";

const content = {
  fi: {
    heading: "Taidot",
    groups: [
      {
        title: "Business & Automation",
        skills: ["Microsoft 365", "SharePoint", "Power Platform (Power Automate, Power Apps, Power BI)", "Claude AI", "Requirement Specification", "Software Design"],
      },
      {
        title: "Cloud & Analytics",
        skills: ["Azure Cloud", "Azure SQL", "Azure Data Factory", "ETL Pipelines", "Logic Apps", "Data Analytics", "Exploratory Data Analysis"],
      },
      {
        title: "Web Development",
        skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Figma", "Webflow","Responsive Design"],
      },
      {
        title: "Backend & Databases",
        skills: ["PHP", "MySQL", "APIs"],
      },
      {
        title: "Development Tools & Workflow",
        skills: ["Git", "GitHub", "VS Code", "Jira", "Confluence", "Scrum", "Agile"],
      },
    ],
  },
  en: {
    heading: "Skills",
    groups: [
      {
        title: "Business & Automation",
        skills: ["Microsoft 365", "SharePoint", "Power Platform (Power Automate, Power Apps, Power BI)", "Claude AI", "Requirement Specification", "Software Design"],
      },
      {
        title: "Cloud & Analytics",
        skills: ["Azure Cloud", "Azure SQL", "Azure Data Factory", "ETL Pipelines", "Logic Apps", "Data Analytics", "Exploratory Data Analysis"],
      },
      {
        title: "Web Development",
        skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Figma", "Webflow", "Responsive Design"],
      },
      {
        title: "Backend & Databases",
        skills: ["PHP", "MySQL", "APIs"],
      },
      {
        title: "Development Tools & Workflow",
        skills: ["Git", "GitHub", "VS Code", "Jira", "Confluence", "Scrum", "Agile"],
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
