import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <body className={`${inter.className} flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-gray-100 text-gray-900`}>
        <Navbar />

        <main className="flex-1">
        {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}