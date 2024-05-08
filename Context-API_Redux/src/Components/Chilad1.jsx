import React, { useContext } from "react";
import { myContext } from "../App";

const Chilad1 = () => {
  const [color, setColor, myfun] = useContext(myContext);
  return (
    <div style={{ backgroundColor: color, border: "2px solid black" }}>
      <h1>Child1 component</h1>
    </div>
  );
};

export default Chilad1;
