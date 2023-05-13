import { createSlice } from "@reduxjs/toolkit";

import {
  addItemThunk,
  deleteItemThunk,
  getItemsThunk,
  updateItemThunk,
} from "../Thunk";

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

    //ADD ITEMS

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

    //DELETE ITEMS

    builder.addCase(deleteItemThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteItemThunk.fulfilled, (state, { payload }) => {
      const { totalPrice, quantity, itemsList } = payload;
      state.isLoading = false;
      state.totalPrice = totalPrice;
      state.quantity = quantity;
      state.items = itemsList;
      state.error = null;
    });
    builder.addCase(deleteItemThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    //UPDATE ITEMS
    builder.addCase(updateItemThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(updateItemThunk.fulfilled, (state, { payload }) => {
      const key = payload.updateItem.id;
      state.isLoading = false;
      state.totalPrice = payload.totalPrice.id;
      state.items[key].quantity = payload.updateItem.quantity;
    });
    builder.addCase(updateItemThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});
export default cartSlice.reducer;
