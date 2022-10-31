import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import useHttp from "../../hooks/use-http";
import baseURL from "../../backend/baseURL";
import { toast } from "react-toastify";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItem = cartCtx.totalItem.length > 0;
  const [orderFood, setOrderFood] = useState(false);
  const { sendRequest } = useHttp();

  const orderFoodHandler = () => setOrderFood(true);

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

  const handleOrderData = (details) => {
    const data = { users: details, meals: cartCtx.totalItem };
    props.closeCart();
    sendRequest({
      url: `${baseURL}/orders.json`,
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });

    toast.success("Meal Ordered Successfully");
    cartCtx.removeAllCartItem();
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
        <span>NPR {cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeCart}>
          Close
        </button>
        {hasItem && (
          <button className={classes.button} onClick={orderFoodHandler}>
            Order
          </button>
        )}
      </div>
      {orderFood && (
        <Checkout formValue={handleOrderData} closeCart={props.closeCart} />
      )}
    </Modal>
  );
};

export default Cart;
