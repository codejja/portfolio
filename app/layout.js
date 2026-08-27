import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Janne Kujala",
  description: "Portfolio-sivusto ensimmäisen IT-alan työpaikan saamiseksi.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fi"
      className="h-full"
    >
      <body className={`${inter.className} flex min-h-screen flex-col bg-slate-50 text-gray-900 print:bg-white dark:bg-gray-950 dark:text-gray-100 dark:print:bg-white dark:print:text-gray-900`}>
        <ThemeProvider>
          <LanguageProvider>
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
