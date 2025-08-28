import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./isp.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Automação de Atendimento para Provedores de Internet | Notrus",
    description: "Automatize até 70% do suporte via WhatsApp, aumente CSAT e reduza custos com a plataforma de automação da Notrus para ISPs.",
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
