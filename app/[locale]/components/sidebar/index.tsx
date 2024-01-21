import Image from "next/image";
import React from "react";
import {
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdPeople,
} from "react-icons/md";
import MenuLink from "./MenuLink";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import Logout from "./Logout";
import { pick } from "lodash";
import { unstable_setRequestLocale } from "next-intl/server";
type Props = {
  params: { locale: string };
};

const Sidebar = () => {
  // unstable_setRequestLocale(locale);
  const messages = useMessages();
  const t = useTranslations("sidebar");
  const menuItems = [
    {
      title: t("users"),
      path: "/users",
      icon: <MdPeople />,
    },
    {
      title: t("endings"),
      path: "/endings",
      icon: <MdSupervisedUserCircle />,
    },
    {
      title: t("filters"),
      path: "/filters",
      icon: <MdShoppingBag />,
    },
  ];
  return (
    <div className="sticky top-10 flex flex-col mx-1 gap-5">
      <div className="flex flex-col items-center gap-10">
        <Image
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
          className="rounded-full object-contain"
        />
        <div className="font-medium text-sm tracking-normal">
          Mehrzad Ardeshiri
        </div>
      </div>
      <ul>
        {menuItems?.map((menu) => (
          <li key={menu?.path}>
            <MenuLink path={menu?.path} title={menu?.title} icon={menu?.icon} />
          </li>
        ))}
      </ul>
      <NextIntlClientProvider messages={pick(messages, "sidebar")}>
        <Logout />
      </NextIntlClientProvider>
    </div>
  );
};

export default Sidebar;
