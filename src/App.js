import React, { Fragment, useState } from "react";
import Meals from "../src/components/Meals/Meals.jsx";
import Header from "../src/components/UI/Header/Header.jsx";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart = {showCartHandler}  />
      <Meals />
    </Fragment>
  );
};

export default App;
