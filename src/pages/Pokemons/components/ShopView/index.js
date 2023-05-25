import React from "react";
import PropTypes from "prop-types";
import ShopHeader from "../ShopHeader";
import ProductCard from "../ProductCard";

import Spinner from "../../../../commonComponents/Spinner";
import Pagination from "../../../../commonComponents/Pagination";

import styles from "./styles.module.scss";
import startCase from "lodash/startCase";
import { useSelector } from "react-redux";
import { mergedWithCartSelector } from "../../selectors";

const ShopView = ({
  isLoading,
  page,
  onPageChange,
  onNavigateToPokemonDetails,
  errors,
}) => {
  const pokemons = useSelector(mergedWithCartSelector);
  return (
    <div className={styles.wrapper}>
      <div className={styles.shopContainer}>
        <ShopHeader />

        <div className={styles.shop}>
          {isLoading ? (
            <Spinner color="yellow" />
          ) : (
            pokemons?.map((pokemon) => (
              <ProductCard
                key={pokemon.id}
                id={pokemon.id}
                name={startCase(pokemon.name)}
                image={pokemon.image}
                price={pokemon.price}
                quantity={pokemon.quantity}
                onNavigateToPokemonDetails={onNavigateToPokemonDetails}
              />
            ))
          )}

          {errors && <div style={{ color: "red" }}>{errors}</div>}
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
