"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { privacyTexts, Language, PrivacyTexts } from "@/utils/translations";

interface LanguageButtonProps {
  language: Language;
  currentLanguage: Language;
  onClick: (lang: Language) => void;
  children: React.ReactNode;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({
  language,
  currentLanguage,
  onClick,
  children,
}) => (
  <button
    className={`px-4 py-2 border-2 border-blue-500 rounded-md font-semibold transition-all duration-200 ${
      currentLanguage === language
        ? "bg-blue-500 text-white"
        : "bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white"
    }`}
    onClick={() => onClick(language)}
  >
    {children}
  </button>
);

interface ListItemProps {
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ children }) => (
  <li className="relative">
    <span className="absolute -left-6 text-blue-500">•</span>
    {children}
  </li>
);

interface SectionProps {
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  isLast = false,
}) => (
  <section
    className={`mb-10 ${!isLast ? "pb-6 border-b border-gray-200" : ""}`}
  >
    <h2 className="text-gray-700 text-2xl font-semibold mt-8 mb-6 pl-4 border-l-4 border-blue-500">
      {title}
    </h2>
    {children}
  </section>
);

const PrivacyPolicy: React.FC = () => {
  const [language, setLanguage] = useState<Language>("en");
  const texts: PrivacyTexts = privacyTexts[language];

  useEffect(() => {
    setLanguage("en");
  }, []);

  const handleLanguageChange = (lang: Language): void => {
    if (lang === "pt") {
      window.location.href = "/pt/politica-privacidade";
    } else {
      setLanguage(lang);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans leading-relaxed text-gray-800 bg-gray-50 min-h-screen">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <LanguageButton
            language="pt"
            currentLanguage={language}
            onClick={handleLanguageChange}
          >
            PT
          </LanguageButton>
          <LanguageButton
            language="en"
            currentLanguage={language}
            onClick={handleLanguageChange}
          >
            EN
          </LanguageButton>
        </div>

        <h1 className="text-gray-900 text-3xl md:text-4xl font-bold border-b-4 border-blue-500 pb-4 mb-4 text-center">
          {texts.title}
        </h1>

        <p className="italic text-gray-600 text-center mb-10 text-lg">
          {texts.lastUpdated}
        </p>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-lg mb-10 text-lg space-y-4">
          <p>{texts.introPart1}</p>
          <p>{texts.introPart2}</p>
        </div>

        {/* Section 1: Information We Collect */}
        <Section title={texts.sections.informationWeCollect.title}>
          <h3 className="text-gray-600 text-xl font-semibold mt-6 mb-4">
            {texts.sections.informationWeCollect.directInfo.subtitle}
          </h3>
          <ul className="pl-8 mb-4 space-y-3 list-inside">
            {texts.sections.informationWeCollect.directInfo.items?.map(
              (item, index) => (
                <ListItem key={index}>{item}</ListItem>
              )
            )}
          </ul>

          <h3 className="text-gray-600 text-xl font-semibold mt-6 mb-4">
            {texts.sections.informationWeCollect.automaticInfo.subtitle}
          </h3>
          <ul className="pl-8 mb-4 space-y-3 list-inside">
            {texts.sections.informationWeCollect.automaticInfo.items?.map(
              (item, index) => (
                <ListItem key={index}>{item}</ListItem>
              )
            )}
          </ul>

          <h3 className="text-gray-600 text-xl font-semibold mt-6 mb-4">
            {texts.sections.informationWeCollect.usageData.subtitle}
          </h3>
          <p className="mb-4">
            {texts.sections.informationWeCollect.usageData.content}
          </p>
        </Section>

        {/* Section 2: How We Use */}
        <Section title={texts.sections.howWeUse.title}>
          <ul className="pl-8 mb-4 space-y-3">
            {texts.sections.howWeUse.items.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </ul>
        </Section>

        {/* Section 3: Data Sharing */}
        <Section title={texts.sections.dataSharing.title}>
          <p className="mb-4">{texts.sections.dataSharing.intro}</p>
          <ul className="pl-8 mb-4 space-y-3">
            {texts.sections.dataSharing.items.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </ul>
          <p className="mt-4">{texts.sections.dataSharing.footer}</p>
        </Section>

        {/* Section 4: Data Security and Retention */}
        <Section title={texts.sections.retentionSecurity.title}>
          <ul className="pl-8 mb-4 space-y-3">
            {texts.sections.retentionSecurity.items.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </ul>
        </Section>

        {/* Section 5: Your Rights */}
        <Section title={texts.sections.yourRights.title}>
          <p className="mb-4">{texts.sections.yourRights.intro}</p>
          <ul className="pl-8 mb-4 space-y-3">
            {texts.sections.yourRights.items.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </ul>
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg my-6 text-center">
            <p className="m-0 font-medium">
              {texts.sections.yourRights.contact}
            </p>
          </div>
        </Section>

        {/* Section 6: Cookies and Tracking Technologies */}
        <Section title={texts.sections.cookies.title}>
          <p className="mb-4">{texts.sections.cookies.intro}</p>
          <ul className="pl-8 mb-4 space-y-3">
            {texts.sections.cookies.items.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </ul>
          <p className="mt-4">{texts.sections.cookies.footer}</p>
        </Section>

        {/* Section 7: International Data Transfers */}
        <Section title={texts.sections.internationalTransfers.title}>
          <p>{texts.sections.internationalTransfers.content}</p>
        </Section>

        {/* Section 8: Changes to This Policy */}
        <Section title={texts.sections.policyChanges.title}>
          <p>{texts.sections.policyChanges.content}</p>
        </Section>

        {/* Section 9: Contact Information */}
        <Section title={texts.sections.contact.title} isLast>
          <div className="bg-gray-50 p-2 rounded-lg border-l-4 border-blue-500 space-y-4">
            {texts.sections.contact.generalEmail && (
              <p className="my-1 text-lg">
                <strong>Contact:</strong> {texts.sections.contact.generalEmail}
              </p>
            )}
            {texts.sections.contact.address && (
              <p className="my-1 text-lg">
                <strong>Address:</strong> {texts.sections.contact.address}
              </p>
            )}
            <p className="my-1 text-lg">
              <strong>Website:</strong>{" "}
              <Link
                href={texts.sections.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-medium hover:underline"
              >
                {texts.sections.contact.website}
              </Link>
            </p>
          </div>
        </Section>

        <div className="text-center mt-12 pt-8 border-t-2 border-gray-200">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            {texts.navigation.backToHome}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
