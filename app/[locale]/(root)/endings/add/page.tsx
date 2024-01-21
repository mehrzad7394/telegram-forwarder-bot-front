import { addEnding } from "@/lib/actions";
import { Button, Textarea } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";
type Props = {
  params: { locale: string };
};
const AddEnding = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("endings");
  return (
    <form className="flex flex-col gap-4 w-full" action={addEnding}>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Textarea
          isRequired
          type="text"
          label={t("text")}
          name="text"
          placeholder={t("enter-your-text")}
          fullWidth
        />
      </div>

      <Button color="primary" className="self-center w-1/6" type="submit">
        {t("submit")}
      </Button>
    </form>
  );
};

export default AddEnding;
