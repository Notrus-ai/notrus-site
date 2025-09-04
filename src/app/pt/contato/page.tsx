"use client";

import Footer from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import React from "react";
import { translations } from "@/utils/translations";
import { usePathname } from "next/navigation";
import otherCountries from "./other-countries.json";
import ContactForm from "@/components/ui/ContactForm";

export default function Contact() {
  const pathname = usePathname();
  const getLangFromPath = (path?: string) => {
    if (!path) return "en";
    const seg = path.split("/")[1];
    return seg === "pt" ? "pt" : "en";
  };

  const [language, setLanguage] = React.useState(() =>
    getLangFromPath(pathname));  
  const t = (key: string) => {
    return translations[language]?.[key] || key;
  };

  React.useEffect(() => {
    const lng = getLangFromPath(pathname);
    if (lng !== language) setLanguage(lng);
  }, [pathname]);

  const priorityCountries = [
    {
      code: "BR",
      name: "Brasil",
      dialCode: "+55",
      format: "(XX) XXXX-XXXX",
      flag: "🇧🇷",
    },
    {
      code: "GB",
      name: "Reino Unido",
      dialCode: "+44",
      format: "XXXX XXX XXXX",
      flag: "🇬🇧",
    },
    {
      code: "US",
      name: "Estados Unidos",
      dialCode: "+1",
      format: "(XXX) XXX-XXXX",
      flag: "🇺🇸",
    },
    {
      code: "IT",
      name: "Itália",
      dialCode: "+39",
      format: "XXX XXX XXXX",
      flag: "🇮🇹",
    },
    {
      code: "ES",
      name: "Espanha",
      dialCode: "+34",
      format: "XXX XX XX XX",
      flag: "🇪🇸",
    },
  ];

  const allCountries = [...priorityCountries, ...otherCountries];

  const [formData, setFormData] = React.useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    tickets: "",
    message: "",
  });

  const [selectedCountry, setSelectedCountry] = React.useState(
    priorityCountries[0]
  );
  const [showCountryDropdown, setShowCountryDropdown] = React.useState(false);
  const [countrySearch, setCountrySearch] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const filteredCountries = React.useMemo(() => {
    if (!countrySearch) return allCountries;
    return allCountries.filter(
      (country) =>
        country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
        country.dialCode.includes(countrySearch)
    );
  }, [countrySearch]);

  const formatPhoneByCountry = (value, country) => {
    const numbers = value.replace(/\D/g, "");
    const format = country.format;
    let formatted = "";
    let numberIndex = 0;

    for (let i = 0; i < format.length && numberIndex < numbers.length; i++) {
      if (format[i] === "X") {
        formatted += numbers[numberIndex];
        numberIndex++;
      } else {
        formatted += format[i];
      }
    }

    return formatted;
  };

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return value && !emailRegex.test(value) ? "Invalid email" : "";
      case "phone":
        if (value && value.length < 8) {
          return "Phone number too short";
        }
        return "";
      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;
    if (name === "phone") {
      formattedValue = formatPhoneByCountry(value, selectedCountry);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
    setCountrySearch("");

    if (formData.phone) {
      const formattedPhone = formatPhoneByCountry(formData.phone, country);
      setFormData((prev) => ({
        ...prev,
        phone: formattedPhone,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    const requiredFields = [
      "email",
      "firstName",
      "lastName",
      "company",
      "tickets",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "Required field";
      } else {
        const fieldError = validateField(field, formData[field]);
        if (fieldError) newErrors[field] = fieldError;
      }
    });

    Object.keys(formData).forEach((field) => {
      if (!requiredFields.includes(field) && formData[field]) {
        const fieldError = validateField(field, formData[field]);
        if (fieldError) newErrors[field] = fieldError;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append(
        "access_key",
        "9a1df9df-6912-4d9c-95af-17e7ca56cb3c"
      );
      formDataToSend.append("email", formData.email);
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("company", formData.company);
      formDataToSend.append(
        "phone",
        selectedCountry.dialCode + " " + formData.phone
      );
      formDataToSend.append("tickets", formData.tickets);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("country", selectedCountry.name);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          company: "",
          phone: "",
          tickets: "",
          message: "",
        });

        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header t={t} setLanguage={setLanguage} language={language} />

      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600">
        {/* Main Content */}
        <main className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-24 items-start">
              {/* Left Side - Information */}
              <div className="text-white">
                <div className="inline-block bg-[rgba(255,255,255,0.2)] bg-opacity-90 px-4 py-2 rounded-full text-sm mb-6 sm:mb-8 backdrop-blur-sm">
                  🚀 Revolucione seu atendimento ao cliente
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                  Melhore o atendimento ao cliente com agentes de IA.
                </h1>

                <p className="text-lg sm:text-xl opacity-90 mb-8 sm:mb-12 leading-relaxed">
                  Agende uma demonstração com nossa equipe de vendas para ver
                  como a Notrus pode ajudar a melhorar o atendimento ao cliente
                  por meio da IA.
                </p>

                {/* Benefits */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex gap-3 sm:gap-4 items-start">
                    <div className="text-xl sm:text-2xl bg-[rgba(255,255,255,0.2)] bg-opacity-20 p-2 sm:p-3 rounded-xl backdrop-blur-sm flex-shrink-0">
                      ⚡
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">
                        Entrega de valor em menos tempo
                      </h3>
                      <p className="opacity-90 leading-relaxed text-sm sm:text-base">
                        Construa e itere agentes de IA rapidamente,
                        integrando-se facilmente aos sistemas existentes para
                        entregar ROI em semanas, não em meses.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4 items-start">
                    <div className="text-xl sm:text-2xl bg-[rgba(255,255,255,0.2)] bg-opacity-20 p-2 sm:p-3 rounded-xl backdrop-blur-sm flex-shrink-0">
                      👁️
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">
                        Transparência incomparável
                      </h3>
                      <p className="opacity-90 leading-relaxed text-sm sm:text-base">
                        Tenha total visibilidade sobre por que os agentes de IA
                        tomam determinadas decisões, permitindo melhorias
                        contínuas no comportamento.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4 items-start">
                    <div className="text-xl sm:text-2xl bg-[rgba(255,255,255,0.2)] bg-opacity-20 p-2 sm:p-3 rounded-xl backdrop-blur-sm flex-shrink-0">
                      🛡️
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">
                        Resultados confiáveis em escala
                      </h3>
                      <p className="opacity-90 leading-relaxed text-sm sm:text-base">
                        Proteções de nível empresarial garantem interações
                        seguras e de alta qualidade que escalam facilmente com
                        sua empresa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="flex justify-center">
                <ContactForm language={language} />                
              </div>
            </div>
          </div>
        </main>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 text-center max-w-md mx-4 transform animate-pulse">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Mensagem enviada com sucesso!
              </h3>
              <p className="text-gray-600">
                Nossa equipe entrará em contato em breve.
              </p>
            </div>
          </div>
        )}

        {/* Overlay to close dropdown */}
        {showCountryDropdown && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowCountryDropdown(false)}
          />
        )}
      </div>

      <Footer t={t} setLanguage={setLanguage} language={language} />
    </>
  );
}
