import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import AddMealButton from "./AddMealButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>KhajaGhar</h1>
        <AddMealButton showAddMeal={props.showAddMeal} />
        <HeaderCartButton showCart={props.showCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
