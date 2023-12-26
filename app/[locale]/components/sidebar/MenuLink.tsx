"use client";
import { Link, usePathname } from "@/navigation";
import React from "react";

const MenuLink = ({
  path,
  title,
  icon,
}: {
  path: any;
  title: any;
  icon: any;
}) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={`flex p-5 gap-10 text-sm items-center rounded-md ${
        path === pathName && "bg-slate-500"
      }`}
    >
      {icon}
      {title}
    </Link>
  );
};

export default MenuLink;
