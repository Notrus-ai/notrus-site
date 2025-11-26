"use client";

import { useEffect, useMemo, useState } from "react";
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
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

import * as Icons from "lucide-react";
import {
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Gift,
  BarChart3,
  Settings,
} from "lucide-react";

import ContactForm from "@/components/ui/ContactForm";

import {
  notrusLandingTexts,
  type Locale,
  type IndustryKey,
} from "@/utils/translations";
import { FloatingProfileCapture } from "@/components/ui/FloatingProfileCapture";

type ClientStatus = "novo" | "retornando";
type Industry =
  | "E-commerce"
  | "Imobiliário"
  | "Varejo"
  | "Educação"
  | "Saúde"
  | "Financeiro"
  | "SaaS"
  | "Serviços";

type Profile = {
  name: string;
  industry: Industry;
  status: ClientStatus;
};

const INDUSTRY_OPTIONS: Industry[] = [
  "E-commerce",
  "Imobiliário",
  "Varejo",
  "Educação",
  "Saúde",
  "Financeiro",
  "SaaS",
  "Serviços",
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingCart: Icons.ShoppingCart,
  Building2: Icons.Building2,
  CreditCard: Icons.CreditCard,
  ArrowRight: Icons.ArrowRight,
  TrendingUp: Icons.TrendingUp,
  CheckCircle: Icons.CheckCircle,
  Gift: Icons.Gift,
  BarChart3: Icons.BarChart3,
  Repeat: Icons.Repeat,
  Star: Icons.Star,
  GraduationCap: Icons.GraduationCap,
  HeartPulse: Icons.HeartPulse,
  Banknote: Icons.Banknote,
  Wrench: Icons.Wrench,
  Settings: Icons.Settings,
  CalendarDays: Icons.CalendarDays,
  CalendarClock: Icons.CalendarClock,
  HeartHandshake: Icons.HeartHandshake,
  ShieldCheck: Icons.ShieldCheck,
  Headphones: Icons.Headphones,
  Route: Icons.Route,
  Megaphone: Icons.Megaphone,
  Store: Icons.Store,
  UserPlus: Icons.UserPlus,
  BookOpen: Icons.BookOpen,
  Users: Icons.Users,
  UserRoundCheck: Icons.UserRoundCheck,
  Gauge: Icons.Gauge,
  LineChart: Icons.LineChart,
  MessageSquare: Icons.MessageSquare,
  Sparkles: Icons.Sparkles,
  Shield: Icons.Shield,
  IdCard: Icons.IdCard,
  Repeat2: Icons.Repeat2,
  FileLock2: Icons.FileLock2,
  Clock8: Icons.Clock8,
  Smile: Icons.Smile,
  Rocket: Icons.Rocket,
  LifeBuoy: Icons.LifeBuoy,
  PlayCircle: Icons.PlayCircle,
  Sparkle: Icons.Sparkle,
  ScanSearch: Icons.ScanSearch,
  FileSpreadsheet: Icons.FileSpreadsheet,
  FileCheck2: Icons.FileCheck2,
  Handshake: Icons.Handshake,
};

// 🎨 TEMA POR SEGMENTO (cores extraídas do translations)
type SegmentTheme = {
  gradient: string;
  iconBg: string;
  iconText: string;
  solutionColors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  benefitColor: string;
};

