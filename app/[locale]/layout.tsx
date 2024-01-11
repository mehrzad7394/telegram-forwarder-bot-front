import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers/providers";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "Telegram Forwarder Bot",
  description: "Telegram Forwarder Bot Front Website",
};
const myFont = localFont({ src: "../../public/fonts/IRANSans.ttf" });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  console.log("lay")
  const { locale } = params;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === "fa" ? "Rtl" : "Ltr"}>
      <body
        className={` text-foreground bg-background ${myFont.className} ${
          locale === "fa" ? " text-right" : ""
        }`}
      >
        <Providers>
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
