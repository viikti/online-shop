import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { getPokemonsThunk } from "../api";

const initialState = {
  pokemons: {
    isLoading: false,
    errors: null,
    data: [],
  },
};

const dataFetchingSlice = createSlice({
  name: "dataFetching",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonsThunk.pending, (state) => {
      state.pokemons.isLoading = true;
      state.pokemons.errors = null;
    });
    builder.addCase(
      getPokemonsThunk.fulfilled,
      (state, { payload: products }) => {
        state.pokemons.isLoading = false;
        state.pokemons.errors = null;
        state.pokemons.data = products;
      }
    );
    builder.addCase(getPokemonsThunk.rejected, (state, { payload: errors }) => {
      state.pokemons.isLoading = false;
      state.pokemons.errors = null;
    });
  },
});

export default dataFetchingSlice.reducer;
