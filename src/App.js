import './App.css';
import React from 'react';
import Quotes from './Components/Quotes';
// import Homepage from './Components/Homepage';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="App" >
          <div className="App-header gradient">
            <Routes>
              <Route path='/' element={<Quotes />} />
              {/* <Route exact path='quotes' element={<Quotes />} /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
