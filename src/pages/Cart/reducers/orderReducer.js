import { createSlice } from "@reduxjs/toolkit";
import { getOrdersThunk, createNewOrdersThunk } from "../Thunk";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  success: false,
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createNewOrdersThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
    });

    builder.addCase(createNewOrdersThunk.fulfilled, (state) => {
      state.isLoading = false;
      state.success = true;
    });

    builder.addCase(
      createNewOrdersThunk.rejected,
      (state, { payload: error }) => {
        state.isLoading = false;
        state.error = error;
        state.success = false;
      }
    );

    builder.addCase(getOrdersThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getOrdersThunk.fulfilled, (state, { payload: orders }) => {
      state.isLoading = false;
      state.data = orders.reverse();
    });
    builder.addCase(getOrdersThunk.rejected, (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error;
    });
  },
});

export default orderSlice.reducer;
