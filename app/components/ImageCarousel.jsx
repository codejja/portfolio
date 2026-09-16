"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ImageCarousel({ images }) {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const current = images[index];

  const goPrev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-xl border border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-900">
        <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={current.alt[lang]}
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label={lang === "fi" ? "Edellinen kuva" : "Previous image"}
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-stone-700 shadow transition hover:bg-white dark:bg-stone-950/80 dark:text-stone-200 dark:hover:bg-stone-950"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 010 1.06L8.56 10.5l4.23 4.21a.75.75 0 11-1.06 1.06l-4.75-4.75a.75.75 0 010-1.06l4.75-4.75a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label={lang === "fi" ? "Seuraava kuva" : "Next image"}
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-stone-700 shadow transition hover:bg-white dark:bg-stone-950/80 dark:text-stone-200 dark:hover:bg-stone-950"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 010-1.06l4.23-4.21-4.23-4.21a.75.75 0 111.06-1.06l4.75 4.75a.75.75 0 010 1.06l-4.75 4.75a.75.75 0 01-1.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`${lang === "fi" ? "Kuva" : "Image"} ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-5 bg-accent-600 dark:bg-accent-400"
                      : "w-1.5 bg-white/70 dark:bg-stone-600"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <p className="mt-2 text-center text-xs text-stone-500 dark:text-stone-500">
        {current.alt[lang]}
        {images.length > 1 ? ` (${index + 1}/${images.length})` : ""}
      </p>
    </div>
  );
}
