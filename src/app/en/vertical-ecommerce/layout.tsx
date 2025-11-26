import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce Automation | Notrus AI",
  description:
    "Automate your online shop's customer service with AI: optimise processes, increase sales and improve customer experience with Notrus AI.",
  keywords: [
    "e-commerce automation",
    "e-commerce customer service",
    "AI for e-commerce",
    "e-commerce sales",
    "broker automation",
    "digital e-commerce",
    "Notrus AI",
    "e-commerce virtual agents",
  ],
  openGraph: {
    title: "Intelligent Automation for E-commerce | Notrus AI",
    description:
      "Revolutionise your online shop with intelligent automation: increase sales and optimise processes with AI.",
    type: "website",
    images: [
      {
        url: "https://notrus.ai/Notrus-logo-new.png",
        width: 1200,
        height: 630,
        alt: "Notrus AI - E-commerce Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Automation | Notrus AI",
    description: "Revolutionise your online shop with intelligent automation.",
    images: ["https://notrus.ai/Notrus-logo-new.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
