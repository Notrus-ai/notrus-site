"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  t: (key: string) => string;
}

export function Header({ t }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/notrus-logo.jpeg"
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
          <a href="#produto" className="text-gray-700 hover:text-blue-600">{t('navProduto')}</a>
          <a href="#sio" className="text-gray-700 hover:text-blue-600">{t('navSio')}</a>
          <a href="#beneficios" className="text-gray-700 hover:text-blue-600">{t('navBenefits')}</a>
          <a href="#contato" className="text-gray-700 hover:text-blue-600">{t('navContact')}</a>
          <a href="mailto:contact@notrus.ai">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">{t('navDemo')}</Button>
          </a>
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
        </nav>
      )}
    </header>
  );
}
