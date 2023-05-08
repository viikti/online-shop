// import React from "react";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//
// import { mainApi } from "../../../config/mainApi";
// import { getPokemonsThunk } from "../api";
//
// const initialState = {
//   data: [],
//   // pokemonsDetails: {},
//   isLoading: false,
//   errors: null,
// };
//
// const dataFetchingSlice = createSlice({
//   name: "dataFetching",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getPokemonsThunk.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(getPokemonsThunk.fulfilled, (state, { payload }) => {
//       state.isLoading = false;
//       state.errors = null;
//       state.data = payload;
//     });
//     builder.addCase(getPokemonsThunk.reject, (state, { payload }) => {
//       state.isLoading = false;
//       state.errors = null;
//       state.data = [];
//     });
//   },
// });
//
// // export const { setValue } = dataFetchingSlice.actions;
// export default dataFetchingSlice.reducer;
