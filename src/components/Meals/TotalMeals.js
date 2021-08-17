import React from "react";
import styles from "./TotalMeals.module.css"

const TotalMeals = (props) => {
  return (
    <section className={styles.summary}>
      <h2>Pizzaaaa Delivered By Ali Can Kilic</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default TotalMeals;
