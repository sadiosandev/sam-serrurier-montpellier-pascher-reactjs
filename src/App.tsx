// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage/Homepage';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
// import './App.css';

function App() {
  return (
    <div className="App-Router-Dom">
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <div className="global-cta-btn-container">
        <a title="Appelez-nous" target="_blank" rel="noreferrer" href="tel:+33644962401" className="global-cta-btn call-btn">
          <BsFillPhoneVibrateFill className="app-global-phone-icon" />
        </a>
        <a title="Ecrivez-nous" target="_blank" rel="noreferrer" href="mailto:contact@serrurier-montpellier.com" className="global-cta-btn quotation-btn">
          <MdMarkEmailRead className="app-global-phone-icon" />
        </a>
      </div>
    </div>
  );
}

export default App;
