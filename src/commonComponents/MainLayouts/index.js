import PropTypes, { checkPropTypes } from "prop-types";

import Header from "../Header";

import styles from "./styles.module.scss";
import { useEffect } from "react";
import { useCard } from "../../hooks";

const MainLayout = ({ children }) => {
  const { getCartData } = useCard();

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>{children}</div>
    </div>
  );
};

MainLayout.prototype = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
