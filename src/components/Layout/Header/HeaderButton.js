import React, { Fragment } from "react";
import styles from "./HeaderButton.module.css";
import CartIcon from "./CartIcon";

const HeaderButton = (props) => {

  const {click} = props;

  return (
    <Fragment>
      <button className={styles.button} onClick={click}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>3</span>
      </button >
    </Fragment>
  );
};

export default HeaderButton;
