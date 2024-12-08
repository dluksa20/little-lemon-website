import React, { useState } from "react"
import logo from "../../assets/logo.jpg"
import { ReactComponent as Hamburger } from '../../assets/hamburger_menu.svg'
import {ReactComponent as Basket} from '../../assets/basket.svg'
import './Header.css'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <Basket className="mobile-icon shopping-basket"/>
        <img className="logo" src={logo} alt="website logo"/>
        <Hamburger className="mobile-icon hamburger-menu" onClick={handleMenuToggle}/>
      </div>

      <div className="drop-menu" onClick={handleMenuToggle}>
        <div/>
      </div>
      <nav className="nav-container">
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Menu</a></li>
          <li><a href="/contact">Book Now</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
