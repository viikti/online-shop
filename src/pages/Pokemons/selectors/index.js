import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.dataFetching;

export const pokemonsSelector = {
  isLoading: createSelector(
    baseSelector,
    (dataFetching) => dataFetching.pokemons.isLoading
  ),

  errors: createSelector(
    baseSelector,
    (dataFetching) => dataFetching.pokemons.errors
  ),

  data: createSelector(
    baseSelector,
    (dataFetching) => dataFetching.pokemons.data
  ),
};

export const pokemonsIdSelector = {
  isLoading: createSelector(
    baseSelector,
    (dataFetching) => dataFetching.pokemonId.isLoading
  ),

  errors: createSelector(
    baseSelector,
    (dataFetching) => dataFetching.pokemonId.errors
  ),

  data: createSelector(
    baseSelector,
    (dataFetching) => dataFetching.pokemonId.data
  ),
};
