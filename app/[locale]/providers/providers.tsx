"use client";

import Context from "@/context/context";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Context>{children}</Context>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
