import MainBackground2 from "../../Static/icons/MainBackground2.png";

import styles from "../../pages/Home/components/HomeLayout/styles.module.scss";
import style from "./styles.module.scss";
const Banner = () => (
  <div className={styles.wrapper}>
    <img className={style.banner} src={MainBackground2} alt="pokemon" />
  </div>
);

export default Banner;
