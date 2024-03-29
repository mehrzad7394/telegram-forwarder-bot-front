"use client";
import { FormState, login } from "@/lib/actions";
import React, { Suspense } from "react";
import { useFormState, useFormStatus } from "react-dom";
import LanguageDropdown from "../languageDropdown";
import { useTranslations } from "next-intl";
import { Button, Input } from "@nextui-org/react";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, {
    errors: {
      message: undefined,
    },
  } as FormState);
  const t = useTranslations("login");
  if (state?.errors?.message) {
    toast.error(state?.errors?.message);
  }
  return (
    <form
      className="w-full  mx-auto flex items-center justify-center flex-col bg-slate-500 rounded-2xl gap-5 p-10 md:w-1/3 lg:w-1/4 relative"
      action={formAction}
    >
      <div className="absolute top-5 end-5">
        <Suspense fallback={<></>}>
          <LanguageDropdown />
        </Suspense>
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
      <SubmitButton title={t("submit")} />
    </form>
  );
};

export default LoginForm;

export function SubmitButton({ title }: { title: string }) {
  const { pending } = useFormStatus();
  return (
    <Button fullWidth type="submit" isDisabled={pending}>
      {pending ? `${title}...` : title}
    </Button>
  );
}
