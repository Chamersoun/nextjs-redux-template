import { BaseComponentProps } from "@/types";

export type InputPropsType = {
  type: string;
  placeholder: string;
  value?: string;
  label?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: string;
  autoComplete?: "on" | "off";
} & BaseComponentProps;
