"use client";

import { useState, useEffect } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { X, MessageCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { translations } from "@/utils/translations";
import { usePathname } from "next/navigation";

interface FloatingNewsletterProps {
  position?: "bottom-right" | "bottom-left";
  offsetY?: number;
  showAfterScroll?: number;
}

export function FloatingNewsletter({
  position = "bottom-right",
  offsetY = 20,
  showAfterScroll = 20,
}: FloatingNewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const pathname = usePathname();
  const language = pathname?.includes("/en") ? "en" : "pt";
  const positionClasses = {
    "bottom-right": "right-[20px]",
    "bottom-left": "left-[20px]",
  };

  const t = (key: string) => {
    const translation = translations[language as keyof typeof translations];
    return (translation as Record<string, string>)[key] ?? key;
  };

  useEffect(() => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setStatus("loading");

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          language,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Falha ao se inscrever");
      }

      setStatus("success");
      setMessage(
        language === "pt"
          ? "Obrigado por se inscrever!"
          : "Thank you for subscribing!"
      );
      setEmail("");

      setTimeout(() => setIsDismissed(true), 3000);
    } catch (err: unknown) {
      console.error("Erro ao se inscrever:", err);
      setStatus("error");
      setMessage(
        language === "pt"
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
        className="bg-gradient-to-br from-blue-600 to-purple-600 hover:shadow-xl transition-shadow rounded-full p-4 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={32} className="text-white" />
      </motion.div>
      <motion.div
        className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Sparkles size={14} />
      </motion.div>
    </motion.div>
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
            className={`fixed ${positionClasses[position]} z-50 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 max-w-sm w-full border border-gray-100/20`}
            style={{
              bottom: `${offsetY}px`,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMinimized(true)}
              className="absolute -top-3 -right-3 bg-white rounded-full p-1.5 text-gray-400 hover:text-gray-600 shadow-md border border-gray-100 transition-colors"
              aria-label={t("floatingNewsletterClose")}
            >
              <X size={16} />
            </motion.button>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("floatingNewsletterTitle")}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("floatingNewsletterSubtitle")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative text-gray-500">
                <Input
                  type="email"
                  placeholder={t("floatingNewsletterPlaceholder")}
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  disabled={status === "loading"}
                  required
                  className="w-full pl-4 pr-4 py-3 rounded-xl bg-white/50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl py-3 transition-all duration-300"
                >
                  {status === "loading" ? (
                    <motion.div
                      className="flex items-center justify-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      {t("floatingNewsletterSending")}
                    </motion.div>
                  ) : (
                    t("floatingNewsletterButton")
                  )}
                </Button>
              </motion.div>
            </form>

            {message && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm mt-3 text-center font-medium ${
                  status === "success"
                    ? "text-green-500 bg-green-50 py-2 px-3 rounded-lg"
                    : "text-red-500 bg-red-50 py-2 px-3 rounded-lg"
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
