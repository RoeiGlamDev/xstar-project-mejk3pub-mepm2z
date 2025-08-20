`
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>GlamCS</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
`

`
/* Header.css */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 10;
}

.logo h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: orange;
    text-shadow: 1px 1px 2px rgba(255, 165, 0, 0.5);
}

.navigation ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

.navigation a {
    text-decoration: none;
    color: orange;
    font-weight: bold;
    transition: transform 0.3s ease;
}

.navigation a:hover {
    transform: translateY(-3px);
    text-shadow: 0 2px 5px rgba(255, 165, 0, 0.5);
}
`