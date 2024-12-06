import React, { useState } from "react"
import logo from "../../assets/logo.jpg"
import hamburger from '../../assets/hamburger_menu.svg'
import basket from '../../assets/basket.svg'
import './Header.css'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img className="mobile-icon" src={basket}/>
        <img className="logo" src={logo} alt="website logo"/>
        <img className="mobile-icon" src={hamburger} onClick={handleMenuToggle}/>
      </div>

      <div className="menu-icon" onClick={handleMenuToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className="nav-container">
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Menu</a></li>
          <li><a href="/contact">Reserve a Table</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
