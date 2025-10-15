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
  title: "Automação para Imobiliárias | Notrus AI",
  description:
    "Automatize o atendimento da sua imobiliária com IA: otimize processos, aumente vendas e melhore a experiência dos clientes com a Notrus AI.",
  keywords: [
    "automação imobiliária",
    "atendimento imobiliário",
    "IA para imobiliárias",
    "vendas imobiliárias",
    "automação de corretores",
    "imobiliária digital",
    "Notrus AI",
    "agentes virtuais imobiliários",
  ],
  openGraph: {
    title: "Automação Inteligente para Imobiliárias | Notrus AI",
    description:
      "Revolucione sua imobiliária com automação inteligente: aumente vendas e otimize processos com IA.",
    type: "website",
    images: [
      {
        url: "https://notrus.ai/Notrus-logo-new.png",
        width: 1200,
        height: 630,
        alt: "Notrus AI - Automação para Imobiliárias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automação para Imobiliárias | Notrus AI",
    description: "Revolucione sua imobiliária com automação inteligente.",
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
