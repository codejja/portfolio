"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  // Oletus on "dark", koska app/layout.js:n <html>-elementille on kovakoodattu
  // "dark"-luokka samasta syystä: sivu renderöityy palvelimella aina tummana,
  // jotta ei välähdä väärässä teemassa ennen kuin tämä efekti ehtii lukea
  // localStoragesta käyttäjän oikean valinnan. Näitä kahta ei pidä muuttaa
  // toisistaan erillään.
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
      }
    } catch {
      // ei haittaa jos selain estää pääsyn
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // ei haittaa jos tallennus ei onnistu
    }
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
