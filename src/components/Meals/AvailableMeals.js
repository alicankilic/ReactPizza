import React from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../Layout/Card/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  return (
    <section className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((elt) => {
          return (<Card name={elt.name} description={elt.description} price={elt.price} id = {elt.id} />)
        })}
      </ul>
    </section>
  );
};

export default AvailableMeals;
