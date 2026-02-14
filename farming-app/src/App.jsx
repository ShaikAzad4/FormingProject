import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Crops from './components/Crops';
import CropDetails from './components/CropDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/crop/:cropId" element={<CropDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;