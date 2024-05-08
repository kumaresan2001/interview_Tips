import { createContext, useEffect, useState } from "react";
import "./App.css";
import Chilad1 from "./Components/Chilad1";
import Child2 from "./Components/Child2";
import Child3 from "./Components/Child3";
import Child4 from "./Components/Child4";
import axios from "axios";
export const myContext = createContext();
function App() {
  const [Color, setColor] = useState("blue");
  const [data, setData] = useState([]);

  const myfun = () => {
    setColor("pink");
  };
  const URL = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async () => {
    const res = await axios.get(URL);
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>App compontes</h1>
      <input
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />

      <myContext.Provider value={[Color, setColor, myfun]}>
        <Chilad1 />
        <Child2 />
      </myContext.Provider>
      <myContext.Provider value={"yellow"}>
        <Child3 />
      </myContext.Provider>
      <myContext.Provider value={[data, setData]}>
        <Child4 />
      </myContext.Provider>
    </div>
  );
}

export default App;
