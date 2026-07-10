import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://master-devhub-next.vercel.app"),
  title: {
    default: "Max Letourneau | Master DevHub",
    template: "%s | Master DevHub",
  },
  description: "Max Letourneau's developer profile focused on estimating, construction technology, AI automation, project controls, and application development.",
  applicationName: "Master DevHub",
  authors: [{ name: "Max Letourneau" }],
  creator: "Max Letourneau",
  keywords: ["Max Letourneau", "construction technology", "estimating", "AI automation", "developer portfolio"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Max Letourneau | Master DevHub",
    description: "Estimating, construction technology, AI automation, project controls, and application development.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Max Letourneau | Master DevHub",
    description: "Estimating, construction technology, AI automation, project controls, and application development.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
