// import { createSlice } from "@reduxjs/toolkit";
// import { getCartInfo } from "../api";
//
// const initialState = {
//   totalPrice: 0,
//   quantity: 0,
//   customerId: null,
//   itemsList: {},
//   isLoading: false,
//   error: null,
// };
//
// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getCartInfo.pending, (state) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.addCase(getCartInfo.fulfilled, (state, { payload }) => {
//       const itemsList = payload.itemsList.reduce((result, cartItem) => {
//         result[cartItem.id] = cartItem;
//
//         return result;
//       }, {});
//
//       state.isLoading = false;
//       state.totalPrice = payload.totalPrice;
//       state.quantity = payload.quantity;
//       state.customerId = payload.customerId;
//       state.itemsList = itemsList;
//     });
//     builder.addCase(getCartInfo.rejected, (state, { payload: error }) => {
//       state.isLoading = false;
//       state.error = error;
//     });
//   },
// });
// export default createSlice.reducer;
