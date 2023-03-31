import React from 'react'
import './options.css'
import { Link } from 'react-router-dom'

function OptionsCard(props) {
  return (
    <div className='options-container'>
    <div className="container">
    <Link to="/workout">
    <img src={props.img1} alt="Avatar" className="image" />
    <div className="overlay">
    <div className="text">{props.text1}</div>
    </div>
    </Link>
    </div>
    <div className="container">
    <Link to="/yoga">
    <img src={props.img2} alt="Avatar" className="image" />
    <div className="overlay">
    <div className="text">{props.text2}</div>
    </div>
    </Link>
    </div>
    </div>
  )
}

export default OptionsCard