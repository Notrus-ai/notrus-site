"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { contactFormTranslations } from "@/utils/translations";
import ContactForm from "@/components/ui/ContactForm";
import { usePathname } from "next/navigation";

const ISPAutomacaoPage = () => {
  const pathname = usePathname();
  const getLangFromPath = (path?: string) => {
    if (!path) return "en";
    const seg = path.split("/")[1];
    return seg === "pt" ? "pt" : "en";
  };

  const [language, setLanguage] = useState(() => getLangFromPath(pathname));

  useEffect(() => {
    const lng = getLangFromPath(pathname);
    if (lng !== language) setLanguage(lng);
  }, [pathname]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = (key: string) => {
    return contactFormTranslations["en"][key] ?? key;
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo successfully scheduled! Our team will contact you soon.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const metrics = [
    { value: "100%", description: "PCA (Percentage of Calls Answered)" },
    { value: "+75%", description: "CSAT points in automated flows" },
    { value: "-25%", description: "potential reduction in AHT" },
    { value: "-18%", description: "churn reduction in the first 3 months" },
    { value: "24/7", description: "smart support for subscribers" },
    { value: "80%", description: "of tickets automated" },
  ];

  const useCases = [
    {
      icon: "🌐",
      title: "Internet Outage",
      description:
        "Automatic diagnostics integrated with NOC/DownDetector and guided troubleshooting to solve connectivity issues without human intervention.",
      conversation: {
        customer: "My internet is down",
        ai: "I detected instability in your area. I remotely restarted your equipment. Test it now. If the issue persists, a technician will visit tomorrow between 2–4 PM.",
      },
    },
    {
      icon: "📅",
      title: "Technical Scheduling",
      description:
        "Smart rescheduling based on availability, location, and priority, optimizing routes and reducing operational costs.",
      conversation: {
        customer: "I need to reschedule the technical visit",
        ai: "I can reschedule for: 1) Tomorrow 9–11 AM 2) Thursday 2–4 PM 3) Friday 8–10 AM. Which do you prefer? I’ll confirm by SMS.",
      },
    },
    {
      icon: "💳",
      title: "Billing & Negotiation",
      description:
        "Automatic invoice issuance, instant PIX payment, and smart delinquency negotiation, reducing cancellations due to financial issues.",
      conversation: {
        customer: "I need a copy of my bill",
        ai: "Here’s your bill of R$ 89.90 due on 12/15. PIX: 00020126... Or would you prefer a bank slip? I can also split it into 2 installments with no interest.",
      },
    },
    {
      icon: "🎯",
      title: "Smart Retention",
      description:
        "Proactive offers for customers at risk of cancellation, based on behavioral analysis and service history.",
      conversation: {
        customer: "I want to cancel my plan",
        ai: "I understand your concern. How about a 30% discount for 6 months + a free upgrade to 200MB? I can activate it right now.",
      },
    },
    {
      icon: "⚡",
      title: "Upgrade & Activation",
      description:
        "Instant package contracting or speed increase with automatic activation and real-time confirmation.",
      conversation: {
        customer: "I want to increase my speed",
        ai: "I can double your speed to 200MB for just +R$ 20/month. I’ll activate it now so you can already feel the difference. Confirm?",
      },
    },
    {
      icon: "🔧",
      title: "Advanced Technical Support",
      description:
        "Remote diagnostics, equipment configuration, and technical troubleshooting directly integrated with monitoring systems.",
      conversation: {
        customer: "WiFi is slow only in my bedroom",
        ai: "I’ll analyze your signal. I detected interference on channel 6. I switched to channel 11 and increased the power. Test it now in your bedroom.",
      },
    },
  ];

  const benefits = [
    {
      icon: "📞",
      title: "Fewer Calls to the Call Center",
      description:
        "Reduce up to 80% of calls to your support center with automatic resolution of common issues, freeing your team for complex cases.",
    },
    {
      icon: "💰",
      title: "More Customers Retained",
      description:
        "Proactive retention identifies at-risk customers and offers solutions before cancellation, significantly reducing voluntary churn.",
    },
    {
      icon: "⚡",
      title: "Instant Resolution",
      description:
        "Automatic diagnostics and real-time troubleshooting, directly integrated with your monitoring systems.",
    },
    {
      icon: "📈",
      title: "Automated Sales",
      description:
        "Upgrades and new services offered at the right moment, increasing ARPU with no additional effort from your sales team.",
    },
    {
      icon: "🎯",
      title: "Operational Efficiency",
      description:
        "Automatic scheduling, reminders, and optimized technical routes significantly reduce operational costs.",
    },
    {
      icon: "📊",
      title: "Actionable Insights",
      description:
        "Detailed reports on issue patterns, customer satisfaction, and opportunities for network and service improvement.",
    },
  ];

  const integrations = [
    { name: "SmartOLT", desc: "Equipment monitoring and control", logo: "OLT" },
    { name: "TR-069", desc: "Remote CPE management", logo: "TR" },
    { name: "Voalle", desc: "Complete ERP for ISPs", logo: "VOA" },
    { name: "ACS", desc: "Auto Configuration Server", logo: "ACS" },
    {
      name: "NOC/DownDetector",
      desc: "Real-time network monitoring",
      logo: "NOC",
    },
    { name: "Regional ERPs", desc: "Custom internal systems", logo: "ERP" },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white notrus-shadow-sm">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex justify-between items-center py-4">
            <a
              href="https://notrus.ai/en"
              className="text-2xl font-bold text-[#4F46E5] hover:opacity-80 transition-opacity"
            >
              Notrus
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <Button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="notrus-gradient-primary text-white hover:opacity-90 transition-opacity"
                aria-label="Contact us"
              >
                Contact us
              </Button>
            </nav>

            <button
              className="md:hidden p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 notrus-text-primary" />
              ) : (
                <Menu className="w-6 h-6 notrus-text-primary" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col gap-4">
                <Button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="notrus-gradient-primary text-white hover:opacity-90 transition-opacity"
                  aria-label="Contact us"
                >
                  Contact us
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 text-white py-32 px-5 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The AI that helps ISPs retain customers,
            <br />
            boost CSAT and automate
            <br />
            <span className="text-yellow-300">
              up to 80% of support requests
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Reduce calls, increase retention, and improve your subscribers’
            experience — all directly on WhatsApp.
          </p>
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
            aria-label="Schedule a Demo"
          >
            Schedule a Demo
          </Button>
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold notrus-text-primary mb-4">
              Proven Results with ISPs
            </h2>
            <p className="text-xl notrus-text-secondary">
              Providers that have already transformed their support
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center notrus-shadow-lg border-l-4 border-[#4F46E5] hover-lift"
              >
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

      {/* Use Cases */}
      <section className="py-16 px-5 notrus-bg-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold notrus-text-primary mb-4">
              Specific Use Cases for ISPs
            </h2>
            <p className="text-xl notrus-text-secondary">
              Your technical team spends less time on basic support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 notrus-shadow-md hover-lift border-t-4 border-[#10B981]"
              >
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

      {/* Benefits */}
      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="notrus-bg-light rounded-3xl p-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold notrus-text-primary mb-4">
                Smart Support for Subscribers and Efficiency for Your Business
              </h2>
              <p className="text-xl notrus-text-secondary">
                Turn operational challenges into competitive advantages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 notrus-shadow-sm hover-lift"
                >
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

      {/* Integrations */}
      {/* <section className="py-16 px-5 notrus-bg-light">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 notrus-shadow-lg">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold notrus-text-primary mb-4">
                                Specific Integrations for ISPs
                            </h2>
                            <p className="text-xl notrus-text-secondary">
                                Compatible with Official WhatsApp API
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
                                🔒 Full Security and Compliance
                            </p>
                            <p className="notrus-text-secondary text-sm">
                                LGPD compliant • End-to-end encryption • Full audit • Automatic backup
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

      {/* Formulário de Demo */}
      <section id="contact" className="py-16 px-5 notrus-bg-light">
        <div className="mx-auto">
          <ContactForm language={language} />
        </div>
      </section>

      {/* Botão Voltar */}
      {/* <section className="py-8 px-5 text-center">
                <Button
                    onClick={() => { }}
                    variant="outline"
                    className="border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white"
                >
                    ← Back to home
                </Button>
            </section> */}
      <footer className="notrus-gradient-primary text-white py-8">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center">
            <p>
              &copy; 2025 Notrus. All rights reserved. |{" "}
              <a
                href="https://notrus.ai/privacidade"
                className="text-white hover:underline"
              >
                Privacy politcs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ISPAutomacaoPage;
