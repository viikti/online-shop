import styles from "./styles.module.scss";

const ShopHeader = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}>Pokemons</div>

    <div className={styles.text}>
      In our Pokémon shop, we have a wide variety of items to suit all tastes.
      <p>Welcome to our store!</p>
    </div>
  </div>
);

export default ShopHeader;
