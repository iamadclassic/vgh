// Yes.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

function Home() {
  return (
    <>
      {/* Navigation Header */}
      {/* Network Provider Section */}
      <main className="provider-section">
        <h1 className="section-title">Choose Your Network Provider</h1>
        <div className="provider-grid">
          <div className="provider-card mtn">MTN</div>
          <div className="provider-card glo">GLO</div>
          <div className="provider-card airtel">Airtel</div>
        </div>
      </main>

      {/* Data Prices Section */}
      <section className="data-price-section">
        <h2 className="section-title">Available Data Plans</h2>
        <div className="data-grid">
          <Link to="/data/2gb" className="data-card-link">
            <div className="data-card">
              <h3>2GB</h3>
              <p>₦700</p>
            </div>
          </Link>
          <Link to="/data/3gb" className="data-card-link">
            <div className="data-card">
              <h3>3GB</h3>
              <p>₦1000</p>
            </div>
          </Link>
          <Link to="/data/7gb" className="data-card-link">
            <div className="data-card">
              <h3>7GB</h3>
              <p>₦1500</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
