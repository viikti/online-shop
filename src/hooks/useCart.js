import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  cartItemsQuantitySelector,
  totalPriceSelector,
  cartItemsSelector,
  cartSelector,
  CartErrorSelector,
  CartLoadingSelector,
} from "../pages/Cart/selectors";
import {
  addItemThunk,
  deleteItemThunk,
  getItemsThunk,
  updateItemThunk,
} from "../pages/Cart/Thunk";
import { setValue } from "../pages/Cart/reducers/cartReducer";

const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const cartItems = useSelector(cartItemsSelector);
  const cartItemsQuantity = useSelector(cartItemsQuantitySelector);
  const totalPrice = useSelector(totalPriceSelector);
  const error = useSelector(CartErrorSelector);
  const isLoading = useSelector(CartLoadingSelector);

  const getCartData = useCallback(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  const addItem = useCallback(
    (itemData) => {
      dispatch(addItemThunk(itemData));
    },
    [dispatch]
  );

  const deleteItemCart = useCallback(
    (id) => {
      dispatch(deleteItemThunk(id));
    },
    [dispatch]
  );

  const incrementItemCart = useCallback(
    ({ id, quantity }) => {
      const requestData = {
        id,
        quantity: quantity + 1,
      };
      dispatch(updateItemThunk(requestData));
    },
    [dispatch]
  );

  const decrementItemCart = useCallback(
    ({ id, quantity }) => {
      if (quantity > 1) {
        const requestData = {
          id,
          quantity: quantity - 1,
        };

        dispatch(updateItemThunk(requestData));
      }
    },
    [dispatch]
  );

  return {
    cart,
    cartItems,
    cartItemsQuantity,
    totalPrice,
    getCartData,
    addItem,
    deleteItemCart,
    incrementItemCart,
    decrementItemCart,
    error,
    isLoading,
  };
};

export default useCart;
