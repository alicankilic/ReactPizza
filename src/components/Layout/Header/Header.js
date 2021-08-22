import React, { Fragment } from "react";
import mealsImg from "../../ImgSource/meals.jpg";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  
    const {click,hide} = props;

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeal</h1>
        <HeaderButton click = {click} hide={hide}/>
      </header>
      <div className={styles['main-image']}>
          <img src={mealsImg} alt="Pizza"/>
      </div>
    </Fragment>
  );
};

export default Header;
