import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>

    <Link to="/" className='header-logo'>
        <img
        src={logo}
        alt="LOGO"
        style={{
            width:"90px", marginLeft: "50px", marginBottom: "0"
        }}>
        </img>
    </Link>
    <Link to="/workout" className='navbar-item'>Workout</Link>
    <Link to="/yoga" className='navbar-item'>Yoga</Link>
    <Link to="/about" className='navbar-item'>About</Link>

    </div>
  )
}

export default Navbar