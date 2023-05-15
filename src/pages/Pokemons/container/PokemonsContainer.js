import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import usePagination from "../../../hooks/usePagination";

import ShopView from "../components/ShopView";

import { getPokemonsThunk } from "../api";
import { pokemonsSelector } from "../selectors";
import { ROUTE_NAMES } from "../../../routes/RouteName";
import { useNavigate } from "react-router-dom";

const PokemonContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pokemons = useSelector(pokemonsSelector.data);
  const isLoading = useSelector(pokemonsSelector.isLoading);
  const errors = useSelector(pokemonsSelector.errors);

  const [page, handlePageChange] = usePagination();

  const handleNavigateToPokemonDetail = useCallback(
    (id) => {
      navigate(`${ROUTE_NAMES.POKEMON}/${id}`);
    },
    [navigate]
  );

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
      onNavigateToPokemonDetails={handleNavigateToPokemonDetail}
    />
  );
};

export default PokemonContainer;
