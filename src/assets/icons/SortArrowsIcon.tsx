import React from "react";

import { SvgIconProps } from "@/types";

export default function SortArrowsIcon(
  props: SvgIconProps & { active: boolean }
) {
  const { active, ...rest } = props;
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
        d="M10.8588 9.52663L7.99882 12.3933L5.13882 9.52663C5.01329 9.40109 4.84302 9.33056 4.66549 9.33056C4.48795 9.33056 4.31769 9.40109 4.19215 9.52663C4.06662 9.65216 3.99609 9.82242 3.99609 9.99996C3.99609 10.1775 4.06662 10.3478 4.19215 10.4733L7.52549 13.8066C7.58746 13.8691 7.6612 13.9187 7.74244 13.9526C7.82368 13.9864 7.91081 14.0038 7.99882 14.0038C8.08683 14.0038 8.17397 13.9864 8.25521 13.9526C8.33645 13.9187 8.41018 13.8691 8.47216 13.8066L11.8055 10.4733C11.8676 10.4111 11.917 10.3373 11.9506 10.2561C11.9842 10.1749 12.0015 10.0879 12.0015 9.99996C12.0015 9.91205 11.9842 9.82501 11.9506 9.74379C11.917 9.66258 11.8676 9.58878 11.8055 9.52663C11.7433 9.46447 11.6695 9.41516 11.5883 9.38152C11.5071 9.34788 11.4201 9.33056 11.3322 9.33056C11.2442 9.33056 11.1572 9.34788 11.076 9.38152C10.9948 9.41516 10.921 9.46447 10.8588 9.52663ZM5.13882 6.47329L7.99882 3.60663L10.8588 6.47329C10.9208 6.53578 10.9945 6.58537 11.0758 6.61922C11.157 6.65307 11.2441 6.67049 11.3322 6.67049C11.4202 6.67049 11.5073 6.65307 11.5885 6.61922C11.6698 6.58537 11.7435 6.53578 11.8055 6.47329C11.868 6.41132 11.9176 6.33758 11.9514 6.25634C11.9853 6.1751 12.0027 6.08797 12.0027 5.99996C12.0027 5.91195 11.9853 5.82481 11.9514 5.74357C11.9176 5.66234 11.868 5.5886 11.8055 5.52663L8.47216 2.19329C8.41018 2.13081 8.33645 2.08121 8.25521 2.04737C8.17397 2.01352 8.08683 1.99609 7.99882 1.99609C7.91081 1.99609 7.82368 2.01352 7.74244 2.04737C7.6612 2.08121 7.58746 2.13081 7.52549 2.19329L4.19215 5.52663C4.13 5.58878 4.08069 5.66258 4.04705 5.74379C4.01341 5.82501 3.99609 5.91205 3.99609 5.99996C3.99609 6.17749 4.06662 6.34776 4.19215 6.47329C4.31769 6.59883 4.48795 6.66935 4.66549 6.66935C4.84302 6.66935 5.01329 6.59883 5.13882 6.47329Z"
        fill={active ? "#6F7073" : "#DADADF"}
      />
    </svg>
  );
}