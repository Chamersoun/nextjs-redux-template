import Image from "next/image";

import React from "react";

import { titleFont } from "@/assets/fonts";
import PageName from "@/components/header/pageName";
import MobileMenu from "@/components/nav/mobileMenu";

import "./styles.scss";

export default async function Header() {
  return (
    <header className="app-header">
      <h1 className={titleFont.className}>
        <PageName />
      </h1>

      <Image
        src="/logo-white.png"
        alt="Logo"
        width={122}
        height={22}
        priority
        className="app-header__mobile-logo"
      />

      <MobileMenu containerStyle="app-header__mobile-menu" />
    </header>
  );
}
