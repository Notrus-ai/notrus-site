import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Por Trás de Cada Voz Educada | Notrus AI",
  description:
    "Como a IA está transformando o cenário do atendimento ao cliente, melhorando a eficiência e reduzindo o estresse dos atendentes.",
  keywords: [
    "atendimento ao cliente",
    "inteligência artificial",
    "experiência do cliente",
    "rotatividade em call center",
    "produtividade no atendimento",
    "automação de suporte",
    "satisfação do cliente",
    "IA no atendimento",
  ],
  openGraph: {
    title: "Por Trás de Cada Voz Educada | Notrus AI",
    description:
      "Como a IA está transformando o cenário do atendimento ao cliente, melhorando a eficiência e reduzindo o estresse dos atendentes.",
    type: "article",
    images: [
      {
        url: "https://notrus.ai/call-center-chronicles-pt-2.png",
        width: 1200,
        height: 630,
        alt: "Por Trás de Cada Voz Educada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Por Trás de Cada Voz Educada | Notrus AI",
    description:
      "Como a IA está transformando o cenário do atendimento ao cliente.",
    images: ["https://notrus.ai/call-center-chronicles-pt-2.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FMYBGJ967S"
          strategy="afterInteractive"
        />
        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FMYBGJ967S');
          `}
        </Script>
      </body>
    </html>
  );
}
