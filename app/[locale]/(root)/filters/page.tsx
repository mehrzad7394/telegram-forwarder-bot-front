import { Button } from "@nextui-org/react";
import { pick } from "lodash";

import React from "react";
import FiltersTable from "./components/FiltersTable";
import { Link } from "@/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { getFilters } from "@/lib/actions";
type Props = {
  params: { locale: string };
};
const Filters = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("filters");
  const users = await getFilters();
  const columns = [
    { name: "TEXT", title: t("text") },
    { name: "ACTIONS", title: t("actions") },
  ];
  return (
    <div className="flex-1 flex flex-col gap-5">
      <Button color="primary" className="self-start" size="sm">
        <Link href={"/filters/add"}>{t("add-new")}</Link>
      </Button>

      <FiltersTable columns={columns} data={users} />
    </div>
  );
};

export default Filters;
