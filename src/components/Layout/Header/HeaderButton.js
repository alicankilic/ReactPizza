import React, { Fragment, useContext, useEffect, useState } from "react";
import styles from "./HeaderButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../../store/cart-context";

const HeaderButton = (props) => {
  const { click } = props;
  const [btnState, setbtnState] = useState(false);

  const CartCtx = useContext(CartContext);
  const { items } = CartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const buttonClasses = `${styles.button} ${btnState ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnState(true);
    const Timer = setTimeout(() => {
      setbtnState(false);
    }, 300);

    return () => {
      clearTimeout(Timer);
    };
  }, [items]);

  return (
    <Fragment>
      <button className={buttonClasses} onClick={click}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
      </button>
    </Fragment>
  );
};

export default HeaderButton;
