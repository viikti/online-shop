import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import usePagination from "../../../hooks/usePagination";

import ShopView from "../components/ShopView";

import { getPokemonsThunk } from "../api";
import { pokemonsSelector } from "../selectors";

const PokemonContainer = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector(pokemonsSelector.data);
  const isLoading = useSelector(pokemonsSelector.isLoading);
  const errors = useSelector(pokemonsSelector.errors);

  const [page, handlePageChange] = usePagination();

  useEffect(() => {
    dispatch(getPokemonsThunk({ page, limit: 10 }));
  }, [dispatch, page]);

  return (
    <ShopView
      pokemons={pokemons}
      isLoading={isLoading}
      errors={errors}
      page={page}
      onPageChange={handlePageChange}
    />
  );
};

export default PokemonContainer;
