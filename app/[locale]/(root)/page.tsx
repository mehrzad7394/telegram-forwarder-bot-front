import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("home");
  return (
    <div className="w-full flex justify-center items-center ">
      {t("select-a-menu")}
    </div>
  );
}
