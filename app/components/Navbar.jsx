"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const text = {
  fi: {
    projects: "Projektit",
    skills: "Taidot",
    cv: "CV",
    contact: "Ota yhteyttä",
    openMenu: "Avaa valikko",
    closeMenu: "Sulje valikko",
    lightMode: "Vaihda vaaleaan tilaan",
    darkMode: "Vaihda tummaan tilaan",
  },
  en: {
    projects: "Projects",
    skills: "Skills",
    cv: "CV",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    lightMode: "Switch to light mode",
    darkMode: "Switch to dark mode",
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = text[lang];

  return (
    <header className="print:hidden sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-white/30 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-gray-700/50 dark:bg-gray-900/80">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="group flex flex-col leading-none">
            <span className="text-2xl font-bold tracking-tight text-gray-950 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              Janne
            </span>

            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500 transition group-hover:text-blue-500 dark:text-gray-400">
              Kujala
            </span>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/projects"
              className="rounded-full px-5 py-2 text-[16px] font-medium text-gray-800 transition hover:bg-black/5 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-blue-400"
            >
              {t.projects}
            </Link>

            <Link
              href="/skills"
              className="rounded-full px-5 py-2 text-[16px] font-medium text-gray-800 transition hover:bg-black/5 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-blue-400"
            >
              {t.skills}
            </Link>

            <Link
              href="/cv"
              className="rounded-full px-5 py-2 text-[16px] font-medium text-gray-800 transition hover:bg-black/5 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-blue-400"
            >
              {t.cv}
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? t.lightMode : t.darkMode}
              className="hidden md:inline-flex items-center justify-center rounded-full border border-gray-200 bg-white/60 p-1.5 text-gray-700 transition hover:bg-black/5 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-200 dark:hover:bg-white/10"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path
                    strokeLinecap="round"
                    d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={toggleLang}
              aria-label="Vaihda kieli / Switch language"
              className="hidden md:inline-flex items-center rounded-full border border-gray-200 bg-white/60 p-1 text-xs font-semibold dark:border-gray-700 dark:bg-gray-800/60"
            >
              <span
                className={`rounded-full px-2.5 py-1 transition ${
                  lang === "fi" ? "bg-blue-600 text-white" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                FI
              </span>
              <span
                className={`rounded-full px-2.5 py-1 transition ${
                  lang === "en" ? "bg-blue-600 text-white" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                EN
              </span>
            </button>

            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.03] hover:shadow-blue-500/40"
            >
              {t.contact}
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? t.closeMenu : t.openMenu}
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center rounded-full p-2 text-gray-800 transition hover:bg-black/5 md:hidden dark:text-gray-200 dark:hover:bg-white/10"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="flex flex-col gap-1 border-t border-gray-100 px-6 py-4 md:hidden dark:border-gray-700">
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-[16px] font-medium text-gray-800 transition hover:bg-black/5 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-blue-400"
            >
              {t.projects}
            </Link>

            <Link
              href="/skills"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-[16px] font-medium text-gray-800 transition hover:bg-black/5 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-blue-400"
            >
              {t.skills}
            </Link>

            <Link
              href="/cv"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-[16px] font-medium text-gray-800 transition hover:bg-black/5 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-blue-400"
            >
              {t.cv}
            </Link>

            <div className="mt-2 flex items-center gap-2 border-t border-gray-100 pt-4 dark:border-gray-700">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? t.lightMode : t.darkMode}
                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white/60 p-1.5 text-gray-700 transition hover:bg-black/5 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-200 dark:hover:bg-white/10"
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path
                      strokeLinecap="round"
                      d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                    />
                  </svg>
                )}
              </button>

              <button
                type="button"
                onClick={toggleLang}
                aria-label="Vaihda kieli / Switch language"
                className="inline-flex items-center rounded-full border border-gray-200 bg-white/60 p-1 text-xs font-semibold dark:border-gray-700 dark:bg-gray-800/60"
              >
                <span
                  className={`rounded-full px-2.5 py-1 transition ${
                    lang === "fi" ? "bg-blue-600 text-white" : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  FI
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 transition ${
                    lang === "en" ? "bg-blue-600 text-white" : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  EN
                </span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
