import React from 'react';
import logo from '../../Logo/Tesla.png';
import './Header.css';


const Header = () => {
    return (
            <nav className='header'>
                 <img src={logo} alt="logo" />

            <div className='design'>
                <a href="/home">Home</a>
                <a href="/model">Model</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
       
    );
};

export default Header;