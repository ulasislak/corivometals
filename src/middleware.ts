import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale, type Locale } from "@/i18n/locale";

function localeFromAccept(accept: string): Locale {
  const first = accept.split(",")[0]?.split(";")[0]?.trim() ?? "";
  if (first.startsWith("tr")) return "tr";
  if (first.startsWith("de")) return "de";
  return "en";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const matched = pathname.match(/^\/(en|de|tr)(?=\/|$)/);
  if (isLocale(matched?.[1])) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-corivo-locale", matched[1]);
    const response = NextResponse.next({ request: { headers: requestHeaders } });
    response.cookies.set("corivo-locale", matched[1], {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  const saved = request.cookies.get("corivo-locale")?.value;
  const accept = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const locale = isLocale(saved) ? saved : localeFromAccept(accept);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|icon|opengraph-image|robots.txt|sitemap.xml|inbox|.*\\..*).*)"],
};
