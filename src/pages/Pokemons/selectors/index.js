import { createSelector } from "@reduxjs/toolkit";
import { cartItemsSelector, itemsCartSelector } from "../../Cart/selectors";
import { useSelector } from "react-redux";
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

export const mergedWithCartSelector = createSelector(
  pokemonsSelector.data,
  cartItemsSelector,
  (pokemons, cartList) => {
    if (pokemons && cartList) {
      return pokemons.map((pokemon) => {
        const pokemonInChart = cartList.find(
          (cartItem) => cartItem.id === pokemon.id
        );

        const pokemonChartQuantity = pokemonInChart
          ? pokemonInChart.quantity
          : 0;

        return {
          ...pokemon,
          quantity: pokemonChartQuantity,
        };
      });
    }
    return null;
  }
);
