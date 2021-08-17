import React, { Fragment } from "react";
import styles from "./Header.module.css";
import Meals from "./meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Pizza</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={Meals} alt="Pizza" />
      </div>
    </Fragment>
  );
};

export default Header;
