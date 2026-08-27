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
    <header className="print:hidden sticky top-0 z-50 border-b border-stone-200 bg-stone-50/90 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/90">
      <nav className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between px-6 py-5">
          <div className="ml-auto hidden items-center gap-10 md:flex">
            <div className="flex items-center gap-7">
              <Link
                href="/"
                className="group relative py-1 text-xs font-semibold uppercase tracking-[0.15em] text-stone-700 transition hover:text-accent-600 dark:text-stone-300 dark:hover:text-accent-400"
              >
                Janne
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent-600 transition-transform duration-300 group-hover:scale-x-100 dark:bg-accent-400" />
              </Link>

              <Link
                href="/projects"
                className="group relative py-1 text-xs font-semibold uppercase tracking-[0.15em] text-stone-700 transition hover:text-accent-600 dark:text-stone-300 dark:hover:text-accent-400"
              >
                {t.projects}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent-600 transition-transform duration-300 group-hover:scale-x-100 dark:bg-accent-400" />
              </Link>

              <Link
                href="/skills"
                className="group relative py-1 text-xs font-semibold uppercase tracking-[0.15em] text-stone-700 transition hover:text-accent-600 dark:text-stone-300 dark:hover:text-accent-400"
              >
                {t.skills}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent-600 transition-transform duration-300 group-hover:scale-x-100 dark:bg-accent-400" />
              </Link>

              <Link
                href="/cv"
                className="group relative py-1 text-xs font-semibold uppercase tracking-[0.15em] text-stone-700 transition hover:text-accent-600 dark:text-stone-300 dark:hover:text-accent-400"
              >
                {t.cv}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent-600 transition-transform duration-300 group-hover:scale-x-100 dark:bg-accent-400" />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? t.lightMode : t.darkMode}
                className="inline-flex cursor-pointer items-center justify-center text-stone-600 transition hover:text-accent-600 dark:text-stone-400 dark:hover:text-accent-400"
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
                className="inline-flex cursor-pointer font-mono text-xs font-bold tracking-wider"
              >
                <span className={lang === "fi" ? "text-accent-600 dark:text-accent-400" : "text-stone-400 dark:text-stone-600"}>
                  FI
                </span>
                <span className="mx-1 text-stone-300 dark:text-stone-700">/</span>
                <span className={lang === "en" ? "text-accent-600 dark:text-accent-400" : "text-stone-400 dark:text-stone-600"}>
                  EN
                </span>
              </button>
            </div>

            <Link
              href="/contact"
              className="rounded border border-accent-600 px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent-600 transition hover:bg-accent-600 hover:text-white dark:border-accent-400 dark:text-accent-400 dark:hover:bg-accent-400 dark:hover:text-stone-950"
            >
              {t.contact}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? t.closeMenu : t.openMenu}
            aria-expanded={isOpen}
            className="ml-auto inline-flex cursor-pointer items-center justify-center text-stone-800 md:hidden dark:text-stone-200"
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

        {isOpen && (
          <div className="flex flex-col gap-1 border-t border-stone-200 px-6 py-4 md:hidden dark:border-stone-800">
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="py-3 text-[16px] font-medium text-stone-800 transition hover:text-accent-600 dark:text-stone-200 dark:hover:text-accent-400"
            >
              {t.projects}
            </Link>

            <Link
              href="/skills"
              onClick={() => setIsOpen(false)}
              className="py-3 text-[16px] font-medium text-stone-800 transition hover:text-accent-600 dark:text-stone-200 dark:hover:text-accent-400"
            >
              {t.skills}
            </Link>

            <Link
              href="/cv"
              onClick={() => setIsOpen(false)}
              className="py-3 text-[16px] font-medium text-stone-800 transition hover:text-accent-600 dark:text-stone-200 dark:hover:text-accent-400"
            >
              {t.cv}
            </Link>

            <div className="mt-2 flex items-center gap-5 border-t border-stone-200 pt-4 dark:border-stone-800">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? t.lightMode : t.darkMode}
                className="inline-flex cursor-pointer items-center justify-center text-stone-600 dark:text-stone-400"
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
                className="cursor-pointer font-mono text-xs font-bold tracking-wider"
              >
                <span className={lang === "fi" ? "text-accent-600 dark:text-accent-400" : "text-stone-400 dark:text-stone-600"}>
                  FI
                </span>
                <span className="mx-1 text-stone-300 dark:text-stone-700">/</span>
                <span className={lang === "en" ? "text-accent-600 dark:text-accent-400" : "text-stone-400 dark:text-stone-600"}>
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
