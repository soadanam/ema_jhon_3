import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header-div'>
            <img className='logo-class' src={logo} alt="It is logo!" />
            <nav className='nav-class'>
                <a href="#">Shop</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;