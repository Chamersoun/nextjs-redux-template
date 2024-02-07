import { BaseComponentProps } from "@/types";

export type CheckboxPropsType = {
  label: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  error?: string;
} & BaseComponentProps;
