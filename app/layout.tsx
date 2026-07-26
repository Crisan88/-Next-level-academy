import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppChat from "./components/WhatsAppChat";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://nextlevelacademy-fussball.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Next Level Academy – Fußballschule für Kinder in Muhr am See",
    template: "%s | Next Level Academy",
  },
  description:
    "Professionelles Fußballtraining für Kinder von 7–13 Jahren in Muhr am See. Technik, Schnelligkeit, Koordination und Spielintelligenz – mit kleinen Gruppen und kostenloser Anmeldung.",
  applicationName: "Next Level Academy",
  keywords: [
    "Fußballschule",
    "Fußballtraining",
    "Kinderfußball",
    "Muhr am See",
    "Next Level Academy",
  ],
  authors: [{ name: "Next Level Academy" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Next Level Academy",
    title: "Next Level Academy – Fußballschule für Kinder",
    description:
      "Professionelles Fußballtraining für Kinder mit individueller Förderung, kleinen Gruppen und hoher Motivation.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Next Level Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Level Academy – Fußballschule für Kinder",
    description:
      "Professionelles Fußballtraining für Kinder mit individueller Förderung, kleinen Gruppen und hoher Motivation.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <StructuredData />
        <WhatsAppChat />
      </body>
    </html>
  );
}
