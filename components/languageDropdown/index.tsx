"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { lngs } from "@/utils/constants";
import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";

export default function LanguageDropdown() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const handleAction = (key: any) => {
    router.replace(pathname, { locale: key });
  };
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar as="button" name={locale} className="transition-transform" />
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        onAction={(key) => handleAction(key)}
        selectedKeys={new Set([locale])}
        disallowEmptySelection
        selectionMode="single"
      >
        {lngs?.map((lang) => (
          <DropdownItem key={lang}>{lang}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
