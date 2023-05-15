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

//ORDER SELECTOR

// export const orderSelector = (state) => state.order;
//
// export const orderDataSelector = createSelector(
//     orderSelector,
//     (order)=> order.data
// );
//
// export const orderIsLoadingSelector = createSelector(
//     orderSelector,
//     (order)=> order.isLoading
// );

export const orderSelector = (state) => state.order.data;

export const orderIsLoading = (state) => state.order.isLoading;

export const orderDetailsSelector = createSelector(
  orderSelector,
  (state, id) => id,
  (order, id) => {
    if (order && id) {
      const orderItem = order.find(({ _id: itemId }) => itemId === id);

      return orderItem?.items;
    }
    return null;
  }
);
