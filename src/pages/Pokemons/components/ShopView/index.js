import React from "react";
import PropTypes from "prop-types";
import ShopHeader from "../ShopHeader";
import ProductCard from "../ProductCard";

import Spinner from "../../../../commonComponents/Spinner";
import Pagination from "../../../../commonComponents/Pagination";

import styles from "./styles.module.scss";
import startCase from "lodash/startCase";
import { useCard } from "../../../../hooks";

const ShopView = ({
  pokemons,
  isLoading,
  page,
  onPageChange,
  onNavigateToPokemonDetails,
  errors,
}) => {
  const { addItem } = useCard();

  return (
    <div className={styles.wrapper}>
      <div className={styles.shopContainer}>
        <ShopHeader />

        <div className={styles.shop}>
          {isLoading && <Spinner color={"yellow"} />}

          <ProductCard
            pokemons={pokemons}
            key={pokemons.id}
            id={pokemons.id}
            name={startCase(pokemons.name)}
            image={pokemons.image}
            price={pokemons.price}
            quantity={pokemons.quantity}
            handleAddCart={addItem}
            onNavigateToPokemonDetails={onNavigateToPokemonDetails}
          />
        </div>

        <div className={styles.pagination}>
          <Pagination
            isDisabled={isLoading}
            currentPage={page}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

// ShopView.propTypes = {
//   isLoading: PropTypes.bool.isRequired,
//   errors: PropTypes.func,
//   page: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   onNavigateToPokemonDetail: PropTypes.func.isRequired,
// };

export default ShopView;
