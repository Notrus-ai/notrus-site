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

export function Header({ t, setLanguage, language }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const hideNavRoutes = [
    "/privacy-policy",
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

  const productLink = "/#product";
  const sioLink = "/#sio";
  const benefitsLink = "/#benefits";
  const securityLink = "/#security";
  const contactLink = "/en/contact";
  const demoLink = contactLink;

  const handleToggle = (lng: string) => {
    setLanguage(lng);

    const segments = pathname.split("/");
    const currentLang = segments[1];
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
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link
            href={language === "pt" ? "/" : "/en"}
            className="flex items-center space-x-3"
          >
            <Image
              src="/notrus-logo-transparent.webp"
              alt="Notrus logo"
              priority
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Notrus
            </span>
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
                href={contactLink}
                className="text-gray-700 hover:text-blue-600"
              >
                {t("navContact")}
              </Link>
            </>
          )}

          {!shouldHideDemoButton && (
            <Link href={demoLink}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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
          {/* seletor MOBILE - SEMPRE VISÍVEL */}
          {!shouldHideDemoButton && (
            <Link href={demoLink}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-3 py-2">
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
            href={contactLink}
            onClick={closeMenu}
            className="text-gray-700 hover:text-blue-600"
          >
            {t("navContact")}
          </Link>

          {/* Botão Demo */}
          {!shouldHideDemoButton && (
            <Link href={demoLink}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 w-full">
                {t("navDemo")}
              </Button>
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
