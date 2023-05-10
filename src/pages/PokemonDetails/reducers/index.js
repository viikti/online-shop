import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { getPokemonsIdThunk } from "../api";

const initialState = {
  pokemonsId: {
    isLoading: false,
    errors: null,
    data: [],
    // stats: [],
  },
};
const pokemonDetailsSlice = createSlice({
  name: "pokemonDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonsIdThunk.pending, (state) => {
      state.pokemonsId.isLoading = true;
      state.pokemonsId.errors = null;
    });
    builder.addCase(getPokemonsIdThunk.fulfilled, (state, { payload }) => {
      state.pokemonsId.isLoading = false;
      state.pokemonsId.errors = null;
      state.pokemonsId.data = payload;
      // state.pokemonsId.stats = products;
    });
    builder.addCase(getPokemonsIdThunk.rejected, (state, { payload }) => {
      state.pokemonsId.isLoading = false;
      state.pokemonsId.errors = payload;
    });
  },
});

export default pokemonDetailsSlice.reducer;
