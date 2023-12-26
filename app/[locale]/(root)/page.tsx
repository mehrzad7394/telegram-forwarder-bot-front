import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <div className="w-full flex justify-center items-center ">
      {t("select-a-menu")}
    </div>
  );
}
