import React, { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCart from "../../hooks/useCart";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../selectors";

const IconCart = () => {
  const { cartItemsQuantity, getCartData } = useCart();

  const isAuth = useSelector(isAuthSelector);

  useEffect(() => {
    if (isAuth) {
      getCartData();
    }
    return () => {};
  }, [isAuth, getCartData]);

  return (
    <IconButton aria-label="cart">
      <Badge
        badgeContent={cartItemsQuantity === 0 ? null : cartItemsQuantity}
        color="secondary"
      >
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default IconCart;
