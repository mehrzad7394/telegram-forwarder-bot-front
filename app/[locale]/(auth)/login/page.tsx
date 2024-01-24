import { ThemeSwitcher } from "@/components/themeSwitcher";
import { NextIntlClientProvider, useMessages } from "next-intl";
import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import LoginForm from "@/components/loginForm/LoginForm";
import { pick } from "lodash";
type Props = {
  params: { locale: string };
};

const Login = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <div className="flex  h-screen justify-center items-center relative">
      <div className="absolute top-2 end-2">
        <ThemeSwitcher />
      </div>
      <NextIntlClientProvider messages={pick(messages, "login")}>
        <LoginForm />
      </NextIntlClientProvider>
    </div>
  );
};

export default Login;
