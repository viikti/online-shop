import { createSlice } from "@reduxjs/toolkit";

import { addItemThunk, getItemsThunk } from "../Thunk";

const initialState = {
  totalPrice: 0,
  quantity: 0,
  items: [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItemsThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getItemsThunk.fulfilled, (state, { payload }) => {
      const { totalPrice, quantity, itemsList } = payload;
      state.isLoading = false;
      state.totalPrice = totalPrice;
      state.quantity = quantity;
      state.items = itemsList;
      state.error = null;
    });

    builder.addCase(getItemsThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(addItemThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(addItemThunk.fulfilled, (state, { payload }) => {
      const { totalPrice, quantity, itemsList } = payload;
      state.isLoading = false;
      state.totalPrice = totalPrice;
      state.quantity = quantity;
      state.items = itemsList;
      state.error = null;
    });

    builder.addCase(addItemThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});
export default cartSlice.reducer;
