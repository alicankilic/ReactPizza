import React from "react";
import styles from "./Card.module.css";
import MealItem from "./MealItem";

const Card = (props) => {
    
    const {name,description,price} = props;


    return (
        <div className={styles.card}>
            <MealItem name={name} description={description} price={price} />
        </div>
    );
}

export default Card;
