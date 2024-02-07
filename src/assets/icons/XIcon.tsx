import React from "react";

import { SvgIconProps } from "@/types";

export default function XIcon(props: SvgIconProps) {
  const { stroke, ...rest } = props;
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M2.33398 1.83301L10.6673 10.1663M2.33398 10.1663L10.6673 1.83301"
        stroke={stroke || "#6F7073"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
