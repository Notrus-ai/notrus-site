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
  title: "Pós-Venda Inteligente | Notrus AI",
  description:
    "Transforme seu pós-venda com IA: aumente a satisfação dos clientes, reduza custos e melhore a eficiência do atendimento com a Notrus AI.",
  keywords: [
    "pós-venda",
    "atendimento ao cliente",
    "automação de pós-venda",
    "IA no pós-venda",
    "retenção de clientes",
    "satisfação do cliente",
    "automação de suporte",
    "Notrus AI",
  ],
  openGraph: {
    title: "Pós-Venda Inteligente com IA | Notrus AI",
    description:
      "Transforme seu pós-venda com inteligência artificial: aumente a satisfação dos clientes e reduza custos operacionais.",
    type: "website",
    images: [
      {
        url: "https://notrus.ai/Notrus-logo-new.png",
        width: 1200,
        height: 630,
        alt: "Notrus AI - Pós-Venda Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pós-Venda Inteligente | Notrus AI",
    description: "Transforme seu pós-venda com inteligência artificial.",
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
