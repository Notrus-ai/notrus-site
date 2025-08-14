import React from "react";
import { Badge } from "@/components/ui/badge.jsx"
import { Button } from "@/components/ui/button.jsx";
import { ArrowRight, Bot, TrendingDown, Clock, BarChart3, Zap, CreditCard, RefreshCw, Package, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";


function Home({t, notrusLogo}){

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

    return (
        <>
        {/* Hero Section */}
        <section id= "produto" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            {t('heroBadge')}
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            {t('heroTitle1')}
            <span className="block">{t('heroTitle2')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="mailto:contact@notrus.ai">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
              {t('heroButton')}
              <ArrowRight className="ml-2" size={20} />
            </Button>
            </a>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
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
        </div>
      </section>

    {/* Benefícios Principais */}
      <section id="beneficios" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t('whyTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('whySubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-900">{t('benefit1Title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('benefit1Desc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-900">{t('benefit2Title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('benefit2Desc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-900">{t('benefit3Title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('benefit3Desc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-900">{t('benefit4Title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('benefit4Desc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção SIO */}
      <section id="sio" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">{t('sioBadge')}</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t('sioTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('sioSubtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{t('feature1Title')}</h3>
                  <p className="text-gray-600">{t('feature1Desc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{t('feature2Title')}</h3>
                  <p className="text-gray-600">{t('feature2Desc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{t('feature3Title')}</h3>
                  <p className="text-gray-600">{t('feature3Desc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{t('feature4Title')}</h3>
                  <p className="text-gray-600">{t('feature4Desc')}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">{t('sioPanelTitle')}</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm text-gray-700">{t('panel1Label')}</span>
                      <Badge className="bg-green-100 text-green-800">1,247</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-gray-700">{t('panel2Label')}</span>
                      <Badge className="bg-blue-100 text-blue-800">89</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm text-gray-700">{t('panel3Label')}</span>
                      <Badge className="bg-purple-100 text-purple-800">156</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm text-gray-700">{t('panel4Label')}</span>
                      <Badge className="bg-orange-100 text-orange-800">R$ 45.230</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            {t('metricsTitle')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                70%
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('metric1Title')}</h3>
              <p className="text-gray-600">{t('metric1Desc')}</p>
            </div>
            
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                24/7
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('metric2Title')}</h3>
              <p className="text-gray-600">{t('metric2Desc')}</p>
            </div>
            
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                95%
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('metric3Title')}</h3>
              <p className="text-gray-600">{t('metric3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('finalTitle')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('finalSubtitle')}
          </p>
          <a href="mailto:contact@notrus.ai">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            {t('finalButton')}
            <ArrowRight className="ml-2" size={20} />
          </Button>
          </a>
        </div>
      </section>
      </>
    )

}
export default Home