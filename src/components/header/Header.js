import React from "react"
import logo from "../../assets/logo.jpg"
import './Header.css'

const Header = () => {

  return (
    <header className="header">
      <img className="logo" src={logo} alt="website logo"/>
      <nav>
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
