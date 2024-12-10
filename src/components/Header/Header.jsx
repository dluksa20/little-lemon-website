import React from 'react'
import {ReactComponent as Logo} from '../../assets/icons/Logo.svg'
import {ReactComponent as Hamburger} from '../../assets/icons/hamburger.svg'
import {ReactComponent as Basket} from '../../assets/icons/basket.svg'
import './Header.css'


const Header = () => {
  return (
    <header className='header-container'>
            <a href='/'><Logo /></a>

        <div className="mobile-navigation">
            <Basket/>
            <Hamburger/>
        </div>
        <nav className='navigation'>
            <ul>
                <li><a href='/Home'>Home</a></li>
                <li><a href='/About'>About</a></li>
                <li><a href='/Menu'>Menu</a></li>
                <li className='book'><a href='/Book'>Book a Table</a></li>
            </ul>
        </nav>

    </header>
  )
}

export default Header
