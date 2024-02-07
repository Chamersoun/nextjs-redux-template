"use client";

import _isUndefined from "lodash/isUndefined";

import React, { useEffect, useState } from "react";

import SortArrowsIcon from "@/assets/icons/SortArrowsIcon";
import TrashIcon from "@/assets/icons/TrashIcon";
import Pagination from "@/components/pagination";
import { TableColumnType, TableType } from "@/components/table/types";
import Tooltip from "@/components/tooltip";

import "./styles.scss";

type CommonFields = {
  id: number | string;
  completion_result?: string;
  prompt?: string;
  type?: string;
  favorites?: { id: number }[];
};

const Table = <DataType extends CommonFields>(props: TableType<DataType>) => {
  const { columns, dbTableName, actions, dbSelectColumns = "*" } = props;
  const user = {};
  const [meta, setMeta] = useState({
    page: 1,
    perPage: 10,
    total: 0,
    sortBy: "created_at",
    sortAsc: false,
  });
  const [loading, setLoading] = useState<boolean>();
  const [data, setData] = useState<DataType[]>([]);

  const onDataFetch = async () => {
    // if (!tableData || count === null) {
    //   return;
    // }
    //
    // // @ts-ignore
    // setData(tableData);
    // setMeta({ ...meta, total: count });
  };

  const fetchTableData = () => {
    setLoading(true);
    onDataFetch().then(() => setLoading(false));
  };

  useEffect(() => {
    fetchTableData();
  }, [meta.page, meta.perPage, meta.sortBy, meta.sortAsc]);

  const onPageChange = (page: number) => {
    setMeta({ ...meta, page });
  };

  const onSort = (sortBy: string) => {
    setMeta({ ...meta, sortBy, sortAsc: !meta.sortAsc });
  };

  const onDelete = async (id: CommonFields["id"]) => {
    if (!confirm("Are you sure you want to delete this row?")) {
      return;
    }

    // add logic to delete the row

    if (meta.total % meta.perPage === 1) {
      setMeta({ ...meta, page: meta.page - 1 });
    } else {
      fetchTableData();
    }
  };

  const renderActions = (row: DataType) => {
    return (
      <div className="table__body__row__cell table__body__row__cell--actions">
        {actions?.includes("delete") && (
          <Tooltip text="Delete row">
            <button onClick={() => onDelete(row.id)}>
              <TrashIcon />
            </button>
          </Tooltip>
        )}
      </div>
    );
  };

  const renderCell = (row: DataType, column: TableColumnType<DataType>) => {
    if (column.dbKey === "_actions") {
      return renderActions(row);
    }

    const renderFn =
      column.customRender ||
      ((v: string) => <p className="table__body__row__cell--text">{v}</p>);

    return renderFn(row[column.dbKey] as string);
  };

  if (!_isUndefined(loading) && !loading && meta.total === 0) {
    return <div>No items found</div>;
  }

  return (
    <div className="table">
      <div className="table__pagination-meta">
        Showing&nbsp;
        <strong>
          {Math.min(meta.page * meta.perPage - meta.perPage + 1, meta.total)}-
          {Math.min(meta.page * meta.perPage, meta.total)}
        </strong>
        &nbsp;of&nbsp;<strong>{meta.total}</strong>
      </div>

      <div className="table__wrapper">
        <div className="table__body">
          <div className="table__body__row table__body__row--header">
            {columns.map((column, key) => (
              <p
                key={`header-row--${key}`}
                className="table__body__row__cell table__body__row__cell--header"
                style={{
                  width: column.width,
                  minWidth: column.minWidth,
                  cursor: column.withSort ? "pointer" : "default",
                }}
                onClick={() =>
                  column.withSort && onSort(column.dbKey as string)
                }
              >
                {column.label}
                {column.withSort && (
                  <button className="table__body__row__cell--sort">
                    <SortArrowsIcon active={meta.sortBy === column.dbKey} />
                  </button>
                )}
              </p>
            ))}
          </div>

          {data.map((row) => (
            <div className="table__body__row" key={`body-row--${row.id}`}>
              {columns.map((column, key) => (
                <div
                  key={`body-column--${row.id}--${key}`}
                  className="table__body__row__cell"
                  style={{
                    width: column.width,
                    minWidth: column.minWidth,
                  }}
                  title={
                    column.dbKey !== "_actions"
                      ? (row[column.dbKey] as string)
                      : ""
                  }
                >
                  {renderCell(row, column)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {meta.total > meta.perPage && (
        <div className="table__pagination">
          <Pagination
            active={meta.page}
            pageCount={Math.ceil(meta.total / meta.perPage)}
            onChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
