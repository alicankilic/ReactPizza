import React, {useState} from "react";
import Styles from "./MealItem.module.css";
import Styles2 from "./Input.module.css";
import Styles3 from "./MealItemForm.module.css";

const MealItem = (props) => {
 

  const [inputVal,setInputVal] = useState(1);

  const inputHandler = () => setInputVal(inputVal+1);

  return (
    <div className={Styles.meal}>
      <h3>{props.name}</h3>
      <span className={Styles.description}>{props.description}</span>
      <span className={Styles.price}>{`$${props.price}`}</span>
      <form className={Styles3.form}>
        <div className={Styles2.input}>
         <label htmlFor={props.id}>Count</label>
         <input id={props.id} type="number" min="1" max="5" defaultValue="1" value={inputVal}/>
        </div>    
        <button type="button" onClick={inputHandler}>Add</button>
      </form>
    </div>
  );
};

export default MealItem;
