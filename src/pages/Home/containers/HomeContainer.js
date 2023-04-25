import HomeLayout from "../components/HomeLayout";

const isAuth = localStorage.getItem("token");

const HomeContainer = () => {
  const handleNavigateToShop = () => {
    if (isAuth) {
      window.location = "/shop";
    } else {
      window.location = "/sign-up";
    }
  };

  return <HomeLayout onNavigateToShop={handleNavigateToShop} />;
};

export default HomeContainer;
