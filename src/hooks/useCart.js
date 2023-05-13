import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  cartItemsQuantitySelector,
  totalPriceSelector,
  cartItemsSelector,
} from "../pages/Cart/selectors";
import {
  addItemThunk,
  deleteItemThunk,
  getItemsThunk,
  updateItemThunk,
} from "../pages/Cart/Thunk";

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
  const DeleteItemCart = useCallback(
    (id) => {
      dispatch(deleteItemThunk(id));
    },
    [dispatch]
  );

  const IncrementItemCart = useCallback(
    ({ id, quantity }) => {
      const requestData = {
        id,
        quantity: quantity + 1,
      };
      dispatch(updateItemThunk(requestData));
    },
    [dispatch]
  );

  const DecrementItemCart = useCallback(
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
    cartItems,
    cartItemsQuantity,
    totalPrice,
    getCartData,
    addItem,
    DeleteItemCart,
    IncrementItemCart,
    DecrementItemCart,
  };
};

export default useCart;
