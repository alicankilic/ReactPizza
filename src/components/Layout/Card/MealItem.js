import React, { useState, useRef, useContext } from "react";
import Styles from "./MealItem.module.css";
import Styles2 from "./Input.module.css";
import Styles3 from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const CartCtx = useContext(CartContext);
  const [isFormTrue, setIsFormTrue] = useState(true);
  const amountInputRef = useRef();
  const onAddToCart = (amount) => {
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsFormTrue(false);
      return;
    }
    onAddToCart(enteredAmountNumber);
  };

  return (
    <div className={Styles.meal}>
      <h3>{props.name}</h3>
      <span className={Styles.description}>{props.description}</span>
      <span className={Styles.price}>{`$${props.price}`}</span>
      <form className={Styles3.form} onSubmit={submitHandler}>
        <div className={Styles2.input}>
          <label htmlFor={props.id}>Count</label>
          <input
            ref={amountInputRef}
            id={props.id}
            type="number"
            min="1"
            max="5"
            defaultValue="1"
          />
        </div>
        <button>Add</button>
        {!isFormTrue ? <p>please enter a valid amount btw (1-5)</p> : undefined}
      </form>
    </div>
  );
};

export default MealItem;
