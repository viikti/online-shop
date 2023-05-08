import { Route, Routes } from "react-router-dom";
import { ROUTE_NAMES } from "./RouteName";

import SignUpContainer from "../pages/SignUpPage/containers/SignUpContainer";
import HomeContainer from "../pages/Home/containers/HomeContainer";
import SignInContainer from "../pages/SignIn/container/SignInContainer";
import PokemonContainer from "../pages/Pokemons/container/PokemonsContainer";
import PokemonDetailsContainer from "../pages/PokemonDetails/containers/PokemonDetailsContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<HomeContainer />} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
      <Route path={ROUTE_NAMES.POKEMON} element={<PokemonContainer />} />
      <Route
        path={ROUTE_NAMES.DETAILS_POKEMON}
        element={<PokemonDetailsContainer />}
      />
    </Routes>
  );
};

export default Router;
