import React, { useState, useEffect } from "react";
import MuiPagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
import PaginationItem from "@mui/material/PaginationItem";

interface PaginationProps {
  currentPage: number;
  count: number;
  handlePagination: (e: any, value: any) => void;
  color?: "primary" | "secondary" | "standard";
}
const Pagination: React.FC<PaginationProps> = ({
  currentPage: originalCurrentPage,
  count,
  handlePagination,
  color,
}) => {
  return (
    <MuiPagination
      count={count}
      color={color}
      onChange={handlePagination}
      sx={{ marginBottom: "2rem" }}
    />
  );
};

export default Pagination;
