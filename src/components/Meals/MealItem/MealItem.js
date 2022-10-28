import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/CartContext";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const context = useContext(CartContext);

  const addToCart = (amount) => {
    context.addItemToList({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} addToCart={addToCart} />
      </div>
    </li>
  );
};

export default MealItem;
