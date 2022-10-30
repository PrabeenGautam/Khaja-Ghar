import classes from "./HeaderCartButton.module.css";

function AddMealButton(props) {
  return (
    <button className={`${classes.button}`} onClick={props.showAddMeal}>
      <span>
        <span style={{ fontSize: "1.2rem" }}>🍛</span> Add Meals
      </span>
    </button>
  );
}

export default AddMealButton;
