import "../globals.css";
import { Providers } from "./providers/providers";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import clsx from "clsx";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { locales } from "@/config";
const myFont = localFont({ src: "../../public/fonts/IRANSans.ttf" });
type Props = {
  children: ReactNode;
  params: { locale: string };
};
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
  };
}
export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale} dir={locale === "fa" ? "Rtl" : "Ltr"}>
      <body
        className={clsx(
          myFont.className,
          `${locale === "fa" ? "text-right" : ""} text-foreground bg-background`
        )}
      >
        <Providers>
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
