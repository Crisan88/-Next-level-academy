import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppChat from "./components/WhatsAppChat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Level Academy – Fußballschule",
  description:
    "Professionelles Fußballtraining für Kinder von 7–13 Jahren. Kostenloses Probetraining.",
  openGraph: {
    title: "Next Level Academy",
    description: "Professionelles Fußballtraining für Kinder.",
    url: "https://nextlevelacademy-fussball.de",
    images: ["https://nextlevelacademy-fussball.de/logo.png"],
  },
  twitter: {
    images: ["https://nextlevelacademy-fussball.de/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}
