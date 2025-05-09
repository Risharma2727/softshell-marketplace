import React, { useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000); // Hide message after 3 seconds
  };

  return (
    <div className="hero">
      <h1>Sell Your Software License Instantly</h1>
      <p>Fast, secure, and hassle-free transactions.</p>

      <button className="get-quote-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Get a Quote"}
      </button>

      {showForm && (
        <div className="quote-form">
          <h2>Request a Quote</h2>
          <input type="text" placeholder="Software Name" />
          <input type="text" placeholder="License Key" />
          <button className="submit-btn" onClick={handleSubmit}>Submit</button>

          {submitted && <p className="confirmation-message">✅ Quote request submitted successfully!</p>}
        </div>
      )}
    </div>
  );
}
