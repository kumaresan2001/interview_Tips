import React from "react";
import { useContext } from "react";
import { myContext } from "../App";

const Child3 = () => {
  const color = useContext(myContext);
  return (
    <div style={{ backgroundColor: color, border: "2px solid yellow" }}>
      <h1>Child3 component</h1>
    </div>
  );
};

export default Child3;
