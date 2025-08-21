
"use client";

import { useState } from 'react';

import Benefits from '@/components/ui/Benefits';
import Cta from '@/components/ui/Cta';
import Footer from '@/components/ui/Footer';
import { Header } from '@/components/ui/Header';
import { HeroSection } from '@/components/ui/HeroSection';
import { CookieBanner } from '@/components/ui/CookieBanner';
import Metrics from '@/components/ui/Metrics';
import SIO from '@/components/ui/SIO';
import { translations } from '@/utils/translations';

export default function Home() {

  const t = (key: string) => {
    return translations['pt'][key] ?? key
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header t={t} />
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
