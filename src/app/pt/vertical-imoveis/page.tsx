import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
    Building,
    MessageSquare,
    Calendar,
    FileText,
    Key,
    ArrowRight,
    Clock,
    Users,
    TrendingUp,
    CheckCircle,
    Home,
} from 'lucide-react'

export default function VerticalImoveis() {
    const solutions = [
        {
            icon: MessageSquare,
            title: 'Atendimento Inicial',
            description: 'Qualifique leads automaticamente e agende visitas',
            features: [
                'Qualificação automática de interessados',
                'Agendamento de visitas online',
                'Informações sobre imóveis disponíveis',
                'Cálculo de financiamento automático'
            ]
        },
        {
            icon: Calendar,
            title: 'Gestão de Visitas',
            description: 'Automatize agendamentos e confirmações',
            features: [
                'Confirmação automática de visitas',
                'Lembretes para clientes e corretores',
                'Reagendamento facilitado',
                'Feedback pós-visita'
            ]
        },
        {
            icon: FileText,
            title: 'Documentação',
            description: 'Acompanhe todo o processo de documentação',
            features: [
                'Status de documentos pendentes',
                'Lembretes de vencimentos',
                'Orientações sobre documentação',
                'Agendamento de assinaturas'
            ]
        },
        {
            icon: Key,
            title: 'Pós-Venda',
            description: 'Mantenha contato após a venda',
            features: [
                'Acompanhamento de entrega de chaves',
                'Suporte pós-mudança',
                'Pesquisas de satisfação',
                'Indicações e referências'
            ]
        }
    ]

    const benefits = [
        {
            icon: Clock,
            title: 'Atendimento 24h',
            description: 'Capture leads mesmo fora do horário comercial',
            stat: '3x mais leads'
        },
        {
            icon: Users,
            title: 'Mais Produtividade',
            description: 'Corretores focam em vendas, não em tarefas repetitivas',
            stat: '50% mais vendas'
        },
        {
            icon: TrendingUp,
            title: 'Maior Conversão',
            description: 'Acompanhamento personalizado aumenta fechamentos',
            stat: '40% mais conversões'
        },
        {
            icon: Building,
            title: 'Gestão Completa',
            description: 'Controle total do pipeline de vendas',
            stat: '90% menos retrabalho'
        }
    ]

    const testimonials = [
        {
            company: 'Construtora Horizonte',
            result: '200% aumento em leads qualificados',
            quote: 'A automação nos permitiu atender interessados 24h por dia. Nossos corretores agora focam apenas em visitas e fechamentos.',
            author: 'Ricardo Almeida',
            position: 'Diretor Comercial',
            units: '500+ unidades vendidas'
        },
        {
            company: 'Imobiliária Premium',
            result: '60% redução no tempo de venda',
            quote: 'O acompanhamento automático dos clientes revolucionou nossa operação. Ninguém mais fica sem resposta.',
            author: 'Fernanda Costa',
            position: 'Gerente de Vendas',
            units: '300+ imóveis/ano'
        },
        {
            company: 'Grupo Residencial',
            result: '85% satisfação dos clientes',
            quote: 'Desde a primeira visita até a entrega das chaves, tudo é acompanhado automaticamente. Clientes adoram!',
            author: 'Paulo Mendes',
            position: 'CEO',
            units: '1000+ famílias atendidas'
        }
    ]

    const useCases = [
        {
            scenario: 'Lead interessado em apartamento',
            automation: 'IA qualifica o perfil, envia plantas e agenda visita automaticamente'
        },
        {
            scenario: 'Cliente visitou o imóvel',
            automation: 'Envia proposta personalizada e acompanha negociação'
        },
        {
            scenario: 'Documentação em andamento',
            automation: 'Lembretes automáticos sobre documentos pendentes'
        },
        {
            scenario: 'Entrega das chaves',
            automation: 'Coordena entrega e coleta feedback de satisfação'
        }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-orange-100 text-orange-800 mb-4">
                                Solução Especializada para Imobiliário
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Automatize o atendimento de clientes de imóveis — 24h por dia
                            </h1>
                            <p className="text-xl mb-8 text-orange-100">
                                Da captação de leads até a entrega das chaves, nossa IA especializada
                                em imobiliário automatiza todo o processo de vendas e pós-venda.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-white hover:bg-orange-600 text-orange-600 hover:text-white">
                                    Veja como funciona para sua empresa
                                    <Building className="ml-2 h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-orange-600 hover:bg-orange-600 hover:text-white">
                                    Agendar demonstração
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/VTt9SKvyq5ON.jpeg"
                                alt="Real Estate Automation"
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Resultados do setor imobiliário
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">3x</div>
                            <div className="text-gray-600">Mais leads qualificados</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">50%</div>
                            <div className="text-gray-600">Mais vendas por corretor</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">40%</div>
                            <div className="text-gray-600">Maior taxa de conversão</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24h</div>
                            <div className="text-gray-600">Atendimento disponível</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Soluções para cada etapa da venda
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Automatize desde o primeiro contato até a entrega das chaves
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => {
                            const IconComponent = solution.icon
                            return (
                                <Card key={index} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="flex items-center space-x-3">
                                            <div className="bg-orange-100 p-3 rounded-lg">
                                                <IconComponent className="h-6 w-6 text-orange-600" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl">{solution.title}</CardTitle>
                                                <CardDescription>{solution.description}</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {solution.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center space-x-2">
                                                    <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                                                    <span className="text-sm text-gray-600">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Como funciona na prática
                        </h2>
                        <p className="text-xl text-gray-600">
                            Veja exemplos reais de automação no dia a dia
                        </p>
                    </div>

                    <div className="space-y-8">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="flex items-center space-x-8 p-6 bg-gray-50 rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {useCase.scenario}
                                    </h3>
                                    <p className="text-gray-600">
                                        {useCase.automation}
                                    </p>
                                </div>
                                <ArrowRight className="h-6 w-6 text-orange-600" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Benefícios para imobiliárias
                        </h2>
                        <p className="text-xl text-gray-600">
                            Resultados comprovados no setor imobiliário
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon
                            return (
                                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="mx-auto bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                            <IconComponent className="h-8 w-8 text-orange-600" />
                                        </div>
                                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                                        <div className="text-2xl font-bold text-orange-600">{benefit.stat}</div>
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
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Cases de sucesso no imobiliário
                        </h2>
                        <p className="text-xl text-gray-600">
                            Empresas que transformaram suas vendas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="h-full">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="secondary">Imobiliário</Badge>
                                        <Home className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-lg">{testimonial.company}</CardTitle>
                                    <div className="text-2xl font-bold text-orange-600 mb-2">
                                        {testimonial.result}
                                    </div>
                                    <div className="text-sm text-gray-500">{testimonial.units}</div>
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

            {/* CTA Section */}
            <section className="py-20 bg-orange-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Pronto para revolucionar suas vendas?
                    </h2>
                    <p className="text-xl mb-8 text-orange-100">
                        Agende uma demonstração personalizada para o setor imobiliário
                    </p>

                    <Card className="max-w-md mx-auto">
                        <CardHeader>
                            <CardTitle>Demonstração personalizada</CardTitle>
                            <CardDescription>
                                Veja a solução funcionando com dados do seu negócio
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
                                <Label htmlFor="company">Empresa/Imobiliária</Label>
                                <Input id="company" placeholder="Nome da empresa" />
                            </div>
                            <div>
                                <Label htmlFor="role">Cargo</Label>
                                <select className="w-full p-2 border rounded-md">
                                    <option>Selecione seu cargo</option>
                                    <option>Diretor/CEO</option>
                                    <option>Gerente Comercial</option>
                                    <option>Corretor</option>
                                    <option>Coordenador de Vendas</option>
                                    <option>Outro</option>
                                </select>
                            </div>
                            <div>
                                <Label htmlFor="volume">Vendas por mês</Label>
                                <select className="w-full p-2 border rounded-md">
                                    <option>Selecione o volume</option>
                                    <option>1-10 imóveis</option>
                                    <option>11-50 imóveis</option>
                                    <option>51-100 imóveis</option>
                                    <option>100+ imóveis</option>
                                </select>
                            </div>
                            <Button className="w-full bg-orange-600 hover:bg-orange-700">
                                Agendar demonstração
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}

