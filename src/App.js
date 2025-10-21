import './App.css';
// import React from 'react';
import Quotes from './Components/Quotes';
import Homepage from './Components/Homepage';
import Guestbook from './Components/Guestbook';
import { BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="App" >
          <div className="App-header gradient">
            <Routes>
              <Route path='/quotes' element={<Quotes />} />
              <Route path='/' element={<Homepage />} />
              <Route path='/guestbook' element={<Guestbook />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
