import React from "react";
import { useSelector } from "react-redux";

const ProductPages = () => {
  const isloading = useSelector((state) => state.mockAPIReducer.isLoading);
  const StateValue = useSelector((state) => state.mockAPIReducer.value);
  console.log(isloading, StateValue);
  return (
    <div>
      <h1> Product page</h1>

      {isloading
        ? StateValue.map((item, index) => {
            return (
              <>
                <div key={index}>
                  <h3>{item.name}</h3>
                  <h3>{item.email}</h3>
                </div>
              </>
            );
          })
        : "loadind"}
    </div>
  );
};

export default ProductPages;
