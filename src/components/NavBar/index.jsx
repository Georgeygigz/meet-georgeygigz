import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar =()=>{
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <ul className="right">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#career-objectives">Career</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>
            </div>
        </nav>
    )
}
export default NavBar