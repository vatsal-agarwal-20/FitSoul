import React from 'react'
import logo from '../assets/images/logo.png'
import meditation from '../assets/images/meditation.png'
import exercise from '../assets/images/exercise.png'
import '../App.css'
import blob1 from '../assets/images/blob1.svg'
import { Avatar, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import ImgSlider from '../components/Slider'
import OptionsCard from '../components/OptionsCard'

function Home() {
  return (
    <div>
        <ImgSlider/>
        <div className='options'>
        <OptionsCard/>
        </div>
    </div>
  )
}

export default Home