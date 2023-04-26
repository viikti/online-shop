import { Route, Routes } from "react-router-dom";
import { ROUTE_NAMES } from "./RouteName";
import SignUpContainer from "../pages/SignUpPage/containers/SignUpContainer";
import HomeContainer from "../pages/Home/containers/HomeContainer";
import SignInContainer from "../pages/SignIn/container/SignInContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<HomeContainer />} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
    </Routes>
  );
};

export default Router;
