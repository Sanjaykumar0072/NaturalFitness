import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Logo from '../../../public/svg/logo.svg';

export default function Header() {
    const [click, setClick] = useState(false);
    const [navbar, updateNavbar] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleClick = () => {
        setClick(!click);
        setIsClosing(true);
    };

    const handleLogoClick = () => {
        window.reload();
    };

    const closeMenu = () => {
        setClick(false);
        setIsClosing(true);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (navbar == false) {
                if (window.scrollY <= 50) {
                    updateNavbar(true);
                    document.querySelector('.navbar').classList.remove('navBoxShadow');
                } else {
                    updateNavbar(false);
                    document.querySelector('.navbar').classList.add('navBoxShadow');
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        if (window.innerWidth < 769 && click) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'scroll';
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [click]);

    const pages = [
        { name: 'Home', path: '' },
        { name: 'About', path: 'about' },
        { name: 'Services', path: 'services' },
        { name: 'Achievements', path: 'achievements' }
    ];

    return (
        <>
            <header>
                <nav className={click ? 'navbar active' : 'navbar'} id="navbar" onClick={e => e.stopPropagation()}>
                    <div className="nav-container">
                        <NavLink
                            aria-label="Home"
                            to="/"
                            className="nav-logo"
                            onClick={handleLogoClick}
                        >
                            <img src={Logo} alt="Logo" />
                        </NavLink>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            {pages.map((page, index) => (
                                <li key={index} className={`nav-item ${click ? `slide-in-${index}` : isClosing ? `slide-out-${index}` : ''}`}>
                                    <NavLink
                                        to={`/${page.path}`}
                                        className="nav-links"
                                        onClick={closeMenu} // Close the menu on click
                                    >
                                        {page.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <NavLink
                            to="/contact"
                            className="nav-links gradient-button"
                            onClick={closeMenu} // Close the menu on click
                        >
                            Join Now
                        </NavLink>
                        <div className="nav-hamburger" onClick={handleClick}>
                            <span className={click ? "active" : ""}></span>
                            <span className={click ? "active" : ""}></span>
                            <span className={click ? "active" : ""}></span>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
