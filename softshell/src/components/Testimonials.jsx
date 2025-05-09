import React from "react";
import "./Testimonials.css";

const testimonials = [
  { 
    quote: "Selling licenses has never been easier!", 
    name: "John Doe", 
    title: "CEO, XYZ Ltd", 
    image: "https://media.istockphoto.com/id/1347993286/photo/portrait-of-confident-young-professional-smiling-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=bsCkI89m8rxHlsfKwnB1D1Inb2o51bjWMr-WW5xFi5s=" 
  },
  { 
    quote: "Great service and instant payouts!", 
    name: "Jane Smith", 
    title: "IT Manager, ABC Corp", 
    image: "https://tse3.mm.bing.net/th/id/OIP.RlSPPODFKbbVrfPaI_DfbgHaE7?cb=iwp1&pid=ImgDet&w=184&h=122&c=7&dpr=1.3" 
  }
];

export default function Testimonials() {
  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <h3>{testimonial.name}</h3>
            <p className="testimonial-title">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
