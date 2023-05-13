import { createAsyncThunk } from "@reduxjs/toolkit";

import CartService from "../../../services/CartService";

export const getItemsThunk = createAsyncThunk(
  "cart/getItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await CartService.getItems();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addItemThunk = createAsyncThunk(
  "cart/addItem",
  async (itemToAdd, { rejectWithValue }) => {
    try {
      const { data } = await CartService.addItem(itemToAdd);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
