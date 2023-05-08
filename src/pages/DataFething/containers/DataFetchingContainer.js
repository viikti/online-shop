// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPokemonsThunk } from "../api";
//
// const DataFetchingContainer = () => {
//   const [page, handlePageChange] = usePagination(1);
//   const dispatch = useDispatch();
//
//   const pokemons = useSelector((state) => state.dataFetching.data);
//   const error = useSelector((state) => state.dataFetching.error);
//   const isLoading = useSelector((state) => state.dataFetching.isLoading);
//
//   useEffect(() => {
//     dispatch(getPokemonsThunk({ page, limit: LIMIT }));
//   }, [dispatch, page]);
//
//   return (
//     <div>
//       <h1>Data Fetching</h1>
//     </div>
//   );
// };
//
// export default DataFetchingContainer;
