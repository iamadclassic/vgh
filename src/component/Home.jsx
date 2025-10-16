// src/component/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const bgImageUrl = 'https://www.talkatone.com/wp-content/uploads/2020/04/wifi-calling-app.png';

  return (
    <>
      <style>{`
        .home-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bgImageUrl}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          color: white;
          text-align: center;
          padding: 2rem;
          animation: fadeIn 1.5s ease-in-out forwards;
          opacity: 0; /* Start hidden */
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .home-title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .home-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }
        .home-buttons {
          display: flex;
          gap: 1rem;
        }
        .home-button {
          padding: 0.8rem 1.6rem;
          font-size: 1.1rem;
          border: 2px solid white;
          color: white;
          background-color: transparent;
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .home-button:hover {
          background-color: rgba(255,255,255,0.2);
        }
        @media (max-width: 600px) {
          .home-title {
            font-size: 2.3rem;
          }
          .home-subtitle {
            font-size: 1.2rem;
          }
          .home-buttons {
            flex-direction: column;
          }
          .home-button {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <div className="home-container">
        <h1 className="home-title">Welcome to DataSwift</h1>
        <p className="home-subtitle">
          Fast, easy & reliable: data, airtime & utility payments made simple.
        </p>
        <div className="home-buttons">
          <Link to="/service" className="home-button">Our Services</Link>
          <Link to="/contact" className="home-button">Contact Us</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