const SEGMENT_THEME: Record<IndustryKey, SegmentTheme> = {
  "E-commerce": {
    gradient: "from-orange-500 to-orange-500",
    iconBg: "bg-white/20",
    iconText: "text-orange-700",
    solutionColors: {
      primary: "text-orange-600 bg-orange-100",
      secondary: "text-blue-600 bg-blue-100",
      tertiary: "text-green-600 bg-green-100",
    },
    benefitColor: "bg-orange-100 text-orange-700",
  },
  Imobiliário: {
    gradient: "from-blue-500 to-blue-500",
    iconBg: "bg-white/20",
    iconText: "text-sky-700",
    solutionColors: {
      primary: "text-sky-600 bg-sky-100",
      secondary: "text-emerald-600 bg-emerald-100",
      tertiary: "text-indigo-600 bg-indigo-100",
    },
    benefitColor: "bg-sky-100 text-sky-700",
  },
  Varejo: {
    gradient: "from-purple-500 to-purple-500",
    iconBg: "bg-white/20",
    iconText: "text-purple-700",
    solutionColors: {
      primary: "text-purple-600 bg-purple-100",
      secondary: "text-pink-600 bg-pink-100",
      tertiary: "text-rose-600 bg-rose-100",
    },
    benefitColor: "bg-purple-100 text-purple-700",
  },
  Educação: {
    gradient: "from-blue-400 to-blue-500",
    iconBg: "bg-white/20",
    iconText: "text-blue-700",
    solutionColors: {
      primary: "text-blue-600 bg-blue-100",
      secondary: "text-indigo-600 bg-indigo-100",
      tertiary: "text-purple-600 bg-purple-100",
    },
    benefitColor: "bg-blue-100 text-blue-700",
  },
  Saúde: {
    gradient: "from-green-600 to-green-600",
    iconBg: "bg-white/20",
    iconText: "text-teal-700",
    solutionColors: {
      primary: "text-teal-600 bg-teal-100",
      secondary: "text-emerald-600 bg-emerald-100",
      tertiary: "text-green-600 bg-green-100",
    },
    benefitColor: "bg-teal-100 text-teal-700",
  },
  Financeiro: {
    gradient: "from-emerald-500 to-emerald-500",
    iconBg: "bg-white/20",
    iconText: "text-green-700",
    solutionColors: {
      primary: "text-green-600 bg-green-100",
      secondary: "text-emerald-600 bg-emerald-100",
      tertiary: "text-teal-600 bg-teal-100",
    },
    benefitColor: "bg-green-100 text-green-700",
  },
  SaaS: {
    gradient: "from-violet-700 to-violet-700",
    iconBg: "bg-white/20",
    iconText: "text-violet-700",
    solutionColors: {
      primary: "text-violet-600 bg-violet-100",
      secondary: "text-purple-600 bg-purple-100",
      tertiary: "text-fuchsia-600 bg-fuchsia-100",
    },
    benefitColor: "bg-violet-100 text-violet-700",
  },
  Serviços: {
    gradient: "from-amber-500 to-amber-500",
    iconBg: "bg-white/20",
    iconText: "text-amber-700",
    solutionColors: {
      primary: "text-amber-600 bg-amber-100",
      secondary: "text-orange-600 bg-orange-100",
      tertiary: "text-red-600 bg-red-100",
    },
    benefitColor: "bg-amber-100 text-amber-700",
  },
};

