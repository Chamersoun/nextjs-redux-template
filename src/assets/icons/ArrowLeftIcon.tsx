import React from "react";

import { SvgIconProps } from "@/types";

export default function ArrowLeftIcon(props: SvgIconProps) {
  const { stroke, ...rest } = props;
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M7.625 12.5L3.125 8L7.625 3.5M3.75 8H14"
        stroke={stroke || "#FFA100"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
