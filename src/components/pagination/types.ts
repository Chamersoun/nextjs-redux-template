import { BaseComponentProps } from "@/types";

export type PaginationType = {
  active: number;
  pageCount: number;
  onChange: (page: number) => void;
} & BaseComponentProps;
