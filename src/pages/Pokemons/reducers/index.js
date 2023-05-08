import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { getPokemonsThunk, getPokemonsIdThunk } from "../api";

const initialState = {
  pokemons: {
    isLoading: false,
    errors: null,
    data: [],
  },
  pokemonId: {
    isLoading: false,
    errors: null,
    data: {},
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
    builder.addCase(getPokemonsThunk.rejected, (state, { payload: error }) => {
      state.pokemons.isLoading = false;
      state.pokemons.errors = null;
    });

    builder.addCase(getPokemonsIdThunk.pending, (state) => {
      state.pokemonId.isLoading = true;
      state.pokemonId.errors = null;
    });
    builder.addCase(
      getPokemonsIdThunk.fulfilled,
      (state, { payload: products }) => {
        state.pokemonId.isLoading = false;
        state.pokemonId.errors = null;
        state.pokemonId.data = products;
      }
    );
    builder.addCase(
      getPokemonsIdThunk.rejected,
      (state, { payload: error }) => {
        state.pokemonId.isLoading = false;
        state.pokemonId.errors = null;
      }
    );
  },
});

export default dataFetchingSlice.reducer;
