import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import DataDetails from './component/DataDetails';
import Databundle from './component/Databundle';
import AirtimeTopUp from './component/AirtimeTopUp';



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

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color:inherit;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      
        }

        .nav-menu {
          display: flex;
          gap: 1rem;
          
        }

        .nav-link {
  text-decoration: none;
  font-weight: bold;
  color: inherit;  /* IMPORTANT: make it follow parent text color */
}


        .toggle-button {
          padding: 0.5rem 1rem;
          background-color: transparent;
          border: 2px solid currentColor;
          color: inherit;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .toggle-button:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <Router>
        {/* Header */}
        <header className="header">
          <nav className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/service" className="nav-link">Service</Link>
          </nav>
          <button className="toggle-button" onClick={toggleMode}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/data/:planId" element={<DataDetails />} />
          <Route path="/data-bundles" element={<Databundle />} />
          <Route path="/airtime" element={<AirtimeTopUp />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
