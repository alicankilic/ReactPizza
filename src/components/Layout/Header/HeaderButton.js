import React, { Fragment, useContext } from "react";
import styles from "./HeaderButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../../store/cart-context";


const HeaderButton = (props) => {

  const {click} = props;

  const CartCtx = useContext(CartContext);
  const numberOfCartItems = CartCtx.items.reduce((curNumber,item) => { return curNumber+item.amount}, 0 );
  return (
    <Fragment>
      <button className={styles.button} onClick={click}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
      </button >
    </Fragment>
  );
};

export default HeaderButton;
