const features = [
  { icon: "💰", title: "Best Prices", desc: "Get top valuation for your unused software licenses." },
  { icon: "⚡", title: "Fast Transactions", desc: "Quick processing and secure payments." },
  { icon: "🔒", title: "Safe & Secure", desc: "Your data and transactions are protected with encryption." },
  { icon: "📞", title: "24/7 Support", desc: "Reach out anytime for assistance from our experts.", gif: "C:\Users\risha\Desktop\softshell\public\images\phone.gif" },
];

export default function WhyChooseUs() {
  return (
    <div className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
