import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Missions from './Missions';
import Launched from './Launched';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Missions />} />
        <Route exact path="/launched/:id" element={<Launched />} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;