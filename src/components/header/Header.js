import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import Navbar from './Navbar'

function Header() {
  return (
    <div className='header'>
        <div className='header-top'>
            <span className='header-top-logo'>
            <Link to="/" className='header-logo'>
            <img
            src={logo}
            alt="LOGO"
            style={{
                width:"90px", marginLeft: "50px", marginBottom: "0"
            }}>
            </img>
            </Link>
            </span>
            <span className='header-top-navbar'>
                <Navbar/>
            </span>
            <br/>
        </div>
    </div>
  )
}

export default Header