export default function VerticalEcommerce() {
  const [openModal, setOpenModal] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    name: "",
    industry: "E-commerce",
    status: "novo",
  });

  const locale: Locale = "en";
  const t = notrusLandingTexts[locale];

  useEffect(() => {
    try {
      const saved = localStorage.getItem("notrus-profile");
      if (saved) {
        setProfile(JSON.parse(saved));
      } else {
        setOpenModal(true);
      }
    } catch {}
  }, []);

  const firstName = useMemo(() => {
    if (!profile.name) return "";
    return profile.name.trim().split(" ")[0];
  }, [profile.name]);

  const saveProfile = (data: Partial<Profile>) => {
    setProfile((prev) => {
      const next = { ...prev, ...data };
      try {
        localStorage.setItem("notrus-profile", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const scrollToDemo = () => {
    const el = document.getElementById("demo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToSolutions = () => {
    const el = document.getElementById("solucoes");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const currentIndustry = (profile.industry || "E-commerce") as IndustryKey;
  const seg = t.segments[currentIndustry];
  const theme = SEGMENT_THEME[currentIndustry];

  const hero = useMemo(() => {
    const IconComp = iconMap[seg.hero.Icon] || ShoppingCart;
    const greetingPrefix = locale === "en" ? "Hello" : "Olá";
    const greetingText = `${greetingPrefix}${
      firstName ? `, ${firstName}` : ""
    }${profile.status === "retornando" ? seg.hero.greetingReturning : ""}`;
    return { ...seg.hero, Icon: IconComp, greetingText };
  }, [seg.hero, firstName, profile.status, locale]);

  const stats = seg.stats;
  const solutions = useMemo(
    () =>
      seg.solutions.map((s) => ({
        ...s,
        Icon: iconMap[s.icon] || Gift,
      })),
    [seg.solutions]
  );
  const useCases = seg.useCases;
  const benefits = useMemo(
    () =>
      seg.benefits.map((b) => ({
        ...b,
        Icon: iconMap[b.icon] || BarChart3,
      })),
    [seg.benefits]
  );
  const testimonials = seg.testimonials;
  const cta = seg.cta;

  return (
    <div className="min-h-screen">
      {/* FAB flutuante - Personalizar experiência com cores do segmento */}
      <button
        onClick={() => setOpenModal(true)}
        aria-label={t.modal.openButton}
        title={t.modal.openButton}
        className={`
          group fixed left-6 bottom-6 z-50
          flex items-center gap-3
          rounded-full
          bg-gradient-to-r ${theme.gradient}
          text-white
          shadow-xl hover:shadow-2xl
          transition-all
          px-4 py-3
          sm:px-5 sm:py-4
          hover:scale-105
          focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40
        `}
      >
        <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/notrus-logo-new.png"
            alt="Notrus"
            className="h-8 w-8 object-contain rounded-full"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              const sibling = e.currentTarget
                .nextElementSibling as HTMLElement | null;
              if (sibling) sibling.style.display = "inline-flex";
            }}
          />
          <span
            className="hidden h-8 w-8 items-center justify-center text-sm font-bold"
            aria-hidden="true"
          >
            N
          </span>
        </span>

        <span className="text-sm sm:text-base font-semibold">
          {t.modal.openButton}
        </span>
      </button>

      {/* Dialog controlado pelo estado */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <ProfileDialogContent
          profile={profile}
          onChange={saveProfile}
          onClose={() => setOpenModal(false)}
          locale={locale}
          gradient={theme.gradient}
        />
      </Dialog>

      {/* HERO */}
      <section
        className={`bg-gradient-to-br ${theme.gradient} text-white py-20`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                className={`${theme.iconBg} ${theme.iconText} mb-4 text-white`}
              >
                {seg.hero.badge}
              </Badge>

              {firstName ? (
                <p className="text-base md:text-lg opacity-90 mb-2">
                  {hero.greetingText}
                </p>
              ) : null}

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {seg.hero.headline}
              </h1>

              <p className="text-xl mb-8 opacity-90">{seg.hero.subheadline}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white hover:opacity-90 text-black"
                  aria-label={seg.hero.ctaPrimary}
                  title={seg.hero.ctaPrimary}
                  onClick={scrollToSolutions}
                >
                  <hero.Icon className={`mr-2 h-7 w-7 ${theme.iconText}`} />
                  {seg.hero.ctaPrimary}
                </Button>

                <Button
                  size="lg"
                  className="border-white text-white hover:bg-white/10 border-2"
                  aria-label={seg.hero.ctaSecondary}
                  title={seg.hero.ctaSecondary}
                  onClick={scrollToDemo}
                >
                  <Settings className="mr-2 h-5 w-5" />
                  {seg.hero.ctaSecondary}
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px]">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={seg.hero.image}
                  alt={seg.hero.imageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${theme.gradient} opacity-10`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.labels.resultsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                  {s.value}
                </div>
                <div className="text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gray-50" id="solucoes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.labels.solutionsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.labels.solutionsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.Icon || Gift;
              const color =
                index % 3 === 0
                  ? theme.solutionColors.primary
                  : index % 3 === 1
                  ? theme.solutionColors.secondary
                  : theme.solutionColors.tertiary;

              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow flex flex-col h-full"
                >
                  <CardHeader className="flex-shrink-0">
                    <div className="flex items-start space-x-3 text-gray-700">
                      <div className={`p-3 rounded-lg ${color} flex-shrink-0`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl mb-2">
                          {solution.title}
                        </CardTitle>
                        <CardDescription>
                          {solution.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {solution.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white" id="como-funciona">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.labels.howItWorksTitle}
            </h2>
            <p className="text-xl text-gray-600">
              {t.labels.howItWorksSubtitle}
            </p>
          </div>

          <div className="space-y-8">
            {useCases.map((useCase) => (
              <div
                key={useCase.step}
                className="flex items-center space-x-8 p-6 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                    {useCase.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {useCase.scenario}
                  </h3>
                  <p className="text-gray-600">{useCase.automation}</p>
                </div>
                <ArrowRight className="h-6 w-6 text-orange-600" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50" id="beneficios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.labels.benefitsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.Icon || BarChart3;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow flex flex-col h-full"
                >
                  <CardHeader className="flex-1">
                    <div className="flex items-start space-x-3 text-gray-700 mb-3">
                      <div
                        className={`p-3 rounded-lg ${theme.benefitColor} flex-shrink-0`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl flex-1">
                        {benefit.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-500">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white" id="cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.labels.casesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((tt, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader className="flex-1">
                  <CardContent className="p-0 flex flex-col h-full">
                    <blockquote className="text-gray-700 italic flex-1 mb-4">
                      "{tt.quote}"
                    </blockquote>
                    <div className="mt-auto">
                      <div className="font-semibold text-gray-900">
                        {tt.author}
                      </div>
                      <div className="text-sm text-gray-500">{tt.position}</div>
                    </div>
                  </CardContent>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white/80 text-black" id="demo">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{cta.title}</h2>
          <p className="text-xl mb-8 text-gray-500">{cta.subtitle}</p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

/* Modal de Personalização — traduzido dinamicamente */
function ProfileDialogContent({
  profile,
  onChange,
  onClose,
  locale,
  gradient,
}: {
  profile: Profile;
  onChange: (data: Partial<Profile>) => void;
  onClose: () => void;
  locale: Locale;
  gradient: string;
}) {
  const [name, setName] = useState(profile.name);
  const [industry, setIndustry] = useState<Industry>(
    profile.industry || "E-commerce"
  );
  const [status, setStatus] = useState<ClientStatus>(profile.status || "novo");

  const t = notrusLandingTexts[locale];

  const INDUSTRY_LABELS: Record<Locale, Record<Industry, string>> = {
    pt: {
      "E-commerce": "E-commerce",
      Imobiliário: "Imobiliário",
      Varejo: "Varejo",
      Educação: "Educação",
      Saúde: "Saúde",
      Financeiro: "Financeiro",
      SaaS: "SaaS",
      Serviços: "Serviços",
    },
    en: {
      "E-commerce": "E-commerce",
      Imobiliário: "Real Estate",
      Varejo: "Retail",
      Educação: "Education",
      Saúde: "Healthcare",
      Financeiro: "Financial Services",
      SaaS: "SaaS",
      Serviços: "Services",
    },
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onChange({ name, industry, status });
    onClose();
  };

  return (
    <div className="theme-personalize">
      <DialogContent className="bg-white text-gray-900 border border-gray-200 shadow-2xl">
        <form onSubmit={submit}>
          <DialogHeader>
            <DialogTitle
              className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}
            >
              {t.modal.title}
            </DialogTitle>
            <CardDescription className="text-gray-600">
              {t.modal.subtitle}
            </CardDescription>
          </DialogHeader>

          <div className="mt-4 space-y-4">
            {/* Nome */}
            <div className="space-y-2">
              <Label htmlFor="profile-name" className="text-gray-900">
                {t.modal.nameLabel}
              </Label>
              <Input
                id="profile-name"
                placeholder={t.modal.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
                className="bg-white text-gray-900 placeholder:text-gray-500 border border-gray-300 rounded-md shadow-sm outline-none transition-all focus:border-blue-500 focus-visible:ring-[3px] focus-visible:ring-blue-500/50"
              />
            </div>

            {/* Indústria */}
            <div className="space-y-2">
              <Label className="text-gray-900">{t.modal.industryLabel}</Label>
              <Select
                value={industry}
                onValueChange={(v) => setIndustry(v as Industry)}
              >
                <SelectTrigger className="w-full bg-white text-gray-900 border border-gray-300 hover:border-gray-400 focus-visible:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:ring-[3px] rounded-md px-3 py-2 text-sm shadow-sm outline-none transition-all data-[placeholder]:text-gray-500">
                  <SelectValue placeholder={t.modal.industryPlaceholder} />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900 border border-gray-200 shadow-lg rounded-md">
                  {INDUSTRY_OPTIONS.map((opt) => (
                    <SelectItem
                      key={opt}
                      value={opt}
                      className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    >
                      {INDUSTRY_LABELS[locale][opt]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Tipo de cliente */}
            <div className="space-y-2">
              <Label className="text-gray-900">{t.modal.statusLabel}</Label>
              <RadioGroup
                value={status}
                onValueChange={(v) => setStatus(v as ClientStatus)}
                className="grid grid-cols-2 gap-3"
              >
                <div className="flex items-center space-x-2 rounded-md border border-gray-300 bg-white p-3 hover:border-blue-500 transition-colors cursor-pointer">
                  <RadioGroupItem
                    id="status-novo"
                    value="novo"
                    className="border-2 border-gray-300 bg-white text-blue-600 focus-visible:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:ring-[3px] data-[state=checked]:border-blue-600"
                  />
                  <Label
                    htmlFor="status-novo"
                    className="text-gray-900 cursor-pointer"
                  >
                    {t.modal.statusNew}
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border border-gray-300 bg-white p-3 hover:border-blue-500 transition-colors cursor-pointer">
                  <RadioGroupItem
                    id="status-ret"
                    value="retornando"
                    className="border-2 border-gray-300 bg-white text-blue-600 focus-visible:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:ring-[3px] data-[state=checked]:border-blue-600"
                  />
                  <Label
                    htmlFor="status-ret"
                    className="text-gray-900 cursor-pointer"
                  >
                    {t.modal.statusReturning}
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <DialogFooter className="mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-2 border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-100 hover:border-gray-400 transition-colors"
            >
              {t.modal.cancel}
            </Button>
            <Button
              type="submit"
              className={`bg-gradient-to-r ${gradient} text-white shadow-md hover:opacity-90 transition-all`}
            >
              {t.modal.save}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
      <FloatingProfileCapture
        locale={locale}
        position="bottom-right"
        offsetY={20}
        showAfterScroll={10}
      />
    </div>
  );
}
