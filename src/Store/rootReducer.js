import { combineReducers } from "@reduxjs/toolkit";
import signInReducer from "../pages/SignIn/reducers";
import dataFetchingReducer from "../pages/Pokemons/reducers";
import storage from "redux-persist/lib/storage";

import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

export const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, signInReducer),
  dataFetching: dataFetchingReducer,
});
