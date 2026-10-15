import type { Metadata } from "next";
import { Anton, Big_Shoulders, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NotificationBanner from "@/components/NotificationBanner";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  adjustFontFallback: false,
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trojan Pickleball Club",
  description: "USC's official pickleball club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${display.variable} ${anton.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <NotificationBanner />
      </body>
    </html>
  );
}
