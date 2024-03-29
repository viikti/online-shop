import { useCallback } from "react";
import CartView from "../components/CartView";
import useCart from "../../../hooks/useCart";
import { useDispatch, useSelector } from "react-redux";
import { createNewOrdersThunk } from "../Thunk";

const CartContainer = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const {
    cart,
    cartItems,
    cartItemsQuantity,
    totalPrice,
    decrementItemCart,
    incrementItemCart,
    deleteItemCart,
    error,
    deleteAllItemsCart,
  } = useCart();

  const handleCreateOrder = useCallback(() => {
    const { cartItemsQuantity, error, isLoading, ...otherCartFields } = cart;

    const { customerId, totalPrice, items } = otherCartFields;

    const customItemsList = Array.from(Object.values(items));

    dispatch(
      createNewOrdersThunk({
        customerId,
        totalPrice,
        itemsList: customItemsList,
      })
    );
  }, [cart, dispatch]);

  return (
    <CartView
      cart={cart}
      cartItemsQuantity={cartItemsQuantity}
      totalPrice={totalPrice}
      cartItems={cartItems}
      isLoading={cart.isLoading}
      onDeleteItem={deleteItemCart}
      onIncrementItem={incrementItemCart}
      onDecrementItem={decrementItemCart}
      error={error}
      success={order.success}
      onCreateOrder={handleCreateOrder}
      deleteAllItemsCart={deleteAllItemsCart}
    />
  );
};

export default CartContainer;
