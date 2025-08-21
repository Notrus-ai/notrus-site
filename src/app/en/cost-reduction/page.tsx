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

export default function CostReduction() {
    const [interactions, setInteractions] = useState([1000])
    const [interactionCost, setInteractionCost] = useState([15])

    const monthlyCost = interactions[0] * interactionCost[0]
    const monthlySavings = monthlyCost * 0.5
    const yearlySavings = monthlySavings * 12

    const comparisons = [
        {
            aspect: 'Cost per interaction',
            tradicional: 'R$ 15-25',
            notrus: 'R$ 3-8',
            economia: '70%'
        },
        {
            aspect: 'Response time',
            tradicional: '5-15 min',
            notrus: 'Instant',
            economia: '95%'
        },
        {
            aspect: 'Availability',
            tradicional: '8h/day',
            notrus: '24h/day',
            economia: '200%'
        },
        {
            aspect: 'Simultaneous capacity',
            tradicional: '1 customer',
            notrus: 'Unlimited',
            economia: '∞'
        }
    ]

    const benefits = [
        {
            icon: DollarSign,
            title: '50% cost reduction',
            description: 'Drastically reduce customer service expenses'
        },
        {
            icon: Users,
            title: 'Fewer hires',
            description: 'Serve more customers without increasing your team'
        },
        {
            icon: Clock,
            title: 'Maximum efficiency',
            description: 'Instant responses 24/7'
        },
        {
            icon: Target,
            title: 'Proven ROI',
            description: 'Return on investment in less than 3 months'
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
                                Reduce up to 50% of customer service costs
                            </h1>
                            <p className="text-xl mb-8 text-blue-100">
                                Compare the costs of traditional service with our intelligent automation
                                and find out how much your company can save.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white">
                                    Calculate your savings now
                                    <Calculator className="ml-2 h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-blue-600 hover:text-white">
                                    See demo
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
                            Savings Calculator
                        </h2>
                        <p className="text-xl text-gray-600">
                            Find out how much your company can save with Notrus
                        </p>
                    </div>

                    <Card className="p-8">
                        <CardContent className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <Label className="text-lg font-semibold mb-4 block">
                                        Number of customer interactions
                                    </Label>
                                    <div className="space-y-4">
                                        <Slider
                                            value={interactions}
                                            onValueChange={setInteractions}
                                            max={10000}
                                            min={100}
                                            step={100}
                                            className="w-full"
                                        />
                                        <div className="text-center">
                                            <span className="text-2xl font-bold text-blue-600">
                                                {interactions[0].toLocaleString()}
                                            </span>
                                            <span className="text-gray-600 ml-2">interactions/month</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Label className="text-lg font-semibold mb-4 block">
                                        Average cost per interaction (R$)
                                    </Label>
                                    <div className="space-y-4">
                                        <Slider
                                            value={interactionCost}
                                            onValueChange={setInteractionCost}
                                            max={50}
                                            min={5}
                                            step={1}
                                            className="w-full"
                                        />
                                        <div className="text-center">
                                            <span className="text-2xl font-bold text-blue-600">
                                                R$ {interactionCost[0]}
                                            </span>
                                            <span className="text-gray-600 ml-2">per interaction</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                    Your Savings with Notrus
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <div className="text-sm text-gray-600 mb-1">Current Cost (Monthly)</div>
                                        <div className="text-2xl font-bold text-red-600">
                                            R$ {monthlyCost.toLocaleString()}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 mb-1">Monthly Savings</div>
                                        <div className="text-2xl font-bold text-green-600">
                                            R$ {monthlySavings.toLocaleString()}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 mb-1">Annual Savings</div>
                                        <div className="text-3xl font-bold text-green-600">
                                            R$ {yearlySavings.toLocaleString()}
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
                            Traditional Service vs Notrus
                        </h2>
                        <p className="text-xl text-gray-600">
                            See the difference in real numbers
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">
                                        Aspect
                                    </th>
                                    <th className="px-6 py-4 text-center text-lg font-semibold text-red-600">
                                        Traditional Service
                                    </th>
                                    <th className="px-6 py-4 text-center text-lg font-semibold text-green-600">
                                        With Notrus
                                    </th>
                                    <th className="px-6 py-4 text-center text-lg font-semibold text-blue-600">
                                        Savings
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
                            Proven financial benefits
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Over 200 CFOs have already approved our solution
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
                            Success Stories
                        </h2>
                        <p className="text-xl text-gray-600">
                            Companies that have already reduced their costs with Notrus
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="mb-4">
                                    <BarChart3 className="h-12 w-12 text-blue-600 mx-auto" />
                                </div>
                                <div className="text-3xl font-bold text-green-600 mb-2">R$ 180k</div>
                                <div className="text-lg font-semibold mb-2">Annual savings</div>
                                <blockquote className="text-gray-600 mb-4">
                                    We reduced 65% of operational costs in 6 months.
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
                                <div className="text-lg font-semibold mb-2">Annual savings</div>
                                <blockquote className="text-gray-600 mb-4">
                                    400% ROI in the first year of implementation.
                                </blockquote>
                                <div className="font-semibold">Roberto Lima</div>
                                <div className="text-sm text-gray-500">CFO, MegaCorp</div>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="mb-4">
                                    <TrendingDown className="h-12 w-12 text-blue-600 mx-auto" />
                                </div>
                                <div className="text-3xl font-bold text-green-600 mb-2">R$ 95k</div>
                                <div className="text-lg font-semibold mb-2">Annual savings</div>
                                <blockquote className="text-gray-600 mb-4">
                                    We cut 50% of costs without laying anyone off.
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
                        Ready to reduce your costs?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Talk to our experts and discover how to save up to R$ {yearlySavings.toLocaleString()} per year
                    </p>

                    <Card className="max-w-md mx-auto">
                        <CardHeader>
                            <CardTitle>Calculate your personalized savings</CardTitle>
                            <CardDescription>
                                Receive a detailed report within 24 hours
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="name">Full name</Label>
                                <Input id="name" placeholder="Your name" />
                            </div>
                            <div>
                                <Label htmlFor="email">Corporate email</Label>
                                <Input id="email" type="email" placeholder="your@company.com" />
                            </div>
                            <div>
                                <Label htmlFor="company">Company</Label>
                                <Input id="company" placeholder="Company name" />
                            </div>
                            <div>
                                <Label htmlFor="volume">Monthly service volume</Label>
                                <Input id="volume" placeholder="E.g.: 5000" />
                            </div>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                Calculate personalized savings
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
