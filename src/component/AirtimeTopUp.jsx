import React, { useState } from 'react';

function AirtimeTopUp() {
  const allAirtimePlans = [
    { id: 1, provider: 'MTN', name: 'MTN ₦100', amount: '₦100' },
    { id: 2, provider: 'MTN', name: 'MTN ₦500', amount: '₦500' },
    { id: 3, provider: 'GLO', name: 'GLO ₦200', amount: '₦200' },
    { id: 4, provider: 'Airtel', name: 'Airtel ₦300', amount: '₦300' },
    { id: 5, provider: '9mobile', name: '9mobile ₦1000', amount: '₦1000' },
    { id: 6, provider: 'Airtel', name: 'Airtel ₦500', amount: '₦500' },
    { id: 7, provider: 'GLO', name: 'GLO ₦1000', amount: '₦1000' },
  ];

  const [selectedProvider, setSelectedProvider] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAirtime = allAirtimePlans.filter(plan => {
    const matchProvider = selectedProvider === 'All' || plan.provider === selectedProvider;
    const matchSearch =
      plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.amount.toLowerCase().includes(searchTerm.toLowerCase());
    return matchProvider && matchSearch;
  });

  const handleBuy = (plan) => {
    alert(`You selected to buy ${plan.name} for ${plan.amount}`);
    // You can replace alert with navigation or API call
  };

  return (
    <>
      <style>{`
        .airtime-page {
          padding: 2rem;
          font-family: 'Segoe UI', sans-serif;
        }

        .airtime-title {
          font-size: 2rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .filter-button {
          padding: 0.5rem 1rem;
          border: 2px solid currentColor;
          background: transparent;
          color: inherit;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          transition: background 0.3s ease;
        }

        .filter-button:hover,
        .filter-button.active {
          background-color: rgba(0,0,0,0.1);
        }

        .search-bar {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .search-input {
          padding: 0.6rem 1rem;
          width: 300px;
          max-width: 90%;
          border: 2px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
        }

        .dark-mode .search-input {
          background-color: #222;
          color: #fff;
          border-color: #555;
        }

        .airtime-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .airtime-card {
          padding: 1rem 2rem;
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.1);
          color: inherit;
          border: 1px solid rgba(255, 255, 255, 0.2);
          min-width: 200px;
          text-align: center;
          position: relative;
        }

        .dark-mode .airtime-card {
          background-color: rgba(255, 255, 255, 0.05);
        }

        .light-mode .airtime-card {
          background-color: #f5f5f5;
        }

        .buy-button {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background-color: #007bff;
          border: none;
          color: white;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .buy-button:hover {
          background-color: #0056b3;
        }

        .no-results {
          text-align: center;
          font-style: italic;
          margin-top: 2rem;
        }
      `}</style>

      <div className="airtime-page">
        <h2 className="airtime-title">Airtime Top-Up</h2>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {['All', 'MTN', 'GLO', 'Airtel', '9mobile'].map(provider => (
            <button
              key={provider}
              className={`filter-button ${selectedProvider === provider ? 'active' : ''}`}
              onClick={() => setSelectedProvider(provider)}
            >
              {provider}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search by amount or name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Airtime List */}
        <div className="airtime-list">
          {filteredAirtime.length > 0 ? (
            filteredAirtime.map(plan => (
              <div key={plan.id} className="airtime-card">
                <h3>{plan.provider}</h3>
                <p>{plan.name}</p>
                <p>{plan.amount}</p>
                <button className="buy-button" onClick={() => handleBuy(plan)}>
                  Buy Now
                </button>
              </div>
            ))
          ) : (
            <p className="no-results">No airtime plans match your search.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default AirtimeTopUp;
