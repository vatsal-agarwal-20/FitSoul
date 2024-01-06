import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
// import "./navbar.css"
import { Button, Navbar } from 'flowbite-react';
import { FaGithub } from "react-icons/fa";
function NavbarComp() {
  return (
<Navbar fluid className='bg-black'>
      <Navbar.Brand href="/">
        <img src={logo} className="bg-white mx-5 h-10 w-10 sm:h-9" alt="Fitsoul" />
        <span className="self-center whitespace-nowrap text-4xl tracking-widest font-bold text-white">FITSOUL</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button><FaGithub className='h-5 w-5'/></Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active className='text-white text-2xl font-bold tracking-wide'>
          Home
        </Navbar.Link>
        <Navbar.Link href="/workout" className='text-white text-2xl font-medium tracking-wide'>Workout</Navbar.Link>
        <Navbar.Link href="/yoga" className='text-white text-2xl font-medium tracking-wide'>Yoga</Navbar.Link>
        <Navbar.Link href="/about" className='text-white text-2xl font-medium tracking-wide'>About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

    // <div className='navbar'>

    // <Link to="/" className='header-logo'>
    //     <img
    //     src={logo}
    //     alt="LOGO"
    //     style={{
    //         width:"90px", marginLeft: "50px", marginBottom: "0"
    //     }}>
    //     </img>
    // </Link>
    // <Link to="/workout" className='navbar-item'>Workout</Link>
    // <Link to="/yoga" className='navbar-item'>Yoga</Link>
    // <Link to="/about" className='navbar-item'>About</Link>

    // </div>
  )
}

export default NavbarComp