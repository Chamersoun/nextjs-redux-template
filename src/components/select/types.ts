import React from "react";

import { BaseComponentProps } from "@/types";

export type SelectOptionType = {
  value: string | string[] | number | number[];
  label: string | number | React.ReactElement;
};

export type SelectPropsType = {
  options: SelectOptionType[];
  onChange?: (value: string | string[]) => void;
  value?: SelectOptionType["value"] | null;
  label?: string;
  multiple?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  disabled?: boolean;
  placeholder?: string;
  customKey?: string;
  error?: string;
  maxMenuHeight?: number;
} & BaseComponentProps;
