"use client";

import React, { useMemo, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { contactFormTranslations } from "@/utils/translations";
import { useGtagEvent } from "@/components/ui/gtagNavigation";

type SupportedLang = "pt" | "en";

type ContactFormProps = {
  language?: SupportedLang;
};

type Country = {
  code: string;
  name: string;
  dialCode: string;
  format: string;
  flag: string;
};

type FormState = {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  tickets: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactForm({ language: lang }: ContactFormProps) {
  const track = useGtagEvent();
  const pathname = usePathname();

  const getLangFromPath = (path?: string | null): SupportedLang => {
    if (!path) return "en";
    const seg = path.split("/")[1];
    return seg === "pt" ? "pt" : "en";
  };

  const [language, setLanguage] = useState<SupportedLang>(
    lang || getLangFromPath(pathname)
  );

  const t = (key: string): string => {
    const dict = contactFormTranslations as Record<
      SupportedLang,
      Record<string, string>
    >;
    return dict[language]?.[key] ?? key;
  };

  const priorityCountries: Country[] = [
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

  const otherCountries: Country[] = [
    {
      code: "AF",
      name: "Afeganistão",
      dialCode: "+93",
      format: "XX XXX XXXX",
      flag: "🇦🇫",
    },
    {
      code: "AL",
      name: "Albânia",
      dialCode: "+355",
      format: "XX XXX XXXX",
      flag: "🇦🇱",
    },
    {
      code: "DZ",
      name: "Argélia",
      dialCode: "+213",
      format: "XXX XX XX XX",
      flag: "🇩🇿",
    },
    {
      code: "AD",
      name: "Andorra",
      dialCode: "+376",
      format: "XXX XXX",
      flag: "🇦🇩",
    },
    {
      code: "AO",
      name: "Angola",
      dialCode: "+244",
      format: "XXX XXX XXX",
      flag: "🇦🇴",
    },
    {
      code: "AR",
      name: "Argentina",
      dialCode: "+54",
      format: "XX XXXX-XXXX",
      flag: "🇦🇷",
    },
    {
      code: "AM",
      name: "Armênia",
      dialCode: "+374",
      format: "XX XXX XXX",
      flag: "🇦🇲",
    },
    {
      code: "AU",
      name: "Austrália",
      dialCode: "+61",
      format: "XXX XXX XXX",
      flag: "🇦🇺",
    },
    {
      code: "AT",
      name: "Áustria",
      dialCode: "+43",
      format: "XXX XXX XXXX",
      flag: "🇦🇹",
    },
    {
      code: "AZ",
      name: "Azerbaijão",
      dialCode: "+994",
      format: "XX XXX XX XX",
      flag: "🇦🇿",
    },
    {
      code: "ZW",
      name: "Zimbábue",
      dialCode: "+263",
      format: "XX XXX XXXX",
      flag: "🇿🇼",
    },
  ];

  const allCountries: Country[] = useMemo(
    () => [...priorityCountries, ...otherCountries],
    []
  );

  const getCountryDisplayName = (
    country: Pick<Country, "code" | "name">,
    lng: SupportedLang
  ): string => {
    try {
      const DisplayNamesCtor = (
        Intl as unknown as {
          DisplayNames?: new (
            loc: string[] | string,
            opt: { type: "region" }
          ) => { of: (code: string) => string | undefined };
        }
      ).DisplayNames;
      if (DisplayNamesCtor) {
        const dn = new DisplayNamesCtor([lng], { type: "region" });
        const localized = dn.of(country.code);
        if (localized) return localized;
      }
    } catch {}
    return country.name;
  };

  const getDefaultCountryByLanguage = (l: SupportedLang): Country => {
    if (l === "pt") return priorityCountries[0];
    return priorityCountries[1];
  };

  const [selectedCountry, setSelectedCountry] = useState<Country>(
    getDefaultCountryByLanguage(language)
  );
  const [showCountryDropdown, setShowCountryDropdown] =
    useState<boolean>(false);
  const [countrySearch, setCountrySearch] = useState<string>("");

  useEffect(() => {
    const lng = getLangFromPath(pathname);
    if (lng !== language) {
      setLanguage(lng);
      setSelectedCountry(getDefaultCountryByLanguage(lng));
    }
  }, [pathname]);

  const filteredCountries: Country[] = useMemo(() => {
    if (!countrySearch) return allCountries;
    const q = countrySearch.toLowerCase();
    return allCountries.filter((country) => {
      const displayName = getCountryDisplayName(
        country,
        language
      ).toLowerCase();
      return (
        displayName.includes(q) || country.dialCode.includes(countrySearch)
      );
    });
  }, [countrySearch, language, allCountries]);

  const formatPhoneByCountry = (
    value: string,
    country: Pick<Country, "format">
  ): string => {
    const numbers = value.replace(/\D/g, "");
    const mask = country.format;
    let formatted = "";
    let numberIndex = 0;

    for (let i = 0; i < mask.length && numberIndex < numbers.length; i++) {
      if (mask[i] === "X") {
        formatted += numbers[numberIndex];
        numberIndex++;
      } else {
        formatted += mask[i];
      }
    }
    return formatted;
  };

  const handleCountrySelect = (country: Country): void => {
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

  const personalDomains: Set<string> = useMemo(
    () =>
      new Set<string>([
        "gmail.com",
        "googlemail.com",
        "hotmail.com",
        "outlook.com",
        "live.com",
        "yahoo.com",
        "ymail.com",
        "aol.com",
        "icloud.com",
        "me.com",
        "proton.me",
        "protonmail.com",
        "zoho.com",
        "mail.com",
        "gmx.com",
        "yandex.com",
        "bol.com.br",
        "uol.com.br",
        "terra.com.br",
        "ig.com.br",
        "r7.com",
        "globo.com",
      ]),
    []
  );

  const getEmailDomain = (email: string): string | null => {
    const m = String(email)
      .toLowerCase()
      .match(/^[^\s@]+@([^\s@]+\.[^\s@]+)$/);
    return m ? m[1] : null;
  };

  const isProfessionalEmail = (email: string): boolean => {
    const domain = getEmailDomain(email);
    if (!domain) return false;
    return !personalDomains.has(domain);
  };

  const [formData, setFormData] = useState<FormState>({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    tickets: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const validateField = (name: keyof FormState, value: string): string => {
    switch (name) {
      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value)) return "Invalid email";
        if (!isProfessionalEmail(value)) {
          return language === "pt"
            ? "Use um e-mail corporativo (não aceitamos domínios pessoais)."
            : "Please use a corporate email (personal domains are not accepted).";
        }
        return "";
      }
      case "phone": {
        if (value && value.replace(/\D/g, "").length < 8) {
          return language === "pt"
            ? "Telefone muito curto"
            : "Phone number too short";
        }
        return "";
      }
      default:
        return "";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value } = e.target;

    let formattedValue = value;
    if (name === "phone") {
      formattedValue = formatPhoneByCountry(value, selectedCountry);
    }

    setFormData(
      (prev) =>
        ({
          ...prev,
          [name]: formattedValue,
        } as FormState)
    );

    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value } = e.target;
    const key = name as keyof FormState;
    const error = validateField(key, value);
    setErrors((prev) => ({
      ...prev,
      [key]: error,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    const requiredFields: (keyof FormState)[] = [
      "email",
      "firstName",
      "lastName",
      "company",
      "tickets",
    ];

    requiredFields.forEach((field) => {
      const v = formData[field];
      if (!String(v || "").trim()) {
        newErrors[field] =
          language === "pt" ? "Campo obrigatório" : "Required field";
      } else {
        const fieldError = validateField(field, v);
        if (fieldError) newErrors[field] = fieldError;
      }
    });

    (Object.keys(formData) as (keyof FormState)[]).forEach((field) => {
      if (!requiredFields.includes(field)) {
        const v = formData[field];
        if (v) {
          const fieldError = validateField(field, v);
          if (fieldError) newErrors[field] = fieldError;
        }
      }
    });

    if (!newErrors.email && !isProfessionalEmail(formData.email)) {
      newErrors.email =
        language === "pt"
          ? "Use um e-mail corporativo (não aceitamos domínios pessoais)."
          : "Please use a corporate email (personal domains are not accepted).";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

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
        `${selectedCountry.dialCode} ${formData.phone}`
      );
      formDataToSend.append("tickets", formData.tickets);
      formDataToSend.append("message", formData.message);
      formDataToSend.append(
        "country",
        getCountryDisplayName(selectedCountry, language)
      );

      const domain = getEmailDomain(formData.email) ?? "";
      formDataToSend.append("email_domain", domain);

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

        track("conversion_event_submit_lead_form", {
          event_category: "lead",
          event_label: "botao_principal",
        });

        window.setTimeout(() => setShowSuccess(false), 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      alert(
        language === "pt"
          ? "Erro ao enviar mensagem. Tente novamente."
          : "Error sending message. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <main className="py-8 sm:py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 w-full shadow-2xl mx-2 sm:mx-0">
                <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">
                  {t("title")}
                </h2>

                <form
                  onSubmit={handleSubmit}
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Email */}
                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                      {t("email")} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder={
                        language === "pt"
                          ? "seu.nome@empresa.com"
                          : "your.name@company.com"
                      }
                      className={`w-full bg-gray-100 border rounded-lg px-4 py-3 text-gray-800 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:bg-gray-50 ${
                        errors.email
                          ? "border-red-400 bg-red-50"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      {language === "pt"
                        ? "Use seu e-mail corporativo. Domínios pessoais (ex.: gmail.com, outlook.com) não são aceitos."
                        : "Use your corporate email. Personal domains (e.g., gmail.com, outlook.com) are not accepted."}
                    </p>
                  </div>

                  {/* Nome e Sobrenome */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600 text-sm font-medium mb-2">
                        {t("name")} *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full bg-gray-100 border rounded-lg px-4 py-3 text-gray-800 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:bg-gray-50 ${
                          errors.firstName
                            ? "border-red-400 bg-red-50"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-600 text-sm font-medium mb-2">
                        {t("surname")} *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full bg-gray-100 border rounded-lg px-4 py-3 text-gray-800 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:bg-gray-50 ${
                          errors.lastName
                            ? "border-red-400 bg-red-50"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Empresa */}
                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                      {t("company")} *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full bg-gray-100 border rounded-lg px-4 py-3 text-gray-800 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:bg-gray-50 ${
                        errors.company
                          ? "border-red-400 bg-red-50"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Telefone com seletor de país */}
                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                      {t("phone")}
                    </label>
                    <div className="flex">
                      {/* Country Selector */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() =>
                            setShowCountryDropdown(!showCountryDropdown)
                          }
                          className="bg-gray-100 border border-gray-300 border-r-0 rounded-l-lg px-3 py-3 flex items-center gap-2 hover:bg-gray-50 transition-colors focus:outline-none focus:border-indigo-500 text-gray-500"
                        >
                          <span className="text-sm flex items-center gap-1">
                            <span className="uppercase mr-1">
                              {selectedCountry.code}
                            </span>
                            {selectedCountry.dialCode}
                          </span>
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Country Dropdown */}
                        {showCountryDropdown && (
                          <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-64 overflow-hidden text-gray-500">
                            {/* Search */}
                            <div className="p-3 border-b border-gray-200">
                              <input
                                type="text"
                                placeholder={t("searchCountry")}
                                value={countrySearch}
                                onChange={(e) =>
                                  setCountrySearch(e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-500"
                              />
                            </div>

                            {/* Countries List */}
                            <div className="max-h-48 overflow-y-auto">
                              {/* Priority Countries */}
                              {!countrySearch && (
                                <>
                                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 bg-gray-50">
                                    {t("mainCountries")}
                                  </div>
                                  {priorityCountries.map((country) => (
                                    <button
                                      key={country.code}
                                      type="button"
                                      onClick={() =>
                                        handleCountrySelect(country)
                                      }
                                      className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm"
                                    >
                                      <span className="text-lg">
                                        {country.flag}
                                      </span>
                                      <span className="flex-1">
                                        {getCountryDisplayName(
                                          country,
                                          language
                                        )}
                                      </span>
                                      <span className="text-gray-500">
                                        {country.dialCode}
                                      </span>
                                    </button>
                                  ))}
                                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 bg-gray-50">
                                    {t("otherCountries")}
                                  </div>
                                </>
                              )}

                              {/* Filtered Countries */}
                              {filteredCountries.map((country) => {
                                const isPriority = priorityCountries.some(
                                  (c) => c.code === country.code
                                );
                                if (!countrySearch && isPriority) return null;
                                return (
                                  <button
                                    key={country.code}
                                    type="button"
                                    onClick={() => handleCountrySelect(country)}
                                    className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm"
                                  >
                                    <span className="text-lg">
                                      {country.flag}
                                    </span>
                                    <span className="flex-1">
                                      {getCountryDisplayName(country, language)}
                                    </span>
                                    <span className="text-gray-500">
                                      {country.dialCode}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Phone Input */}
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder={selectedCountry.format}
                        className={`flex-1 bg-gray-100 border rounded-r-lg px-4 py-3 text-gray-800 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:bg-gray-50 text-sm ${
                          errors.phone
                            ? "border-red-400 bg-red-50"
                            : "border-gray-300"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Tickets */}
                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                      {t("monthlyTickets")}
                    </label>
                    <select
                      name="tickets"
                      value={formData.tickets}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full bg-gray-100 border rounded-lg px-4 py-3 text-gray-500 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:bg-gray-50 cursor-pointer ${
                        errors.tickets
                          ? "border-red-400 bg-red-50"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">{t("selectOptions")}</option>
                      <option value="0-100">0-100</option>
                      <option value="100-500">100-500</option>
                      <option value="500-1000">500-1000</option>
                      <option value="1000-5000">1000-5000</option>
                      <option value="5000+">5000+</option>
                    </select>
                    {errors.tickets && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.tickets}
                      </p>
                    )}
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                      {t("message")}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder={t("messagePlaceholder")}
                      className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:bg-gray-50 resize-vertical min-h-24"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-200 mt-4 ${
                      isLoading
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/40"
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        {t("sending")}
                      </div>
                    ) : (
                      t("sendMessage")
                    )}
                  </button>
                </form>
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
                {t("messageSent")}
              </h3>
              <p className="text-gray-600">{t("contactResponse")}</p>
            </div>
          </div>
        )}

        {/* Overlay para fechar o dropdown de países */}
        {showCountryDropdown && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowCountryDropdown(false)}
          />
        )}
      </div>
    </>
  );
}
