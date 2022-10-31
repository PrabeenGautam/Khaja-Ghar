import { useRef } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const nameRef = useRef();
  const streetRef = useRef();
  const codeRef = useRef();
  const cityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    props.formValue({
      name: nameRef.current.value,
      street: streetRef.current.value,
      postalCode: codeRef.current.value,
      city: cityRef.current.value,
    });
    props.closeCart();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.formInput}>
        <div className={`${classes.control} form-group`}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            className="form-control"
            required={true}
          />
        </div>
        <div className={`${classes.control} form-group`}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            ref={streetRef}
            className="form-control"
            required={true}
          />
        </div>
        <div className={`${classes.control} form-group`}>
          <label htmlFor="postal">Postal Code</label>
          <input
            type="text"
            id="postal"
            ref={codeRef}
            className="form-control"
            required={true}
          />
        </div>
        <div className={`${classes.control} form-group`}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            ref={cityRef}
            className="form-control"
            required={true}
          />
        </div>
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={props.closeCart}>
          Cancel
        </button>
        <button type="submit" className={"btn btn-primary"}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
