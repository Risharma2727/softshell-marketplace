import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000); // Hide message after 3 seconds

    // Send email notification (requires backend setup)
    fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "risharma2706@gmail.com",
        message: "New contact form submission received!",
      }),
    }).then((response) => console.log("Email sent successfully", response));
  };

  return (
    <div className="contact-form">
      <h2>Get in Touch</h2>
      <p>Have questions? Fill out the form below and we'll get back to you!</p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <select>
          <option>Software License Type</option>
          <option>Business</option>
          <option>Personal</option>
        </select>
        <textarea placeholder="Your Message" required></textarea>
        <button className="submit-btn" type="submit">Submit</button>
      </form>

      {submitted && <p className="confirmation-message">✅ Thank you! We'll be in touch soon.</p>}
    </div>
  );
}
