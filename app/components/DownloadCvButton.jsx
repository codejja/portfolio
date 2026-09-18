"use client";

import { useLanguage } from "../context/LanguageContext";

const text = {
  fi: "Lataa CV PDF:nä",
  en: "Download CV as PDF",
};

export default function DownloadCvButton() {
  const { lang } = useLanguage();

  return (
    // "Lataa CV" käyttää selaimen tulostustoimintoa (window.print()) eikä
    // oikeaa PDF-kirjastoa: CV-sivu on tyylitelty print:-Tailwind-luokilla
    // tulostusta varten (ks. print:hidden/print:bg-white), ja käyttäjä
    // tallentaa sen PDF:nä selaimen omasta tulostusdialogista.
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden mt-6 inline-flex items-center gap-2 rounded border border-accent-600 px-6 py-3 text-sm font-semibold text-accent-600 transition hover:bg-accent-600 hover:text-white dark:border-accent-400 dark:text-accent-400 dark:hover:bg-accent-400 dark:hover:text-stone-950"
    >
      {text[lang]}
    </button>
  );
}
