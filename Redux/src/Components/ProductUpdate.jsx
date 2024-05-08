import { useEffect, useState } from "react";
import { loading, fetchData } from "../Features/mockSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
const ProductUpdate = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/users";

  const mockFetchData = async () => {
    const res = await axios.get(URL);
    setData(res.data);
  };

  useEffect(() => {
    mockFetchData();
  }, []);

  return (
    <div>
      <h1>product Update</h1>
      <button
        onClick={() => {
          dispatch(fetchData(data));
        }}
      >
        Fectch Data
      </button>
    </div>
  );
};

export default ProductUpdate;
