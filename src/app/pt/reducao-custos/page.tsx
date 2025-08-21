'use client';

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import {
    ArrowRight,
    BarChart3,
    Calculator,
    Clock,
    DollarSign,
    PieChart,
    Target,
    TrendingDown,
    Users
} from 'lucide-react'
import { useState } from 'react'

export default function ReducaoCustos() {
    const [atendimentos, setAtendimentos] = useState([1000])
    const [custoAtendimento, setCustoAtendimento] = useState([15])

    const custoMensal = atendimentos[0] * custoAtendimento[0]
    const economiaMensal = custoMensal * 0.5
    const economiaAnual = economiaMensal * 12

    const comparisons = [
        {
            aspect: 'Custo por atendimento',
            tradicional: 'R$ 15-25',
            notrus: 'R$ 3-8',
            economia: '70%'
        },
        {
            aspect: 'Tempo de resposta',
            tradicional: '5-15 min',
            notrus: 'Instantâneo',
            economia: '95%'
        },
        {
            aspect: 'Disponibilidade',
            tradicional: '8h/dia',
            notrus: '24h/dia',
            economia: '200%'
        },
        {
            aspect: 'Capacidade simultânea',
            tradicional: '1 cliente',
            notrus: 'Ilimitado',
            economia: '∞'
        }
    ]

    const benefits = [
        {
            icon: DollarSign,
            title: 'Redução de 50% nos custos',
            description: 'Diminua drasticamente os gastos com atendimento ao cliente'
        },
        {
            icon: Users,
            title: 'Menos contratações',
            description: 'Atenda mais clientes sem aumentar a equipe'
        },
        {
            icon: Clock,
            title: 'Eficiência máxima',
            description: 'Respostas instantâneas 24 horas por dia'
        },
        {
            icon: Target,
            title: 'ROI comprovado',
            description: 'Retorno do investimento em menos de 3 meses'
        }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Reduza até 50% do custo do atendimento ao cliente
                            </h1>
                            <p className="text-xl mb-8 text-blue-100">
                                Compare os custos do atendimento tradicional com nossa automação
                                inteligente e descubra quanto sua empresa pode economizar.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white">
                                    Calcule sua economia agora
                                    <Calculator className="ml-2 h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-blue-600 hover:text-white">
                                    Ver demonstração
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/OF8y6iC8JKaf.png"
                                alt="ROI Calculator Interface"
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI Calculator Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Calculadora de Economia
                        </h2>
                        <p className="text-xl text-gray-600">
                            Descubra quanto sua empresa pode economizar com a Notrus
                        </p>
                    </div>

                    <Card className="p-8">
                        <CardContent className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <Label className="text-lg font-semibold mb-4 block">
                                        Número de atendimentos por mês
                                    </Label>
                                    <div className="space-y-4">
                                        <Slider
                                            value={atendimentos}
                                            onValueChange={setAtendimentos}
                                            max={10000}
                                            min={100}
                                            step={100}
                                            className="w-full"
                                            st
                                        />
                                        <div className="text-center">
                                            <span className="text-2xl font-bold text-blue-600">
                                                {atendimentos[0].toLocaleString()}
                                            </span>
                                            <span className="text-gray-600 ml-2">atendimentos/mês</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Label className="text-lg font-semibold mb-4 block">
                                        Custo médio por atendimento (R$)
                                    </Label>
                                    <div className="space-y-4">
                                        <Slider
                                            value={custoAtendimento}
                                            onValueChange={setCustoAtendimento}
                                            max={50}
                                            min={5}
                                            step={1}
                                            className="w-full"
                                        />
                                        <div className="text-center">
                                            <span className="text-2xl font-bold text-blue-600">
                                                R$ {custoAtendimento[0]}
                                            </span>
                                            <span className="text-gray-600 ml-2">por atendimento</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                    Sua Economia com a Notrus
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <div className="text-sm text-gray-600 mb-1">Custo Atual (Mensal)</div>
                                        <div className="text-2xl font-bold text-red-600">
                                            R$ {custoMensal.toLocaleString()}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 mb-1">Economia Mensal</div>
                                        <div className="text-2xl font-bold text-green-600">
                                            R$ {economiaMensal.toLocaleString()}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 mb-1">Economia Anual</div>
                                        <div className="text-3xl font-bold text-green-600">
                                            R$ {economiaAnual.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Atendimento Tradicional vs Notrus
                        </h2>
                        <p className="text-xl text-gray-600">
                            Veja a diferença em números reais
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">
                                        Aspecto
                                    </th>
                                    <th className="px-6 py-4 text-center text-lg font-semibold text-red-600">
                                        Atendimento Tradicional
                                    </th>
                                    <th className="px-6 py-4 text-center text-lg font-semibold text-green-600">
                                        Com Notrus
                                    </th>
                                    <th className="px-6 py-4 text-center text-lg font-semibold text-blue-600">
                                        Economia
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisons.map((item, index) => (
                                    <tr key={index} className="border-t border-gray-200">
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            {item.aspect}
                                        </td>
                                        <td className="px-6 py-4 text-center text-red-600">
                                            {item.tradicional}
                                        </td>
                                        <td className="px-6 py-4 text-center text-green-600 font-semibold">
                                            {item.notrus}
                                        </td>
                                        <td className="px-6 py-4 text-center text-blue-600 font-bold">
                                            {item.economia}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Benefícios financeiros comprovados
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Mais de 200 CFOs já aprovaram nossa solução
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon
                            return (
                                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                            <IconComponent className="h-8 w-8 text-blue-600" />
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

            {/* Case Studies */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Casos de sucesso
                        </h2>
                        <p className="text-xl text-gray-600">
                            Empresas que já reduziram seus custos com a Notrus
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="mb-4">
                                    <BarChart3 className="h-12 w-12 text-blue-600 mx-auto" />
                                </div>
                                <div className="text-3xl font-bold text-green-600 mb-2">R$ 180k</div>
                                <div className="text-lg font-semibold mb-2">Economia anual</div>
                                <blockquote className="text-gray-600 mb-4">
                                    "Reduzimos 65% dos custos operacionais em 6 meses."
                                </blockquote>
                                <div className="font-semibold">Ana Costa</div>
                                <div className="text-sm text-gray-500">CFO, LogiTech</div>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="mb-4">
                                    <PieChart className="h-12 w-12 text-blue-600 mx-auto" />
                                </div>
                                <div className="text-3xl font-bold text-green-600 mb-2">R$ 320k</div>
                                <div className="text-lg font-semibold mb-2">Economia anual</div>
                                <blockquote className="text-gray-600 mb-4">
                                    "ROI de 400% no primeiro ano de implementação."
                                </blockquote>
                                <div className="font-semibold">Roberto Lima</div>
                                <div className="text-sm text-gray-500">Diretor Financeiro, MegaCorp</div>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="mb-4">
                                    <TrendingDown className="h-12 w-12 text-blue-600 mx-auto" />
                                </div>
                                <div className="text-3xl font-bold text-green-600 mb-2">R$ 95k</div>
                                <div className="text-lg font-semibold mb-2">Economia anual</div>
                                <blockquote className="text-gray-600 mb-4">
                                    "Cortamos 50% dos custos sem demitir ninguém."
                                </blockquote>
                                <div className="font-semibold">Patricia Silva</div>
                                <div className="text-sm text-gray-500">COO, FastService</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Pronto para reduzir seus custos?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Fale com nossos especialistas e descubra como economizar até R$ {economiaAnual.toLocaleString()} por ano
                    </p>

                    <Card className="max-w-md mx-auto">
                        <CardHeader>
                            <CardTitle>Calcule sua economia personalizada</CardTitle>
                            <CardDescription>
                                Receba um relatório detalhado em 24 horas
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="name">Nome completo</Label>
                                <Input id="name" placeholder="Seu nome" />
                            </div>
                            <div>
                                <Label htmlFor="email">E-mail corporativo</Label>
                                <Input id="email" type="email" placeholder="seu@empresa.com" />
                            </div>
                            <div>
                                <Label htmlFor="company">Empresa</Label>
                                <Input id="company" placeholder="Nome da empresa" />
                            </div>
                            <div>
                                <Label htmlFor="volume">Volume mensal de atendimentos</Label>
                                <Input id="volume" placeholder="Ex: 5000" />
                            </div>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                Calcular economia personalizada
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}

