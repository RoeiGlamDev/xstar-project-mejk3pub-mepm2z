`
import React from 'react';
import './FeaturesSection.css';

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="features-title">Why Choose GlamCS?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon luxury-effect">
              <i className="fas fa-gem"></i>
            </div>
            <h3 className="feature-title">Premium Quality</h3>
            <p className="feature-description">
              Our products are crafted with the finest ingredients to ensure a luxurious experience.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon luxury-effect">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3 className="feature-title">Elegant Design</h3>
            <p className="feature-description">
              Each product is designed with elegance in mind, reflecting sophistication and style.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon luxury-effect">
              <i className="fas fa-heart"></i>
            </div>
            <h3 className="feature-title">Cruelty-Free</h3>
            <p className="feature-description">
              We are committed to ethical practices, ensuring no harm to animals in our production.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon luxury-effect">
              <i className="fas fa-truck"></i>
            </div>
            <h3 className="feature-title">Fast Shipping</h3>
            <p className="feature-description">
              Enjoy quick and reliable shipping, so you can indulge in your favorites without delay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
`

`
/* FeaturesSection.css */
.features-section {
  background-color: white;
  padding: 60px 0;
  text-align: center;
}

.features-title {
  font-size: 2.5rem;
  color: #ff7f50; /* Orange color */
  margin-bottom: 40px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  background-color: #fff;
  border: 1px solid #ff7f50;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  color: #ff7f50;
  margin-bottom: 15px;
}

.feature-title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.feature-description {
  color: #666;
  font-size: 1rem;
}

.luxury-effect {
  perspective: 1000px;
}

.luxury-effect:hover {
  transform: rotateY(10deg);
}
`