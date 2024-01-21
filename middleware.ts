import createIntlMiddleware from "next-intl/middleware";
import { defaultLocale } from "./utils/constants";
import { NextRequest, NextResponse } from "next/server";
import { locales, localePrefix, pathnames } from "./config";
import { cookies } from "next/headers";

const protectedRoutes = [""];
export default async function middleware(request: NextRequest) {
  // const splitedPathname = request.nextUrl.pathname.split("/");
  // const jwt = cookies().get("jwt");
  // if (!jwt && `/${splitedPathname?.[2]}` !== "/login" && splitedPathname?.[1]) {
  //   const absoluteURL = new URL(
  //     `/${splitedPathname?.[1]}/login`,
  //     request.nextUrl.origin
  //   );
  //   return NextResponse.redirect(absoluteURL.toString());
  // }
  // if (!jwt && protectedRoutes.includes(`/${splitedPathname?.[2]}`)) {
  //   const absoluteURL = new URL("/", request.nextUrl.origin);
  //   return NextResponse.redirect(absoluteURL.toString());
  // }
  // if (jwt && splitedPathname?.[2] === "login") {
  //   const absoluteURL = new URL("/", request.nextUrl.origin);
  //   return NextResponse.redirect(absoluteURL.toString());
  // }

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
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(fa|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};

// export const config = {
//   // Match only internationalized pathnames
//   // matcher: ["/", "/(fa|en)/:path*"],
//   matcher: [
//     '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)'
//   ]
// };
