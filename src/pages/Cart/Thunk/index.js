import { createAsyncThunk } from "@reduxjs/toolkit";

import CartService from "../../../services/CartService";
import OrderService from "../../../services/OrderService";

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

export const deleteItemThunk = createAsyncThunk(
  "cart/deleteItem",
  async (id, { rejectWithValue }) => {
    try {
      const response = await CartService.deleteItem(id);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteAllItemThunk = createAsyncThunk(
  "cart/deleteAll",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await Promise.all(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateItemThunk = createAsyncThunk(
  "cart/updateItem",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await CartService.updateItem(payload);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//ORDER

export const getOrdersThunk = createAsyncThunk(`order/getOrders`, async () => {
  const response = await OrderService.getOrders();
  return response.data;
});

export const createNewOrdersThunk = createAsyncThunk(
  "order/createNewOrder",
  async (newOrder, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await OrderService.addOrder(newOrder);

      dispatch(getItemsThunk());

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
