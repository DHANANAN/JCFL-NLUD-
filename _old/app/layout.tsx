import type { Metadata } from "next";
import { Source_Serif_4, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/navigation/AnnouncementBar";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { CommandPalette } from "@/components/search/CommandPalette";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jcfl.law"),
  title: {
    template: "%s | Journal of Corporate and Financial Laws (NLU Delhi)",
    default: "Journal of Corporate and Financial Laws | CCLGFL, NLU Delhi",
  },
  description:
    "A premier scholarly platform published by the Centre for Corporate Law, Governance & Financial Laws at National Law University Delhi, dedicated to rigorous research across corporate governance, securities regulation, insolvency, and commercial jurisprudence.",
  keywords: [
    "Corporate Law",
    "Financial Law",
    "National Law University Delhi",
    "NLU Delhi",
    "Corporate Governance",
    "Securities Regulation",
    "Insolvency Law",
    "Commercial Law",
    "Law Journal",
    "Legal Scholarship",
    "CCLGFL",
    "JCFL"
  ],
  authors: [{ name: "Centre for Corporate Law, Governance & Financial Laws, NLU Delhi" }],
  creator: "Centre for Corporate Law, Governance & Financial Laws, NLU Delhi",
  publisher: "Centre for Corporate Law, Governance & Financial Laws, National Law University Delhi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jcfl.law",
    siteName: "Journal of Corporate and Financial Laws · NLU Delhi",
    title: "Journal of Corporate and Financial Laws | CCLGFL, NLU Delhi",
    description:
      "A scholarly platform dedicated to rigorous research across corporate law, governance, and financial markets at National Law University Delhi.",
    images: [
      {
        url: "/assets/images/cclgfl-logo.jpg",
        width: 800,
        height: 800,
        alt: "Centre for Corporate Law, Governance & Financial Laws, NLU Delhi",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-slate-ink selection:bg-[#B99A5E]/20 selection:text-[#16324F]">
        <LoadingScreen />
        <CustomCursor />
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
