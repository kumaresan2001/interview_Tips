import React, { useContext } from "react";
import { myContext } from "../App";

const Child4 = () => {
  const [data, setData] = useContext(myContext);
  return (
    <div>
      <h1>Child4 component</h1>
      {data.map((item, index) => {
        return (
          <>
            <div key={index}>
              <div>{item.name}</div>
              <div>{item.email}</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Child4;
