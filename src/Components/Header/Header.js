import React from 'react';

import './Header.css';

const Header = () => (
    <div className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
    </div>
)

export default Header;