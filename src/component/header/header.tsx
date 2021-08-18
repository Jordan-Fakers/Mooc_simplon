import React from "react";
import './header.css';

function Header() {
    return (
        <div className="header-container">
            <div className="header-title">
                <h1> Course </h1>
            </div>
            <div className="sign-link">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    Sign Up
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    Sign In
                </a>
            </div>
        </div>
    )
}

export default Header;