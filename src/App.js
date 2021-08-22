import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Layout/Header/Cart";
import "./App.css";


function App() {
  const [showTheCart,setShowTheCart] = useState(false);


  const showCartHandler = () => {
       setShowTheCart(true);
  };

  const hideCartHandler = () => {
    setShowTheCart(false);
  };
  
  return (
    <Fragment>
      {showTheCart === true ? <Cart hide={hideCartHandler}/> : undefined}
      <Header click = {showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
