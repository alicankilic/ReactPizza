import React from "react";
import Styles from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <div className={Styles.meal}>
      <h3>{props.name}</h3>
      <span className={Styles.description}>{props.description}</span>
      <span className={Styles.price}>{`$${props.price}`}</span>
    </div>
  );
};

export default MealItem;
