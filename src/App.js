import React, { Fragment } from "react";
import Meals from "../src/components/Meals/Meals.jsx";
import Header from "../src/components/UI/Header/Header.jsx";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <Fragment>
      <Cart />
      <Header />
      <Meals />
    </Fragment>
  );
};

export default App;
