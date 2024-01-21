import React, { Suspense } from "react";
import PageTitle from "./PageTitle";
import { NextIntlClientProvider, useMessages } from "next-intl";
import pick from "lodash/pick";
import LanguageDropdown from "@/components/languageDropdown";
import { ThemeSwitcher } from "@/components/themeSwitcher";
const Navbar = () => {
  const messages = useMessages();
  return (
    <nav className="w-full bgColor rounded-md p-2 flex justify-between items-center sticky left-0 right-0 z-40 top-2">
      <NextIntlClientProvider messages={pick(messages, "header")}>
        <PageTitle />
      </NextIntlClientProvider>
      <div className="flex gap-3">
        <Suspense fallback={<></>}>
          <LanguageDropdown />
        </Suspense>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
