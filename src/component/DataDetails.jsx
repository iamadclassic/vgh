import React from 'react';
import { useParams } from 'react-router-dom';

function DataDetails() {
  const { planId } = useParams();

  const allBundles = [
    { id: 1, provider: 'MTN', size: '500MB', price: '₦300' },
    { id: 2, provider: 'GLO', size: '1GB', price: '₦500' },
    { id: 3, provider: 'Airtel', size: '2GB', price: '₦700' },
    { id: 4, provider: 'MTN', size: '5GB', price: '₦1200' },
    { id: 5, provider: 'GLO', size: '3GB', price: '₦900' },
    { id: 6, provider: 'Airtel', size: '4.5GB', price: '₦1100' },
    { id: 7, provider: 'MTN', size: '10GB', price: '₦2000' },
  ];

  const bundle = allBundles.find(b => b.id === parseInt(planId));

  if (!bundle) {
    return <p style={{ padding: '2rem', color: 'red' }}>Data bundle not found.</p>;
  }

  return (
    <>
      <style>{`
        .details-container {
          max-width: 600px;
          margin: 2rem auto;
          padding: 2rem;
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 0.1);
          text-align: center;
          color: inherit;
        }

        .dark-mode .details-container {
          background-color: rgba(255, 255, 255, 0.05);
        }

        .light-mode .details-container {
          background-color: #f9f9f9;
        }

        .details-title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .details-info {
          font-size: 1.2rem;
        }
      `}</style>

      <div className="details-container">
        <h2 className="details-title">Bundle Details</h2>
        <p className="details-info"><strong>Provider:</strong> {bundle.provider}</p>
        <p className="details-info"><strong>Data Size:</strong> {bundle.size}</p>
        <p className="details-info"><strong>Price:</strong> {bundle.price}</p>
      </div>
    </>
  );
}

export default DataDetails;
