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
  description: "Automate your customer service with artificial intelligence.",
  keywords: [
    "customer service automation",
    "artificial intelligence",
    "AI for support",
    "business chatbot",
    "automated service",
    "WhatsApp business",
    "chat support",
    "reduce operational costs",
    "Notrus AI",
    "consumer support",
    "customer care automation",
    "digital service",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Notrus AI - Automated Customer Service Platform with AI",
    description: "Automate customer service with AI on channels like chat, WhatsApp, web and email. Resolve tickets quickly and reduce operational costs.",
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
    title: "Notrus AI - Customer Service with Multichannel AI",
    description: "With Notrus, automate service via chat, WhatsApp, web and email with artificial intelligence tailored to your business.",
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
    <html lang="en">
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
        {/* Canonical */}
        <link rel="canonical" href="https://notrus.ai/en/" />
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
