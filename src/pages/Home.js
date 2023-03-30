import React from 'react'
import '../App.css'
import ImgSlider from '../components/Slider'
import OptionsCard from '../components/OptionsCard'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'

function Home() {
  return (
    <div>
        <ImgSlider/>
        <div className='options'>
        <OptionsCard img1={img6} img2={img7} text1="Workout" text2="Yoga"/>
        </div>
    </div>
  )
}

export default Home