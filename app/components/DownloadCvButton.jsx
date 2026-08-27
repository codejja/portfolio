"use client";

import { useLanguage } from "../context/LanguageContext";

const text = {
  fi: "Lataa CV PDF:nä",
  en: "Download CV as PDF",
};

export default function DownloadCvButton() {
  const { lang } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
    >
      {text[lang]}
    </button>
  );
}
