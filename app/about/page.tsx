`
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page" style={{ backgroundColor: '#ffffff', color: '#ff7f50', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>About GlamCS</h1>
        <p style={{ fontSize: '1.5rem', lineHeight: '1.6', marginBottom: '30px' }}>
          Welcome to GlamCS, where elegance meets luxury in the world of cosmetics. Our mission is to empower individuals to express their unique beauty through high-quality, innovative products that are designed with sophistication in mind.
        </p>
        <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '15px' }}>Our Vision</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px' }}>
          At GlamCS, we envision a world where beauty is not just skin deep. We believe in creating products that enhance your natural beauty while providing a luxurious experience. Our commitment to quality and elegance is reflected in every product we offer.
        </p>
        <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '15px' }}>Our Products</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px' }}>
          Our extensive range of cosmetics is crafted with the finest ingredients, ensuring that you not only look good but feel good too. From vibrant lipsticks to shimmering highlighters, each product is designed to provide a luxurious finish that lasts.
        </p>
        <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '15px' }}>Join Us</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px' }}>
          Join us on this glamorous journey and discover the beauty that lies within you. Explore our collection and experience the elegance of GlamCS today!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
`