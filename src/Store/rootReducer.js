import { combineReducers } from "@reduxjs/toolkit";
import signInReducer from "../pages/SignIn/reducers";
import dataFetchingReducer from "../pages/Pokemons/reducers";
import pokemonDetailsSlice from "../pages/PokemonDetails/reducers";
import cartSlice from "../pages/Cart/reducers/cartReducer";
import orderSlice from "../pages/Cart/reducers/orderReducer";

// import { persistReducer } from "redux-persist";

// const persistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["auth", "data"],
// };

export const rootReducer = combineReducers({
  auth: signInReducer,
  dataFetching: dataFetchingReducer,
  pokemonDetail: pokemonDetailsSlice,
  cart: cartSlice,
  order: orderSlice,
});
