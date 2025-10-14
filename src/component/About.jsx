import React from 'react';

function About() {
  return (
    <>
      <style>{`
        .page-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
          font-family: 'Segoe UI', sans-serif;
          color: #333;
          background-color: #fafafa;
          min-height: 80vh;
        }

        .page-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          text-align: center;
          color: #2c3e50;
        }

        .page-description {
          font-size: 1.1rem;
          line-height: 1.8;
          text-align: center;
          color: #555;
        }
      `}</style>

      <main className="page-container">
        <h1 className="page-title">About Us</h1>
        <p className="page-description">
          Welcome to <strong>DataSwift</strong> — your reliable partner for fast and affordable data, airtime, and utility services.
          <br /><br />
          Our mission is to simplify the way you connect and pay. With a few taps, you can recharge, subscribe, or settle bills — anytime, anywhere.
        </p>
      </main>
    </>
  );
}

export default About;
