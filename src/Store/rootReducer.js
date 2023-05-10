import { combineReducers } from "@reduxjs/toolkit";
import signInReducer from "../pages/SignIn/reducers";
import dataFetchingReducer from "../pages/Pokemons/reducers";
import storage from "redux-persist/lib/storage";
import pokemonDetailsSlice from "../pages/PokemonDetails/reducers";

import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["data", `isAuth`],
};

export const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, signInReducer),
  dataFetching: dataFetchingReducer,
  pokemonDetail: pokemonDetailsSlice,
});
