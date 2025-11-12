"use client";

import React, { useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Header } from "@/components/ui/HeaderEN";
import Footer from "@/components/ui/Footer";
import {
  Language,
  translations,
  AIHallucinationsTexts,
  aiHallucinationsTexts,
} from "@/utils/translations";
import { renderTextWithLinks } from "@/components/ui/renderTextWithLinks";

const AIHallucinationsArticle: React.FC = () => {
  const [language, setLanguage] = useState<Language>("en");
  const texts: AIHallucinationsTexts = aiHallucinationsTexts[language];
  const t = (key: string) => translations[language]?.[key] || key;

  const pageTitle = texts.seoTitle || texts.heroTitle || "Article";
  const pageDescription =
    texts.metaDescription ||
    "Insights on AI hallucinations and reliability in 2025.";
  const keywords = (texts.keywords || []).join(", ");

  const showHeroSubtitle = useMemo(() => {
    const sub = (texts.heroSubtitle || "").trim();
    if (!sub) return false;
    const cap = (texts.heroImageCaption || "").trim();
    const hook = (texts.linkedinHook || "").trim();
    return sub !== cap && sub !== hook;
  }, [texts.heroSubtitle, texts.heroImageCaption, texts.linkedinHook]);

  const hasHeroCaption = !!(
    texts.heroImageCaption && texts.heroImageCaption.trim().length
  );

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {keywords ? <meta name="keywords" content={keywords} /> : null}
        <meta name="author" content={texts.author} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:locale" content={texts.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>

      <Header t={t} language={language} setLanguage={setLanguage} />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-6 pt-14 pb-8 md:pt-20">
            <div className="flex flex-wrap items-center gap-3 text-sm text-blue-700 mb-5">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 ring-1 ring-blue-200">
                {texts.metaType}
              </span>
              <span className="text-blue-500">•</span>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 ring-1 ring-blue-200">
                {texts.metaDate}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">
              {texts.heroTitle}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-100 ring-1 ring-gray-200 flex items-center justify-center">
                <span className="text-xs font-semibold">FG</span>
              </div>
              <div className="font-medium">{texts.author}</div>
              {texts.keywords?.length ? (
                <>
                  <span className="hidden sm:inline text-gray-300">|</span>
                  <div className="flex flex-wrap gap-2">
                    {texts.keywords.slice(0, 4).map((k: string, i: number) => (
                      <span
                        key={i}
                        className="rounded-md bg-gray-50 px-2 py-1 text-xs text-gray-600 ring-1 ring-gray-200"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </>
              ) : null}
            </div>

            <figure className="mt-6 mb-2 mx-auto w-full max-w-md overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <Image
                src="/4-1-en.png"
                alt="AI hallucinations visualization"
                width={960}
                height={540}
                className="w-full h-auto object-contain bg-white"
                priority={false}
              />
              {hasHeroCaption ? (
                <figcaption className="px-4 py-3 text-center text-xs text-gray-600 bg-gray-50">
                  {renderTextWithLinks(texts.heroImageCaption)}
                </figcaption>
              ) : null}
            </figure>

            {texts.linkedinHook && texts.linkedinHook.trim() && (
              <div className="mt-6 rounded-xl border border-sky-100 bg-sky-50/60 p-4">
                <p className="text-[15px] md:text-base leading-7 text-sky-900">
                  {renderTextWithLinks(texts.linkedinHook)}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* TL;DR */}
        <section className="mx-auto max-w-4xl px-6 mb-10">
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700 mb-4">
              {texts.tldrTitle}
            </p>
            <ul className="space-y-3">
              {texts.tldrBullets.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-[0.6rem] inline-block h-2 w-2 flex-none rounded-full bg-indigo-600" />
                  <span className="text-[15px] md:text-base leading-7 text-gray-800">
                    {renderTextWithLinks(item)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pull quote */}
        <section className="mx-auto max-w-4xl px-6 mb-12">
          <blockquote className="rounded-xl border border-blue-100 bg-blue-50/60 p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-3">
              {language === "en" ? "Pull Quote" : "Citação"}
            </p>
            <p className="text-lg md:text-xl leading-8 text-blue-900 italic">
              {renderTextWithLinks(texts.pullQuote)}
            </p>
          </blockquote>
        </section>

        {/* Body */}
        <article className="mx-auto max-w-3xl px-6 py-6 md:py-10 text-gray-800">
          {/* Seção 1: Rising Cost */}
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-5">
              {texts.s1Title}
            </h2>

            <div className="space-y-5 text-[15px] md:text-base leading-7 text-gray-700">
              {texts.s1Body.map((p, i) => (
                <p key={`s1-${i}`}>{renderTextWithLinks(p)}</p>
              ))}
            </div>

            {texts.s1FigureCaption?.trim() ? (
              <figure className="mt-8 mb-4 mx-auto w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <Image
                  src="/4-2-en.png"
                  alt="Types of AI hallucinations"
                  width={960}
                  height={540}
                  className="w-full h-auto object-contain bg-white"
                  priority={false}
                />
                <figcaption className="px-4 py-3 text-center text-xs text-gray-600 bg-gray-50">
                  {renderTextWithLinks(texts.s1FigureCaption)}
                </figcaption>
              </figure>
            ) : null}

            {texts.s1Body2 && (
              <div className="mt-5 space-y-5 text-[15px] md:text-base leading-7 text-gray-700">
                {texts.s1Body2.map((p, i) => (
                  <p key={`s1b2-${i}`}>{renderTextWithLinks(p)}</p>
                ))}
              </div>
            )}
          </section>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* Seção 2: Data-Backed View */}
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-5">
              {texts.s2Title}
            </h2>

            <div className="space-y-5 text-[15px] md:text-base leading-7 text-gray-700">
              {texts.s2Body.map((p, i) => (
                <p key={`s2-${i}`}>{renderTextWithLinks(p)}</p>
              ))}
            </div>

            {texts.s2FigureCaption?.trim() ? (
              <figure className="mt-8 mb-4 mx-auto w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <Image
                  src="/4-3-en.png"
                  alt="Performance comparison of LLMs"
                  width={960}
                  height={540}
                  className="w-full h-auto object-contain bg-white"
                  priority={false}
                />
                <figcaption className="px-4 py-3 text-center text-xs text-gray-600 bg-gray-50">
                  {renderTextWithLinks(texts.s2FigureCaption)}
                </figcaption>
              </figure>
            ) : null}

            {texts.s2Body2 && (
              <div className="mt-5 space-y-5 text-[15px] md:text-base leading-7 text-gray-700">
                {texts.s2Body2.map((p, i) => (
                  <p key={`s2b2-${i}`}>{renderTextWithLinks(p)}</p>
                ))}
              </div>
            )}
          </section>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* Seção 3: Understanding Sources */}
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-5">
              {texts.s3Title}
            </h2>

            <div className="space-y-5 text-[15px] md:text-base leading-7 text-gray-700">
              {texts.s3Body.map((p, i) => (
                <p key={`s3-${i}`}>{renderTextWithLinks(p)}</p>
              ))}
            </div>
          </section>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* Seção 4: Techniques That Work */}
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-5">
              {texts.s4Title}
            </h2>

            {/* Prompt-Based Methods */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                {texts.s4PromptBasedTitle}
              </h3>
              <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-6 md:p-7">
                <ul className="space-y-4">
                  {texts.s4PromptBasedItems.map((item, i) => (
                    <li key={`prompt-${i}`}>
                      <span className="font-semibold text-blue-900">
                        {item.title}
                      </span>{" "}
                      <span className="text-[15px] md:text-base leading-7 text-gray-700">
                        {renderTextWithLinks(item.description)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Model-Based Techniques */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                {texts.s4ModelBasedTitle}
              </h3>
              <div className="rounded-xl border border-purple-100 bg-purple-50/60 p-6 md:p-7">
                <ul className="space-y-4">
                  {texts.s4ModelBasedItems.map((item, i) => (
                    <li key={`model-${i}`}>
                      <span className="font-semibold text-purple-900">
                        {item.title}
                      </span>{" "}
                      <span className="text-[15px] md:text-base leading-7 text-gray-700">
                        {renderTextWithLinks(item.description)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hybrid Pipelines */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                {texts.s4HybridTitle}
              </h3>
              <p className="mb-6 text-[15px] md:text-base leading-7 text-gray-700">
                {renderTextWithLinks(texts.s4HybridBody)}
              </p>

              {texts.s4HybridFigureCaption?.trim() ? (
                <figure className="mt-8 mb-4 mx-auto w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                  <Image
                    src="/4-4-en.png"
                    alt="Hybrid AI reliability pipelines"
                    width={960}
                    height={540}
                    className="w-full h-auto object-contain bg-white"
                    priority={false}
                  />
                  <figcaption className="px-4 py-3 text-center text-xs text-gray-600 bg-gray-50">
                    {renderTextWithLinks(texts.s4HybridFigureCaption)}
                  </figcaption>
                </figure>
              ) : null}
            </div>
          </section>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* Seção 5: Road Ahead */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-5">
              {texts.s5Title}
            </h2>

            <div className="space-y-5 text-[15px] md:text-base leading-7 text-gray-700">
              {texts.s5Body.map((p, i) => (
                <p key={`s5-${i}`}>{renderTextWithLinks(p)}</p>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer t={t} language={language} setLanguage={setLanguage} />
    </>
  );
};

export default AIHallucinationsArticle;
