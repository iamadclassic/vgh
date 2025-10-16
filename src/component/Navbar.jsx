// component/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ darkMode, toggleMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        /* Global Styles */
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }

        /* Header Styles */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: inherit;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 1000;
        }

        .nav-menu {
          display: flex;
          gap: 1rem;
        }

        .nav-link {
          text-decoration: none;
          font-weight: bold;
          color: inherit;
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

        /* Hamburger Icon */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
        }

        .hamburger div {
          width: 25px;
          height: 3px;
          background-color: currentColor;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* Theme Background Helpers */
        .dark-bg {
          background-color: #121212;
        }

        .light-bg {
          background-color: #faf9f9;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .nav-menu {
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            width: 100vw;
            flex-direction: column;
            overflow: hidden;
            overflow-x: hidden;
            max-height: 0;
            transition: max-height 0.3s ease;
            z-index: 999;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .nav-menu.open {
            max-height: 300px;
          }

          .nav-link {
            padding: 1rem 2rem;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            background-color: inherit;
          }

          .hamburger {
            display: flex;
          }

          .nav-menu.desktop-only {
            display: none;
          }
        }
      `}</style>

      <header className="header">
        {/* Navigation */}
        <nav>
          {/* Hamburger Menu */}
          <div
            className="hamburger"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && handleMenuToggle()}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Navigation Links */}
          <div className={`nav-menu ${menuOpen ? 'open' : ''} ${darkMode ? 'dark-bg' : 'light-bg'}`}>
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
            <Link to="/service" className="nav-link" onClick={closeMenu}>Service</Link>
          </div>
        </nav>

        {/* Mode Toggle Button */}
        <button className="toggle-button" onClick={toggleMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>
    </>
  );
}

export default Navbar;
