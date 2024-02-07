import React from "react";

import { BaseComponentProps } from "@/types";

export type ButtonPropsType = {
  buttonText: string | React.ReactElement;
  onClick?: () => void;
  to?: string;
  type?: "button" | "submit" | "reset" | "link";
  loading?: boolean;
  loaderSize?: number;
  loaderColor?: string;
  disabled?: boolean;
  tabIndex?: number;
  id?: string;
} & BaseComponentProps;
