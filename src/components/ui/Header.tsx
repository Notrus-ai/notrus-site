"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { redirect } from "next/navigation";

interface HeaderProps {
  t: (key: string) => string;
  setLanguage: (value: string) => void
  language: string;
}

export function Header({ t, setLanguage, language }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const productLink = `#${t('product')}`;
  const benefitsLink = `#${t('benefits')}`;
  const contactLink = `#${t('contact')}`;

  const handleToggle = (language: string) => {
    setLanguage(language)
    redirect(`/${language}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/notrus-logo-transparent.png"
            alt="Notrus"
            priority
            width={200}
            height={200}
            className="h-10 w-10 rounded-lg"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Notrus
          </span>
        </div>

        {/* Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href={productLink} className="text-gray-700 hover:text-blue-600">{t('navProduto')}</a>
          <a href="#sio" className="text-gray-700 hover:text-blue-600">{t('navSio')}</a>
          <a href={benefitsLink} className="text-gray-700 hover:text-blue-600">{t('navBenefits')}</a>
          <a href={contactLink} className="text-gray-700 hover:text-blue-600">{t('navContact')}</a>
          <a href="mailto:contact@notrus.ai" >
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">{t('navDemo')}</Button>
          </a>
          <select
            value={language}
            onChange={(e) => handleToggle(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </select>
        </nav>

        {/* Mobile */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 px-4 flex flex-col space-y-4">
          <a href="#produto" className="text-gray-700 hover:text-blue-600">{t('navProduto')}</a>
          <a href="#sio" className="text-gray-700 hover:text-blue-600">{t('navSio')}</a>
          <a href="#beneficios" className="text-gray-700 hover:text-blue-600">{t('navBenefits')}</a>
          <a href="#contato" className="text-gray-700 hover:text-blue-600">{t('navContact')}</a>
          <a href="mailto:contact@notrus.ai">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 w-full">{t('navDemo')}</Button>
          </a>
          <select
            value={language}
            onChange={(e) => handleToggle(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-2 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </select>
        </nav>
      )}
    </header>
  );
}
