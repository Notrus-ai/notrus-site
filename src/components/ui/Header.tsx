"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { routeMap } from "@/utils/routeMap";
import Link from "next/link";

interface HeaderProps {
  t: (key: string) => string;
  setLanguage: (value: string) => void;
  language: string;
}

function useLocaleFromPath(): "en" | "pt" {
  const pathname = usePathname() || "/";
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg === "pt" ? "pt" : "en";
}

export function Header({ t, setLanguage, language }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname() || "/";
  const router = useRouter();

  const hideNavRoutes = [
    "/politica-privacidade",
    "/en/privacy-policy",
    "/terms",
    "/en/terms",
    "/login",
    "/en/login",
    "/pt/contato",
    "/en/contact",
    "/pt/relatorio",
    "/en/report",
  ];
  const shouldHideNav = hideNavRoutes.some((route) => pathname.includes(route));

  const hideDemoButtonRoutes = ["/pt/contato", "/en/contact"];
  const shouldHideDemoButton = hideDemoButtonRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const lang = useLocaleFromPath();
  const homePrefix = lang === "pt" ? "/pt" : "/en";

  const isHome =
    (lang === "pt" &&
      (pathname === "/" || pathname === "/pt" || pathname.startsWith("/#"))) ||
    (lang === "en" &&
      (pathname === "/en" || pathname === "/" || pathname.startsWith("/#")));

  const productId = "produto";
  const benefitsId = "beneficios";
  const securityId = "seguranca";
  const sioId = "sio";

  const productLink = isHome ? `/#${productId}` : `${homePrefix}/#${productId}`;
  const benefitsLink = isHome
    ? `/#${benefitsId}`
    : `${homePrefix}/#${benefitsId}`;
  const securityLink = isHome
    ? `/#${securityId}`
    : `${homePrefix}/#${securityId}`;
  const sioLink = isHome ? `/#${sioId}` : `${homePrefix}/#${sioId}`;

  const resourcesLink = lang === "pt" ? "/pt/insights" : "/en/resources";
  const contactLink = lang === "pt" ? "/pt/contato" : "/en/contact";
  const demoLink = contactLink;

  const handleToggle = (lng: string) => {
    setLanguage(lng);

    const segments = pathname.split("/");
    const currentLang = segments[1] || (lang === "pt" ? "pt" : "en");
    const currentPath = "/" + segments.slice(2).join("/");

    let newPath = "/";

    for (const key in routeMap) {
      if (routeMap[key][currentLang as "pt" | "en"] === currentPath) {
        newPath = routeMap[key][lng as "pt" | "en"];
      }
    }

    if (newPath === "/") newPath = currentPath;

    router.push(`/${lng}${newPath}`);
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex !== -1) {
      e.preventDefault();
      const id = href.substring(hashIndex + 1);

      if (isHome) {
        // Usamos requestAnimationFrame para evitar forced reflow
        requestAnimationFrame(() => {
          const element = document.getElementById(id);
          if (!element) return;

          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const middle = absoluteElementTop - window.innerHeight / 2;

          window.scrollTo({
            top: middle,
            behavior: "smooth",
          });
        });
        setIsMenuOpen(false);
      } else {
        router.push(`${homePrefix}/#${id}`);
        setIsMenuOpen(false);
      }
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="https://notrus.ai" className="flex items-center space-x-3">
            <Image
              src="/notrus complete - color 1.svg"
              alt="Notrus logo"
              priority
              width={120}
              height={120}
            />
          </Link>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {!shouldHideNav && (
            <>
              <Link
                href={productLink}
                onClick={(e) => handleSmoothScroll(e, productLink)}
                className="text-gray-700 hover:text-blue-600"
              >
                {t("navProduto")}
              </Link>
              <Link
                href={benefitsLink}
                onClick={(e) => handleSmoothScroll(e, benefitsLink)}
                className="text-gray-700 hover:text-blue-600"
              >
                {t("navBenefits")}
              </Link>
              <Link
                href={securityLink}
                onClick={(e) => handleSmoothScroll(e, securityLink)}
                className="text-gray-700 hover:text-blue-600"
              >
                {t("navSecurity")}
              </Link>
              <Link
                href={sioLink}
                onClick={(e) => handleSmoothScroll(e, sioLink)}
                className="text-gray-700 hover:text-blue-600"
              >
                {t("navSio")}
              </Link>
              <Link
                href={resourcesLink}
                className="text-gray-700 hover:text-blue-600"
              >
                {t("navResources")}
              </Link>
              <Link
                href={contactLink}
                className="text-gray-700 hover:text-blue-600"
              >
                {t("navContact")}
              </Link>
            </>
          )}

          {!shouldHideDemoButton && (
            <Link href={demoLink}>
              <Button
                variant="default"
                size="default"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                {t("navDemo")}
              </Button>
            </Link>
          )}

          <select
            value={language}
            onChange={(e) => handleToggle(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </select>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          {!shouldHideDemoButton && (
            <Link href={demoLink}>
              <Button
                variant="default"
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2"
              >
                {t("navDemo")}
              </Button>
            </Link>
          )}

          {!shouldHideNav && (
            <button
              className="md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && !shouldHideNav && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 px-4 flex flex-col space-y-4">
          <Link
            href={productLink}
            onClick={(e) => handleSmoothScroll(e, productLink)}
            className="text-gray-700 hover:text-blue-600"
          >
            {t("navProduto")}
          </Link>
          <Link
            href={benefitsLink}
            onClick={(e) => handleSmoothScroll(e, benefitsLink)}
            className="text-gray-700 hover:text-blue-600"
          >
            {t("navBenefits")}
          </Link>
          <Link
            href={securityLink}
            onClick={(e) => handleSmoothScroll(e, securityLink)}
            className="text-gray-700 hover:text-blue-600"
          >
            {t("navSecurity")}
          </Link>
          <Link
            href={sioLink}
            onClick={(e) => handleSmoothScroll(e, sioLink)}
            className="text-gray-700 hover:text-blue-600"
          >
            {t("navSio")}
          </Link>
          <Link
            href={resourcesLink}
            onClick={closeMenu}
            className="text-gray-700 hover:text-blue-600"
          >
            {t("navResources")}
          </Link>
          <Link
            href={contactLink}
            onClick={closeMenu}
            className="text-gray-700 hover:text-blue-600"
          >
            {t("navContact")}
          </Link>

          {/* Idioma no menu mobile */}
          <div className="pt-2 border-t border-gray-100">
            <label className="block text-xs font-medium text-gray-500 mb-2">
              {language === "pt" ? "Idioma" : "Language"}
            </label>
            <select
              value={language}
              onChange={(e) => handleToggle(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-2 py-2 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="en">EN</option>
              <option value="pt">PT</option>
            </select>
          </div>

          {!shouldHideDemoButton && (
            <Link href={demoLink}>
              <Button
                variant="default"
                size="default"
                className="bg-gradient-to-r from-blue-600 to-purple-600 w-full"
              >
                {t("navDemo")}
              </Button>
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
