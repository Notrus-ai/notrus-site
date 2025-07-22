import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
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
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
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
              <a href="#produto" className="text-gray-700 hover:text-blue-600 transition-colors">Produto</a>
              <a href="#sio" className="text-gray-700 hover:text-blue-600 transition-colors">SIO</a>
              <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">Benefícios</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Solicitar Demo
              </Button>
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
                <a href="#produto" className="text-gray-700 hover:text-blue-600 transition-colors">Produto</a>
                <a href="#sio" className="text-gray-700 hover:text-blue-600 transition-colors">SIO</a>
                <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">Benefícios</a>
                <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full">
                  Solicitar Demo
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            🚀 Revolucione seu Atendimento ao Cliente
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Transforme seu Atendimento com 
            <span className="block">Agentes IA Inteligentes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Automatize processos, reduza custos operacionais e melhore a experiência do cliente 
            com nossa plataforma de IA conversacional disponível 24/7
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
              Solicitar Demo Gratuita
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Ver Como Funciona
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Bot className="text-white" size={16} />
                  </div>
                  <span className="font-semibold text-gray-800">Agente IA Notrus</span>
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </div>
                <div className="space-y-3 text-left">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-gray-700">Olá! Preciso processar um reembolso para o pedido #12345</p>
                  </div>
                  <div className="bg-blue-500 text-white rounded-lg p-3 ml-8">
                    <p>Perfeito! Já identifiquei seu pedido. O reembolso de R$ 299,90 será processado automaticamente em até 2 dias úteis. Posso ajudar com mais alguma coisa?</p>
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
              Por que escolher a Notrus?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa plataforma oferece soluções completas para transformar seu atendimento ao cliente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-900">Redução de Custos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Até 70% de redução nos custos operacionais com automação inteligente</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-900">Atendimento 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Disponibilidade total sem interrupções, todos os dias da semana</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-900">Análise de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Insights em tempo real para tomada de decisões estratégicas</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-900">Automação Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Processos completamente automatizados sem intervenção humana</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção SIO */}
      <section id="sio" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Sistema Inteligente</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              SIO - Sistema Inteligente de Operações
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automatize qualquer ação do seu negócio com inteligência artificial avançada
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Pagamentos Automatizados</h3>
                  <p className="text-gray-600">Processe pagamentos, cobranças e faturas automaticamente com total segurança</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Reembolsos Inteligentes</h3>
                  <p className="text-gray-600">Análise automática de solicitações e processamento instantâneo de reembolsos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Gestão de Retornos</h3>
                  <p className="text-gray-600">Coordene retornos de produtos, logística reversa e reposição de estoque</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Integração Completa</h3>
                  <p className="text-gray-600">Conecte-se com seus sistemas existentes sem complicações</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Painel de Controle SIO</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm text-gray-700">Pagamentos Processados</span>
                      <Badge className="bg-green-100 text-green-800">1,247</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-gray-700">Reembolsos Automáticos</span>
                      <Badge className="bg-blue-100 text-blue-800">89</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm text-gray-700">Retornos Gerenciados</span>
                      <Badge className="bg-purple-100 text-purple-800">156</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm text-gray-700">Economia Gerada</span>
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
            Resultados que Impressionam
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                70%
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Redução de Custos</h3>
              <p className="text-gray-600">Economia média nos custos operacionais</p>
            </div>
            
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                24/7
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Disponibilidade</h3>
              <p className="text-gray-600">Atendimento ininterrupto todos os dias</p>
            </div>
            
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                95%
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Satisfação</h3>
              <p className="text-gray-600">Taxa de satisfação dos clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto para Revolucionar seu Atendimento?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Junte-se às empresas que já transformaram sua operação com a Notrus
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            Solicitar Demo Gratuita
            <ArrowRight className="ml-2" size={20} />
          </Button>
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
              <p>&copy; 2025 Notrus. Todos os direitos reservados.</p>
              <p className="mt-2">Transformando o futuro do atendimento ao cliente</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

