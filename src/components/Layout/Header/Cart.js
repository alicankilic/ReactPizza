import React, { useContext } from "react";
import Styles from "./Cart.module.css";
import Modal from "../../UserInterface/Modal";
import CartContext from "../../../store/cart-context";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`;
  const hasItems = CartCtx.items.length > 0;

  const cartItemA = CartCtx.items;
  const cartItems = (
    <ol className={Styles["cart-items"]}>
      {cartItemA.map((item) => (
        <li>{item.name}</li>
      ))}
    </ol>
  );

  const { hide } = props;

  return (
    <Modal>
      {cartItems}
      <div className={Styles.total}>
        <span>Total Pizzas Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={Styles.actions}>
        <button className={Styles["button--alt"]} onClick={hide}>
          Close it !
        </button>
        {hasItems === true ? (
          <button className={Styles.button}>Take it !</button>
        ) : undefined}
      </div>
    </Modal>
  );
};

export default Cart;
