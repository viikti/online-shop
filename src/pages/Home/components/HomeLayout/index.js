import PropTypes, { checkPropTypes } from "prop-types";

import Banner from "../../../../commonComponents/Banner";

import styles from "./styles.module.scss";
import { ROUTE_NAMES } from "../../../../routes/RouteName";

const HomeLayout = ({ onNavigateToShop }) => (
  <div className={styles.wrapper}>
    <Banner />
    <div className={styles.contentContainer}>
      <h2 className={styles.subtitle}>ALL COLLECTIONS</h2>

      <h1 className={styles.title}>Press The Button And Choose Your Pokemon</h1>

      <button
        type="submit"
        onClick={onNavigateToShop}
        className={styles.button}
      >
        <a className={styles.button} href={ROUTE_NAMES.POKEMON}>
          SHOP NOW
        </a>
      </button>
    </div>
  </div>
);

HomeLayout.prototype = {
  onNavigateToShop: PropTypes.func.isRequired,
};

export default HomeLayout;
