"use client";

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ContactForm from '@/components/ui/ContactForm'
import {
	MessageSquare,
	Clock,
	Users,
	TrendingUp,
	CheckCircle,
	ArrowRight,
	Zap,
	Shield,
	BarChart3
} from 'lucide-react'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function WhatsAppAutomacao() {
	const pathname = usePathname();
	const getLangFromPath = (path?: string) => {
		if (!path) return "en";
		const seg = path.split("/")[1];
		return seg === "pt" ? "pt" : "en";
	};

	const [language, setLanguage] = useState(() =>
		getLangFromPath(pathname));

	useEffect(() => {
		const lng = getLangFromPath(pathname);
		if (lng !== language) setLanguage(lng);
	}, [pathname]);

	const benefits = [
		{
			icon: Clock,
			title: 'Atendimento 24/7',
			description: 'Seus clientes são atendidos a qualquer hora, mesmo fora do horário comercial'
		},
		{
			icon: Users,
			title: 'Sem aumentar equipe',
			description: 'Atenda mais clientes sem contratar novos funcionários'
		},
		{
			icon: TrendingUp,
			title: 'Aumento de satisfação',
			description: 'Respostas instantâneas aumentam a satisfação do cliente'
		},
		{
			icon: Zap,
			title: 'Integração completa',
			description: 'Conecta com seu CRM/ERP existente automaticamente'
		}
	]

	const features = [
		'Respostas automáticas inteligentes',
		'Integração com CRM/ERP',
		'Relatórios detalhados',
		'Configuração personalizada',
		'Suporte técnico especializado',
		'Treinamento da equipe incluído'
	]

	const stats = [
		{ number: '90%', label: 'Redução no tempo de resposta' },
		{ number: '3x', label: 'Mais conversas simultâneas' },
		{ number: '24h', label: 'Disponibilidade total' },
		{ number: '95%', label: 'Satisfação dos clientes' }
	]

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="text-4xl md:text-5xl font-bold mb-6">
								Atenda clientes no WhatsApp sem aumentar sua equipe
							</h1>
							<p className="text-xl mb-8 text-green-100">
								Nossa IA responde automaticamente no WhatsApp, integra com seu CRM/ERP
								e reduz custos enquanto aumenta a satisfação dos clientes.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button size="lg" className="bg-white text-green-600 hover:bg-green-600 hover:text-white">
									Agende uma demo grátis
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
								<Button size="lg" variant="outline" className="border-white text-green-600 hover:bg-green-600 hover:text-white">
									Ver como funciona
								</Button>
							</div>
						</div>
						<div className="relative">
							<img
								src="/1lhgG5fo31Cc.jpg"
								alt="WhatsApp Business Interface"
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
								<div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
									{stat.number}
								</div>
								<div className="text-gray-600">{stat.label}</div>
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
							Por que escolher nossa automação?
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Transforme seu atendimento com tecnologia de ponta que realmente funciona
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{benefits.map((benefit, index) => {
							const IconComponent = benefit.icon
							return (
								<Card key={index} className="text-center hover:shadow-lg transition-shadow">
									<CardHeader>
										<div className="mx-auto bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
											<IconComponent className="h-8 w-8 text-green-600" />
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

			{/* Features Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								Tudo que você precisa em uma solução
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								Nossa plataforma oferece recursos completos para automatizar
								e otimizar seu atendimento no WhatsApp.
							</p>

							<div className="space-y-4">
								{features.map((feature, index) => (
									<div key={index} className="flex items-center space-x-3">
										<CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
										<span className="text-gray-700">{feature}</span>
									</div>
								))}
							</div>
						</div>
						<div className="relative">
							<img
								src="/99wIobC2lWb8.jpg"
								alt="WhatsApp Business Platform"
								className="rounded-lg shadow-xl"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Social Proof Section */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Empresas que confiam na Notrus
						</h2>
						<p className="text-xl text-gray-600">
							Mais de 500 empresas já automatizaram seu atendimento conosco
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Card className="text-center">
							<CardContent className="pt-6">
								<div className="mb-4">
									<BarChart3 className="h-12 w-12 text-green-600 mx-auto" />
								</div>
								<blockquote className="text-gray-600 mb-4">
									Reduzimos 60% dos custos de atendimento e aumentamos a satisfação dos clientes.
								</blockquote>
								<div className="font-semibold">João Silva</div>
								<div className="text-sm text-gray-500">CEO, TechCorp</div>
							</CardContent>
						</Card>

						<Card className="text-center">
							<CardContent className="pt-6">
								<div className="mb-4">
									<Shield className="h-12 w-12 text-green-600 mx-auto" />
								</div>
								<blockquote className="text-gray-600 mb-4">
									Atendimento 24h sem aumentar a equipe. Resultado incrível!
								</blockquote>
								<div className="font-semibold">Maria Santos</div>
								<div className="text-sm text-gray-500">Diretora, RetailPlus</div>
							</CardContent>
						</Card>

						<Card className="text-center">
							<CardContent className="pt-6">
								<div className="mb-4">
									<MessageSquare className="h-12 w-12 text-green-600 mx-auto" />
								</div>
								<blockquote className="text-gray-600 mb-4">
									A integração com nosso CRM foi perfeita. Recomendo!
								</blockquote>
								<div className="font-semibold">Carlos Oliveira</div>
								<div className="text-sm text-gray-500">CTO, ServiceMax</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-green-600 text-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Pronto para automatizar seu atendimento?
					</h2>
					<p className="text-xl mb-8 text-green-100">
						Agende uma demonstração gratuita e veja como podemos transformar seu negócio
					</p>

					<ContactForm language={language} />
				</div>
			</section>
		</div>
	)
}
