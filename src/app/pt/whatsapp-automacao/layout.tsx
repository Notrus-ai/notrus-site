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
  title: "Automação de WhatsApp com IA | Notrus AI",
  description:
    "Automatize seu atendimento no WhatsApp com inteligência artificial: aumente a eficiência, reduza custos e melhore a experiência do cliente com a Notrus AI.",
  keywords: [
    "automação WhatsApp",
    "WhatsApp Business",
    "chatbot WhatsApp",
    "atendimento automatizado",
    "IA no WhatsApp",
    "automação de mensagens",
    "Notrus AI",
    "WhatsApp para empresas",
  ],
  openGraph: {
    title: "Automação Inteligente de WhatsApp | Notrus AI",
    description:
      "Transforme seu atendimento no WhatsApp com IA: mais eficiência e melhor experiência para seus clientes.",
    type: "website",
    images: [
      {
        url: "https://notrus.ai/Notrus-logo-new.png",
        width: 1200,
        height: 630,
        alt: "Notrus AI - Automação de WhatsApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automação de WhatsApp com IA | Notrus AI",
    description:
      "Transforme seu atendimento no WhatsApp com inteligência artificial.",
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
