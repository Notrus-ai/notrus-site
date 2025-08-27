import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notrus AI",
  description: "Automatize seu atendimento ao cliente com inteligência artificial.",
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
    title: "Notrus AI - Plataforma de Atendimento ao Cliente Automatizado com IA",
    description: "Automatize o atendimento ao cliente com IA em canais como chat, WhatsApp, web e email. Resolva solicitações rapidamente e reduza custos operacionais.",
    url: "https://notrus.ai/",
    type: "website",
    images: [
      {
        url: "https://notrus.ai/notrus-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Notrus AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notrus AI - Atendimento ao Cliente Multicanal com IA",
    description: "Com a Notrus, automatize o atendimento via chat, WhatsApp, web e email com inteligência artificial adaptada ao seu negócio.",
    images: ["https://www.notrus.ai/notrus-logo.jpeg"],
  },
  other: {
    'google-adsense-account': 'ca-pub-5498699782273630',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <Head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FMYBGJ967S"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FMYBGJ967S');
            `,
          }}
        />
        {/* Google Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5498699782273630"
          crossOrigin="anonymous"
        />
        {/* Hreflang */}
        <link rel="alternate" hrefLang="en" href="https://www.notrus.ai/en" />
        <link rel="alternate" hrefLang="pt" href="https://www.notrus.ai/pt" />
        <link rel="alternate" hrefLang="x-default" href="https://www.notrus.ai" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
