import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartView from "../components/CartView";
import useCart from "../../../hooks/useCart";
import { CartLoadingSelector } from "../selectors";
import { addOrdersThunk, getItemsThunk, updateItemThunk } from "../Thunk";
import { handleUpdateState } from "../reducers/orderReducer";
import { getPokemonsIdThunk } from "../../PokemonDetails/api";

const CartContainer = () => {
  const dispatch = useDispatch();

  const {
    cart,
    cartItemsQuantity,
    totalPrice,
    cartItems,
    decrementItemCart,
    incrementItemCart,
    deleteItemCart,
  } = useCart();

  const isLoading = useSelector(CartLoadingSelector);

  // useEffect(() => {
  //   dispatch(updateItemThunk());
  // }, [dispatch]);

  return (
    <CartView
      cart={cart}
      cartItemsQuantity={cartItemsQuantity}
      totalPrice={totalPrice}
      cartItems={cartItems}
      isLoading={isLoading}
      onDeleteItem={deleteItemCart}
      onIncrementItem={incrementItemCart}
      onDecrementItem={decrementItemCart}
      // onCreateOrder={handleCreateOrder}
    />
  );
};

export default CartContainer;
