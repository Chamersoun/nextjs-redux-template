"use client";

import React from "react";
import ReactPaginate from "react-paginate";

import { PaginationType } from "@/components/pagination/types";

import "./styles.scss";

const Pagination = (props: PaginationType) => {
  const { active, pageCount, onChange } = props;
  return (
    <ReactPaginate
      forcePage={active - 1}
      onPageChange={(p) => onChange(p.selected + 1)}
      pageCount={pageCount}
      pageRangeDisplayed={4}
      marginPagesDisplayed={2}
      previousLabel="<"
      nextLabel=">"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item page-item--previous"
      previousLinkClassName="page-link"
      nextClassName="page-item page-item--next"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
    />
  );
};

export default Pagination;
