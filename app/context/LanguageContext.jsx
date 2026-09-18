"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fi");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("lang");
      if (stored === "fi" || stored === "en") {
        setLang(stored);
      }
    } catch {
      // localStorage voi olla poissa käytöstä, ei haittaa
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("lang", lang);
    } catch {
      // ei haittaa jos tallennus ei onnistu
    }
    // Huom: tämä päivittää <html lang>-attribuutin vain selaimessa, kun
    // käyttäjä vaihtaa kieltä. Palvelimen renderöimä HTML ja metadata (esim.
    // layout.js:n title/description) pysyvät aina suomeksi, joten hakukoneet
    // ja some-jakojen esikatselut näkevät aina suomenkielisen version kielen
    // vaihdosta riippumatta.
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "fi" ? "en" : "fi"));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
