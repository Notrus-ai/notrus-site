import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
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
  TrendingUp,
} from "lucide-react";

export default function AfterSales() {
  const useCases = [
    {
      icon: Package,
      title: "Order Status",
      description: "Automatic updates on shipping, picking, and delivery",
      example:
        '"Your order #1234 is out for delivery and will arrive in 2 hours"',
    },
    {
      icon: Shield,
      title: "Warranty & Support",
      description: "Guidance on warranty, exchanges, and returns",
      example: '"Your warranty expires in 30 days. Need help with an issue?"',
    },
    {
      icon: Calendar,
      title: "Rescheduling",
      description: "Easily reschedule deliveries and services",
      example: '"Not at home? Reschedule your delivery for another time"',
    },
    {
      icon: Star,
      title: "Feedback & Reviews",
      description: "Collect reviews and improve the customer experience",
      example: '"How was your experience? Rate our service from 1 to 5"',
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Instant Response",
      description: "Customers receive information immediately, 24/7",
    },
    {
      icon: Users,
      title: "Reduced Support Tickets",
      description: "Decrease SAC calls by up to 80%",
    },
    {
      icon: TrendingUp,
      title: "Higher Satisfaction",
      description: "Customers are happier with proactive service",
    },
    {
      icon: Zap,
      title: "Full Automation",
      description: "Integration with order systems and CRM",
    },
  ];

  const testimonials = [
    {
      company: "Fashion E-commerce",
      sector: "Online Retail",
      result: "90% fewer order status inquiries",
      quote:
        "Our customers love receiving automatic updates. It drastically reduced support calls.",
      author: "Marina Oliveira",
      position: "Customer Success Manager",
    },
    {
      company: "Prime Realty",
      sector: "Real Estate",
      result: "95% satisfaction in after-sales",
      quote:
        "We automated the entire after-sales follow-up. Customers get reminders for inspections, documentation, and more.",
      author: "Carlos Mendes",
      position: "Commercial Director",
    },
    {
      company: "TelecomMax",
      sector: "Telecommunications",
      result: "70% reduction in resolution time",
      quote:
        "Technical issues are resolved faster with automatic diagnostics via WhatsApp.",
      author: "Ana Santos",
      position: "Head of Operations",
    },
  ];

  const stats = [
    { number: "80%", label: "Reduction in support tickets" },
    { number: "24h", label: "Full availability" },
    { number: "95%", label: "Customer satisfaction" },
    { number: "3x", label: "More engagement" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your customer will never be left unanswered
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Automate your entire after-sales with smart updates on orders,
                warranty, rescheduling, and more via WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-purple-600 hover:text-white"
                  aria-label="Start"
                >
                  Free WhatsApp Trial
                  <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-purple-600 hover:bg-purple-600 hover:text-white"
                  aria-label="See Use Cases"
                >
                  See Use Cases
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
              Practical Automation Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI can transform your after-sales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turn problems into opportunities for customer loyalty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              Companies that transformed their after-sales
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
                  <CardTitle className="text-lg">
                    {testimonial.company}
                  </CardTitle>
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
                    <div className="text-sm text-gray-500">
                      {testimonial.position}
                    </div>
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
                Full Integration with Your Systems
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our platform connects with major market systems to automate the
                entire after-sales workflow.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    E-commerce Integration (Shopify, WooCommerce, Magento)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    CRM Connection (Salesforce, HubSpot, Pipedrive)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Carrier APIs (Correios, Loggi, Total Express)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Management Systems (ERP, WMS, OMS)
                  </span>
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
            Ready to automate your after-sales?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Try it free for 14 days and see how your customers get more
            satisfied
          </p>

          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Free 14-Day Trial</CardTitle>
              <CardDescription>
                Set up in 5 minutes and start automating today
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@email.com" />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Company name" />
              </div>
              <div>
                <Label htmlFor="sector">Industry</Label>
                <select className="w-full p-2 border rounded-md">
                  <option>Select your industry</option>
                  <option>E-commerce/Retail</option>
                  <option>Real Estate</option>
                  <option>Telecommunications</option>
                  <option>Services</option>
                  <option>Other</option>
                </select>
              </div>
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700"
                aria-label="Start Free Trial"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-center">
                No commitment • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
