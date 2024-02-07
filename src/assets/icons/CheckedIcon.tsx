import React from "react";

import { SvgIconProps } from "@/types";

export default function CheckboxIcon(
  props: SvgIconProps & { checked: boolean }
) {
  const { checked, ...rest } = props;
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_502_13)">
        <path
          d="M2.28571 0C1.02514 0 0 1.02514 0 2.28571V13.7143C0 14.9749 1.02514 16 2.28571 16H13.7143C14.9749 16 16 14.9749 16 13.7143V2.28571C16 1.02514 14.9749 0 13.7143 0H2.28571ZM2.28571 13.7143V2.28571H13.7143L13.7166 13.7143H2.28571Z"
          fill="#DADADF"
        />
        {checked && (
          <path
            d="M7.27759 8.30364L5.70201 6.62934L4 8.51309L7.28732 12L13 5.87321L11.2907 4L7.27759 8.30364Z"
            fill="#DADADF"
          />
        )}
      </g>
      <defs>
        <clipPath id="clip0_502_13">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
