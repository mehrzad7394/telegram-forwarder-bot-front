"use client";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { deleteCookie } from "cookies-next";
import React from "react";
import { useRouter } from "@/navigation";

const Logout = () => {
  const t = useTranslations("sidebar");
  const router = useRouter();

  const handleClick = () => {
    deleteCookie("jwt");
    router.replace("/login");
  };
  return (
    <Button color="danger" size="sm" onClick={handleClick}>
      {t("logout")}
    </Button>
  );
};

export default Logout;
