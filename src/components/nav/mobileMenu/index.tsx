"use client";

import Image from "next/image";

import clsx from "clsx";

import React, { useState } from "react";

import MobileMenuIcon from "@/assets/icons/MobileMenuIcon";
import NavLogout from "@/assets/icons/NavLogout";
import XIcon from "@/assets/icons/XIcon";
import NavLinks from "@/components/nav/navLinks";
import { BaseComponentProps } from "@/types";

import "../styles.scss";

const MobileMenu = ({ containerStyle }: BaseComponentProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={containerStyle}>
      <MobileMenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />

      {isMenuOpen && (
        <div className="mobile-menu__bg-blur">
          <XIcon
            stroke="#fff"
            className="mobile-menu__bg-blur--close"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      )}

      <nav className={clsx(["mobile-menu", isMenuOpen && "is-open"])}>
        <div>
          <Image
            src="/next.svg"
            alt="Logo"
            width={122}
            height={22}
            priority
            className="mobile-menu__logo"
          />

          <NavLinks onClick={() => setIsMenuOpen(false)} />
        </div>

        <div className="mobile-menu__footer">
          <form action="/auth/signout" method="post">
            <button
              className="nav-panel__logout with-opacity-hover"
              type="submit"
            >
              <NavLogout />
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
