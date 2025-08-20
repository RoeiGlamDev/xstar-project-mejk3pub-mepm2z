`
import React from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-description">
                    We would love to hear from you! Whether you have questions about our products, need assistance, or just want to say hello, feel free to reach out.
                </p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={4} required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
`

`
/* ContactSection.css */
.contact-section {
    background-color: #ffffff;
    color: #ff7f50; /* Orange color */
    padding: 60px 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.contact-container {
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 40px;
    background: linear-gradient(145deg, #ffffff, #f0f0f0);
    backdrop-filter: blur(10px);
    position: relative;
}

.contact-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: bold;
}

.contact-description {
    font-size: 1.2rem;
    margin-bottom: 40px;
}

.contact-form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 20px;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
}

input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ff7f50;
    border-radius: 5px;
    transition: all 0.3s ease;
}

input:focus, textarea:focus {
    border-color: #ff4500; /* Darker orange */
    box-shadow: 0 0 5px rgba(255, 69, 0, 0.5);
}

.submit-button {
    background-color: #ff7f50;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background-color 0.3s ease;
}

.submit-button:hover {
    background-color: #ff4500; /* Darker orange */
}
`