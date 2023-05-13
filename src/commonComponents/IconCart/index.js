import React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCart from "../../hooks/useCart";
const IconCart = () => {
  const { cartItemsQuantity } = useCart();

  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={cartItemsQuantity} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default IconCart;
