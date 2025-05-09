import React from "react";
import "./HowItWorks.css"; // Ensure the styles are applied

export default function HowItWorks() {
  return (
    <div className="how-it-works">
      <h2>How It Works</h2>
      <p className="subtitle">Sell your unused software in 3 simple steps</p>
      
      <div className="steps-container">
        <div className="step">
          <img src="https://th.bing.com/th?q=Upload+Button+Icon+Transparent&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="Upload License" className="step-img" />
          <h3>Upload License</h3>
          <p>Submit your license details securely.</p>
        </div>
        <div className="step">
          <img src="https://th.bing.com/th/id/OIP.LgPxnB5FVdOmMJTqttQBegHaHa?w=181&h=181&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3" alt="Get Valuation" className="step-img" />
          <h3>Get Valuation</h3>
          <p>Receive instant estimated price.</p>
        </div>
        <div className="step">
          <img src="https://th.bing.com/th/id/OIP.71l1r5w0fpUWLsTlcUQJ0AHaHa?w=180&h=180&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3" alt="Get Paid" className="step-img" />
          <h3>Get Paid</h3>
          <p>Get money transferred quickly.</p>
        </div>
      </div>
    </div>
  );
}
