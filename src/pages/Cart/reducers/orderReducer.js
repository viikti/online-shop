import { createSlice } from "@reduxjs/toolkit";
import { getOrdersThunk, addOrdersThunk } from "../Thunk";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  success: false,
};
const orderSlice = createSlice({
  name: `order`,
  initialState,
  reducers: {
    handleUpdateState(state) {
      return { ...state, success: false };
    },

    extraReducer: (builder) => {
      builder.addCase(addOrdersThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      });

      builder.addCase(addOrdersThunk.fulfilled, (state) => {
        state.isLoading = true;
        state.success = false;
      });

      builder.addCase(addOrdersThunk.rejected, (state, { payload: error }) => {
        state.isLoading = false;
        state.error = error;
        state.success = false;
      });

      builder.addCase(getOrdersThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(
        getOrdersThunk.fulfilled,
        (state, { payload: orders }) => {
          state.isLoading = false;
          state.data = orders.reverse();
        }
      );
      builder.addCase(getOrdersThunk.rejected, (state, { payload: error }) => {
        state.isLoading = false;
        state.error = error;
      });
    },
  },
});

export const { handleUpdateState } = orderSlice.actions;

export default orderSlice.reducer;
