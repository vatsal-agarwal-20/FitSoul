import React from 'react'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'
import './options.css'
import { Link } from 'react-router-dom'

function OptionsCard() {
  return (
    <div className='options-container'>
    <div class="container">
    <Link to="/counter">
    <img src={img6} alt="Avatar" className="image" />
    <div class="overlay">
    <div class="text">Workout</div>
    </div>
    </Link>
    </div>
    <div class="container">
    <Link to="/yoga">
    <img src={img7} alt="Avatar" className="image" />
    <div class="overlay">
    <div class="text">Yoga</div>
    </div>
    </Link>
    </div>
    </div>
  )
}

export default OptionsCard