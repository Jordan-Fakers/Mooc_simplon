import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './header.css';

function Header() {
    return (
        <div className="header-container">
            <div className="header-title">
                <h1> Course </h1>
            </div>
            <div className="sign-link">
            <BrowserRouter>
                <Link to="/Sign-In"> Sign In </Link>
                <Link to="/Sign-Up"> Sign Up </Link>
            </BrowserRouter>
            </div>
        </div>
    )
}

export default Header;