import React from 'react';
import './Header.css';
import logo from '../../image/logo.png'

const Header = () => {
    return (
        <main>
            <div className='img'>
                <img src={logo} alt="" />
            </div>
            <nav className='nav'>
                <a className='link' href="">Home</a>
                <a className='link' href="">About</a>
                <a className='link' href="">Details</a>
        </nav>
        </main>
    );
};

export default Header;