import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PokemonDetailsView from "../components/PokemonDetailsView";
import { pokemonsIdSelector } from "../../Pokemons/selectors";
import { getPokemonsIdThunk } from "../../Pokemons/api";
import { pokemonsStats } from "../utils/pokemonStats";

const PokemonDetailsContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const pokemonDetails = useSelector(pokemonsIdSelector.data);
  const isLoading = useSelector(pokemonsIdSelector.isLoading);
  const errors = useSelector(pokemonsIdSelector.errors);
  const stats = pokemonsStats(pokemonDetails.stats);

  useEffect(() => {
    dispatch(getPokemonsIdThunk(id));
  }, [dispatch, id]);

  return (
    <PokemonDetailsView
      pokemonDetails={pokemonDetails}
      errors={errors}
      isLoading={isLoading}
      stats={stats}
    />
  );
};

export default PokemonDetailsContainer;
