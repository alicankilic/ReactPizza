import React, { Fragment } from "react";
import TotalMeals from "./TotalMeals";
import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
  return (
    <Fragment>
      <TotalMeals />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
