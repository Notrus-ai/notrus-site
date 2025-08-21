import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
    MessageCircle,
    Clock,
    CheckCircle,
    Star,
    ArrowRight,
    Package,
    Calendar,
    Shield,
    Zap,
    Users,
    TrendingUp
} from 'lucide-react'

export default function PosVenda() {
    const useCases = [
        {
            icon: Package,
            title: 'Status de Pedido',
            description: 'Atualizações automáticas sobre entrega, separação e envio',
            example: '"Seu pedido #1234 saiu para entrega e chegará em 2 horas"'
        },
        {
            icon: Shield,
            title: 'Garantia e Suporte',
            description: 'Orientações sobre garantia, troca e devolução',
            example: '"Sua garantia vence em 30 dias. Precisa de ajuda com algum problema?"'
        },
        {
            icon: Calendar,
            title: 'Reagendamento',
            description: 'Facilite reagendamentos de entrega e serviços',
            example: '"Não estará em casa? Reagende sua entrega para outro horário"'
        },
        {
            icon: Star,
            title: 'Avaliação e Feedback',
            description: 'Colete avaliações e melhore a experiência',
            example: '"Como foi sua experiência? Avalie nosso atendimento de 1 a 5"'
        }
    ]

    const benefits = [
        {
            icon: Clock,
            title: 'Resposta Instantânea',
            description: 'Clientes recebem informações imediatamente, 24/7'
        },
        {
            icon: Users,
            title: 'Redução de Chamados',
            description: 'Diminua em 80% as ligações para o SAC'
        },
        {
            icon: TrendingUp,
            title: 'Aumento da Satisfação',
            description: 'Clientes mais satisfeitos com atendimento proativo'
        },
        {
            icon: Zap,
            title: 'Automação Completa',
            description: 'Integração com sistemas de pedidos e CRM'
        }
    ]

    const testimonials = [
        {
            company: 'E-commerce Fashion',
            sector: 'Varejo Online',
            result: '90% menos chamados sobre status de pedido',
            quote: 'Nossos clientes adoram receber atualizações automáticas. Reduziu drasticamente as ligações para o SAC.',
            author: 'Marina Oliveira',
            position: 'Gerente de Customer Success'
        },
        {
            company: 'Imobiliária Prime',
            sector: 'Imobiliário',
            result: '95% de satisfação no pós-venda',
            quote: 'Automatizamos todo o acompanhamento pós-venda. Clientes recebem lembretes de vistoria, documentação e muito mais.',
            author: 'Carlos Mendes',
            position: 'Diretor Comercial'
        },
        {
            company: 'TelecomMax',
            sector: 'Telecomunicações',
            result: '70% redução no tempo de resolução',
            quote: 'Problemas técnicos são resolvidos mais rápido com diagnósticos automáticos via WhatsApp.',
            author: 'Ana Santos',
            position: 'Head de Operações'
        }
    ]

    const stats = [
        { number: '80%', label: 'Redução em chamados SAC' },
        { number: '24h', label: 'Disponibilidade total' },
        { number: '95%', label: 'Satisfação dos clientes' },
        { number: '3x', label: 'Mais engajamento' }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Seu cliente nunca mais ficará sem resposta
                            </h1>
                            <p className="text-xl mb-8 text-purple-100">
                                Automatize todo o pós-venda com atualizações inteligentes sobre pedidos,
                                garantia, reagendamentos e muito mais via WhatsApp.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-600 hover:text-white">
                                    Teste grátis no WhatsApp
                                    <MessageCircle className="ml-2 h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="text-purple-600 hover:bg-purple-600 hover:text-white">
                                    Ver casos práticos
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/S9NjOOls5RCE.png"
                                alt="Customer Service Structure"
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Casos práticos de automação
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Veja como nossa IA pode transformar seu pós-venda
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCases.map((useCase, index) => {
                            const IconComponent = useCase.icon
                            return (
                                <Card key={index} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="flex items-center space-x-3">
                                            <div className="bg-purple-100 p-3 rounded-lg">
                                                <IconComponent className="h-6 w-6 text-purple-600" />
                                            </div>
                                            <CardTitle className="text-xl">{useCase.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-600 mb-4">
                                            {useCase.description}
                                        </CardDescription>
                                        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
                                            <p className="text-sm text-green-800 italic">
                                                {useCase.example}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Benefícios para seu negócio
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transforme problemas em oportunidades de fidelização
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon
                            return (
                                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="mx-auto bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                            <IconComponent className="h-8 w-8 text-purple-600" />
                                        </div>
                                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-600">
                                            {benefit.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Resultados comprovados
                        </h2>
                        <p className="text-xl text-gray-600">
                            Empresas que transformaram seu pós-venda
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="h-full">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="secondary">{testimonial.sector}</Badge>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                    <CardTitle className="text-lg">{testimonial.company}</CardTitle>
                                    <div className="text-2xl font-bold text-purple-600">
                                        {testimonial.result}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <blockquote className="text-gray-600 mb-4 italic">
                                        {testimonial.quote}
                                    </blockquote>
                                    <div className="border-t pt-4">
                                        <div className="font-semibold">{testimonial.author}</div>
                                        <div className="text-sm text-gray-500">{testimonial.position}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Integração completa com seus sistemas
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Nossa plataforma se conecta com os principais sistemas do mercado
                                para automatizar todo o fluxo de pós-venda.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                                    <span className="text-gray-700">Integração com e-commerce (Shopify, WooCommerce, Magento)</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                                    <span className="text-gray-700">Conexão com CRM (Salesforce, HubSpot, Pipedrive)</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                                    <span className="text-gray-700">APIs de transportadoras (Correios, Loggi, Total Express)</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                                    <span className="text-gray-700">Sistemas de gestão (ERP, WMS, OMS)</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/FwmduIfvIOaf.webp"
                                alt="Telecom Customer Support"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-purple-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Pronto para automatizar seu pós-venda?
                    </h2>
                    <p className="text-xl mb-8 text-purple-100">
                        Teste gratuitamente por 14 dias e veja como seus clientes ficam mais satisfeitos
                    </p>

                    <Card className="max-w-md mx-auto">
                        <CardHeader>
                            <CardTitle>Teste grátis por 14 dias</CardTitle>
                            <CardDescription>
                                Configure em 5 minutos e comece a automatizar hoje mesmo
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="name">Nome completo</Label>
                                <Input id="name" placeholder="Seu nome" />
                            </div>
                            <div>
                                <Label htmlFor="email">E-mail</Label>
                                <Input id="email" type="email" placeholder="seu@email.com" />
                            </div>
                            <div>
                                <Label htmlFor="company">Empresa</Label>
                                <Input id="company" placeholder="Nome da empresa" />
                            </div>
                            <div>
                                <Label htmlFor="sector">Setor</Label>
                                <select className="w-full p-2 border rounded-md">
                                    <option>Selecione seu setor</option>
                                    <option>E-commerce/Varejo</option>
                                    <option>Imobiliário</option>
                                    <option>Telecomunicações</option>
                                    <option>Serviços</option>
                                    <option>Outro</option>
                                </select>
                            </div>
                            <Button className="w-full bg-purple-600 hover:bg-purple-700">
                                Começar teste grátis
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <p className="text-xs  text-center">
                                Sem compromisso • Cancele quando quiser
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}

