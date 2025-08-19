import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Bot, 
  Clock, 
  TrendingDown, 
  BarChart3, 
  CreditCard, 
  RefreshCw, 
  Package, 
  Zap,
  CheckCircle,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'
import notrusLogo from './assets/notrus-logo.jpeg'

// Translation dictionary for Portuguese (pt) and English (en)
// The site defaults to English but can be switched via the language selector in the header.
// Each key maps to both language versions of the same phrase. When adding new
// copy to the site, add it here so it appears correctly in both languages.
const translations = {
  en: {
    navProduto: 'Product',
    navSio: 'IOS',
    navBenefits: 'Benefits',
    navContact: 'Contact',
    navDemo: 'Request Demo',
    heroBadge: '🚀 Revolutionize Your Customer Service',
    heroTitle1: 'Transform Your Customer Service with',
    heroTitle2: 'Intelligent AI Agents',
    heroSubtitle:
      'Automate processes, reduce operational costs and improve the customer experience with our conversational AI platform available 24/7',
    heroButton: 'Request Free Demo',
    chatUserMessage: 'Hello! I need to process a refund for order #12345',
    chatBotMessage:
      "Perfect! I've identified your order. The refund of R$ 299.90 will be processed automatically within 2 business days. Can I help with anything else?",
    whyTitle: 'Why choose Notrus?',
    whySubtitle:
      'Our platform provides complete solutions to transform your customer service',
    benefit1Title: 'Cost Reduction',
    benefit1Desc:
      'Up to 70% reduction in operational costs with intelligent automation',
    benefit2Title: '24/7 Support',
    benefit2Desc:
      'Full availability without interruptions, every day of the week',
    benefit3Title: 'Data Analysis',
    benefit3Desc:
      'Real-time insights for strategic decision-making',
    benefit4Title: 'Total Automation',
    benefit4Desc:
      'Fully automated processes without human intervention',
    sioBadge: 'Intelligent System',
    sioTitle: 'IOS - Intelligent Operations System',
    sioSubtitle:
      'Automate any action of your business with advanced artificial intelligence',
    feature1Title: 'Automated Payments',
    feature1Desc:
      'Process payments, charges and invoices automatically with total security',
    feature2Title: 'Smart Refunds',
    feature2Desc:
      'Automatic analysis of requests and instant processing of refunds',
    feature3Title: 'Returns Management',
    feature3Desc:
      'Coordinate product returns, reverse logistics and inventory restocking',
    feature4Title: 'Complete Integration',
    feature4Desc: 'Connect with your existing systems effortlessly',
    sioPanelTitle: 'IOS Control Panel',
    panel1Label: 'Processed Payments',
    panel2Label: 'Automatic Refunds',
    panel3Label: 'Managed Returns',
    panel4Label: 'Savings Generated',
    metricsTitle: 'Results that Impress',
    metric1Title: 'Cost Reduction',
    metric1Desc: 'Average savings in operational costs',
    metric2Title: 'Availability',
    metric2Desc: 'Uninterrupted support every day',
    metric3Title: 'Satisfaction',
    metric3Desc: 'Customer satisfaction rate',
    finalTitle: 'Ready to Revolutionize Your Service?',
    finalSubtitle:
      'Join the companies that have already transformed their operation with Notrus',
    finalButton: 'Request Free Demo',
    agentLabel: 'Notrus AI Agent',
    footerRights: '© 2025 Notrus. All rights reserved.',
    footerSubtitle: 'Transforming the future of customer service',
  },
  pt: {
    navProduto: 'Produto',
    navSio: 'IOS',
    navBenefits: 'Benefícios',
    navContact: 'Contato',
    navDemo: 'Solicitar Demo',
    heroBadge: '🚀 Revolucione seu Atendimento ao Cliente',
    heroTitle1: 'Transforme seu Atendimento com',
    heroTitle2: 'Agentes IA Inteligentes',
    heroSubtitle:
      'Automatize processos, reduza custos operacionais e melhore a experiência do cliente com nossa plataforma de IA conversacional disponível 24/7',
    heroButton: 'Solicitar Demo Gratuita',
    chatUserMessage:
      'Olá! Preciso processar um reembolso para o pedido #12345',
    chatBotMessage:
      'Perfeito! Já identifiquei seu pedido. O reembolso de R$ 299,90 será processado automaticamente em até 2 dias úteis. Posso ajudar com mais alguma coisa?',
    whyTitle: 'Por que escolher a Notrus?',
    whySubtitle:
      'Nossa plataforma oferece soluções completas para transformar seu atendimento ao cliente',
    benefit1Title: 'Redução de Custos',
    benefit1Desc:
      'Até 70% de redução nos custos operacionais com automação inteligente',
    benefit2Title: 'Atendimento 24/7',
    benefit2Desc:
      'Disponibilidade total sem interrupções, todos os dias da semana',
    benefit3Title: 'Análise de Dados',
    benefit3Desc:
      'Insights em tempo real para tomada de decisões estratégicas',
    benefit4Title: 'Automação Total',
    benefit4Desc:
      'Processos completamente automatizados sem intervenção humana',
    sioBadge: 'Sistema Inteligente',
    sioTitle: 'SIO - Sistema Inteligente de Operações',
    sioSubtitle:
      'Automatize qualquer ação do seu negócio com inteligência artificial avançada',
    feature1Title: 'Pagamentos Automatizados',
    feature1Desc:
      'Processe pagamentos, cobranças e faturas automaticamente com total segurança',
    feature2Title: 'Reembolsos Inteligentes',
    feature2Desc:
      'Análise automática de solicitações e processamento instantâneo de reembolsos',
    feature3Title: 'Gestão de Retornos',
    feature3Desc:
      'Coordene retornos de produtos, logística reversa e reposição de estoque',
    feature4Title: 'Integração Completa',
    feature4Desc:
      'Conecte-se com seus sistemas existentes sem complicações',
    sioPanelTitle: 'Painel de Controle IOS',
    panel1Label: 'Pagamentos Processados',
    panel2Label: 'Reembolsos Automáticos',
    panel3Label: 'Retornos Gerenciados',
    panel4Label: 'Economia Gerada',
    metricsTitle: 'Resultados que Impressionam',
    metric1Title: 'Redução de Custos',
    metric1Desc: 'Economia média nos custos operacionais',
    metric2Title: 'Disponibilidade',
    metric2Desc: 'Atendimento ininterrupto todos os dias',
    metric3Title: 'Satisfação',
    metric3Desc: 'Taxa de satisfação dos clientes',
    finalTitle: 'Pronto para Revolucionar seu Atendimento?',
    finalSubtitle:
      'Junte-se às empresas que já transformaram sua operação com a Notrus',
    finalButton: 'Solicitar Demo Gratuita',
    agentLabel: 'Agente IA Notrus',
    footerRights: '© 2025 Notrus. Todos os direitos reservados.',
    footerSubtitle: 'Transformando o futuro do atendimento ao cliente',
  },
}
import './App.css'
import CookieBanner from './CookieBanner'
import NotFound from './pages/NotFound'

