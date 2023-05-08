import React from "react";

import ShopHeader from "../ShopHeader";
import ProductCard from "../ProductCard";

import Spinner from "../../../../commonComponents/Spinner";
import Pagination from "../../../../commonComponents/Pagination";

import styles from "./styles.module.scss";

const ShopView = ({ pokemons, isLoading, page, onPageChange }) => {
  // const products = useSelector(mergedWithCartSelector);

  return (
    <div className={styles.wrapper}>
      <div className={styles.shopContainer}>
        <ShopHeader />

        <div className={styles.shop}>
          {isLoading && <Spinner color={"yellow"} />}

          <ProductCard pokemons={pokemons} />
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

export default ShopView;
