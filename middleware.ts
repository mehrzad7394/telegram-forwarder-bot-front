import createIntlMiddleware from "next-intl/middleware";
import { defaultLocale } from "./utils/constants";
import { NextRequest, NextResponse } from "next/server";
import { sessionStatus } from "./utils/session";
import { locales, localePrefix, pathnames } from "./config";

const protectedRoutes = [""];

export default async function middleware(request: NextRequest) {
  const splitedPathname = request.nextUrl.pathname.split("/");
  if (
    !sessionStatus &&
    `/${splitedPathname?.[2]}` !== "/login" &&
    splitedPathname?.[1]
  ) {
    const absoluteURL = new URL(
      `/${splitedPathname?.[1]}/login`,
      request.nextUrl.origin
    );
    return NextResponse.redirect(absoluteURL.toString());
  }
  if (!sessionStatus && protectedRoutes.includes(`/${splitedPathname?.[2]}`)) {
    const absoluteURL = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  if (sessionStatus && splitedPathname?.[2] === "login") {
    const absoluteURL = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale: defaultLocale,
    localePrefix,
    localeDetection: true,
    pathnames,
  });
  const response = handleI18nRouting(request);
  response.headers.set("x-your-custom-locale", defaultLocale);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(fa|en)/:path*"],
};
