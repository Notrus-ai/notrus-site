import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Notrus AI",
  description:
    "Automatize seu atendimento ao cliente com inteligência artificial.",
  keywords: [
    "automação de atendimento ao cliente",
    "inteligência artificial",
    "IA para suporte",
    "chatbot para negócios",
    "atendimento automatizado",
    "WhatsApp Business",
    "suporte via chat",
    "reduzir custos operacionais",
    "Notrus AI",
    "suporte ao consumidor",
    "automação de atendimento ao cliente",
    "atendimento digital",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Notrus AI - Plataforma de Atendimento ao Cliente Automatizado com IA",
    description:
      "Automatize o atendimento ao cliente com IA em canais como chat, WhatsApp, web e email. Resolva solicitações rapidamente e reduza custos operacionais.",
    url: "https://notrus.ai/",
    type: "website",
    images: [
      {
        url: "https://notrus.ai/notrus-logo-transparent.webp",
        width: 1200,
        height: 630,
        alt: "Notrus AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notrus AI - Atendimento ao Cliente Multicanal com IA",
    description:
      "Com a Notrus, automatize o atendimento via chat, WhatsApp, web e email com inteligência artificial adaptada ao seu negócio.",
    images: ["https://www.notrus.ai/notrus-logo-transparent.webp"],
  },
  other: {
    "google-adsense-account": "ca-pub-5498699782273630",
  },
};

export default function PtLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
