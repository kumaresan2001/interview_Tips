import React, { useContext } from "react";
import { myContext } from "../App";
import Child2child from "./Child2child";

const Child2 = () => {
  const [color, setColor, myfun] = useContext(myContext);
  return (
    <div style={{ backgroundColor: color, border: "2px solid yellow" }}>
      <h1>Child2 component</h1>
      <button onClick={() => myfun()}> pink chage</button>
      <Child2child />
    </div>
  );
};

export default Child2;
