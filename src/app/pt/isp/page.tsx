'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Menu, X, ArrowRight, Phone, Mail, Building, User } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { translations } from '@/utils/translations';

const ISPAutomacaoPage = ({ onBackToHome }) => {
    const t = (key: string) => {
        const lng = location.href.includes('/en') ? 'en' : 'pt'
        return translations[lng][key] ?? key;
    }
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simular envio do formulário
        alert('Demonstração agendada com sucesso! Nossa equipe entrará em contato em breve.');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    };

    const metrics = [
        { value: '100%', description: 'PCA (Percentual de Chamadas Atendidas)' },
        { value: '+75%', description: 'pontos de CSAT nos fluxos automatizados' },
        { value: '-25%', description: 'potencial de redução no TMA' },
        { value: '-18%', description: 'redução de churn nos primeiros 3 meses' },
        { value: '24/7', description: 'atendimento inteligente para assinantes' },
        { value: '80%', description: 'dos chamados automatizados' },
    ];

    const useCases = [
        {
            icon: '🌐',
            title: 'Internet Fora do Ar',
            description: 'Diagnóstico automático integrado com NOC/DownDetector e troubleshooting guiado para resolver problemas de conectividade sem intervenção humana.',
            conversation: {
                customer: 'Minha internet caiu',
                ai: 'Detectei instabilidade na sua região. Reiniciei seu equipamento remotamente. Teste agora. Se persistir, técnico vai até você amanhã 14h-16h.'
            }
        },
        {
            icon: '📅',
            title: 'Agendamento Técnico',
            description: 'Reagendamento inteligente baseado em disponibilidade, localização e prioridade, otimizando rotas e reduzindo custos operacionais.',
            conversation: {
                customer: 'Preciso reagendar a visita técnica',
                ai: 'Posso reagendar para: 1) Amanhã 9h-11h 2) Quinta 14h-16h 3) Sexta 8h-10h. Qual prefere? Confirmo por SMS.'
            }
        },
        {
            icon: '💳',
            title: 'Cobrança e Negociação',
            description: 'Segunda via automática, PIX instantâneo e negociação inteligente para inadimplência, reduzindo cancelamentos por questões financeiras.',
            conversation: {
                customer: 'Preciso da segunda via da fatura',
                ai: 'Aqui está sua fatura de R$ 89,90 com vencimento 15/12. PIX: 00020126... Ou prefere boleto? Posso parcelar em 2x sem juros.'
            }
        },
        {
            icon: '🎯',
            title: 'Retenção Inteligente',
            description: 'Ofertas proativas para clientes em risco de cancelamento, baseadas em análise comportamental e histórico de atendimento.',
            conversation: {
                customer: 'Quero cancelar meu plano',
                ai: 'Entendo sua preocupação. Que tal um desconto de 30% por 6 meses + upgrade grátis para 200MB? Posso ativar agora mesmo.'
            }
        },
        {
            icon: '⚡',
            title: 'Upgrade e Ativação',
            description: 'Contratação de pacotes ou aumento de velocidade instantaneamente, com ativação automática e confirmação em tempo real.',
            conversation: {
                customer: 'Quero aumentar minha velocidade',
                ai: 'Posso dobrar sua velocidade para 200MB por apenas +R$ 20/mês. Ativo agora e você já sente a diferença. Confirma?'
            }
        },
        {
            icon: '🔧',
            title: 'Suporte Técnico Avançado',
            description: 'Diagnósticos remotos, configuração de equipamentos e resolução de problemas técnicos com integração direta aos sistemas de monitoramento.',
            conversation: {
                customer: 'WiFi está lento só no quarto',
                ai: 'Vou analisar seu sinal. Detectei interferência no canal 6. Mudei para canal 11 e aumentei a potência. Teste agora no quarto.'
            }
        }
    ];

    const benefits = [
        {
            icon: '📞',
            title: 'Menos Chamadas na Central',
            description: 'Reduza até 80% das ligações para sua central com resolução automática de problemas comuns, liberando sua equipe para casos complexos.'
        },
        {
            icon: '💰',
            title: 'Mais Clientes Salvos',
            description: 'Retenção proativa identifica clientes em risco e oferece soluções antes do cancelamento, reduzindo significativamente o churn voluntário.'
        },
        {
            icon: '⚡',
            title: 'Resolução Instantânea',
            description: 'Diagnósticos automáticos e troubleshooting em tempo real, com integração direta aos seus sistemas de monitoramento.'
        },
        {
            icon: '📈',
            title: 'Vendas Automatizadas',
            description: 'Upgrades e novos serviços oferecidos no momento certo, aumentando ARPU sem esforço adicional da equipe comercial.'
        },
        {
            icon: '🎯',
            title: 'Eficiência Operacional',
            description: 'Agendamentos automáticos, lembretes e otimização de rotas técnicas reduzem custos operacionais significativamente.'
        },
        {
            icon: '📊',
            title: 'Insights Acionáveis',
            description: 'Relatórios detalhados sobre padrões de problemas, satisfação e oportunidades de melhoria na rede e atendimento.'
        }
    ];

    const integrations = [
        { name: 'SmartOLT', desc: 'Monitoramento e controle de equipamentos', logo: 'OLT' },
        { name: 'TR-069', desc: 'Gerenciamento remoto de CPEs', logo: 'TR' },
        { name: 'Voalle', desc: 'ERP completo para ISPs', logo: 'VOA' },
        { name: 'ACS', desc: 'Auto Configuration Server', logo: 'ACS' },
        { name: 'NOC/DownDetector', desc: 'Monitoramento de rede em tempo real', logo: 'NOC' },
        { name: 'ERPs Regionais', desc: 'Sistemas internos customizados', logo: 'ERP' }
    ];

    const testimonials = [
        {
            company: 'FibraNet ISP',
            description: 'Provedor regional • 15.000 clientes • Interior de SP',
            avatar: '🌐',
            content: 'Antes da Notrus, nossa central recebia 200+ ligações por dia só de "internet lenta" e "segunda via". Hoje são menos de 40. A IA resolve 85% dos problemas automaticamente e nossos clientes adoram o atendimento no WhatsApp. Melhor investimento que fizemos.',
            author: 'Carlos Mendes, Diretor Técnico',
            metrics: [
                { value: '-80%', label: 'Ligações na central' },
                { value: '+25', label: 'Pontos CSAT' },
                { value: '-15%', label: 'Churn mensal' },
                { value: 'R$ 45k', label: 'Economia/mês' }
            ]
        },
        {
            company: 'VelocidadeMax',
            description: 'ISP familiar • 8.000 clientes • Interior do RS',
            avatar: '📡',
            content: 'A retenção inteligente é impressionante. A IA identifica clientes insatisfeitos antes mesmo deles ligarem para cancelar. Oferece desconto, upgrade, ou agenda uma visita técnica. Salvamos 3 de cada 4 cancelamentos que antes perdíamos.',
            author: 'Ana Paula Santos, CEO',
            metrics: [
                { value: '75%', label: 'Cancelamentos salvos' },
                { value: '+18%', label: 'Upgrades automáticos' },
                { value: '-22%', label: 'Churn total' },
                { value: 'R$ 180k', label: 'Receita preservada' }
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            <Header t={t} />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 text-white py-32 px-5 text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        A IA que ajuda ISPs a reter clientes,<br />
                        elevar o CSAT e automatizar<br />
                        <span className="text-yellow-300">até 80% dos atendimentos</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                        Reduza chamadas, aumente retenção e melhore a experiência dos seus assinantes — tudo direto no WhatsApp.
                    </p>
                    <Button
                        onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
                    >
                        Agendar Demonstração
                    </Button>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
                </div>
            </section>

            {/* Métricas Principais */}
            <section className="py-16 px-5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold notrus-text-primary mb-4">
                            Resultados Comprovados com ISPs
                        </h2>
                        <p className="text-xl notrus-text-secondary">
                            Provedores que já transformaram seu atendimento
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {metrics.map((metric, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 text-center notrus-shadow-lg border-l-4 border-[#4F46E5] hover-lift">
                                <span className="block text-4xl font-bold text-[#4F46E5] mb-2">
                                    {metric.value}
                                </span>
                                <span className="text-sm notrus-text-secondary font-medium">
                                    {metric.description}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Casos de Uso */}
            <section className="py-16 px-5 notrus-bg-light">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold notrus-text-primary mb-4">
                            Casos de Uso Específicos para ISPs
                        </h2>
                        <p className="text-xl notrus-text-secondary">
                            Seu time técnico gasta menos tempo com suporte básico
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 notrus-shadow-md hover-lift border-t-4 border-[#10B981]">
                                <div className="w-15 h-15 notrus-gradient-primary rounded-xl flex items-center justify-center text-2xl mb-6">
                                    {useCase.icon}
                                </div>
                                <h3 className="text-xl font-bold notrus-text-primary mb-4">
                                    {useCase.title}
                                </h3>
                                <p className="notrus-text-secondary mb-6 leading-relaxed">
                                    {useCase.description}
                                </p>
                                <div className="notrus-bg-light rounded-xl p-4 border-l-3 border-[#4F46E5]">
                                    <div className="flex items-center notrus-text-primary font-semibold mb-3">
                                        <span className="mr-2">👤</span>
                                        {useCase.conversation.customer}
                                    </div>
                                    <div className="flex items-start notrus-text-primary">
                                        <span className="mr-2 mt-1">🤖</span>
                                        {useCase.conversation.ai}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefícios */}
            <section className="py-16 px-5">
                <div className="max-w-6xl mx-auto">
                    <div className="notrus-bg-light rounded-3xl p-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold notrus-text-primary mb-4">
                                Atendimento Inteligente para Assinantes e Eficiência para seu Negócio
                            </h2>
                            <p className="text-xl notrus-text-secondary">
                                Transforme desafios operacionais em vantagens competitivas
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 notrus-shadow-sm hover-lift">
                                    <div className="w-12 h-12 notrus-gradient-primary rounded-lg flex items-center justify-center text-white text-xl mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-lg font-bold notrus-text-primary mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="notrus-text-secondary leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrações */}
            <section className="py-16 px-5 notrus-bg-light">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 notrus-shadow-lg">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold notrus-text-primary mb-4">
                                Integrações Específicas para ISPs
                            </h2>
                            <p className="text-xl notrus-text-secondary">
                                Compatibilidade com WhatsApp API oficial
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                            {integrations.map((integration, index) => (
                                <div key={index} className="text-center p-4 notrus-bg-light rounded-xl hover:bg-white hover:border-2 hover:border-[#4F46E5] transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-15 h-15 notrus-gradient-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">
                                        {integration.logo}
                                    </div>
                                    <div className="font-semibold notrus-text-primary mb-2 text-sm">
                                        {integration.name}
                                    </div>
                                    <div className="text-xs notrus-text-secondary">
                                        {integration.desc}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-8 p-6 bg-white rounded-xl">
                            <p className="notrus-text-primary font-semibold mb-2">
                                🔒 Segurança e Compliance Total
                            </p>
                            <p className="notrus-text-secondary text-sm">
                                LGPD compliant • Criptografia end-to-end • Auditoria completa • Backup automático
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Depoimentos */}
            {/* <section className="py-16 px-5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold notrus-text-primary mb-4">
                            ISPs que Já Transformaram seus Resultados
                        </h2>
                        <p className="text-xl notrus-text-secondary">
                            Casos reais de provedores que implementaram nossa solução
                        </p>
                    </div>

                    <div className="space-y-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 notrus-shadow-md border-l-4 border-[#10B981]">
                                <div className="flex items-center mb-6">
                                    <div className="w-15 h-15 notrus-gradient-primary rounded-full flex items-center justify-center text-white text-2xl mr-4">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold notrus-text-primary text-lg">
                                            {testimonial.company}
                                        </h4>
                                        <p className="notrus-text-secondary text-sm">
                                            {testimonial.description}
                                        </p>
                                    </div>
                                </div>
                                <p className="italic notrus-text-secondary leading-relaxed mb-6">
                                    "{testimonial.content}"
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                    {testimonial.metrics.map((metric, metricIndex) => (
                                        <div key={metricIndex} className="text-center p-3 notrus-bg-light rounded-lg">
                                            <span className="block text-lg font-bold text-[#10B981]">
                                                {metric.value}
                                            </span>
                                            <span className="text-xs notrus-text-secondary">
                                                {metric.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="font-semibold notrus-text-primary">
                                    - {testimonial.author}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Formulário de Demo */}
            <section id="demo" className="py-16 px-5 notrus-bg-light">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 notrus-shadow-lg">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold notrus-text-primary mb-4">
                                Agende uma Demonstração Personalizada
                            </h2>
                            <p className="text-xl notrus-text-secondary">
                                Veja como a Notrus pode transformar o atendimento do seu ISP
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium notrus-text-primary mb-2">
                                        <User className="inline w-4 h-4 mr-2" />
                                        Nome Completo *
                                    </label>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full"
                                        placeholder="Seu nome completo"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium notrus-text-primary mb-2">
                                        <Mail className="inline w-4 h-4 mr-2" />
                                        Email Corporativo *
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium notrus-text-primary mb-2">
                                        <Phone className="inline w-4 h-4 mr-2" />
                                        Telefone/WhatsApp *
                                    </label>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full"
                                        placeholder="(11) 99999-9999"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium notrus-text-primary mb-2">
                                        <Building className="inline w-4 h-4 mr-2" />
                                        Nome do ISP *
                                    </label>
                                    <Input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full"
                                        placeholder="Nome do seu provedor"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium notrus-text-primary mb-2">
                                    Conte-nos sobre seus desafios atuais
                                </label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full"
                                    rows={4}
                                    placeholder="Ex: Recebemos muitas ligações sobre internet lenta, queremos reduzir churn, melhorar CSAT..."
                                />
                            </div>

                            <div className="text-center">
                                <Button
                                    type="submit"
                                    className="notrus-gradient-primary text-white px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
                                >
                                    Agendar Demonstração Gratuita
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <p className="text-sm notrus-text-secondary mt-4">
                                    Demonstração de 30 minutos • Sem compromisso • Consultoria gratuita
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Botão Voltar */}
            <section className="py-8 px-5 text-center">
                <Button
                    onClick={onBackToHome}
                    variant="outline"
                    className="border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white"
                >
                    ← Voltar às Landing Pages
                </Button>
            </section>
            <footer className="notrus-gradient-primary text-white py-8">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center">
                        <p>
                            &copy; 2025 Notrus. Todos os direitos reservados. |{' '}
                            <a
                                href="https://notrus.ai/privacidade"
                                className="text-white hover:underline"
                            >
                                Política de Privacidade
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ISPAutomacaoPage;

