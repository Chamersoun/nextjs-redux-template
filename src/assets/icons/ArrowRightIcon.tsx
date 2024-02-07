import React from "react";

import { SvgIconProps } from "@/types";

export default function ArrowRightIcon(props: SvgIconProps) {
  const { stroke, ...rest } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g id="ion:arrow-back">
        <path
          id="Vector"
          d="M10.4688 15.625L16.0938 10L10.4688 4.375M15.3125 10H2.5"
          stroke={stroke || "#FFA100"}
          strokeWidth="1.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
