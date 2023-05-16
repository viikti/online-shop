import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/RouteName";

import AccountCircle from "@mui/icons-material/AccountCircle";

import { isAuthSelector } from "../../selectors";

import UserButton from "../UsersButton";
import PokeShopLogotip from "../../Static/icons/PokeShopLogotip.png";
import IconCart from "../IconCart";

import styles from "./styles.module.scss";

const Header = () => {
  const isAuth = useSelector(isAuthSelector);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logotype}>
        <a className={styles.logoLink} href={ROUTE_NAMES.HOME}>
          <img src={PokeShopLogotip} alt="logotype" />
          <p>PokeShop</p>
        </a>
      </div>

      <div>
        <a className={styles.link} href={ROUTE_NAMES.POKEMON}>
          SHOP
        </a>
      </div>
      <NavLink className={styles.cart} to={ROUTE_NAMES.CART}>
        <IconCart />
      </NavLink>
      <div className={styles.shoppingCart}>
        {isAuth ? (
          <div className={styles.profile}>
            <UserButton />
          </div>
        ) : (
          <NavLink className={styles.signIn} to={ROUTE_NAMES.SIGN_IN}>
            <AccountCircle color="action" fontSize="large" />
            SIGN IN
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
