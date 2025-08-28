"use client";

import { Badge } from "./badge";
import { Button } from "./button";
import { Bot, ArrowRight } from "lucide-react";

interface HeroSectionProps {
    t: (key: string) => string;
}

export function HeroSection({ t }: HeroSectionProps) {
    return (
        <section id={t('product')} className="py-20 px-4 text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800">{t('heroBadge')}</Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                {t('heroTitle1')} {t('heroTitle2')}                
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                {t('heroSubtitle')}
            </p>

            <a href="mailto:contact@notrus.ai">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-lg px-8 py-4 text-white">
                    {t('heroButton')}
                    <ArrowRight className="ml-2" size={20} />
                </Button>
            </a>

            <div className="relative max-w-4xl mx-auto mt-12">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                    <div className="bg-white rounded-xl p-6 space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <Bot className="text-white" size={16} />
                            </div>
                            <span className="font-semibold text-gray-800">{t('agentLabel')}</span>
                            <Badge className="bg-green-100 text-green-800">Online</Badge>
                        </div>
                        <div className="space-y-3 text-left">
                            <div className="bg-gray-100 rounded-lg p-3">
                                <p className="text-gray-700">{t('chatUserMessage')}</p>
                            </div>
                            <div className="bg-blue-500 text-white rounded-lg p-3 ml-8">
                                <p>{t('chatBotMessage')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
