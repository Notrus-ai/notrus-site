// app/resources/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/Footer";
import { Header } from "@/components/ui/HeaderEN";
import {
  Language,
  translations,
  ResourcesTexts,
  resourcesTexts,
} from "@/utils/translations";
import { ArrowRight } from "lucide-react";

interface Resource {
  id: number;
  category: "product" | "insights" | "caseStudy" | "guide" | "article";
  titleKey: string;
  descriptionKey: string;
  date: string;
  image: string;
  link: string;
}

const resources: Resource[] = [
  {
    id: 1,
    category: "article",
    titleKey: "resource1Title",
    descriptionKey: "resource1Description",
    date: "2025-10-02",
    image: "/article1.png",
    link: "/en/stop-losing-customers",
  },
  {
    id: 2,
    category: "article",
    titleKey: "resource2Title",
    descriptionKey: "resource2Description",
    date: "2025-03-10",
    image: "/customer-eperience-guide.png",
    link: "/en/behind-every-polite-voice",
  },
  // {
  //   id: 3,
  //   category: "caseStudy",
  //   titleKey: "resource3Title",
  //   descriptionKey: "resource3Description",
  //   date: "2025-03-05",
  //   image: "/how-leading-enterprises.jpg",
  //   link: "/en/resources",
  // },
  // {
  //   id: 4,
  //   category: "guide",
  //   titleKey: "resource4Title",
  //   descriptionKey: "resource4Description",
  //   date: "2025-02-28",
  //   image: "/ai-agents-for-enterprise.webp",
  //   link: "/en/resource",
  // },
  // {
  //   id: 5,
  //   category: "product",
  //   titleKey: "resource5Title",
  //   descriptionKey: "resource5Description",
  //   date: "2025-02-20",
  //   image: "/automated-payments-smart.jpg",
  //   link: "/en/resource",
  // },
  // {
  //   id: 6,
  //   category: "insights",
  //   titleKey: "resource6Title",
  //   descriptionKey: "resource6Description",
  //   date: "2025-02-15",
  //   image: "/customer-experience-drives.jpg",
  //   link: "/en/resource",
  // },
];

const ResourcesPage: React.FC = () => {
  const [language, setLanguage] = useState<Language>("en");
  const texts: ResourcesTexts = resourcesTexts[language];

  const localized = (en: string, pt: string) => (language === "pt" ? pt : en);
  const contactLink = localized("/en/contact", "/pt/contato");
  const demoLink = contactLink;

  const t = (key: string) => translations[language]?.[key] || key;

  return (
    <>
      <Header t={t} language={language} setLanguage={setLanguage} />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-500 to-purple-600 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {texts.heroTitle}
          </h1>
          <p className="text-xl ml-2 text-blue-100">{texts.heroSubtitle}</p>
        </section>

        {/* Resources Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div
            className={`${
              resources.length === 1
                ? "flex justify-center"
                : "flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            } gap-8`}
          >
            {resources.map((r) => (
              <article
                key={r.id}
                className={`h-full ${
                  resources.length === 1 ? "max-w-md w-full" : ""
                }`}
              >
                <Link
                  href={r.link}
                  className="group block h-full focus:outline-none"
                  aria-label={texts.resources[r.titleKey]}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col">
                    <div className="relative h-48 w-full">
                      <Image
                        src={r.image}
                        alt={texts.resources[r.titleKey]}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
                          {texts.categories[r.category]}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(r.date).toLocaleDateString(texts.locale, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {texts.resources[r.titleKey]}
                      </h3>

                      <p className="text-gray-600 mb-4 flex-grow">
                        {texts.resources[r.descriptionKey]}
                      </p>

                      {/* Indicador visual de ação (não é mais um Link separado) */}
                      <div className="mt-auto flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                        <span>{texts.readMore}</span>
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-indigo-500 to-purple-600 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {texts.ctaTitle}
          </h2>
          <p className="text-xl text-blue-100 mb-8">{texts.ctaDescription}</p>
          <Link href={demoLink}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
              aria-label="Schedule a demo"
            >
              {texts.ctaButton}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </section>
      </main>
      <Footer t={t} language={language} setLanguage={setLanguage} />
    </>
  );
};

export default ResourcesPage;
