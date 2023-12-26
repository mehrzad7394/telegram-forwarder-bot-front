"use client";
import { usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import React from "react";

const PageTitle = () => {
  const t = useTranslations("header");
  const pathName = usePathname();
  let path = pathName.split("/").pop() as any;
  return <h3>{path ? t(path) : "-"}</h3>;
};

export default PageTitle;
