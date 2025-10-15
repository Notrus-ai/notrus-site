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
  title: "Política de Privacidade | Notrus AI",
  description:
    "Entenda como a Notrus AI coleta, utiliza e protege seus dados pessoais. Nossa política de privacidade explica nosso compromisso com sua segurança.",
  keywords: [
    "política de privacidade",
    "privacidade de dados",
    "LGPD",
    "proteção de dados",
    "segurança da informação",
    "Notrus AI privacidade",
  ],
  openGraph: {
    title: "Política de Privacidade | Notrus AI",
    description: "Como a Notrus AI protege seus dados pessoais",
    type: "website",
    images: [
      {
        url: "https://notrus.ai/Notrus-logo-new.png",
        width: 1200,
        height: 630,
        alt: "Notrus AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Política de Privacidade | Notrus AI",
    description: "Como a Notrus AI protege seus dados pessoais",
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
