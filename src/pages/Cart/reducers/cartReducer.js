import { createSlice } from "@reduxjs/toolkit";

import {
  addItemThunk,
  deleteAllItemThunk,
  deleteItemThunk,
  getItemsThunk,
  updateItemThunk,
} from "../Thunk";
import Omit from "lodash/omit";

const initialState = {
  totalPrice: 0,
  quantity: 0,
  items: {},
  customerId: null,
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
      state.customerId = payload.customerId;
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
      state.customerId = payload.customerId;
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
      const { totalPrice, quantity } = payload.cartState;
      state.isLoading = false;
      state.totalPrice = totalPrice;
      state.quantity = quantity;
      state.items = state.items.filter(
        (item) => item.id !== payload.removedItemId
      );
      state.error = null;
    });
    builder.addCase(deleteItemThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(deleteAllItemThunk.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(deleteAllItemThunk.fulfilled, (state) => {
      state.isLoading = false;
      state.errors = null;
    });
    builder.addCase(deleteAllItemThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    });

    //UPDATE ITEMS
    builder.addCase(updateItemThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(updateItemThunk.fulfilled, (state, { payload }) => {
      const key = payload.updatedItem.id;
      state.isLoading = false;
      state.totalPrice = payload.cartState.totalPrice;
      state.items = state.items.map((item) => {
        if (item.id !== key) {
          return item;
        }
        return {
          ...item,
          quantity: payload.updatedItem.quantity,
          price: payload.updatedItem.price,
        };
      });
    });

    builder.addCase(updateItemThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export default cartSlice.reducer;
