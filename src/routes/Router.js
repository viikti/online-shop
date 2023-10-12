import { Route, Routes } from "react-router-dom";
import { ROUTE_NAMES } from "./RouteName";

import SignUpContainer from "../pages/SignUpPage/containers/SignUpContainer";
import HomeContainer from "../pages/Home/containers/HomeContainer";
import SignInContainer from "../pages/SignIn/container/SignInContainer";
import PokemonContainer from "../pages/Pokemons/container/PokemonsContainer";
import PokemonDetailsContainer from "../pages/PokemonDetails/containers/PokemonDetailsContainer";
import ProfileContainer from "../pages/Profile/containers/ProfileContainer";
import CartContainer from "../pages/Cart/containers/CartContainer";
import PrivateRoutes from "./PrivateRoutes";
import DetailsOrderHistoryContainer from "../pages/DetailsOrderHistory/container/DetailsOrderHistoryContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<HomeContainer />} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />

      <Route element={<PrivateRoutes />}>
        <Route path={ROUTE_NAMES.POKEMON} element={<PokemonContainer />} />
        <Route
          path={ROUTE_NAMES.DETAILS_POKEMON}
          element={<PokemonDetailsContainer />}
        />
        <Route path={ROUTE_NAMES.PROFILE} element={<ProfileContainer />} />
        <Route
          path={ROUTE_NAMES.ORDER_HISTORY_DETAIL}
          element={<DetailsOrderHistoryContainer />}
        />
        <Route path={ROUTE_NAMES.CART} element={<CartContainer />} />
      </Route>
    </Routes>
  );
};

export default Router;
