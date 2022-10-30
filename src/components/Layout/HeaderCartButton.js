import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const { totalItem } = ctx;
  const numberOfItems = totalItem.reduce((accu, item) => accu + item.amount, 0);

  const [bumpBtn, setBumpBtn] = useState(false);

  useEffect(() => {
    if (totalItem.length === 0) {
      return;
    }
    setBumpBtn(true);

    const timer = setTimeout(() => {
      setBumpBtn(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [totalItem]);

  return (
    <button
      className={`${classes.button} ${bumpBtn ? classes.bump : ""}`}
      onClick={props.showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
