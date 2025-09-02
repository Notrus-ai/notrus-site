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
  title: "Contato Notrus AI | Melhore o Atendimento ao Cliente com IA",
  description: "Fale com a Notrus AI para transformar seu serviço ao consumidor com agentes de IA inteligentes. Agende uma demonstração e otimize seu atendimento.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
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
