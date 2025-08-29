import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer({ t }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  const linkedinUrl = isEnglish
    ? "https://www.linkedin.com/company/notrus-ai-international?locale=en_US"
    : "https://www.linkedin.com/company/notrus-ai?locale=pt_BR";

  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo + Nome */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Image
              src="/notrus-logo-transparent.png"
              alt="Notrus"
              priority
              width={200}
              height={200}
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-xl font-bold">Notrus AI</span>
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
              <a
                href="mailto:contact@notrus.ai"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}