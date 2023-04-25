import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import AccountCircle from "@mui/icons-material/AccountCircle";

import { isAuthSelector } from "../../selectors";

import PokeShopLogotip from "../../Static/icons/PokeShopLogotip.png";

import { ROUTE_NAMES } from "../../routes/RouteName";

import styles from "./styles.module.scss";

const Header = () => {
  // const isAuth = useSelector(isAuthSelector);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logotype}>
        <a className={styles.logoLink} href={ROUTE_NAMES.HOME}>
          <img src={PokeShopLogotip} alt="logotype" />
          <p>PokeShop</p>
        </a>
      </div>
      <div>
        <a className={styles.signIn} href={ROUTE_NAMES.SIGN_IN}>
          <AccountCircle color="action" fontSize="large" />
          SIGN IN
        </a>
      </div>
    </div>
  );
};

export default Header;
