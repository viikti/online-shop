import { createSelector } from "@reduxjs/toolkit";

export const cartSelector = (state) => state.cart;

export const cartItemsSelector = createSelector(
  cartSelector,
  (cart) => cart.items
);
export const totalPriceSelector = createSelector(
  cartSelector,
  (cart) => cart.totalPrice
);
export const cartItemsQuantitySelector = createSelector(
  cartSelector,
  (cart) => cart.quantity
);
export const CartErrorSelector = createSelector(
  cartSelector,
  (cart) => cart.error
);

export const CartLoadingSelector = createSelector(
  cartSelector,
  (cart) => cart.isLoading
);
