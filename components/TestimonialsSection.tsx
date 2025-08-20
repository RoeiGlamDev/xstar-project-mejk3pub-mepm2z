`
import React from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: "Sophia L.",
    feedback: "GlamCS has transformed my makeup routine! The products are luxurious and the quality is unmatched.",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Olivia R.",
    feedback: "I love the elegant packaging and the stunning 3D designs. GlamCS truly feels like a high-end experience.",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Emma W.",
    feedback: "The colors are vibrant and the textures are divine. GlamCS is my go-to for all things beauty!",
    image: "/images/testimonial3.jpg",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
`

`
/* TestimonialsSection.css */
.testimonials-section {
  background-color: white;
  padding: 50px 20px;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  color: orange;
  margin-bottom: 30px;
}

.testimonials-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.testimonial-card {
  background: linear-gradient(145deg, #f9f9f9, #e0e0e0);
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7);
  padding: 20px;
  width: 300px;
  transition: transform 0.3s;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-image {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 15px;
}

.testimonial-feedback {
  font-style: italic;
  color: #555;
  margin-bottom: 10px;
}

.testimonial-name {
  font-weight: bold;
  color: orange;
}
`