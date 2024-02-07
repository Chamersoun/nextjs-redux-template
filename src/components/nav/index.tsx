"use client";

import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";

import React, { useState } from "react";

import NavArrow from "@/assets/icons/NavArrow";
import NavLogout from "@/assets/icons/NavLogout";
import NavLinks from "@/components/nav/navLinks";

import "./styles.scss";

const NavPanel = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  return (
    <nav className={clsx(["nav-panel", isNavCollapsed && "is-collapsed"])}>
      <div
        className={clsx([
          "nav-panel__hide",
          "with-scale-hover",
          isNavCollapsed && "is-active",
        ])}
        role="button"
        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
      >
        <NavArrow />
      </div>

      <div>
        <Link href="/">
          {isNavCollapsed ? (
            <Image
              src="/r-logo.png"
              alt="Logo"
              width={11}
              height={22}
              priority
              className="nav-panel__logo"
            />
          ) : (
            <Image
              src="/logo-white.png"
              alt="Logo"
              width={122}
              height={22}
              priority
              className="nav-panel__logo"
            />
          )}
        </Link>

        <NavLinks isHidden={isNavCollapsed} />
      </div>

      <form action="/auth/signout" method="post">
        <button className="nav-panel__logout with-opacity-hover" type="submit">
          <NavLogout />
          <span
            className={clsx([
              "nav-panel__nav-link--name",
              isNavCollapsed && "is-hidden",
            ])}
          >
            Logout
          </span>
        </button>
      </form>
    </nav>
  );
};

export default NavPanel;
