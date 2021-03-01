import React from 'react';
import logo from '../../images/RR_blue (1).png';
import backgroundImage from '../../images/8t0aa3qteblxf17sew8uldfdr89c99c6.png';
import ipl from '../../images/searchpng.com-ipl-logo-png-image-free-download.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <ul className="navList">
                    <li><a href="/predictor">Predictor</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/media">Media</a></li>
                    <li><a href="/cricket">Cricket</a></li>
                    <li><a href="/sponsors">Sponsors</a></li>
                    <li><a href="/login">LOGIN</a></li>
                </ul>
            </nav>
            <img className="background" src={backgroundImage} alt=""/>
            <div className="ipl">
                <h2>VIVO</h2>
                <img src={ipl} alt=""/>
                <h2>2021</h2>
            </div>
            <h3>ROYELS FAMILY</h3>
        </div>
    );
};

export default Header;