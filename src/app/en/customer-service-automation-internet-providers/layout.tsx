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
    title: "Customer Service Automation for Internet Providers | Notrus",
    description: "Automate up to 70% of your customer support, boost satisfaction, and cut costs with Notrus’ AI-powered automation platform for ISPs.",
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
