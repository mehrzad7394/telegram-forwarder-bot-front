import { Button } from "@nextui-org/react";
import { pick } from "lodash";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import React from "react";
import FiltersTable from "./components/FiltersTable";
import { Link } from "@/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
type Props = {
  params: { locale: string };
};
const Filters = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("filters");
  const messages = useMessages();
  return (
    <div className="flex-1 flex flex-col gap-5">
      <Button color="primary" className="self-start" size="sm">
        <Link href={"/filters/add"}>{t("add-new")}</Link>
      </Button>
      <NextIntlClientProvider messages={pick(messages, "filters")}>
        <FiltersTable />
      </NextIntlClientProvider>
    </div>
  );
};

export default Filters;
