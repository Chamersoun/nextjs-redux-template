import React from "react";

import { SvgIconProps } from "@/types";

export default function NavArrow(props: SvgIconProps) {
  const { stroke, ...rest } = props;
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M3.5 6.5L1 4M1 4L3.5 1.5M1 4H13"
        stroke={stroke || "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
