import React, { Fragment } from "react";
import Meals from "../src/components/Meals/Meals.jsx";
import Header from "../src/components/UI/Header/Header.jsx";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
};

export default App;
