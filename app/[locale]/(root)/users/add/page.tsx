import UserForm from "@/components/userForm/UserForm";
import { pick } from "lodash";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";
type Props = {
  params: { locale: string };
};
const AddUser = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, "users")}>
      <UserForm />
    </NextIntlClientProvider>
  );
};

export default AddUser;
