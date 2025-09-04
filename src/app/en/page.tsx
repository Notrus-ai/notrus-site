
"use client";

import { useEffect, useState } from 'react';

import Benefits from '@/components/ui/Benefits';
import Cta from '@/components/ui/Cta';
import Footer from '@/components/ui/Footer';
import { Header } from '@/components/ui/HeaderEN';
import { HeroSection } from '@/components/ui/HeroSection';
import { CookieBanner } from '@/components/ui/CookieBanner';
import Metrics from '@/components/ui/Metrics';
import SIO from '@/components/ui/SIO';
import { translations } from '@/utils/translations';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  // Initialize with default value that matches server rendering
  const [language, setLanguage] = useState<'pt' | 'en'>('en');

  // Update language after component mounts (client-side only)
  useEffect(() => {
    const detectedLanguage = pathname.includes('/en') ? 'en' : 'pt';
    setLanguage(detectedLanguage);
  }, [pathname]);

  const t = (key: string) => {
    const translation = translations[language as keyof typeof translations];
    return (translation as Record<string, string>)[key] ?? key;
  }

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as 'pt' | 'en');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header t={t} setLanguage={handleLanguageChange} language={language} />
      <HeroSection t={t} />
      <Benefits t={t} />
      <SIO t={t} />
      <Metrics t={t} />
      <Cta t={t} />
      <Footer t={t} />
      <CookieBanner appLang="en" privacyPolicyUrl="/cookie-policy" />
    </div>
  );
}
