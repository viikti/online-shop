import { mainApi } from "../../../config/mainApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getPokemonId = (pokemonId) => mainApi.get(`/products/${pokemonId}`);

export const getPokemonsIdThunk = createAsyncThunk(
  "pokemonDetails/getPokemonId",
  async (payload, { rejectedWithValue }) => {
    try {
      const response = await getPokemonId(payload);
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.response.data.message);
    }
  }
);
