import React, { useContext } from "react";
import { myContext } from "../App";

const Child2child = () => {
  const [color, setColor] = useContext(myContext);
  return (
    <div style={{ backgroundColor: color, border: "2px solid black" }}>
      <h1>Child2child</h1>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        change color
      </button>
    </div>
  );
};

export default Child2child;
