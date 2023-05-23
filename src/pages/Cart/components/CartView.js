import React from "react";
import PropTypes from "prop-types";
import Spinner from "../../../commonComponents/Spinner";

import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../../routes/RouteName";
import DeleteIcon from "@mui/icons-material/Delete";

import ChangeQuantityButton from "../../../../src/commonComponents/ChangeQuantityButton";
import SnackbarWithAlert from "../../../commonComponents/Snackbar";

const CartView = ({
  cart,
  cartItemsQuantity,
  cartItems,
  isLoading,
  onDeleteItem,
  onIncrementItem,
  onDecrementItem,
  onCreateOrder,
  success,
}) => (
  <div className={styles.wrapper}>
    {isLoading ? (
      <Spinner color={`yellow`} />
    ) : (
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          <h1 className={styles.title}>My Cart</h1>

          {!cartItemsQuantity ? (
            <div className={styles.titleCart}>
              <p>
                Your shopping cart is empty. If you see something you would like
                to add to your shopping cart when shopping, click Add to Cart.
              </p>
              <NavLink className={styles.linkShop} to={ROUTE_NAMES.POKEMON}>
                Back to store
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
            ))
          )}
        </div>

        <div className={styles.totalPriceContainer}>
          <h2 className={styles.titleTotalPrice}>Total price</h2>
          <div className={styles.total}>
            <div>Total</div>
            <div className={styles.price}>
              <p>$</p>
              <p>{cart?.totalPrice}</p>
            </div>
          </div>
          <button
            type="submit"
            disabled={!cart.quantity}
            onClick={onCreateOrder}
            className={styles.buttonOrder}
          >
            Order
          </button>
        </div>
      </div>
    )}

    {success && (
      <SnackbarWithAlert
        timeAlert={3500}
        textAlert="Your order is accepted!"
        severity="success"
      />
    )}
  </div>
);

export default CartView;
