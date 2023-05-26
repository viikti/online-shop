// export const pokemonDetailsSelector = (state) => state.pokemonDetail;

import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.pokemonDetail;

export const pokemonsIdSelector = {
  isLoading: createSelector(
    baseSelector,
    (pokemonDetail) => pokemonDetail.pokemonsId.isLoading
  ),

  errors: createSelector(
    baseSelector,
    (pokemonDetail) => pokemonDetail.pokemonsId.errors
  ),

  data: createSelector(
    baseSelector,
    (pokemonDetail) => pokemonDetail.pokemonsId.data
  ),

  id: createSelector(
    baseSelector,
    (pokemonDetail) => pokemonDetail.pokemonsId.id
  ),
  price: createSelector(
    baseSelector,
    (pokemonDetail) => pokemonDetail.pokemonsId.price
  ),
  name: createSelector(
    baseSelector,
    (pokemonDetail) => pokemonDetail.pokemonsId.name
  ),
  img: createSelector(
    baseSelector,
    (pokemonDetail) => pokemonDetail.pokemonsId.img
  ),
  abilities: createSelector(
    baseSelector,
    (pokemonDetail) => pokemonDetail.abilities
  ),
  stats: createSelector(
    baseSelector,
    (pokemonDetail) => pokemonDetail.pokemonsId.stats
  ),
};
