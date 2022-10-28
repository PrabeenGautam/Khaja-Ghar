import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [limitError, showLimitError] = useState(false);
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputAmount = +inputRef.current.value;
    if (inputAmount < 1 || inputAmount > 5) {
      showLimitError(true);
    } else {
      props.addToCart(inputAmount);
    }
  };

  const onChangeHandler = (amount) => {
    if (amount < 1 || amount > 5) {
      showLimitError(true);
    } else {
      showLimitError(false);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        label="Amount"
        onChangeHandler={onChangeHandler}
        input={{
          id: "amount_" + props.id,
          type: "number",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {limitError && (
        <p className={classes.error}>Amount should be between 1 and 5</p>
      )}
    </form>
  );
};

export default MealItemForm;
