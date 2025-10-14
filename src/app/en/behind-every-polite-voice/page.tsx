"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/ui/HeaderEN";
import Footer from "@/components/ui/Footer";
import { Language, translations, article2Texts } from "@/utils/translations";

const Article2EN: React.FC = () => {
  const [language, setLanguage] = useState<Language>("en");
  const texts = article2Texts[language];
  const t = (key: string) => translations[language]?.[key] || key;

  const USE_BRREG_AS_BULLETS = true;

  return (
    <>
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
                {texts.metaDateOct2025}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
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
                src="/call-center-chronicles-en.png"
                alt="Visuals"
                width={960}
                height={540}
                className="w-full h-auto object-contain bg-white"
                priority={false}
              />
              <figcaption className="px-4 py-3 text-center text-xs text-gray-600 bg-gray-50">
                {texts.s1Figure2Caption}
              </figcaption>
            </figure>
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
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-indigo-600" />
                  <span className="text-[15px] md:text-base leading-7 text-gray-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pull quote + Why it matters */}
        <section className="mx-auto max-w-4xl px-6 mb-12">
          <blockquote className="rounded-xl border border-blue-100 bg-blue-50/60 p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-3">
              {language === "en" ? "Pull Quote" : "Citação"}
            </p>
            <p className="text-lg md:text-xl leading-8 text-blue-900 italic">
              {texts.pullQuote}
            </p>
          </blockquote>

          {texts.whyItMattersBullets?.length > 0 && (
            <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-800 mb-3">
                {texts.whyItMattersTitle}
              </p>
              <ul className="space-y-2">
                {texts.whyItMattersBullets.map((b, i) => (
                  <li key={`why-${i}`} className="flex gap-3">
                    <span className="mt-1.5 inline-block h-2 w-2 flex-none rounded-full bg-amber-600" />
                    <span className="text-[15px] md:text-base leading-7 text-gray-800">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Body */}
        <article className="mx-auto max-w-3xl px-6 py-6 md:py-10 text-gray-800">
          {/* Seção 1 */}
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-5">
              {texts.s1Title}
            </h2>

            <div className="space-y-5 text-[15px] md:text-base leading-7 text-gray-700">
              {texts.s1Body.map((p, i) => (
                <p key={`s1-${i}`}>{p}</p>
              ))}
            </div>

            {/* Bullets chave da seção 1 */}
            {texts.s1KeyStatsBullets?.length > 0 && (
              <div className="mt-4 rounded-lg border border-sky-100 bg-sky-50 p-5">
                <p className="text-sm font-semibold text-sky-800 mb-2">
                  {texts.s1KeyStatsTitle}
                </p>
                <ul className="space-y-2">
                  {texts.s1KeyStatsBullets.map((b, i) => (
                    <li key={`s1k-${i}`} className="flex gap-3">
                      <span className="mt-1.5 inline-block h-2 w-2 flex-none rounded-full bg-sky-600" />
                      <span className="text-[15px] md:text-base leading-7 text-gray-800">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <figure className="mt-8 mb-2 mx-auto w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <Image
                src="/main-sources-of-stress.png"
                alt="Operational stressors in call centers"
                width={960}
                height={540}
                className="w-full h-auto object-contain bg-white"
                priority={false}
              />
              <figcaption className="px-4 py-3 text-center text-xs text-gray-600 bg-gray-50">
                {texts.s1Figure1Caption}
              </figcaption>
            </figure>

            <div className="mt-6 space-y-5 text-[15px] md:text-base leading-7 text-gray-700">
              {texts.s1Body2}
            </div>

            <figure className="mt-8 mb-2 mx-auto w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <Image
                src="/service-turnover-2.png"
                alt="Operational stressors in call centers"
                width={960}
                height={540}
                className="w-full h-auto object-contain bg-white"
                priority={false}
              />
              <figcaption className="px-4 py-3 text-center text-xs text-gray-600 bg-gray-50">
                {texts.byline}
              </figcaption>
            </figure>
          </section>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* Seção 2 */}
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-5">
              {texts.s2Title}
            </h2>
            <div className="space-y-5 text-[15px] md:text-base leading-7 text-gray-700">
              {texts.s2Body.map((p, i) => (
                <p key={`s2-${i}`}>{p}</p>
              ))}
            </div>

            <figure className="mt-8 mb-4 mx-auto w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <Image
                src="/performance-improvement.png"
                alt="Generative AI impact on contact center metrics"
                width={960}
                height={540}
                className="w-full h-auto object-contain bg-white"
                priority={false}
              />
              <figcaption className="px-4 py-3 text-center text-xs text-gray-600 bg-gray-50">
                {texts.s2FigureCaption}
              </figcaption>
            </figure>

            <div className="mt-6 rounded-lg border border-emerald-100 bg-emerald-50/60 p-5">
              <p className="text-sm font-semibold text-emerald-800 mb-3">
                {language === "en" ? "Key metrics" : "Métricas-chave"}
              </p>
              <ul className="space-y-2">
                {texts.s2Bullets.map((bullet, i) => (
                  <li key={`s2b-${i}`} className="flex gap-3">
                    <span className="mt-1.5 inline-block h-2 w-2 flex-none rounded-full bg-emerald-600" />
                    <span className="text-[15px] md:text-base leading-7 text-gray-800 font-medium">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-5 text-[15px] md:text-base leading-7 text-gray-700">
              {texts.s2Body2.map((p, i) => (
                <p key={`s2b2-${i}`}>{p}</p>
              ))}
            </div>
          </section>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* Seção 3 */}
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-5">
              {texts.s3Title}
            </h2>
            <div className="space-y-5 text-[15px] md:text-base leading-7 text-gray-700">
              {texts.s3Body.map((p, i) => (
                <p key={`s3-${i}`}>{p}</p>
              ))}
            </div>

            <figure className="mt-8 mb-4 mx-auto w-full max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <Image
                src="/ai-supportive-roles.png"
                alt="Agent reactions to AI types"
                width={960}
                height={540}
                className="w-full h-auto object-contain bg-white"
                priority={false}
              />
              <figcaption className="px-4 py-3 text-center text-xs text-gray-600 bg-gray-50">
                {texts.s3FigureCaption}
              </figcaption>
            </figure>

            <div className="mt-6 space-y-5 text-[15px] md:text-base leading-7 text-gray-700">
              {texts.s3Body2.map((p, i) => (
                <p key={`s3b2-${i}`}>{p}</p>
              ))}
            </div>
          </section>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* Conclusão */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-5">
              {texts.brRegTitle}
            </h2>

            {USE_BRREG_AS_BULLETS ? (
              <div className="rounded-lg border border-violet-100 bg-violet-50 p-5">
                <ul className="space-y-3">
                  {texts.brRegBody.map((p, i) => (
                    <li key={`brb-${i}`} className="flex gap-3">
                      <span className="mt-1.5 inline-block h-2 w-2 flex-none rounded-full bg-violet-600" />
                      <span className="text-[15px] md:text-base leading-7 text-gray-800">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="space-y-5 text-[15px] md:text-base leading-7 text-gray-700">
                {texts.brRegBody.map((p, i) => (
                  <p key={`br-${i}`}>{p}</p>
                ))}
              </div>
            )}
          </section>
        </article>
      </main>
      <Footer t={t} language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Article2EN;
