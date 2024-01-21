import CustomSelect from "@/components/customSelect/CustomSelect";
import { addUser } from "@/lib/actions";
import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";
type Props = {
  params: { locale: string };
};
const AddUser = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("users");
  const options = [
    { key: true, value: "true", title: t("yes") },
    { key: false, value: "false", title: t("no") },
  ];
  return (
    <form className="flex flex-col gap-4 w-full" action={addUser}>
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
          name="chatID"
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
      <Button color="primary" className="self-center w-1/6" type="submit">
        {t("submit")}
      </Button>
    </form>
  );
};

export default AddUser;
