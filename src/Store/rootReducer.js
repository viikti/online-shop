import { combineReducers } from "@reduxjs/toolkit";
import signInReducer from "../pages/SignIn/reducers";
import dataFetchingReducer from "../pages/Pokemons/reducers";
import storage from "redux-persist/lib/storage";
import pokemonDetailsSlice from "../pages/PokemonDetails/reducers";
import cartSlice from "../pages/Cart/reducers/cartReducer";

import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["auth", "data"],
};

export const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, signInReducer),
  dataFetching: dataFetchingReducer,
  pokemonDetail: pokemonDetailsSlice,
  cart: cartSlice,
});
