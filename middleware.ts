import createIntlMiddleware from "next-intl/middleware";
import { defaultLocale } from "./utils/constants";
import { NextRequest, NextResponse } from "next/server";
import { locales, localePrefix, pathnames } from "./config";
import { cookies } from "next/headers";

const protectedRoutes = [
  "",
  // "/",
  // "/endings",
  // "/filters",
  // "/users",
  // "/users/add",
  // "/endings/add",
  // "/filters/add",
];
const verifyJWT = async (jwt: any) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    token: jwt,
  });
  return await fetch("http://localhost:5000/api/verify", {
    method: "POST",
    headers: myHeaders,
    body: raw,
  })
    .then((res) => {
      return res.ok;
    })
    .catch((err) => {
      return false;
    });
};
export default async function middleware(req: NextRequest) {
  const splitedPathname = req.nextUrl.pathname.split("/");
  const jwt = cookies().get("jwt");
  if (!jwt && `/${splitedPathname?.[2]}` !== "/login" && splitedPathname?.[1]) {
    const absoluteURL = new URL(
      `/${splitedPathname?.[1]}/login`,
      req.nextUrl.origin
    );
    return NextResponse.redirect(absoluteURL.toString());
  }
  if (
    jwt &&
    splitedPathname?.[2] === "login" &&
    (await verifyJWT(jwt?.value))
  ) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  if (
    jwt &&
    splitedPathname?.[2] !== "login" &&
    !(await verifyJWT(jwt?.value))
  ) {
    const absoluteURL = new URL(
      `/${splitedPathname?.[1]}/login`,
      req.nextUrl.origin
    );
    return NextResponse.redirect(absoluteURL.toString());
  }

  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale: defaultLocale,
    localePrefix,
    localeDetection: true,
    pathnames,
  });
  const response = handleI18nRouting(req);
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
