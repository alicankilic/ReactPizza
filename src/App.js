import React, { Fragment } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import "./App.css";

function App() {
  return (
    <Fragment className="App.css">
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
