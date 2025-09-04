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

export default function WhatsAppAutomation() {
    const benefits = [
        {
            icon: Clock,
            title: '24/7 Support',
            description: 'Your customers are served anytime, even outside business hours'
        },
        {
            icon: Users,
            title: 'No extra staff',
            description: 'Serve more customers without hiring new employees'
        },
        {
            icon: TrendingUp,
            title: 'Higher satisfaction',
            description: 'Instant responses increase customer satisfaction'
        },
        {
            icon: Zap,
            title: 'Full integration',
            description: 'Automatically connects with your existing CRM/ERP'
        }
    ]

    const features = [
        'Smart automated replies',
        'CRM/ERP integration',
        'Detailed reports',
        'Custom configuration',
        'Specialized technical support',
        'Team training included'
    ]

    const stats = [
        { number: '90%', label: 'Reduction in response time' },
        { number: '3x', label: 'More simultaneous conversations' },
        { number: '24h', label: 'Full availability' },
        { number: '95%', label: 'Customer satisfaction' }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Serve customers on WhatsApp without increasing your team
                            </h1>
                            <p className="text-xl mb-8 text-green-100">
                                Our AI automatically replies on WhatsApp, integrates with your CRM/ERP
                                and reduces costs while boosting customer satisfaction.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-white text-green-600 hover:bg-green-600 hover:text-white">
                                    Book a free demo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-green-600 hover:bg-green-600 hover:text-white">
                                    See how it works
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
                            Why choose our automation?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transform your customer service with cutting-edge technology that really works
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
                                Everything you need in one solution
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Our platform provides complete tools to automate
                                and optimize your WhatsApp service.
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
                            Companies that trust Notrus
                        </h2>
                        <p className="text-xl text-gray-600">
                            Over 500 companies have already automated their customer service with us
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="mb-4">
                                    <BarChart3 className="h-12 w-12 text-green-600 mx-auto" />
                                </div>
                                <blockquote className="text-gray-600 mb-4">
                                    We reduced customer service costs by 60% and increased customer satisfaction.
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
                                    24h support without increasing the team. Amazing results!
                                </blockquote>
                                <div className="font-semibold">Maria Santos</div>
                                <div className="text-sm text-gray-500">Director, RetailPlus</div>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="mb-4">
                                    <MessageSquare className="h-12 w-12 text-green-600 mx-auto" />
                                </div>
                                <blockquote className="text-gray-600 mb-4">
                                    The integration with our CRM was flawless. Highly recommend!
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
                        Ready to automate your customer service?
                    </h2>
                    <p className="text-xl mb-8 text-green-100">
                        Book a free demo and see how we can transform your business
                    </p>

                    <ContactForm language={language} />
                </div>
            </section>
        </div>
    )
}
