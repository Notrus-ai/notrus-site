"use client";

import { useState } from "react";
import { AlertTriangle, Smile, Bot, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  translations,
  reportTranslations,
  Language,
} from "@/utils/translations";
import { Header } from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function ReportPage() {
  const pathname = usePathname();
  const initialLang: Language = pathname.startsWith("/en") ? "en" : "pt";

  const [language, setLanguage] = useState<Language>(initialLang);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const localized = (en: string, pt: string) => (language === "pt" ? pt : en);

  const contactLink = localized("/en/contact", "/pt/contato");
  const demoLink = contactLink;

  const t = (key: string) => {
    return translations[language]?.[key] || key;
  };

  const rt = reportTranslations[language];

  return (
    <>
      <Header t={t} setLanguage={setLanguage} language={language} />
      <main className="min-h-screen bg-white text-gray-800 font-sans">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="text-blue-600">
            <div className="inline-flex items-center bg-[rgba(137,183,245,0.2)] bg-opacity-90 px-4 py-2 rounded-full text-sm mb-6 sm:mb-8 backdrop-blur-sm">
              {rt.hero.badge}
            </div>
          </div>
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              {rt.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {rt.hero.subtitle}
            </p>
          </div>

          {/* Grid: capa + formulário */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col justify-center bg-gray-50 p-6 rounded-xl shadow border border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
                {rt.hero.callToActionTitle}
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                {rt.hero.callToActionSubtitle}
              </p>
            </div>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 text-gray-100"
              onSubmit={() => setIsSubmitted(true)}
            >
              <input
                type="hidden"
                name="access_key"
                value="9a1df9df-6912-4d9c-95af-17e7ca56cb3c"
              />
              <input
                type="hidden"
                name="redirect"
                value="https://onlinelibrary.wiley.com/doi/pdf/10.1155/2021/8812542"
              />

              <h2 className="text-2xl font-semibold mb-6">{rt.form.title}</h2>
              <div className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder={rt.form.email}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="first_name"
                    placeholder={rt.form.firstName}
                    required
                    className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400"
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder={rt.form.lastName}
                    className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
                <input
                  type="text"
                  name="company"
                  placeholder={rt.form.company}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400"
                />
                <select
                  name="tickets"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {rt.form.tickets}
                  </option>
                  <option value="1-100">{rt.form.ticketsOptions.one}</option>
                  <option value="101-500">{rt.form.ticketsOptions.two}</option>
                  <option value="500+">{rt.form.ticketsOptions.three}</option>
                </select>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white font-semibold"
                >
                  {rt.form.button}
                </button>
              </div>
              {isSubmitted && (
                <p className="text-sm mt-4 text-green-400">{rt.form.success}</p>
              )}
            </form>
          </div>
        </section>

        {/* Highlights */}
        <section className="max-w-5xl mx-auto px-6 lg:px-12 py-16">
          <h3 className="text-2xl font-bold mb-8">{rt.highlights.title}</h3>
          <ul className="space-y-6 text-gray-600">
            {rt.highlights.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                {i === 0 && (
                  <AlertTriangle className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                )}
                {i === 1 && (
                  <Smile className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                )}
                {i === 2 && (
                  <Bot className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                )}
                {i === 3 && (
                  <Heart className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                )}
                <span className="text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center py-20 bg-gradient-to-b from-blue-600 to-white-600">
          <h3 className="text-3xl font-semibold text-white mb-4">
            {rt.cta.title}
          </h3>
          <p className="mt-4 text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            {rt.cta.subtitle}
          </p>
          <Link href={demoLink}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
              aria-label="Agendar uma demo"
            >
              {rt.cta.button}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </section>
      </main>
      <Footer t={t} setLanguage={setLanguage} language={language} />
    </>
  );
}
