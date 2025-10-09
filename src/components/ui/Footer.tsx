import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer({ t }: { t: (k: string) => string }) {
  const pathname = usePathname();

  const isEnglish = pathname?.startsWith("/en");
  const language = isEnglish ? "en" : "pt";

  const localized = (en: string, pt: string) => (language === "en" ? en : pt);
  const contactLink = localized("/en/contact", "/pt/contato");
  const privacyPolicyLink = localized(
    "/en/privacy-policy",
    "/pt/politica-privacidade"
  );

  const linkedinUrl = isEnglish
    ? "https://www.linkedin.com/company/notrus-ai-international?locale=en_US"
    : "https://www.linkedin.com/company/notrus-ai?locale=pt_BR";

  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Image
              src="/notrus complete - color 2.svg"
              alt="Notrus"
              priority
              width={120}
              height={120}
            />
          </div>

          <div className="text-gray-400 text-center md:text-right">
            <p>{t("footerRights")}</p>
            <p className="mt-2">{t("footerSubtitle")}</p>

            <div className="flex justify-center md:justify-end gap-6 mt-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors text-gray-300"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  unoptimized
                  className="w-8 h-8"
                />
                <span>LinkedIn</span>
              </a>

              <Link
                href={contactLink}
                className="inline-flex items-center gap-2 hover:text-white transition-colors text-gray-300"
              >
                <Image
                  src="/icons/email.svg"
                  alt="Email"
                  width={20}
                  height={20}
                  className="w-8 h-8"
                />
                <span>Email</span>
              </Link>

              <Link
                href={privacyPolicyLink}
                className="inline-flex items-center gap-2 hover:text-white transition-colors text-gray-300"
              >
                <span>
                  {localized("Privacy Policy", "Política de Privacidade")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
