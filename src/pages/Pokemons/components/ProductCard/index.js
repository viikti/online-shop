import React from "react";

import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import { upperCase, capitalize } from "lodash";

import { ROUTE_NAMES } from "../../../../routes/RouteName";
import useCart from "../../../../hooks/useCart";
import styles from "./styles.module.scss";
import ChangeQuantityButton from "../../../../commonComponents/ChangeQuantityButton";
import DeleteIcon from "@mui/icons-material/Delete";
const ProductCard = ({
  id,
  name,
  image,
  price,
  quantity,
  onNavigateToPokemonDetails,
}) => {
  const { addItem, decrementItemCart, deleteItemCart, incrementItemCart } =
    useCart();

  const totalPrice = `$ ${price}`;
  const items = { id, name, image, price, quantity: 1 };

  return (
    <div className={quantity ? styles.wrapperQuantity : styles.wrapper}>
      <div
        aria-hidden="true"
        onClick={() => onNavigateToPokemonDetails(id)}
        className={styles.imageContainer}
      >
        <img className={styles.image} src={image} alt="pokemon" />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{totalPrice}</div>

        <div className={styles.buttonContainer}>
          {quantity ? (
            <div className={styles.cart}>
              <ChangeQuantityButton
                id={id}
                quantity={quantity}
                onDecrementItem={decrementItemCart}
                onIncrementItem={incrementItemCart}
              />
              <DeleteIcon
                sx={{ cursor: "pointer", fontSize: 27 }}
                onClick={() => deleteItemCart(id)}
              />
            </div>
          ) : (
            <button
              type="submit"
              onClick={() => addItem(items)}
              className={styles.button}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
