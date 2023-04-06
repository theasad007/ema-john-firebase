import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header-area'>
            <div className="container">
                <div className="header">
                    <img src={logo} alt="" />
                    <div>
                        <a href="/shop">Shop</a>
                        <a href="/order">Orders</a>
                        <a href="/inventory">Inventory</a>
                        <a href="/login">Login</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;