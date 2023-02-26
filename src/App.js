import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getApiData } from './features/dataasync/dataSlice';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
