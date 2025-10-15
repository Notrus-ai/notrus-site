import type { Metadata } from "next";
import "../globals.css";

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
    description:
      "Automate customer service with AI on channels like chat, WhatsApp, web and email. Resolve tickets quickly and reduce operational costs.",
    url: "https://notrus.ai/",
    type: "website",
    images: [
      {
        url: "https://notrus.ai/Notrus-logo-new.png",
        width: 1200,
        height: 630,
        alt: "Notrus AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notrus AI - Customer Service with Multichannel AI",
    description:
      "With Notrus, automate service via chat, WhatsApp, web and email with artificial intelligence tailored to your business.",
    images: ["https://www.notrus.ai/Notrus-logo-new.png"],
  },
  other: {
    "google-adsense-account": "ca-pub-5498699782273630",
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
