import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DataBundle() {
  const allBundles = [
    { id: 1, provider: 'MTN', size: '500MB', price: '₦300' },
    { id: 2, provider: 'GLO', size: '1GB', price: '₦500' },
    { id: 3, provider: 'Airtel', size: '2GB', price: '₦700' },
    { id: 4, provider: 'MTN', size: '5GB', price: '₦1200' },
    { id: 5, provider: 'GLO', size: '3GB', price: '₦900' },
    { id: 6, provider: 'Airtel', size: '4.5GB', price: '₦1100' },
    { id: 7, provider: 'MTN', size: '10GB', price: '₦2000' },
  ];

  const [selectedProvider, setSelectedProvider] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBundles = allBundles.filter(bundle => {
    const matchProvider = selectedProvider === 'All' || bundle.provider === selectedProvider;
    const matchSearch = bundle.size.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        bundle.price.toLowerCase().includes(searchTerm.toLowerCase());
    return matchProvider && matchSearch;
  });

  return (
    <>
      <style>{`
        .bundle-page {
          padding: 2rem;
        }

        .bundle-title {
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

        .bundle-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .bundle-card {
          padding: 1rem 2rem;
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.1);
          color: inherit;
          border: 1px solid rgba(255, 255, 255, 0.2);
          min-width: 200px;
          text-align: center;
          cursor: pointer;
          text-decoration: none;
        }

        .dark-mode .bundle-card {
          background-color: rgba(255, 255, 255, 0.05);
        }

        .light-mode .bundle-card {
          background-color: #f5f5f5;
        }
      `}</style>

      <div className="bundle-page">
        <h2 className="bundle-title">Available Data Bundles</h2>

        <div className="filter-buttons">
          {['All', 'MTN', 'GLO', 'Airtel'].map(provider => (
            <button
              key={provider}
              className={`filter-button ${selectedProvider === provider ? 'active' : ''}`}
              onClick={() => setSelectedProvider(provider)}
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
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="bundle-list">
          {filteredBundles.length > 0 ? (
            filteredBundles.map(bundle => (
              <Link to={`/data/${bundle.id}`} key={bundle.id} className="bundle-card">
                <h3>{bundle.provider}</h3>
                <p>{bundle.size}</p>
                <p>{bundle.price}</p>
              </Link>
            ))
          ) : (
            <p>No bundles match your search.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default DataBundle;
