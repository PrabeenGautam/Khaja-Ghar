import { useReducer } from "react";
import CartContext from "./CartContext";

// item = {id, name, price, amount}

function CartProvider({ children }) {
  const defaultCart = {
    item: [],
    amount: 0,
  };

  const reducer = (state, action) => {
    if (action.type === "ADD") {
      const updatedAmount =
        state.amount + action.payload.price * action.payload.amount;
      const numAmount = Number(updatedAmount.toFixed(2));

      const index = state.item.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingItem = state.item[index];
      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };
        updatedItems = [...state.item];
        updatedItems[index] = updatedItem;
      } else {
        updatedItems = [...state.item, action.payload];
      }

      return { item: updatedItems, amount: numAmount };
    } else if (action.type === "REMOVE") {
      const index = state.item.findIndex((item) => item.id === action.id);
      const existingItem = state.item[index];

      const updatedAmount = state.amount - existingItem.price;
      const numAmount = Number(updatedAmount.toFixed(2));
      let updatedItems = [...state.item];
      const newAmount = existingItem.amount - 1;

      if (newAmount === 0) {
        updatedItems.splice(index, 1);
      } else {
        updatedItems[index] = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
      }

      return { item: [...updatedItems], amount: numAmount };
    } else if (action.type === "REMOVE_ALL") {
      return defaultCart;
    } else return defaultCart;
  };

  const [state, dispatchCartActions] = useReducer(reducer, defaultCart);
  const addItemToList = (item) => {
    dispatchCartActions({ type: "ADD", payload: item });
  };

  const removeItemFromList = (id) => {
    dispatchCartActions({ type: "REMOVE", id: id });
  };

  const removeAllCartItem = () => {
    dispatchCartActions({ type: "REMOVE_ALL" });
  };

  const initialState = {
    totalItem: state.item,
    totalAmount: state.amount,
    addItemToList,
    removeItemFromList,
    removeAllCartItem,
  };
  return (
    <CartContext.Provider value={initialState}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
