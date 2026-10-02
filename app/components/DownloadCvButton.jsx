"use client";

import { useLanguage } from "../context/LanguageContext";

const text = {
  fi: "Lataa CV PDF:nä",
  en: "Download CV as PDF",
};

const files = {
  fi: "/Janne-Kujala-CV-fi.pdf",
  en: "/Janne-Kujala-CV-en.pdf",
};

export default function DownloadCvButton() {
  const { lang } = useLanguage();

  return (
    <a
      href={files[lang]}
      download
      className="inline-flex items-center gap-2 rounded border border-accent-600 px-6 py-3 text-sm font-semibold text-accent-600 transition hover:bg-accent-600 hover:text-white dark:border-accent-400 dark:text-accent-400 dark:hover:bg-accent-400 dark:hover:text-stone-950"
    >
      {text[lang]}
    </a>
  );
}
