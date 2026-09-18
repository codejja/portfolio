import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SpotlightCursor from "./components/SpotlightCursor";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata = {
  metadataBase: new URL("https://jannekujala.vercel.app"),
  title: "Janne Kujala",
  description: "Janne Kujala – portfolio ja CV. Liiketoiminta, data, automaatio ja tekoäly.",
};

export default function RootLayout({ children }) {
  return (
    // "dark" tässä ja ThemeContextin oletusarvo ("dark") kuuluvat yhteen:
    // molemmat pitävät sivun oletuksena tummana ennen kuin JS ehtii lukea
    // localStoragesta käyttäjän valinnan. Jos vain toista muuttaa, sivu
    // välähtää hetkeksi väärässä teemassa ennen React-hydraatiota.
    <html
      lang="fi"
      className="h-full dark"
    >
      <body className={`${inter.className} ${spaceGrotesk.variable} ${spaceMono.variable} flex min-h-screen flex-col bg-stone-50 text-stone-900 print:bg-white dark:bg-stone-950 dark:text-stone-100 dark:print:bg-white dark:print:text-stone-900`}>
        <ThemeProvider>
          <LanguageProvider>
            <SpotlightCursor />
            <Navbar />

            <main className="flex-1">
            {children}
            </main>

            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
