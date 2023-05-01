// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage/Homepage';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import DepannageUrgence from './components/Pages/DepannageUrgence';
import PorteBlindee from './components/Pages/PorteBlindee';
import ProtectionContreVol from './components/Pages/ProtectionContreVol';
import PoseSerrure from './components/Pages/PoseSerrure';
import RemplacementCylindre from './components/Pages/RemplacementCylindre';
import ChangementSerrure3Points from './components/Pages/ChangementSerrure3Points';
// import './App.css';

function App() {
  return (
    <div className="App-Router-Dom">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/urgence-depannage-serrurier-montpellier' element={ <DepannageUrgence /> } />
        <Route path='/portes-blindees-serrurier-montpellier' element={ <PorteBlindee /> } />
        <Route path='/protection-contre-le-vol-serrurier-montpellier' element={ <ProtectionContreVol /> } />
        <Route path='/pose-serrure-serrurier-montpellier' element={ <PoseSerrure /> } />
        <Route path='/remplacement-cylindre-serrurier-montpellier' element={ <RemplacementCylindre /> } />
        <Route path='/changement-serrure-3-points-serrurier-montpellier' element={ <ChangementSerrure3Points /> } />
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
