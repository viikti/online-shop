import { useState } from "react";

const usePagination = (initialPage = 0) => {
  const [page, setPage] = useState(initialPage);
  const handleChangePage = (_, page) => {
    setPage(page);
  };
  return [page, handleChangePage];
};
export default usePagination;
