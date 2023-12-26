import LanguageDropdown from "@/components/languageDropdown";
import { ThemeSwitcher } from "@/components/themeSwitcher";
import { login } from "@/lib/actions";
import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";

const Login = () => {
  const t = useTranslations("login");
  return (
    <div className="flex  h-screen justify-center items-center relative">
      <div className="absolute top-2 end-2">
        <ThemeSwitcher />
      </div>
      <form
        className="w-full  mx-auto flex items-center justify-center flex-col bg-slate-500 rounded-2xl gap-5 p-10 md:w-1/3 lg:w-1/4 relative"
        action={login}
      >
        <div className="absolute top-5 end-5">
          <LanguageDropdown />
        </div>
        {t("title")}
        <Input
          name="username"
          label={t("username")}
          placeholder={t("enter-your-username")}
          isRequired
        />
        <Input
          name="password"
          label={t("password")}
          placeholder={t("enter-your-password")}
          type="password"
          isRequired
        />
        <Button fullWidth type="submit" >
          {t("submit")}
        </Button>
      </form>
    </div>
  );
};

export default Login;
