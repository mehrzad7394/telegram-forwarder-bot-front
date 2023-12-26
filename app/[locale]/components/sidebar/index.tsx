import Image from "next/image";
import React from "react";
import {
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdPeople,
} from "react-icons/md";
import MenuLink from "./MenuLink";
import { useTranslations } from "next-intl";
import { Button } from "@nextui-org/react";

const Sidebar = () => {
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
      <Button color="danger" size="sm">{t("logout")}</Button>
    </div>
  );
};

export default Sidebar;
