import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Notrus AI",
  description: "Automate your customer service with artificial intelligence.",
  alternates: {
    canonical: "https://notrus.ai/",
  },
  other: {
    "google-adsense-account": "ca-pub-5498699782273630",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FMYBGJ967S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-global" strategy="afterInteractive">
          {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-FMYBGJ967S');
                    `}
        </Script>

        {/* Google Ads */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5498699782273630"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />

        {children}
      </body>
    </html>
  );
}
