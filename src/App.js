import React, { useState } from "react";
import Meals from "../src/components/Meals/Meals.jsx";
import Header from "../src/components/UI/Header/Header.jsx";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart = {showCartHandler}  />
      <Meals />
    </CartProvider>
  );
};

export default App;
