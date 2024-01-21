"use client";
import React, { useTransition } from "react";
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
import { useParams, useSearchParams } from "next/navigation";

export default function LanguageDropdown() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const params = useParams<{ id: string }>();
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const allParams = searchParams.toString();
  const handleAction = (key: any) => {
    router.replace(pathname, { locale: key });

    const nextLocale = key;
    let newPathname = pathname + "?" + allParams;

    startTransition(() => {
      router.replace(
        { pathname: newPathname as any, params: params as any },
        { locale: nextLocale }
      );
    });
  };
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar as="button" name={locale} className="transition-transform" />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="language selection"
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
