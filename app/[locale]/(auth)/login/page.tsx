import { ThemeSwitcher } from "@/components/themeSwitcher";
import { NextIntlClientProvider, useMessages } from "next-intl";
import React from "react";
import Form from "./component/Form";
import { pick } from "lodash";

const Login = () => {
  const messages = useMessages();

  return (
    <div className="flex  h-screen justify-center items-center relative">
      <div className="absolute top-2 end-2">
        <ThemeSwitcher />
      </div>
      <NextIntlClientProvider messages={pick(messages, "login")}>
        <Form />
      </NextIntlClientProvider>
    </div>
  );
};

export default Login;
