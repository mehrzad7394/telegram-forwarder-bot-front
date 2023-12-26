import { addFilter } from "@/lib/actions";
import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";

const AddFilter = () => {
  const t = useTranslations("filters");
  return (
    <form className="flex flex-col gap-4 w-full" action={addFilter}>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
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

export default AddFilter;
