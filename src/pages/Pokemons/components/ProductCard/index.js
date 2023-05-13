import React from "react";

import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import { upperCase, capitalize } from "lodash";

import styles from "./styles.module.scss";
import { ROUTE_NAMES } from "../../../../routes/RouteName";

const ProductCard = ({
  pokemons,
  id,
  name,
  image,
  price,
  quantity,
  handleAddCart,
}) => {
  return (
    <div className={styles.wrapper}>
      {pokemons.map(({ id, name, price, image }) => (
        <div key={id} className={styles.listWrapper}>
          <h2>{upperCase(name)}</h2>
          <img src={image} alt={name} />
          <p className={styles.price}> ${price}</p>
          <div className={styles.button}>
            <Button
              onClick={() =>
                handleAddCart({ id, name, image, price, quantity: 1 })
              }
              variant="contained"
              size="medium"
              color="warning"
            >
              BUY
            </Button>

            <Link to={`/pokemons/${id}`}>
              <Button variant="contained" size="medium" color="info">
                <a href={`${ROUTE_NAMES.POKEMON}/${id}`}>DETAILS</a>
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductCard;
