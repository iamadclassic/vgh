import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import DataDetails from './component/DataDetails';
import Navbar from './component/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => setDarkMode(prev => !prev);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <style>{`
        body, html, #root {
          margin: 0;
          padding: 0;
          height: 100%;
        }

        .light-mode {
          background-color: #faf9f9ff;
          color: #000000ff;
          min-height: 100vh;
        }

        .dark-mode {
          background-color: #121212;
          color: #468fbdff;
          min-height: 100vh;
        }
      `}</style>

      <Router>
        <Navbar darkMode={darkMode} toggleMode={toggleMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/data/:planId" element={<DataDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
