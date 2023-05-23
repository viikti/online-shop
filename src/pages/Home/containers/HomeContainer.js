import HomeLayout from "../components/HomeLayout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../../selectors";
import { ROUTE_NAMES } from "../../../routes/RouteName";
import { useCallback } from "react";

const isAuth = localStorage.getItem("token");

const HomeContainer = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(isAuthSelector);

  const handleNavigateToShop = useCallback(() => {
    if (isAuth) {
      navigate(ROUTE_NAMES.POKEMON);
    } else {
      navigate(ROUTE_NAMES.SIGN_IN);
    }
  }, [isAuth, navigate]);
  // const handleNavigateToShop = () => {
  //   if (isAuth) {
  //     window.location = "/shop";
  //   } else {
  //     window.location = "/sign-up";
  //   }
  // };

  return <HomeLayout onNavigateToShop={handleNavigateToShop} />;
};

export default HomeContainer;
