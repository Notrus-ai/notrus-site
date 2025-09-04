import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const acceptLanguage = req.headers.get("accept-language") || "";
  const lang = acceptLanguage.includes("en") ? "en" : "pt";

  // já está na rota certa? então não redireciona
  if (req.nextUrl.pathname.startsWith(`/${lang}`)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(`/${lang}`, req.url));
}

export const config = {
  matcher: ["/"], // aplica só na homepage
};