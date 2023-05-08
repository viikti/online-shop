import { createAsyncThunk } from "@reduxjs/toolkit";

import { mainApi } from "../../../config/mainApi";

const getPokemons = (body) => mainApi.get("/products", { params: body });

// const getPokemons = ({ page, limit = 10 }) =>
//   mainApi.get("/products", {
//     params: {
//       page,
//       limit,
//     },
//   });

export const getPokemonsThunk = createAsyncThunk(
  "dataFetching/getPokemons",
  async (payload, { rejectedWithValue }) => {
    try {
      const response = await getPokemons(payload);
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.response.data.message);
    }
  }
);

//Request By ID
const getPokemonId = (pokemonId) => mainApi.get(`/products/${pokemonId}`);

export const getPokemonsIdThunk = createAsyncThunk(
  "dataFetching/getPokemonId",
  async (payload, { rejectedWithValue }) => {
    try {
      const response = await getPokemonId(payload);
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.response.data.message);
    }
  }
);
