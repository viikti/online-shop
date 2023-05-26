// import { createAsyncThunk } from "@reduxjs/toolkit";
//
// import { mainApi } from "../../../config/mainApi";
//
// const getPokemonsCall = ({ page, limit = 15 }) =>
//   mainApi.get("/products", {
//     params: {
//       page,
//       limit,
//     },
//   });
//
// export const getPokemonsThunk = createAsyncThunk(
//   "dataFetching/getPokemons",
//   async (body, { rejectedWithValue }) => {
//     try {
//       const response = await getPokemonsCall(body);
//       return response.data;
//     } catch (error) {
//       return rejectedWithValue(error.response.data.message);
//     }
//   }
// );
