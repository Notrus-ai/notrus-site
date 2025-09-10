"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { contactFormTranslations } from "@/utils/translations";
import { useGtagNavigate } from "@/components/ui/gtagNavigation";

type ContactFormProps = {
  language?: "pt" | "en";
};

export default function ContactForm({ language: lang }: ContactFormProps) {
  const gnav = useGtagNavigate();
  const pathname = usePathname();
  const getLangFromPath = (path?: string) => {
    if (!path) return "en";
    const seg = path.split("/")[1];
    return seg === "pt" ? "pt" : "en";
  };

  const [language, setLanguage] = useState(
    lang || getLangFromPath(pathname) || "en"
  );
  const t = (key: string) => {
    return contactFormTranslations[language]?.[key] || key;
  };
  React.useEffect(() => {
    const lng = getLangFromPath(pathname);
    if (lng !== language) {
      setLanguage(lng);
      setSelectedCountry(getDefaultCountryByLanguage(lng));
    }
  }, [pathname, language]);

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

  const otherCountries = [
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
      code: "BH",
      name: "Bahrein",
      dialCode: "+973",
      format: "XXXX XXXX",
      flag: "🇧🇭",
    },
    {
      code: "BD",
      name: "Bangladesh",
      dialCode: "+880",
      format: "XXXX-XXXX",
      flag: "🇧🇩",
    },
    {
      code: "BY",
      name: "Bielorrússia",
      dialCode: "+375",
      format: "XX XXX-XX-XX",
      flag: "🇧🇾",
    },
    {
      code: "BE",
      name: "Bélgica",
      dialCode: "+32",
      format: "XXX XX XX XX",
      flag: "🇧🇪",
    },
    {
      code: "BZ",
      name: "Belize",
      dialCode: "+501",
      format: "XXX-XXXX",
      flag: "🇧🇿",
    },
    {
      code: "BJ",
      name: "Benim",
      dialCode: "+229",
      format: "XX XX XX XX",
      flag: "🇧🇯",
    },
    {
      code: "BT",
      name: "Butão",
      dialCode: "+975",
      format: "XX XX XX XX",
      flag: "🇧🇹",
    },
    {
      code: "BO",
      name: "Bolívia",
      dialCode: "+591",
      format: "XXXX XXXX",
      flag: "🇧🇴",
    },
    {
      code: "BA",
      name: "Bósnia e Herzegovina",
      dialCode: "+387",
      format: "XX-XXX-XXX",
      flag: "🇧🇦",
    },
    {
      code: "BW",
      name: "Botsuana",
      dialCode: "+267",
      format: "XX XXX XXX",
      flag: "🇧🇼",
    },
    {
      code: "BN",
      name: "Brunei",
      dialCode: "+673",
      format: "XXX XXXX",
      flag: "🇧🇳",
    },
    {
      code: "BG",
      name: "Bulgária",
      dialCode: "+359",
      format: "XX XXX XXXX",
      flag: "🇧🇬",
    },
    {
      code: "BF",
      name: "Burkina Faso",
      dialCode: "+226",
      format: "XX XX XX XX",
      flag: "🇧🇫",
    },
    {
      code: "BI",
      name: "Burundi",
      dialCode: "+257",
      format: "XX XX XX XX",
      flag: "🇧🇮",
    },
    {
      code: "KH",
      name: "Camboja",
      dialCode: "+855",
      format: "XX XXX XXX",
      flag: "🇰🇭",
    },
    {
      code: "CM",
      name: "Camarões",
      dialCode: "+237",
      format: "XXXX XXXX",
      flag: "🇨🇲",
    },
    {
      code: "CA",
      name: "Canadá",
      dialCode: "+1",
      format: "(XXX) XXX-XXXX",
      flag: "🇨🇦",
    },
    {
      code: "CV",
      name: "Cabo Verde",
      dialCode: "+238",
      format: "XXX XX XX",
      flag: "🇨🇻",
    },
    {
      code: "CF",
      name: "República Centro-Africana",
      dialCode: "+236",
      format: "XX XX XX XX",
      flag: "🇨🇫",
    },
    {
      code: "TD",
      name: "Chade",
      dialCode: "+235",
      format: "XX XX XX XX",
      flag: "🇹🇩",
    },
    {
      code: "CL",
      name: "Chile",
      dialCode: "+56",
      format: "X XXXX XXXX",
      flag: "🇨🇱",
    },
    {
      code: "CN",
      name: "China",
      dialCode: "+86",
      format: "XXX XXXX XXXX",
      flag: "🇨🇳",
    },
    {
      code: "CO",
      name: "Colômbia",
      dialCode: "+57",
      format: "XXX XXX XXXX",
      flag: "🇨🇴",
    },
    {
      code: "KM",
      name: "Comores",
      dialCode: "+269",
      format: "XXX XXXX",
      flag: "🇰🇲",
    },
    {
      code: "CG",
      name: "Congo",
      dialCode: "+242",
      format: "XX XXX XXXX",
      flag: "🇨🇬",
    },
    {
      code: "CR",
      name: "Costa Rica",
      dialCode: "+506",
      format: "XXXX XXXX",
      flag: "🇨🇷",
    },
    {
      code: "HR",
      name: "Croácia",
      dialCode: "+385",
      format: "XX XXX XXXX",
      flag: "🇭🇷",
    },
    {
      code: "CU",
      name: "Cuba",
      dialCode: "+53",
      format: "XXXX XXXX",
      flag: "🇨🇺",
    },
    {
      code: "CY",
      name: "Chipre",
      dialCode: "+357",
      format: "XX XXX XXX",
      flag: "🇨🇾",
    },
    {
      code: "CZ",
      name: "República Tcheca",
      dialCode: "+420",
      format: "XXX XXX XXX",
      flag: "🇨🇿",
    },
    {
      code: "DK",
      name: "Dinamarca",
      dialCode: "+45",
      format: "XX XX XX XX",
      flag: "🇩🇰",
    },
    {
      code: "DJ",
      name: "Djibuti",
      dialCode: "+253",
      format: "XX XX XX XX",
      flag: "🇩🇯",
    },
    {
      code: "DM",
      name: "Dominica",
      dialCode: "+1767",
      format: "XXX XXXX",
      flag: "🇩🇲",
    },
    {
      code: "DO",
      name: "República Dominicana",
      dialCode: "+1",
      format: "(XXX) XXX-XXXX",
      flag: "🇩🇴",
    },
    {
      code: "EC",
      name: "Equador",
      dialCode: "+593",
      format: "XX XXX XXXX",
      flag: "🇪🇨",
    },
    {
      code: "EG",
      name: "Egito",
      dialCode: "+20",
      format: "XXX XXX XXXX",
      flag: "🇪🇬",
    },
    {
      code: "SV",
      name: "El Salvador",
      dialCode: "+503",
      format: "XXXX XXXX",
      flag: "🇸🇻",
    },
    {
      code: "GQ",
      name: "Guiné Equatorial",
      dialCode: "+240",
      format: "XXX XXX XXX",
      flag: "🇬🇶",
    },
    {
      code: "ER",
      name: "Eritreia",
      dialCode: "+291",
      format: "X XXX XXX",
      flag: "🇪🇷",
    },
    {
      code: "EE",
      name: "Estônia",
      dialCode: "+372",
      format: "XXXX XXXX",
      flag: "🇪🇪",
    },
    {
      code: "ET",
      name: "Etiópia",
      dialCode: "+251",
      format: "XX XXX XXXX",
      flag: "🇪🇹",
    },
    {
      code: "FJ",
      name: "Fiji",
      dialCode: "+679",
      format: "XXX XXXX",
      flag: "🇫🇯",
    },
    {
      code: "FI",
      name: "Finlândia",
      dialCode: "+358",
      format: "XX XXX XXXX",
      flag: "🇫🇮",
    },
    {
      code: "FR",
      name: "França",
      dialCode: "+33",
      format: "XX XX XX XX XX",
      flag: "🇫🇷",
    },
    {
      code: "GA",
      name: "Gabão",
      dialCode: "+241",
      format: "XX XX XX XX",
      flag: "🇬🇦",
    },
    {
      code: "GM",
      name: "Gâmbia",
      dialCode: "+220",
      format: "XXX XXXX",
      flag: "🇬🇲",
    },
    {
      code: "GE",
      name: "Geórgia",
      dialCode: "+995",
      format: "XXX XXX XXX",
      flag: "🇬🇪",
    },
    {
      code: "DE",
      name: "Alemanha",
      dialCode: "+49",
      format: "XXX XXXX",
      flag: "🇩🇪",
    },
    {
      code: "GH",
      name: "Gana",
      dialCode: "+233",
      format: "XXX XXX XXXX",
      flag: "🇬🇭",
    },
    {
      code: "GR",
      name: "Grécia",
      dialCode: "+30",
      format: "XXX XXX XXXX",
      flag: "🇬🇷",
    },
    {
      code: "GD",
      name: "Granada",
      dialCode: "+1473",
      format: "XXX XXXX",
      flag: "🇬🇩",
    },
    {
      code: "GT",
      name: "Guatemala",
      dialCode: "+502",
      format: "XXXX XXXX",
      flag: "🇬🇹",
    },
    {
      code: "GN",
      name: "Guiné",
      dialCode: "+224",
      format: "XXX XXX XXX",
      flag: "🇬🇳",
    },
    {
      code: "GW",
      name: "Guiné-Bissau",
      dialCode: "+245",
      format: "XXX XXXX",
      flag: "🇬🇼",
    },
    {
      code: "GY",
      name: "Guiana",
      dialCode: "+592",
      format: "XXX XXXX",
      flag: "🇬🇾",
    },
    {
      code: "HT",
      name: "Haiti",
      dialCode: "+509",
      format: "XXXX XXXX",
      flag: "🇭🇹",
    },
    {
      code: "HN",
      name: "Honduras",
      dialCode: "+504",
      format: "XXXX XXXX",
      flag: "🇭🇳",
    },
    {
      code: "HU",
      name: "Hungria",
      dialCode: "+36",
      format: "XX XXX XXXX",
      flag: "🇭🇺",
    },
    {
      code: "IS",
      name: "Islândia",
      dialCode: "+354",
      format: "XXX XXXX",
      flag: "🇮🇸",
    },
    {
      code: "IN",
      name: "Índia",
      dialCode: "+91",
      format: "XXXX XXXX",
      flag: "🇮🇳",
    },
    {
      code: "ID",
      name: "Indonésia",
      dialCode: "+62",
      format: "XXX-XXX-XXXX",
      flag: "🇮🇩",
    },
    {
      code: "IR",
      name: "Irã",
      dialCode: "+98",
      format: "XXX XXX XXXX",
      flag: "🇮🇷",
    },
    {
      code: "IQ",
      name: "Iraque",
      dialCode: "+964",
      format: "XXX XXX XXXX",
      flag: "🇮🇶",
    },
    {
      code: "IE",
      name: "Irlanda",
      dialCode: "+353",
      format: "XX XXX XXXX",
      flag: "🇮🇪",
    },
    {
      code: "IL",
      name: "Israel",
      dialCode: "+972",
      format: "XX-XXX-XXXX",
      flag: "🇮🇱",
    },
    {
      code: "JM",
      name: "Jamaica",
      dialCode: "+1876",
      format: "XXX XXXX",
      flag: "🇯🇲",
    },
    {
      code: "JP",
      name: "Japão",
      dialCode: "+81",
      format: "XX-XXXX-XXXX",
      flag: "🇯🇵",
    },
    {
      code: "JO",
      name: "Jordânia",
      dialCode: "+962",
      format: "X XXXX XXXX",
      flag: "🇯🇴",
    },
    {
      code: "KZ",
      name: "Cazaquistão",
      dialCode: "+7",
      format: "XXX XXX XX XX",
      flag: "🇰🇿",
    },
    {
      code: "KE",
      name: "Quênia",
      dialCode: "+254",
      format: "XXX XXXX",
      flag: "🇰🇪",
    },
    {
      code: "KI",
      name: "Kiribati",
      dialCode: "+686",
      format: "XXXX",
      flag: "🇰🇮",
    },
    {
      code: "KP",
      name: "Coreia do Norte",
      dialCode: "+850",
      format: "XXX XXX XXXX",
      flag: "🇰🇵",
    },
    {
      code: "KR",
      name: "Coreia do Sul",
      dialCode: "+82",
      format: "XX-XXXX-XXXX",
      flag: "🇰🇷",
    },
    {
      code: "KW",
      name: "Kuwait",
      dialCode: "+965",
      format: "XXXX XXXX",
      flag: "🇰🇼",
    },
    {
      code: "KG",
      name: "Quirguistão",
      dialCode: "+996",
      format: "XXX XXX XXX",
      flag: "🇰🇬",
    },
    {
      code: "LA",
      name: "Laos",
      dialCode: "+856",
      format: "XX XXX XXX",
      flag: "🇱🇦",
    },
    {
      code: "LV",
      name: "Letônia",
      dialCode: "+371",
      format: "XXXX XXXX",
      flag: "🇱🇻",
    },
    {
      code: "LB",
      name: "Líbano",
      dialCode: "+961",
      format: "XX XXX XXX",
      flag: "🇱🇧",
    },
    {
      code: "LS",
      name: "Lesoto",
      dialCode: "+266",
      format: "XXXX XXXX",
      flag: "🇱🇸",
    },
    {
      code: "LR",
      name: "Libéria",
      dialCode: "+231",
      format: "XXX XXX XXXX",
      flag: "🇱🇷",
    },
    {
      code: "LY",
      name: "Líbia",
      dialCode: "+218",
      format: "XX-XXXX",
      flag: "🇱🇾",
    },
    {
      code: "LI",
      name: "Liechtenstein",
      dialCode: "+423",
      format: "XXX XX XX",
      flag: "🇱🇮",
    },
    {
      code: "LT",
      name: "Lituânia",
      dialCode: "+370",
      format: "XXX XXXX",
      flag: "🇱🇹",
    },
    {
      code: "LU",
      name: "Luxemburgo",
      dialCode: "+352",
      format: "XXX XXX XXX",
      flag: "🇱🇺",
    },
    {
      code: "MK",
      name: "Macedônia do Norte",
      dialCode: "+389",
      format: "XX XXX XXX",
      flag: "🇲🇰",
    },
    {
      code: "MG",
      name: "Madagáscar",
      dialCode: "+261",
      format: "XX XX XXX XX",
      flag: "🇲🇬",
    },
    {
      code: "MW",
      name: "Malawi",
      dialCode: "+265",
      format: "XXX XX XX XX",
      flag: "🇲🇼",
    },
    {
      code: "MY",
      name: "Malásia",
      dialCode: "+60",
      format: "XX-XXX XXXX",
      flag: "🇲🇾",
    },
    {
      code: "MV",
      name: "Maldivas",
      dialCode: "+960",
      format: "XXX-XXXX",
      flag: "🇲🇻",
    },
    {
      code: "ML",
      name: "Mali",
      dialCode: "+223",
      format: "XXXX XXXX",
      flag: "🇲🇱",
    },
    {
      code: "MT",
      name: "Malta",
      dialCode: "+356",
      format: "XXXX XXXX",
      flag: "🇲🇹",
    },
    {
      code: "MH",
      name: "Ilhas Marshall",
      dialCode: "+692",
      format: "XXX-XXXX",
      flag: "🇲🇭",
    },
    {
      code: "MR",
      name: "Mauritânia",
      dialCode: "+222",
      format: "XXXX XXXX",
      flag: "🇲🇷",
    },
    {
      code: "MU",
      name: "Maurício",
      dialCode: "+230",
      format: "XXXX XXXX",
      flag: "🇲🇺",
    },
    {
      code: "MX",
      name: "México",
      dialCode: "+52",
      format: "XXX XXX XXXX",
      flag: "🇲🇽",
    },
    {
      code: "FM",
      name: "Micronésia",
      dialCode: "+691",
      format: "XXX XXXX",
      flag: "🇫🇲",
    },
    {
      code: "MD",
      name: "Moldávia",
      dialCode: "+373",
      format: "XXXX XXXX",
      flag: "🇲🇩",
    },
    {
      code: "MC",
      name: "Mônaco",
      dialCode: "+377",
      format: "XX XX XX XX",
      flag: "🇲🇨",
    },
    {
      code: "MN",
      name: "Mongólia",
      dialCode: "+976",
      format: "XXXX XXXX",
      flag: "🇲🇳",
    },
    {
      code: "ME",
      name: "Montenegro",
      dialCode: "+382",
      format: "XX XXX XXX",
      flag: "🇲🇪",
    },
    {
      code: "MA",
      name: "Marrocos",
      dialCode: "+212",
      format: "XXX-XXXX",
      flag: "🇲🇦",
    },
    {
      code: "MZ",
      name: "Moçambique",
      dialCode: "+258",
      format: "XX XXX XXXX",
      flag: "🇲🇿",
    },
    {
      code: "MM",
      name: "Mianmar",
      dialCode: "+95",
      format: "XXX XXX XXXX",
      flag: "🇲🇲",
    },
    {
      code: "NA",
      name: "Namíbia",
      dialCode: "+264",
      format: "XX XXX XXXX",
      flag: "🇳🇦",
    },
    { code: "NR", name: "Nauru", dialCode: "+674", format: "XXXX", flag: "🇳🇷" },
    {
      code: "NP",
      name: "Nepal",
      dialCode: "+977",
      format: "XXX-XXX XXXX",
      flag: "🇳🇵",
    },
    {
      code: "NL",
      name: "Países Baixos",
      dialCode: "+31",
      format: "XX XXX XXXX",
      flag: "🇳🇱",
    },
    {
      code: "NZ",
      name: "Nova Zelândia",
      dialCode: "+64",
      format: "XX XXX XXXX",
      flag: "🇳🇿",
    },
    {
      code: "NI",
      name: "Nicarágua",
      dialCode: "+505",
      format: "XXXX XXXX",
      flag: "🇳🇮",
    },
    {
      code: "NE",
      name: "Níger",
      dialCode: "+227",
      format: "XX XX XX XX",
      flag: "🇳🇪",
    },
    {
      code: "NG",
      name: "Nigéria",
      dialCode: "+234",
      format: "XXX XXX XXXX",
      flag: "🇳🇬",
    },
    {
      code: "NO",
      name: "Noruega",
      dialCode: "+47",
      format: "XXX XX XXX",
      flag: "🇳🇴",
    },
    {
      code: "OM",
      name: "Omã",
      dialCode: "+968",
      format: "XXXX XXXX",
      flag: "🇴🇲",
    },
    {
      code: "PK",
      name: "Paquistão",
      dialCode: "+92",
      format: "XXX XXX XXXX",
      flag: "🇵🇰",
    },
    {
      code: "PW",
      name: "Palau",
      dialCode: "+680",
      format: "XXX XXXX",
      flag: "🇵🇼",
    },
    {
      code: "PS",
      name: "Palestina",
      dialCode: "+970",
      format: "XXX XXX XXX",
      flag: "🇵🇸",
    },
    {
      code: "PA",
      name: "Panamá",
      dialCode: "+507",
      format: "XXXX XXXX",
      flag: "🇵🇦",
    },
    {
      code: "PG",
      name: "Papua Nova Guiné",
      dialCode: "+675",
      format: "XXX XXXX",
      flag: "🇵🇬",
    },
    {
      code: "PY",
      name: "Paraguai",
      dialCode: "+595",
      format: "XXX XXX XXX",
      flag: "🇵🇾",
    },
    {
      code: "PE",
      name: "Peru",
      dialCode: "+51",
      format: "XXX XXX XXX",
      flag: "🇵🇪",
    },
    {
      code: "PH",
      name: "Filipinas",
      dialCode: "+63",
      format: "XXX XXX XXXX",
      flag: "🇵🇭",
    },
    {
      code: "PL",
      name: "Polônia",
      dialCode: "+48",
      format: "XXX XXX XXX",
      flag: "🇵🇱",
    },
    {
      code: "PT",
      name: "Portugal",
      dialCode: "+351",
      format: "XXX XXX XXX",
      flag: "🇵🇹",
    },
    {
      code: "QA",
      name: "Catar",
      dialCode: "+974",
      format: "XXXX XXXX",
      flag: "🇶🇦",
    },
    {
      code: "RO",
      name: "Romênia",
      dialCode: "+40",
      format: "XXX XXX XXX",
      flag: "🇷🇴",
    },
    {
      code: "RU",
      name: "Rússia",
      dialCode: "+7",
      format: "XXX XXX-XX-XX",
      flag: "🇷🇺",
    },
    {
      code: "RW",
      name: "Ruanda",
      dialCode: "+250",
      format: "XXX XXX XXX",
      flag: "🇷🇼",
    },
    {
      code: "KN",
      name: "São Cristóvão e Nevis",
      dialCode: "+1869",
      format: "XXX XXXX",
      flag: "🇰🇳",
    },
    {
      code: "LC",
      name: "Santa Lúcia",
      dialCode: "+1758",
      format: "XXX XXXX",
      flag: "🇱🇨",
    },
    {
      code: "VC",
      name: "São Vicente e Granadinas",
      dialCode: "+1784",
      format: "XXX XXXX",
      flag: "🇻🇨",
    },
    { code: "WS", name: "Samoa", dialCode: "+685", format: "XXXX", flag: "🇼🇸" },
    {
      code: "SM",
      name: "San Marino",
      dialCode: "+378",
      format: "XXXX XXXX",
      flag: "🇸🇲",
    },
    {
      code: "ST",
      name: "São Tomé e Príncipe",
      dialCode: "+239",
      format: "XXX XXXX",
      flag: "🇸🇹",
    },
    {
      code: "SA",
      name: "Arábia Saudita",
      dialCode: "+966",
      format: "XX XXX XXXX",
      flag: "🇸🇦",
    },
    {
      code: "SN",
      name: "Senegal",
      dialCode: "+221",
      format: "XX XXX XX XX",
      flag: "🇸🇳",
    },
    {
      code: "RS",
      name: "Sérvia",
      dialCode: "+381",
      format: "XX XXX XXXX",
      flag: "🇷🇸",
    },
    {
      code: "SC",
      name: "Seicheles",
      dialCode: "+248",
      format: "X XX XX XX",
      flag: "🇸🇨",
    },
    {
      code: "SL",
      name: "Serra Leoa",
      dialCode: "+232",
      format: "XX XXXX",
      flag: "🇸🇱",
    },
    {
      code: "SG",
      name: "Singapura",
      dialCode: "+65",
      format: "XXXX XXXX",
      flag: "🇸🇬",
    },
    {
      code: "SK",
      name: "Eslováquia",
      dialCode: "+421",
      format: "XXX XXX XXX",
      flag: "🇸🇰",
    },
    {
      code: "SI",
      name: "Eslovênia",
      dialCode: "+386",
      format: "XX XXX XXX",
      flag: "🇸🇮",
    },
    {
      code: "SB",
      name: "Ilhas Salomão",
      dialCode: "+677",
      format: "XXXX",
      flag: "🇸🇧",
    },
    {
      code: "SO",
      name: "Somália",
      dialCode: "+252",
      format: "XX XXX XXX",
      flag: "🇸🇴",
    },
    {
      code: "ZA",
      name: "África do Sul",
      dialCode: "+27",
      format: "XX XXX XXXX",
      flag: "🇿🇦",
    },
    {
      code: "SS",
      name: "Sudão do Sul",
      dialCode: "+211",
      format: "XXX XXX XXX",
      flag: "🇸🇸",
    },
    {
      code: "LK",
      name: "Sri Lanka",
      dialCode: "+94",
      format: "XX XXX XXXX",
      flag: "🇱🇰",
    },
    {
      code: "SD",
      name: "Sudão",
      dialCode: "+249",
      format: "XXX XXX XXX",
      flag: "🇸🇩",
    },
    {
      code: "SR",
      name: "Suriname",
      dialCode: "+597",
      format: "XXX-XXXX",
      flag: "🇸🇷",
    },
    {
      code: "SZ",
      name: "Essuatíni",
      dialCode: "+268",
      format: "XXXX XXXX",
      flag: "🇸🇿",
    },
    {
      code: "SE",
      name: "Suécia",
      dialCode: "+46",
      format: "XX-XXX XX XX",
      flag: "🇸🇪",
    },
    {
      code: "CH",
      name: "Suíça",
      dialCode: "+41",
      format: "XX XXX XX XX",
      flag: "🇨🇭",
    },
    {
      code: "SY",
      name: "Síria",
      dialCode: "+963",
      format: "XXX XXX XXX",
      flag: "🇸🇾",
    },
    {
      code: "TW",
      name: "Taiwan",
      dialCode: "+886",
      format: "XXXX XXXX",
      flag: "🇹🇼",
    },
    {
      code: "TJ",
      name: "Tajiquistão",
      dialCode: "+992",
      format: "XX XXX XXXX",
      flag: "🇹🇯",
    },
    {
      code: "TZ",
      name: "Tanzânia",
      dialCode: "+255",
      format: "XXX XXX XXX",
      flag: "🇹🇿",
    },
    {
      code: "TH",
      name: "Tailândia",
      dialCode: "+66",
      format: "XX XXX XXXX",
      flag: "🇹🇭",
    },
    {
      code: "TL",
      name: "Timor-Leste",
      dialCode: "+670",
      format: "XXX XXXX",
      flag: "🇹🇱",
    },
    {
      code: "TG",
      name: "Togo",
      dialCode: "+228",
      format: "XX XX XX XX",
      flag: "🇹🇬",
    },
    { code: "TO", name: "Tonga", dialCode: "+676", format: "XXXX", flag: "🇹🇴" },
    {
      code: "TT",
      name: "Trindade e Tobago",
      dialCode: "+1868",
      format: "XXX XXXX",
      flag: "🇹🇹",
    },
    {
      code: "TN",
      name: "Tunísia",
      dialCode: "+216",
      format: "XX XXX XXX",
      flag: "🇹🇳",
    },
    {
      code: "TR",
      name: "Turquia",
      dialCode: "+90",
      format: "XXX XXX XXXX",
      flag: "🇹🇷",
    },
    {
      code: "TM",
      name: "Turcomenistão",
      dialCode: "+993",
      format: "XX XX XX XX",
      flag: "🇹🇲",
    },
    {
      code: "TV",
      name: "Tuvalu",
      dialCode: "+688",
      format: "XXXX",
      flag: "🇹🇻",
    },
    {
      code: "UG",
      name: "Uganda",
      dialCode: "+256",
      format: "XXX XXXX",
      flag: "🇺🇬",
    },
    {
      code: "UA",
      name: "Ucrânia",
      dialCode: "+380",
      format: "XX XXX XX XX",
      flag: "🇺🇦",
    },
    {
      code: "AE",
      name: "Emirados Árabes Unidos",
      dialCode: "+971",
      format: "XX XXX XXXX",
      flag: "🇦🇪",
    },
    {
      code: "UY",
      name: "Uruguai",
      dialCode: "+598",
      format: "XXXX XXXX",
      flag: "🇺🇾",
    },
    {
      code: "UZ",
      name: "Uzbequistão",
      dialCode: "+998",
      format: "XX XXX XX XX",
      flag: "🇺🇿",
    },
    {
      code: "VU",
      name: "Vanuatu",
      dialCode: "+678",
      format: "XXXX",
      flag: "🇻🇺",
    },
    {
      code: "VE",
      name: "Venezuela",
      dialCode: "+58",
      format: "XXX-XXXX",
      flag: "🇻🇪",
    },
    {
      code: "VN",
      name: "Vietnã",
      dialCode: "+84",
      format: "XXX XXX XXXX",
      flag: "🇻🇳",
    },
    {
      code: "YE",
      name: "Iêmen",
      dialCode: "+967",
      format: "XXX XXX XXX",
      flag: "🇾🇪",
    },
    {
      code: "ZM",
      name: "Zâmbia",
      dialCode: "+260",
      format: "XX XXX XXXX",
      flag: "🇿🇲",
    },
    {
      code: "ZW",
      name: "Zimbábue",
      dialCode: "+263",
      format: "XX XXX XXXX",
      flag: "🇿🇼",
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

  const getCountryDisplayName = (
    country: { code: string; name: string },
    lng: string
  ) => {
    try {
      if (typeof Intl !== "undefined" && Intl.DisplayNames) {
        const dn = new Intl.DisplayNames([lng], { type: "region" });
        const localized = dn.of(country.code);
        if (localized) return localized;
      }
    } catch (e) {}
    return country.name;
  };

  const getDefaultCountryByLanguage = (lang: string) => {
    if (lang === "pt") {
      return priorityCountries[0];
    } else {
      return priorityCountries[1];
    }
  };

  const [selectedCountry, setSelectedCountry] = React.useState(
    getDefaultCountryByLanguage(language)
  );
  const [showCountryDropdown, setShowCountryDropdown] = React.useState(false);
  const [countrySearch, setCountrySearch] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const filteredCountries = React.useMemo(() => {
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
  }, [countrySearch, language]);

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
      formDataToSend.append(
        "country",
        getCountryDisplayName(selectedCountry, language)
      );

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
      <div>
        {/* Main Content */}
        <main className="py-8 sm:py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            {/* Right Side - Form */}
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
                  </div>

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

                  {/* Phone with Country Selector */}
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
                                if (
                                  !countrySearch &&
                                  priorityCountries.includes(country)
                                )
                                  return null;
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

                <div className="text-center mt-6 pt-6 border-t border-gray-200">
                  <a
                    href="https://wa.me/+447418638908"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded bg-[rgb(37,211,102)] text-white text-sm 
                                hover:bg-green-600 transition-colors duration-300"
                  >
                    {t("whatsappDirect")}
                  </a>
                </div>
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

        {/* Overlay to close dropdown */}
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
