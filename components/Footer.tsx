`
import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>GlamCS</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GlamCS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
`

`
/* Footer.css */
.footer {
  background-color: #ffffff;
  color: #ff7f50; /* Orange color */
  padding: 40px 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-logo h1 {
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin: 0 15px;
}

.footer-links a {
  text-decoration: none;
  color: #ff7f50;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #ff4500; /* Darker orange on hover */
}

.footer-socials a {
  margin: 0 10px;
  color: #ff7f50;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-socials a:hover {
  color: #ff4500; /* Darker orange on hover */
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
}
`