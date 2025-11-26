"use client";

import { useState, useEffect } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { X, Mail, Sparkles, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingProfileCaptureProps {
  position?: "bottom-right" | "bottom-left";
  offsetY?: number;
  showAfterScroll?: number;
  locale: "pt" | "en";
}

export function FloatingProfileCapture({
  position = "bottom-right",
  offsetY = 20,
  showAfterScroll = 30,
  locale = "pt",
}: FloatingProfileCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [step, setStep] = useState<"form" | "preview">("form");

  const positionClasses = {
    "bottom-right": "right-[20px]",
    "bottom-left": "left-[20px]",
  };

  const texts = {
    pt: {
      title: "Receba um email personalizado",
      subtitle: "Veja como a Notrus pode transformar seu negócio",
      emailLabel: "E-mail",
      emailPlaceholder: "seu@email.com",
      previewButton: "Ver prévia do email",
      backButton: "Voltar",
      sendButton: "Receber email",
      sending: "Enviando...",
      subjectLine: "Descubra como a Notrus pode transformar seu negócio",
      emailPreview:
        "Automatize seu atendimento e aumente suas vendas com inteligência artificial. A Notrus oferece soluções personalizadas para seu negócio crescer.",
      ctaText: "Agendar demonstração gratuita",
      minimize: "Minimizar",
    },
    en: {
      title: "Get a personalized email",
      subtitle: "See how Notrus can transform your business",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      previewButton: "Preview email",
      backButton: "Back",
      sendButton: "Receive email",
      sending: "Sending...",
      subjectLine: "Discover how Notrus can transform your business",
      emailPreview:
        "Automate your customer service and increase your sales with artificial intelligence. Notrus offers personalized solutions for your business to grow.",
      ctaText: "Schedule free demo",
      minimize: "Minimize",
    },
  };

  const t = texts[locale];

  useEffect(() => {
    // Verifica se já foi preenchido antes
    const saved = localStorage.getItem("notrus-email-captured");
    if (saved) {
      setIsDismissed(true);
      return;
    }

    if (isDismissed) return;

    let rafId: number;
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;
          const docHeight = document.documentElement.scrollHeight;

          const scrollPercentage =
            (lastKnownScrollPosition / (docHeight - windowHeight)) * 100;
          setIsVisible(scrollPercentage >= showAfterScroll);

          ticking = false;
        });
      }

      ticking = true;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [showAfterScroll, isDismissed]);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handlePreview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) return;
    setStep("preview");
  };

  const handleSubmit = async () => {
    if (!isValidEmail(email)) return;

    try {
      setSubmitStatus("loading");

      const response = await fetch("/api/vertical-ecommerce", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          locale,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Falha ao salvar email");
      }

      setSubmitStatus("success");
      setMessage(data.message);

      localStorage.setItem("notrus-email-captured", "true");

      setTimeout(() => {
        setIsDismissed(true);
      }, 2000);
    } catch (err: unknown) {
      console.error("Erro ao salvar email:", err);
      setSubmitStatus("error");
      setMessage(
        locale === "pt"
          ? err instanceof Error
            ? err.message
            : "Ocorreu um erro. Tente novamente."
          : err instanceof Error
          ? err.message
          : "An error occurred. Please try again."
      );
    }
  };

  const renderMinimizedVersion = () => (
    <motion.div
      key="minimized"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className={`fixed ${positionClasses[position]} z-50 cursor-pointer`}
      style={{
        bottom: `${offsetY}px`,
        willChange: "transform, opacity",
        transform: "translateZ(0)",
      }}
      onClick={() => setIsMinimized(false)}
    >
      <motion.div
        className="bg-gradient-to-br from-orange-500 to-orange-600 hover:shadow-xl transition-shadow rounded-full p-4 flex items-center justify-center relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Mail size={32} className="text-white" />
        <motion.div
          className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles size={14} />
        </motion.div>
      </motion.div>
    </motion.div>
  );

  const renderFormStep = () => (
    <form onSubmit={handlePreview} className="space-y-4">
      <div className="space-y-2">
        <Label
          htmlFor="floating-email"
          className="text-gray-700 text-sm font-medium"
        >
          {t.emailLabel} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="floating-email"
          type="email"
          placeholder={t.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`text-gray-700 w-full rounded-lg bg-white/80 ${
            email && !isValidEmail(email)
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-gray-200 focus:border-orange-500 focus:ring-orange-200"
          } focus:ring-2 transition-all`}
        />
        {email && !isValidEmail(email) && (
          <p className="text-red-500 text-xs mt-1">
            {locale === "pt"
              ? "Por favor, insira um e-mail válido."
              : "Please enter a valid email address."}
          </p>
        )}
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          disabled={!isValidEmail(email)}
          className={`w-full font-medium rounded-lg py-3 transition-all duration-300 ${
            isValidEmail(email)
              ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {t.previewButton}
        </Button>
      </motion.div>
    </form>
  );

  const renderPreviewStep = () => (
    <div className="space-y-4">
      <div className="bg-white/80 rounded-lg p-4 border border-gray-200">
        <div className="flex items-start gap-3 mb-3">
          <div className="bg-orange-100 p-2 rounded-lg">
            <Mail className="text-orange-600" size={20} />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-500 mb-1">
              {locale === "pt" ? "Assunto:" : "Subject:"}
            </p>
            <p className="font-semibold text-gray-900 text-sm leading-tight">
              {t.subjectLine}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-3">
          <p className="text-sm text-gray-700 mb-3 leading-relaxed">
            {t.emailPreview}
          </p>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium">
            {t.ctaText}
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => setStep("form")}
          className="flex-1 border-2 border-gray-300 hover:bg-gray-50"
        >
          {t.backButton}
        </Button>
        <motion.div
          className="flex-1"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={submitStatus === "loading"}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg py-3"
          >
            {submitStatus === "loading" ? (
              <motion.div className="flex items-center justify-center gap-2">
                <motion.div
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                {t.sending}
              </motion.div>
            ) : (
              <>
                <Send size={16} className="mr-2" />
                {t.sendButton}
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      {isVisible &&
        !isDismissed &&
        (isMinimized ? (
          renderMinimizedVersion()
        ) : (
          <motion.div
            key="expanded"
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.95 }}
            className={`fixed ${positionClasses[position]} z-50 bg-gradient-to-br from-white to-orange-50/30 backdrop-blur-sm rounded-2xl shadow-2xl p-6 max-w-md w-full border border-orange-100/20`}
            style={{
              bottom: `${offsetY}px`,
              boxShadow: "0 8px 32px rgba(251, 146, 60, 0.15)",
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMinimized(true)}
              className="absolute -top-3 -right-3 bg-white rounded-full p-1.5 text-gray-400 hover:text-gray-600 shadow-md border border-gray-100 transition-colors"
              aria-label={t.minimize}
            >
              <X size={16} />
            </motion.button>

            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  {t.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {step === "form" ? renderFormStep() : renderPreviewStep()}

            {message && submitStatus !== "loading" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm mt-3 text-center font-medium ${
                  submitStatus === "success"
                    ? "text-green-600 bg-green-50 py-2 px-3 rounded-lg"
                    : "text-red-600 bg-red-50 py-2 px-3 rounded-lg"
                }`}
              >
                {message}
              </motion.p>
            )}
          </motion.div>
        ))}
    </AnimatePresence>
  );
}
