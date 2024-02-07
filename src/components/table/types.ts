import { BaseComponentProps } from "@/types";

export type TableColumnType<T> = {
  label: string;
  dbKey: keyof T | "_actions";
  /** percentage of the table width */
  width: string;
  /** in px */
  minWidth?: string;
  customRender?: (value: string) => JSX.Element;
  className?: string;
  withSort?: boolean;
};

export type TableType<T> = {
  columns: TableColumnType<T>[];
  dbTableName: string;
  dbSelectColumns?: string;
  actions?: (
    | "copy_completion_result"
    | "delete"
    | "history_add_to_favorites"
  )[];
} & BaseComponentProps;
