import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getApiData } from "./features/dataasync/dataSlice";
import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);

  return (
    <div className="App">
      <Greeting />
    </div>
  );
}

export default App;
