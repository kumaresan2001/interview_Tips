import React from "react";
import { Provider } from "react-redux";

import { store } from "./Features/mockStore";
import ProductPages from "./Components/ProductPages";
import ProductUpdate from "./Components/ProductUpdate";
const App = () => {
  return (
    <div>
      <h1>App components</h1>
      <Provider store={store}>
        <ProductPages />
        <ProductUpdate />
      </Provider>
    </div>
  );
};

export default App;
