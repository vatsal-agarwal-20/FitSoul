import React from 'react'
import logo from '../assets/images/logo.jpg'
import { FaGithub } from "react-icons/fa";
import { Button, Navbar } from 'flowbite-react';

function NavbarComp() {
  return (
<Navbar fluid className='bg-black py-6'>
      <Navbar.Brand href="/">
        <img src={logo} className="bg-white mx-5 h-10 w-10 sm:h-9" alt="Fitsoul" />
        <span className="self-center whitespace-nowrap text-4xl tracking-widest font-bold text-white">FITSOUL</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button gradientDuoTone="tealToLime" className='mr-5'>
          <a href='https://github.com/vatsal-agarwal-20/FitSoul' rel='noreferrer' target='_blank'><FaGithub className='h-5 w-5'/></a>
        </Button>
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
  )
}

export default NavbarComp