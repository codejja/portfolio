"use client";

import Link from "next/link";
import Hero from "./components/Hero";
import { useLanguage } from "./context/LanguageContext";

const text = {
  fi: {
    ctaTitle: "Etsin harjoittelupaikkaa IT-alalta",
    ctaText:
      "Etsin harjoittelupaikkaa, jossa pääsen hyödyntämään liiketoiminnan ymmärrystäni ja kehittämään osaamistani datan, teknologian ja digitaalisten ratkaisujen parissa. Tuon mukanani käytännönläheisen otteen, kiinnostuksen oppia uutta sekä silmää toimiville ja visuaalisille ratkaisuille.",
    ctaButton: "Katso yhteystietoni",
  },
  en: {
    ctaTitle: "Looking for an internship in IT",
    ctaText:
      "I'm motivated to keep learning through hands-on projects and grow into someone who bridges business, data, and automation.",
    ctaButton: "See my contact info",
  },
};

export default function Home() {
  const { lang } = useLanguage();
  const t = text[lang];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-10">
      <Hero />

      <section className="rounded bg-accent-600 px-6 py-8 text-center text-white dark:bg-accent-700">
        <h2 className="text-2xl font-bold">
          {t.ctaTitle}
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm text-accent-100">
          {t.ctaText}
        </p>

        <Link
          href="/contact"
          className="mt-5 inline-block rounded border border-white px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-accent-700"
        >
          {t.ctaButton}
        </Link>
      </section>
    </div>
  );
}
