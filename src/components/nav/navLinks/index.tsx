"use client";

import clsx from "clsx";

import React from "react";

import ActiveLink from "@/components/nav/ActiveLink";
import { navLinks } from "@/components/nav/constants";

import "../styles.scss";

interface Props {
  isHidden?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ isHidden, onClick }: Props) => (
  <div className="nav-panel__links" onClick={onClick}>
    {navLinks.map((link) => (
      <ActiveLink
        activeClassName="is-active"
        className="nav-panel__nav-link"
        href={link.href}
        key={link.name}
      >
        <>
          {link.Icon && <link.Icon />}
          <span
            className={clsx([
              "nav-panel__nav-link--name",
              isHidden && "is-hidden",
            ])}
          >
            {link.name}
          </span>
        </>
      </ActiveLink>
    ))}
  </div>
);

export default NavLinks;
