import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  cartItemsQuantitySelector,
  totalPriceSelector,
  cartItemsSelector,
} from "../pages/Cart/selectors";
import { addItemThunk, getItemsThunk } from "../pages/Cart/Thunk";

const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(cartItemsSelector);
  const cartItemsQuantity = useSelector(cartItemsQuantitySelector);
  const totalPrice = useSelector(totalPriceSelector);

  const getCartData = useCallback(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  const addItem = useCallback(
    (itemData) => {
      dispatch(addItemThunk(itemData));
    },
    [dispatch]
  );
  // const handleDeleteItem = useCallback(
  //   (id) => {
  //     dispatch(deleteItem(id));
  //   },
  //   [dispatch]
  // );
  //
  // const handleIncrementItem = useCallback(
  //   (payload) => {
  //     const reqestBody = {
  //       id: payload.id,
  //       quantity: payload.quantity + 1,
  //     };
  //     dispatch(updateItem(reqestBody));
  //   },
  //   [dispatch]
  // );
  //
  // const handleDecrementItem = useCallback(
  //   ({ id, quantity }) => {
  //     if (quantity > 1) {
  //       const payload = {
  //         id,
  //         quantity: quantity - 1,
  //       };
  //
  //       dispatch(updateItem(payload));
  //     }
  //   },
  //   [dispatch]
  // );
  //
  return {
    cartItems,
    cartItemsQuantity,
    totalPrice,
    getCartData,
    addItem,
  };
};

export default useCart;
