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

export default function RealStateVertical() {
    const solutions = [
        {
            icon: MessageSquare,
            title: 'Initial Service',
            description: 'Qualify leads automatically and schedule visits',
            features: [
                'Automatic lead qualification',
                'Online visit scheduling',
                'Information on available properties',
                'Automatic financing calculation'
            ]
        },
        {
            icon: Calendar,
            title: 'Visit Management',
            description: 'Automate scheduling and confirmations',
            features: [
                'Automatic visit confirmation',
                'Reminders for clients and agents',
                'Easy rescheduling',
                'Post-visit feedback'
            ]
        },
        {
            icon: FileText,
            title: 'Documentation',
            description: 'Track the entire documentation process',
            features: [
                'Pending document status',
                'Expiration reminders',
                'Guidance on documentation',
                'Signature scheduling'
            ]
        },
        {
            icon: Key,
            title: 'After-Sales',
            description: 'Maintain contact after the sale',
            features: [
                'Key delivery tracking',
                'Post-move support',
                'Satisfaction surveys',
                'Referrals and recommendations'
            ]
        }
    ]

    const benefits = [
        {
            icon: Clock,
            title: '24h Service',
            description: 'Capture leads even outside business hours',
            stat: '3x more leads'
        },
        {
            icon: Users,
            title: 'More Productivity',
            description: 'Agents focus on sales, not repetitive tasks',
            stat: '50% more sales'
        },
        {
            icon: TrendingUp,
            title: 'Higher Conversion',
            description: 'Personalized follow-up increases closings',
            stat: '40% more conversions'
        },
        {
            icon: Building,
            title: 'Complete Management',
            description: 'Full control of the sales pipeline',
            stat: '90% less rework'
        }
    ]

    const testimonials = [
        {
            company: 'Horizonte Constructions',
            result: '200% increase in qualified leads',
            quote: 'Automation allowed us to serve prospects 24/7. Our agents now focus only on visits and closings.',
            author: 'Ricardo Almeida',
            position: 'Sales Director',
            units: '500+ units sold'
        },
        {
            company: 'Premium Realty',
            result: '60% reduction in sales time',
            quote: 'Automatic client follow-up revolutionized our operation. Nobody is left without an answer.',
            author: 'Fernanda Costa',
            position: 'Sales Manager',
            units: '300+ properties/year'
        },
        {
            company: 'Residential Group',
            result: '85% customer satisfaction',
            quote: 'From the first visit to key delivery, everything is tracked automatically. Clients love it!',
            author: 'Paulo Mendes',
            position: 'CEO',
            units: '1000+ families served'
        }
    ]

    const useCases = [
        {
            scenario: 'Lead interested in an apartment',
            automation: 'AI qualifies the profile, sends floor plans, and schedules a visit automatically'
        },
        {
            scenario: 'Client visited the property',
            automation: 'Sends a personalized proposal and follows up on negotiation'
        },
        {
            scenario: 'Documentation in progress',
            automation: 'Automatic reminders about pending documents'
        },
        {
            scenario: 'Key delivery',
            automation: 'Coordinates delivery and collects satisfaction feedback'
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
                                Specialized Real Estate Solution
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Automate real estate client service — 24/7
                            </h1>
                            <p className="text-xl mb-8 text-orange-100">
                                From lead capture to key delivery, our real estate-specialized AI
                                automates the entire sales and after-sales process.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-white hover:bg-orange-600 text-orange-600 hover:text-white">
                                    See how it works for your company
                                    <Building className="ml-2 h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-orange-600 hover:bg-orange-600 hover:text-white">
                                    Schedule a demo
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
                            Real estate industry results
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">3x</div>
                            <div className="text-gray-600">More qualified leads</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">50%</div>
                            <div className="text-gray-600">More sales per agent</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">40%</div>
                            <div className="text-gray-600">Higher conversion rate</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24h</div>
                            <div className="text-gray-600">Available service</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Solutions for every step of the sale
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Automate from the first contact to key delivery
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
                            How it works in practice
                        </h2>
                        <p className="text-xl text-gray-600">
                            See real examples of automation in daily operations
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
                            Benefits for real estate companies
                        </h2>
                        <p className="text-xl text-gray-600">
                            Proven results in the real estate industry
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
                            Real estate success stories
                        </h2>
                        <p className="text-xl text-gray-600">
                            Companies that transformed their sales
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="h-full">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="secondary">Real Estate</Badge>
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
                                        "{testimonial.quote}"
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
                        Ready to revolutionize your sales?
                    </h2>
                    <p className="text-xl mb-8 text-orange-100">
                        Schedule a personalized demo for the real estate sector
                    </p>

                    <Card className="max-w-md mx-auto">
                        <CardHeader>
                            <CardTitle>Personalized demo</CardTitle>
                            <CardDescription>
                                See the solution working with your company’s data
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="name">Full name</Label>
                                <Input id="name" placeholder="Your name" />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="your@email.com" />
                            </div>
                            <div>
                                <Label htmlFor="company">Company/Real Estate</Label>
                                <Input id="company" placeholder="Company name" />
                            </div>
                            <div>
                                <Label htmlFor="role">Role</Label>
                                <select className="w-full p-2 border rounded-md">
                                    <option>Select your role</option>
                                    <option>Director/CEO</option>
                                    <option>Sales Manager</option>
                                    <option>Agent</option>
                                    <option>Sales Coordinator</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <Label htmlFor="volume">Monthly sales</Label>
                                <select className="w-full p-2 border rounded-md">
                                    <option>Select volume</option>
                                    <option>1-10 properties</option>
                                    <option>11-50 properties</option>
                                    <option>51-100 properties</option>
                                    <option>100+ properties</option>
                                </select>
                            </div>
                            <Button className="w-full bg-orange-600 hover:bg-orange-700">
                                Schedule demo
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
