import React from "react";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import pick from "lodash/pick";
import UserTable from "./components/UserTable";
import { Button } from "@nextui-org/react";
import { Link } from "@/navigation";

const Users = () => {
  const t = useTranslations("users");
  const messages = useMessages();
  return (
    <div className="flex-1 flex flex-col gap-5">
      <Button color="primary" className="self-start" size="sm">
        <Link href={"/users/add"}> {t("add-new-user")}</Link>
      </Button>
      <NextIntlClientProvider messages={pick(messages, "users")}>
        <UserTable />
      </NextIntlClientProvider>
    </div>
  );
};

export default Users;
