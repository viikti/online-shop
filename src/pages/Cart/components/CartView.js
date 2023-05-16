import React from "react";
import PropTypes from "prop-types";
import Spinner from "../../../commonComponents/Spinner";

import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../../routes/RouteName";
import DeleteIcon from "@mui/icons-material/Delete";

import ChangeQuantityButton from "../../../../src/commonComponents/ChangeQuantityButton";

const CartView = ({
  cart,
  cartItemsQuantity,
  totalPrice,
  cartItems,
  isLoading,
  onDeleteItem,
  onIncrementItem,
  onDecrementItem,
  onCreateOrder,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          <h1 className={styles.title}> MY CART</h1>
        </div>

        {!cartItemsQuantity ? (
          <div className={styles.titleCart}>
            <p>
              Your shopping cart is empty. If you see something you would like
              to add to your shopping cart when shopping, click Add to Cart.
            </p>
            <NavLink className={styles.linkShop} to={ROUTE_NAMES.POKEMON}>
              Follow the link?
            </NavLink>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className={styles.cardContainer}>
              <div className={styles.card}>
                <img height={100} src={item.image} alt="pokemon" />

                <div className={styles.info}>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.price}>
                    <p>Price: $ </p>
                    <p>{item.price * item.quantity}</p>
                  </div>
                </div>

                <div className={styles.buttonsContainer}>
                  <DeleteIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => onDeleteItem(item.id)}
                  />

                  <ChangeQuantityButton
                    onDecrementItem={onDecrementItem}
                    quantity={item.quantity}
                    onIncrementItem={onIncrementItem}
                    id={item.id}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className={styles.totalPriceContainer}>
        <h2 className={styles.titleTotalPrice}>Total price</h2>
        <div className={styles.subTotal}>
          <div>SubTotal</div>
          <div className={styles.price}>
            <p>$</p>
            <p>{cart?.totalPrice}</p>
          </div>
        </div>
        <div className={styles.total}>
          <div>Total</div>
          <div className={styles.price}>
            <p>$</p>
            <p>{cart?.totalPrice}</p>
          </div>
        </div>
        {/*<button*/}
        {/*  type="submit"*/}
        {/*  disabled={!cartItems}*/}
        {/*  onClick={onCreateOrder}*/}
        {/*  className={styles.buttonOrder}*/}
        {/*>*/}
        {/*  Order*/}
        {/*</button>*/}
      </div>
    </div>
  );
};

export default CartView;
