import { Button } from "@nextui-org/react";
import React from "react";
import EndingTable from "./components/EndingTable";
import { Link } from "@/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { getEnds } from "@/lib/actions";
type Props = {
  params: { locale: string };
};
const Endings = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("endings");
  const ends = await getEnds();
  const columns = [
    { name: "TEXT", title: t("text") },
    { name: "ACTIONS", title: t("actions") },
  ];

  return (
    <div className="flex-1 flex flex-col gap-5">
      <Button color="primary" className="self-start" size="sm">
        <Link href={"/endings/add"}>{t("add-new")}</Link>
      </Button>
      <EndingTable columns={columns} data={ends} />
    </div>
  );
};

export default Endings;
