import React from "react";

import { SvgIconProps } from "@/types";

export default function MobileMenuIcon(props: SvgIconProps) {
  const { stroke, ...rest } = props;
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M7 9.25H25M7 16H25M7 22.75H14.875"
        stroke={stroke || "white"}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
