"use client";

import { usePathname } from "next/navigation";

import Urls from "@/constants/urls";
import { findKeyByValueInEnum } from "@/utils/shared";

import "./styles.scss";

export default function PageName() {
  const pathname = usePathname();

  const currentPageNameKey = findKeyByValueInEnum(Urls, pathname);

  if (!currentPageNameKey) return "";

  return currentPageNameKey.match(/[A-Z][a-z]+|[0-9]+/g)!.join(" ");
}
