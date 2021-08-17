import React, { Fragment } from "react";
import mealsImg from "../../ImgSource/meals.jpg";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeal</h1>
        <HeaderButton/>
      </header>
      <div className={styles['main-image']}>
          <img src={mealsImg} alt="Pizza"/>
      </div>
    </Fragment>
  );
};

export default Header;
