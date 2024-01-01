"use client";
import React from "react";
import LanguageDropdown from "@/components/languageDropdown";
import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { login } from "@/lib/actions";
import toast from "react-hot-toast";
const Form = () => {
  const t = useTranslations("login");
  async function clientAction(formData: FormData) {
    const result = await login(formData);
    if (result?.error) {
      toast.error(result.error, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  }
  return (
    <form
      className="w-full  mx-auto flex items-center justify-center flex-col bg-slate-500 rounded-2xl gap-5 p-10 md:w-1/3 lg:w-1/4 relative"
      action={clientAction}
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
      <Button fullWidth type="submit">
        {t("submit")}
      </Button>
    </form>
  );
};

export default Form;