function App() {
  // Track whether the mobile navigation is open
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Language state: 'en' for English (default) or 'pt' for Portuguese
  const [language, setLanguage] = useState(navigator.language.includes('en') ? 'en' : 'pt')
  // Helper to fetch the correct translation for a given key
  const t = (key) => {
    // Fallback to the key name itself if translation is missing
    return translations[language][key] ?? key
  }

    useEffect(() => {
    const userLang = navigator.language.includes('en') ? 'en' : 'pt';
    document.documentElement.lang = userLang;
  }, []);

  return (
    <Router>
      <Routes>
      <Route 
      path='/' 
      element={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={notrusLogo} alt="Notrus" className="h-10 w-10 rounded-lg" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Notrus
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#produto" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navProduto')}</a>
              <a href="#sio" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navSio')}</a>
              <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navBenefits')}</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navContact')}</a>
              <a href="mailto:contact@notrus.ai">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" >
                {t('navDemo')}
              </Button>
              </a>
              {/* Language selector for desktop */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">EN</option>
                <option value="pt">PT</option>
              </select>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#produto" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navProduto')}</a>
                <a href="#sio" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navSio')}</a>
                <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navBenefits')}</a>
                <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navContact')}</a>
                <a href="mailto:contact@notrus.ai">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full">
                  {t('navDemo')}
                </Button>
                </a>
                {/* Language selector for mobile */}
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="border border-gray-300 rounded-md px-2 py-2 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="en">EN</option>
                  <option value="pt">PT</option>
                </select>
              </div>
            </nav>
          )}
        </div>
      </header>

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

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={notrusLogo} alt="Notrus" className="h-8 w-8 rounded-lg" />
              <span className="text-xl font-bold">Notrus</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>{t('footerRights')}</p>
              <p className="mt-2">{t('footerSubtitle')}</p>
            </div>
          </div>
        </div>
      </footer>
      <CookieBanner appLang={language} />
    </div>
    }
    />
    <Route path="*" element={<NotFound appLang={language} />} />  
    </Routes>
  </Router>
  )
}

export default App

