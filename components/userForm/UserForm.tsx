"use client";
import { FormState, addUser } from "@/lib/actions";
import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import CustomSelect from "../customSelect/CustomSelect";
import toast from "react-hot-toast";

const UserForm = () => {
  const [state, formAction] = useFormState(addUser, {
    errors: {
      message: undefined,
    },
  } as FormState);
  if (state?.errors?.message) {
    toast.error(state?.errors?.message);
  }
  const t = useTranslations("users");
  const options = [
    { key: true, value: "true", title: t("yes") },
    { key: false, value: "false", title: t("no") },
  ];
  return (
    <form className="flex flex-col gap-4 w-full" action={formAction}>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          type="text"
          label={t("name")}
          name="name"
          isRequired
          placeholder={t("enter-your-name")}
          fullWidth
        />
        <Input
          type="text"
          label={t("lastname")}
          name="lastname"
          isRequired
          placeholder={t("enter-your-lastname")}
          fullWidth
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          type="text"
          label={t("username")}
          name="username"
          isRequired
          placeholder={t("enter-your-username")}
          fullWidth
        />
        <Input
          isRequired
          type="password"
          label={t("password")}
          name="password"
          placeholder={t("enter-your-password")}
          fullWidth
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          isRequired
          type="text"
          label={t("chatID")}
          name="userID"
          placeholder={t("enter-your-chatID")}
          fullWidth
        />
        <CustomSelect
          options={options}
          title={t("isadmin")}
          name="isAdmin"
          isRequired
        />
      </div>
      <SubmitButton title={t("submit")} />
    </form>
  );
};

export default UserForm;
export function SubmitButton({ title }: { title: string }) {
  const { pending } = useFormStatus();
  return (
    <Button color="primary" className="self-center w-1/6" type="submit" isDisabled={pending}>
      {pending ? `${title}...` : title}
    </Button>
  );
}
