"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/ui/HeaderEN";
import Footer from "@/components/ui/Footer";
import {
  Language,
  translations,
  ArticleTexts,
  articleTexts,
} from "@/utils/translations";

const ArticlePageEN: React.FC = () => {
  const [language, setLanguage] = useState<Language>("en");
  const texts: ArticleTexts = articleTexts[language];
  const t = (key: string) => translations[language]?.[key] || key;

  return (
    <>
      <Header t={t} language={language} setLanguage={setLanguage} />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-5xl px-6 pt-14 md:pt-20">
            <div className="flex flex-wrap items-center gap-3 text-sm text-blue-700 mb-5">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 ring-1 ring-blue-200">
                {texts.metaType}
              </span>
              <span className="text-blue-500">•</span>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 ring-1 ring-blue-200">
                {texts.metaDateOct2025}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              {texts.heroTitle}
            </h1>

            {/* Meta strip */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-100 ring-1 ring-gray-200 flex items-center justify-center">
                <span className="text-xs font-semibold">FG</span>
              </div>
              <div className="font-medium">{texts.byline}</div>
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

            {/* LinkedIn Hook */}
            {texts.linkedinHookLong ? (
              <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
                {texts.linkedinHookLong}
              </div>
            ) : null}
          </div>
        </section>

        {/* Body */}
        <article className="mx-auto max-w-3xl px-6 py-10 md:py-14 text-gray-800">
          {/* TL;DR */}
          <section className="mb-10 rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              {texts.tldrTitle}
            </div>
            <ul className="space-y-2 text-[15px] leading-6">
              {texts.tldrPoints?.map((point: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>
          {/* Pull Quote */}
          {texts.pullQuote ? (
            <blockquote className="my-10 rounded-lg border-l-4 border-blue-500 bg-blue-50/60 p-5 text-blue-900">
              <p className="text-lg italic">“{texts.pullQuote}”</p>
            </blockquote>
          ) : null}
          {/* Why now */}
          <section className="prose prose-slate max-w-none">
            <h2 className="!mb-3">{texts.whyNowTitle}</h2>
            {texts.whyNowBody
              ?.split("\n\n")
              .filter(Boolean)
              .map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
          </section>
          {/* Metrics */}
          import Image from "next/image"; // ...
          {/* Global CX footprint */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">
              {texts.cxFootprintTitle}
            </h2>
            <p className="mt-3 text-gray-700">{texts.cxFootprintIntro}</p>

            {/* Imagem do gráfico - AGORA MENOR E CENTRALIZADA */}
            <div className="mt-6 flex justify-center">
              {" "}
              {/* Container para centralizar */}
              <figure className="max-w-sm w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <Image
                  src="/cx-failure-by-industry.png"
                  alt="Service failures and revenue loss by sector (Qualtrics XM Institute, 2024)"
                  width={1280}
                  height={720}
                  className="w-full h-auto object-contain bg-white"
                  priority={false}
                />
                <figcaption className="px-4 py-3 text-center text-sm text-gray-600 bg-gray-50">
                  {texts.fig1}
                </figcaption>
              </figure>
            </div>

            {texts.cxFootprintBody
              ?.split("\n")
              .filter(Boolean)
              .map((p: string, i: number) => (
                <p key={i} className="mt-4 text-gray-700">
                  {p}
                </p>
              ))}
          </section>
          {/* CX Footprint */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">
              {texts.cxFootprintTitle}
            </h2>
            <p className="mt-3 text-gray-700">{texts.cxFootprintIntro}</p>
            <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
              <strong className="block text-gray-800">Note:</strong>
              {texts.fig1}
            </div>
            {texts.cxFootprintBody
              ?.split("\n")
              .filter(Boolean)
              .map((p: string, i: number) => (
                <p key={i} className="mt-4 text-gray-700">
                  {p}
                </p>
              ))}
          </section>
          {/* Seven AI Plays */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">
              {texts.sevenPlaysTitle}
            </h2>

            <div className="mt-6 flex justify-center">
              {" "}
              {/* Container para centralizar */}
              <figure className="max-w-sm w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <Image
                  src="/seven-ai-plays.png"
                  alt="Diagram showing the seven AI plays that turn service into loyalty"
                  width={1280}
                  height={720}
                  className="w-full h-auto object-contain bg-white"
                  priority={false}
                />
                <figcaption className="px-4 py-3 text-center text-sm text-gray-600 bg-gray-50">
                  {texts.fig2}
                </figcaption>
              </figure>
            </div>

            <ol className="mt-6 space-y-4">
              {texts.sevenPlays?.map(
                (play: { title: string; body: string }, i: number) => (
                  <li
                    key={i}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                        {i + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {play.title}
                      </h3>
                    </div>
                    {play.body.includes("; ") || play.body.includes("•") ? (
                      <ul className="ml-10 mt-2 list-disc space-y-1 text-gray-700">
                        {play.body
                          .split(/•|; /g)
                          .map((s) => s.trim())
                          .filter(Boolean)
                          .map((s, idx) => (
                            <li key={idx}>{s}</li>
                          ))}
                      </ul>
                    ) : (
                      <p className="ml-10 text-gray-700">{play.body}</p>
                    )}
                  </li>
                )
              )}
            </ol>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">
              {texts.goodFeelsTitle}
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {texts.goodFeelsPoints?.map((point: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-500" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </section>
          {/* Conclusion */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">
              {texts.conclusionTitle}
            </h2>
            {texts.conclusionBody
              ?.split("\n\n")
              .filter(Boolean)
              .map((p: string, i: number) => (
                <p key={i} className="mt-3 text-gray-700">
                  {p}
                </p>
              ))}
          </section>
        </article>
      </main>
      <Footer t={t} language={language} setLanguage={setLanguage} />
    </>
  );
};

export default ArticlePageEN;
