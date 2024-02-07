import { BaseComponentProps } from "@/types";

export type TextareaPropsType = {
  placeholder: string;
  value?: string;
  label?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: string;
  autoComplete?: "on" | "off";
  minRows?: number;
  maxRows?: number;
} & BaseComponentProps;
