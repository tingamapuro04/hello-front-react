import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getApiData } from "./features/dataasync/dataSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
