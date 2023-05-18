import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPokemonsIdThunk } from "../api";
import { pokemonsIdSelector } from "../selectors";

import PokemonDetailsView from "../components/PokemonDetailsView/PokemonDetailsView";
import useCart from "../../../hooks/useCart";

const PokemonDetailsContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { addItem } = useCart();
  const pokemonDetails = useSelector(pokemonsIdSelector.data);
  const isLoading = useSelector(pokemonsIdSelector.isLoading);
  const errors = useSelector(pokemonsIdSelector.errors);

  useEffect(() => {
    dispatch(getPokemonsIdThunk(id));
  }, [dispatch, id]);

  return (
    <PokemonDetailsView
      pokemonDetails={pokemonDetails}
      isLoading={isLoading}
      errors={errors}
      handleAddItemToCart={addItem}
    />
  );
};

export default PokemonDetailsContainer;
