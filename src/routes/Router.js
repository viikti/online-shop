import { Route, Routes } from "react-router-dom";
import { ROUTE_NAMES } from "./RouteName";
import SignUpContainer from "../pages/SignUpPage/containers/SignUpContainer";
import HomeContainer from "../pages/Home/containers/HomeContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<HomeContainer />} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
    </Routes>
  );
};

export default Router;
