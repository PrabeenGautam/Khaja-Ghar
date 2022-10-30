import { useState } from "react";
import Modal from "../UI/Modal";

function AddMeals(props) {
  const [formValue, setFormValue] = useState(
    Object.freeze({ name: "", description: "", price: "" })
  );

  const onChangeHandler = (e) => {
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.formValue(formValue);
    props.closeCart();
  };
  return (
    <Modal closeCart={props.closeCart}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="meal-name">Meal Name</label>
          <input
            type="text"
            className="form-control"
            id="meal-name"
            name="name"
            required={true}
            placeholder="Enter meal"
            onChange={onChangeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            required={true}
            name="description"
            placeholder="Enter Description"
            onChange={onChangeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            id="price"
            step="0.01"
            required={true}
            placeholder="Enter Price"
            onChange={onChangeHandler}
          />
        </div>
        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={props.closeCart}>
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddMeals;
