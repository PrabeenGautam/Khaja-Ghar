import React from "react";

const CartContext = React.createContext({
  totalAmount: 0,
  totalItem: [],
  addItemToList: (item) => {},
  removeItemFromList: (id) => {},
});
export default CartContext;
