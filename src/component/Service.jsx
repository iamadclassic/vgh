import React, { useState } from 'react';

function Service() {
  const [activeSection, setActiveSection] = useState(null);

  // ===== DATA BUNDLES LOGIC =====
  const allBundles = [
    { id: 1, provider: 'MTN', size: '500MB', price: '₦300' },
    { id: 2, provider: 'GLO', size: '1GB', price: '₦500' },
    { id: 3, provider: 'Airtel', size: '2GB', price: '₦700' },
    { id: 4, provider: 'MTN', size: '5GB', price: '₦1200' },
    { id: 5, provider: 'GLO', size: '3GB', price: '₦900' },
    { id: 6, provider: 'Airtel', size: '4.5GB', price: '₦1100' },
    { id: 7, provider: 'MTN', size: '10GB', price: '₦2000' },
  ];
  const [bundleProvider, setBundleProvider] = useState('All');
  const [bundleSearch, setBundleSearch] = useState('');
  const filteredBundles = allBundles.filter(bundle => {
    const matchProvider = bundleProvider === 'All' || bundle.provider === bundleProvider;
    const matchSearch = bundle.size.toLowerCase().includes(bundleSearch.toLowerCase()) ||
      bundle.price.toLowerCase().includes(bundleSearch.toLowerCase());
    return matchProvider && matchSearch;
  });

  // ===== AIRTIME LOGIC =====
  const allAirtimePlans = [
    { id: 1, provider: 'MTN', name: 'MTN ₦100', amount: '₦100' },
    { id: 2, provider: 'MTN', name: 'MTN ₦500', amount: '₦500' },
    { id: 3, provider: 'GLO', name: 'GLO ₦200', amount: '₦200' },
    { id: 4, provider: 'Airtel', name: 'Airtel ₦300', amount: '₦300' },
    { id: 5, provider: '9mobile', name: '9mobile ₦1000', amount: '₦1000' },
    { id: 6, provider: 'Airtel', name: 'Airtel ₦500', amount: '₦500' },
    { id: 7, provider: 'GLO', name: 'GLO ₦1000', amount: '₦1000' },
  ];
  const [airtimeProvider, setAirtimeProvider] = useState('All');
  const [airtimeSearch, setAirtimeSearch] = useState('');
  const filteredAirtime = allAirtimePlans.filter(plan => {
    const matchProvider = airtimeProvider === 'All' || plan.provider === airtimeProvider;
    const matchSearch = plan.name.toLowerCase().includes(airtimeSearch.toLowerCase()) ||
      plan.amount.toLowerCase().includes(airtimeSearch.toLowerCase());
    return matchProvider && matchSearch;
  });

  // ===== UTILITY PAYMENT LOGIC =====
  const utilities = [
    { id: 1, type: 'Electricity', name: 'NEPA (Ikeja Electric)' },
    { id: 2, type: 'Electricity', name: 'EEDC (Enugu Disco)' },
    { id: 3, type: 'TV', name: 'DSTV (Multichoice)' },
    { id: 4, type: 'TV', name: 'GOTV (Multichoice)' },
    { id: 5, type: 'TV', name: 'Startimes' },
  ];
  const [utilityType, setUtilityType] = useState('All');
  const [utilitySearch, setUtilitySearch] = useState('');
  const filteredUtilities = utilities.filter(item => {
    const matchType = utilityType === 'All' || item.type === utilityType;
    const matchSearch = item.name.toLowerCase().includes(utilitySearch.toLowerCase());
    return matchType && matchSearch;
  });

  const handleBuy = (item) => {
    alert(`Buying ${item.name || item.size} for ${item.amount || item.price}`);
  };

  const handlePay = (utility) => {
    alert(`Paying for ${utility.name}`);
  };

  return (
    <>
      <style>{`
        .page-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1rem;
          font-family: 'Segoe UI', sans-serif;
        }

        .page-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #2c3e50;
        }

        .service-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .service-card {
          background: #f2f2f2;
          border-radius: 10px;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          text-align: center;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
        }

        .icon {
          font-size: 2rem;
        }

        .section {
          margin-top: 3rem;
        }

        .filters, .search-bar {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 1rem 0;
          flex-wrap: wrap;
        }

        .filter-button {
          padding: 0.4rem 1rem;
          border: 2px solid currentColor;
          background: transparent;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
        }

        .filter-button.active {
          background-color: rgba(0,0,0,0.1);
        }

        .search-input {
          padding: 0.5rem 1rem;
          border-radius: 6px;
          border: 2px solid #ccc;
          font-size: 1rem;
        }

        .card-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .data-card, .airtime-card, .utility-card {
          background: #eaeaea;
          padding: 1rem;
          border-radius: 8px;
          min-width: 200px;
          text-align: center;
        }

        .buy-button, .pay-button {
          margin-top: 0.5rem;
          padding: 0.4rem 0.8rem;
          border: none;
          background-color: #007bff;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
        }

        .buy-button:hover, .pay-button:hover {
          background-color: #0056b3;
        }
      `}</style>

      <div className="page-container">
        <h1 className="page-title">Our Services</h1>

        <div className="service-cards">
          <div className="service-card" onClick={() => setActiveSection('data')}>
            <div className="icon">📶</div>
            <h3>Data Bundles</h3>
            <p>Buy affordable data for MTN, GLO, Airtel & 9mobile instantly.</p>
          </div>

          <div className="service-card" onClick={() => setActiveSection('airtime')}>
            <div className="icon">💳</div>
            <h3>Airtime Top-Up</h3>
            <p>Recharge your line in seconds without extra charges.</p>
          </div>

          <div className="service-card" onClick={() => setActiveSection('utility')}>
            <div className="icon">💡</div>
            <h3>Utility Payment</h3>
            <p>Pay electricity and TV bills without queues or delays.</p>
          </div>

          <div className="service-card" onClick={() => setActiveSection('support')}>
            <div className="icon">🤝</div>
            <h3>Support</h3>
            <p>24/7 customer service to help you anytime, anywhere.</p>
          </div>
        </div>

        {/* === Data Bundles Section === */}
        {activeSection === 'data' && (
          <div className="section">
            <h2>Data Bundles</h2>
            <div className="filters">
              {['All', 'MTN', 'GLO', 'Airtel'].map(provider => (
                <button
                  key={provider}
                  className={`filter-button ${bundleProvider === provider ? 'active' : ''}`}
                  onClick={() => setBundleProvider(provider)}
                >
                  {provider}
                </button>
              ))}
            </div>
            <div className="search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="Search by size or price"
                value={bundleSearch}
                onChange={(e) => setBundleSearch(e.target.value)}
              />
            </div>
            <div className="card-grid">
              {filteredBundles.map(bundle => (
                <div key={bundle.id} className="data-card">
                  <h3>{bundle.provider}</h3>
                  <p>{bundle.size}</p>
                  <p>{bundle.price}</p>
                  <button className="buy-button" onClick={() => handleBuy(bundle)}>Buy Now</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === Airtime Section === */}
        {activeSection === 'airtime' && (
          <div className="section">
            <h2>Airtime Top-Up</h2>
            <div className="filters">
              {['All', 'MTN', 'GLO', 'Airtel', '9mobile'].map(provider => (
                <button
                  key={provider}
                  className={`filter-button ${airtimeProvider === provider ? 'active' : ''}`}
                  onClick={() => setAirtimeProvider(provider)}
                >
                  {provider}
                </button>
              ))}
            </div>
            <div className="search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="Search by amount or name"
                value={airtimeSearch}
                onChange={(e) => setAirtimeSearch(e.target.value)}
              />
            </div>
            <div className="card-grid">
              {filteredAirtime.map(plan => (
                <div key={plan.id} className="airtime-card">
                  <h3>{plan.provider}</h3>
                  <p>{plan.name}</p>
                  <p>{plan.amount}</p>
                  <button className="buy-button" onClick={() => handleBuy(plan)}>Buy Now</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === Utility Payment Section === */}
        {activeSection === 'utility' && (
          <div className="section">
            <h2>Utility Payments</h2>
            <div className="filters">
              {['All', 'Electricity', 'TV'].map(type => (
                <button
                  key={type}
                  className={`filter-button ${utilityType === type ? 'active' : ''}`}
                  onClick={() => setUtilityType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="Search by name"
                value={utilitySearch}
                onChange={(e) => setUtilitySearch(e.target.value)}
              />
            </div>
            <div className="card-grid">
              {filteredUtilities.map(util => (
                <div key={util.id} className="utility-card">
                  <h3>{util.name}</h3>
                  <p>Type: {util.type}</p>
                  <button className="pay-button" onClick={() => handlePay(util)}>Pay Now</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === Support Section === */}
        {activeSection === 'support' && (
          <div className="section">
            <h2>Customer Support</h2>
            <p>Contact us at idowuadebayo226@gmail.com or call 08146166269.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Service;

