import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItem = cartCtx.totalItem.length > 0;

  console.log(cartCtx.totalItem);

  const onCartRemoveHandler = (id) => {
    cartCtx.removeItemFromList(id);
  };
  const onCartAddHandler = (item) => {
    cartCtx.addItemToList({
      id: item.id,
      name: item.name,
      price: item.price,
      amount: 1,
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.totalItem.map(
        (item) =>
          item.amount > 0 && (
            <CartItem
              key={item.id}
              props={item}
              onRemove={onCartRemoveHandler.bind(null, item.id)}
              onAdd={onCartAddHandler.bind(null, item)}
            />
          )
      )}
    </ul>
  );

  return (
    <Modal closeCart={props.closeCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeCart}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
