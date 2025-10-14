import React from 'react';

function Contact() {
  return (
    <>
      <style>{`
        .page-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
          font-family: 'Segoe UI', sans-serif;
          background-color: #fafafa;
          color: #333;
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
          margin-bottom: 2rem;
        }

        .contact-info {
          background: #fff;
          padding: 2rem;
          border-radius: 10px;
          max-width: 600px;
          margin: 0 auto;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .contact-info p {
          font-size: 1.05rem;
          margin-bottom: 1rem;
        }

        .contact-info a {
          color: #007bff;
          text-decoration: none;
        }
      `}</style>

      <main className="page-container">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-description">
          We'd love to hear from you! Whether you have a question, need help, or just want to say hi —
          feel free to reach out using the details below:
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:support@dataswift.com">support@dataswift.com</a></p>
          <p><strong>Phone:</strong> +234 800 123 4567</p>
          <p><strong>Address:</strong> 123 Tech Street, Lagos, Nigeria</p>
        </div>
      </main>
    </>
  );
}

export default Contact;
