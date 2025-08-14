import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Product from "./pages/Product"
import Sio from "./pages/Sio"
import Benefits from './pages/Benefits'
import Contact from './pages/Contact'
import notrusLogo from './assets/notrus-logo.jpeg'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X } from 'lucide-react'
import './App.css'
import CookieBanner from "./components/cookiebanner"
import CookiePolicy from './pages/CookiePolicy'

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

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(navigator.language.includes('en') ? 'en' : 'pt');
  const t = (key) => translations[language][key] ?? key;

  useEffect(() => {
    const userLang = navigator.language.includes('en') ? 'en' : 'pt';
    document.documentElement.lang = userLang;
  }, []);

  return (
    <BrowserRouter>
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
                <Link to="/#produto" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navProduto')}</Link>
                <Link to="/#sio" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navSio')}</Link>
                <Link to="/#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navBenefits')}</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navContact')}</Link>
                <Link to="mailto:contact@notrus.ai">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" >
                    {t('navDemo')}
                  </Button>
                </Link>
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
                <Link to="/#produto" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navProduto')}</Link>
                <Link to="/#sio" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navSio')}</Link>
                <Link to="/#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navBenefits')}</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navContact')}</Link>
                <Link to="mailto:contact@notrus.ai">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" >
                    {t('navDemo')}
                  </Button>
                </Link>
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

        {/* Conteúdo principal controlado pelo React Router */}
        <Routes>
          <Route path="/" element={<Home t={t} notrusLogo={notrusLogo} />} />
          <Route path="*" element={<NotFound />} />          
          <Route path="/product" element={<Product t={t} notrusLogo={notrusLogo} />} />
          <Route path="/sio" element={<Sio t={t} notrusLogo={notrusLogo} />} />
          <Route path="/benefits" element={<Benefits t={t} notrusLogo={notrusLogo} />} />
          <Route path="/contact" element={<Contact t={t} notrusLogo={notrusLogo} />} />
          <Route path="/politica-de-cookies" element={<CookiePolicy/>}/>      
        </Routes>

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
        <CookieBanner />
      </div>
    </BrowserRouter>
  )
}

export default App