import React from "react";

import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import { upperCase, capitalize } from "lodash";
import DeleteIcon from "@mui/icons-material/Delete";

import { ROUTE_NAMES } from "../../../../routes/RouteName";
import useCart from "../../../../hooks/useCart";
import styles from "./styles.module.scss";
import ChangeQuantityButton from "../../../../commonComponents/ChangeQuantityButton";

const ProductCard = ({
  pokemons,
  id,
  name,
  image,
  price,
  quantity,
  onNavigateToPokemonDetails,
  handleAddCart,
}) => {
  const { addItem, deleteItemCart, incrementItemCart, decrementItemCart } =
    useCart();

  const items = { id, name, image, price, quantity: 1 };

  return (
    <div className={styles.wrapper}>
      {pokemons.map(({ id, name, price, image }) => (
        <div key={id} className={styles.listWrapper}>
          <h2>{upperCase(name)}</h2>
          <img src={image} alt={name} />
          <p className={styles.price}> ${price}</p>

          <div className={styles.buttonContainer}>
            {/*{quantity ? (*/}
            {/*  <div className={styles.cart}>*/}
            {/*    <ChangeQuantityButton*/}
            {/*      id={id}*/}
            {/*      quantity={quantity}*/}
            {/*      onDecrementItem={decrementItemCart}*/}
            {/*      onIncrementItem={incrementItemCart}*/}
            {/*    />*/}
            {/*    <DeleteIcon*/}
            {/*      sx={{ cursor: "pointer", fontSize: 27 }}*/}
            {/*      onClick={() => deleteItemCart(id)}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*) : (*/}
            {/*  <button*/}
            {/*    type="submit"*/}
            {/*    onClick={() => addItem(items)}*/}
            {/*    className={styles.button}*/}
            {/*  >*/}
            {/*    Add to cart*/}
            {/*  </button>*/}
            {/*)}*/}

            <Button
              onClick={() =>
                addItem({
                  id,
                  name,
                  image,
                  price,
                  quantity: 1,
                })
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
