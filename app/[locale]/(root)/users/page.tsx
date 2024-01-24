import React from "react";
import UserTable from "./components/UserTable";
import { Button } from "@nextui-org/react";
import { Link } from "@/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { getUsers } from "@/lib/actions";
type Props = {
  params: { locale: string };
};

const Users = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("users");
  const users = await getUsers();
  const columns = [
    { name: "NAME", title: t("name") },
    { name: "LASTNAME", title: t("lastname") },
    { name: "USERNAME", title: t("username") },
    { name: "USERID", title: t("ID") },
    { name: "ROLE", title: t("role") },
    { name: "ACTIONS", title: t("actions") },
  ];
  return (
    <div className="flex-1 flex flex-col gap-5">
      <Button color="primary" className="self-start" size="sm">
        <Link href={"/users/add"}> {t("add-new-user")}</Link>
      </Button>

      <UserTable columns={columns} data={users} />
    </div>
  );
};

export default Users;
