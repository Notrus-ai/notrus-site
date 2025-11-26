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
  title: "Automação para E-commerce | Notrus AI",
  description:
    "Automatize o atendimento da sua loja virtual com IA: otimize processos, aumente vendas e melhore a experiência dos clientes com a Notrus AI.",
  keywords: [
    "automação e-commerce",
    "atendimento e-commerce",
    "IA para e-commerce",
    "vendas e-commerce",
    "automação de corretores",
    "e-commerce digital",
    "Notrus AI",
    "agentes virtuais e-commerce",
  ],
  openGraph: {
    title: "Automação Inteligente para E-commerce | Notrus AI",
    description:
      "Revolucione sua loja virtual com automação inteligente: aumente vendas e otimize processos com IA.",
    type: "website",
    images: [
      {
        url: "https://notrus.ai/Notrus-logo-new.png",
        width: 1200,
        height: 630,
        alt: "Notrus AI - Automação para E-commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automação para E-commerce | Notrus AI",
    description: "Revolucione sua loja virtual com automação inteligente.",
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
