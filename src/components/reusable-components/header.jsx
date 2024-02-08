import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import Logo from '../../../public/svg/logo.svg';

export default function Header() {
    const [click, setClick] = useState(false);
    const [ navbar, updateNavbar ] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    if (click) {
        document.documentElement.style.overflow = 'hidden';
    } else {
        document.documentElement.style.overflow = 'scroll';
    }
    
    function scrollHandler() {
        if (window.scrollY <= 50) {
            updateNavbar(true);
            document.querySelector('.navbar').classList.remove('navBoxShadow');
        } else {
            updateNavbar(false);
            document.querySelector('.navbar').classList.add('navBoxShadow');
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <>
            <header>
                <nav className="navbar" onClick={e => e.stopPropagation()}>
                    <div className="nav-container">
                        <NavLink
                            aria-label="Home"
                            exact="true"
                            to="/"
                            className="nav-logo"
                        >
                            <img src={Logo} alt="Logo" />
                        </NavLink>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    exact="true"
                                    to="/"
                                    className="nav-links"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact="true"
                                    to="/about"
                                    className="nav-links"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact="true"
                                    to="/Services   "
                                    className="nav-links"
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact="true"
                                    to="/Achievements"
                                    className="nav-links"
                                    onClick={(e) => { e.preventDefault(); }}
                                >
                                    Achievements
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact="true"
                                    to="/contact"
                                    className="nav-links"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                            <button className="gradient-button">
                                <NavLink
                                    exact="true"
                                    to="/contact"
                                    className="nav-links"
                                >
                                    Join Now
                                </NavLink>
                            </button>
                        <div className="nav-hamburger" onClick={handleClick}>
                            <span className={click ? "active" : ""}></span>
                            <span className={click ? "active" : ""}></span>
                            <span className={click ? "active" : ""}></span>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}