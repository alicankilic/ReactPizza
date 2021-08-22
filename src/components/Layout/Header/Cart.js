import React from "react";
import Styles from "./Cart.module.css";
import Modal from "../../UserInterface/Modal";
const Cart = (props) => {
  const cartItemA = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }];
  const cartItems = (
    <ol className={Styles["cart-items"]}>
      {cartItemA.map((item) => (
        <li>{item.name}</li>
      ))}
    </ol>
  );

  const {hide} = props;

  return (
    <Modal>
      {cartItems}
      <div className={Styles.total}>
        <span>Total Pizzas Amount</span>
        <span>35.22</span>
      </div>
      <div className={Styles.actions}>
        <button className={Styles["button--alt"]} onClick={hide}>Close it !</button>
        <button className={Styles.button}>Take it !</button>
      </div>
    </Modal>
  );
};

export default Cart;
