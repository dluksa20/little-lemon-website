import React from 'react'
import './Hero.css'
import heroImage from '../../assets/images/restauranfood.jpg'

const Hero = () => {
  return (
    <main className='hero-container'>

        <div className='hero-left'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.</p>
        </div>

        <div className='hero-right'>
            <img src={heroImage} alt="hero-image" />
        </div>
    </main>
  )
}

export default Hero
